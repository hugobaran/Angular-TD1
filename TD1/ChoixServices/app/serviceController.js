serviceApp.controller('ServiceController', function($http){
	var self = this;
	var self = this;
	this.cpt = 1;
	this.totals = 300;
	this.promoCoche = false;
	this.promoError = false;
	this.totalAvecRemise = 0;
	this.remise = 0;

    this.services = [
	    {
	        "name": "Web Development",
	        "price": 300,
	        "active":true
	    },{
	        "name": "Design",
	        "price": 400,
	        "active":false
	    },{
	        "name": "Integration",
	        "price": 250,
	        "active":false
	    },{
	        "name": "Formation",
	        "price": 220,
	        "active":false
	    }
	];
	
	 self.total = function(){
    	var somme = 0;
    	angular.forEach(self.services, function(service, key){
    		if(service.active)
    			somme+=service.price;
    	});
    	self.totals = somme;
};
	
	self.toggleActive = function($item){
    	// Test si déjà actif
    	if(!self.services[$item].active)
    		self.services[$item].active = true;
    	else
    		self.services[$item].active = false;

		this.total();
		
    	// Compte le nombre de services actifs
    	var cpt = 0;
    	angular.forEach(this.services, function(value, key){
    		if(value.active)
    			cpt++;
    	});
    	this.cpt = cpt;
};
});