currencyApp.controller('currencyController', ['$http', function($http) {	
	var self = this;
	this.currencies;
    this.what = 1;
    this.from = "EUR";
    this.to = "USD";
    this.result;
    this.historique = false;


	//initialisation de la monnaie 
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });

    this.swap = function(){
        var temp = self.from;
        self.from = self.to;
        self.to = temp;
    }
}]);