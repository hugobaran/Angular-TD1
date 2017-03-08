currencyApp.controller('currencyController', ['$http','$sce', '$interval', function($http, $sce, $interval) {	

	var self = this;
	this.currencies;
    this.what = 1;
    this.from = "EUR";
    this.to = "USD";
    this.histo = false;
    this.historique={};
    this.refreshTime = 3000;
    this.isAutoRefresh = false;


	//initialisation de la monnaie 
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });

    this.getResult = function(){
        url = $sce.trustAsResourceUrl('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to);
        $http.jsonp(url, {jsonCallbackParam: 'callback'}).
        then(function(result){
            if(!jQuery.isEmptyObject(result.data)) {
                this.val = result.data[self.from + '_' + self.to].val;
                self.result = val * self.what;
                if(self.histo === true){
                    var conversion={
                        from : self.from,
                        to : self.to,
                        amount : function(){ return this.what*this.rate},
                        initialAmount : function(){ return this.what*this.initialRate},
                        delta : 0.000,
                        rate : val,
                        what : 1,
                        date : new Date(),
                        update: false,
                        initialRate : val
                    };
                    var key=self.from+self.to;
                    conversion.update=true;
                    if(self.historique[key]){
                        var oldConversion=self.historique[key];
                        oldConversion.what=self.what;
                        conversion.delta=conversion.amount()-oldConversion.initialAmount();
                        conversion.initialRate=oldConversion.initialRate;
                    }
                    conversion.update=false;
                    self.historique[key]=conversion;
                }
            }
            else
                alert('Erreur lors de la conversion');
        });
    }

    this.length = function(){
        return Object.keys(self.historique).length;
    };

    this.updateHisto = function(conversion){
        self.from=conversion.from;
        self.to=conversion.to;
        self.what=conversion.what;
        conversion.update=true;
        self.getResult();
    };

    this.deleteHisto = function(conversion){
        var key=conversion.from+conversion.to;
        delete self.historique[key];
    };

    this.startRefresh = function(){
      if(self.isAutoRefresh){
          self.updating=$interval( function(){ self.refresh(); }, self.refreshTime);
      } else {
          $interval.cancel(self.updating);
      }
    };

    this.swap = function(){
        var temp = self.from;
        self.from = self.to;
        self.to = temp;
    }
}]);