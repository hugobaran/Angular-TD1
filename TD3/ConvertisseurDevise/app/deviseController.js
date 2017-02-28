currencyApp.controller('currencyController', ['$http', function($http) {	
	var self = this;


	//initialisation de la monnaie 
	
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });



}]);