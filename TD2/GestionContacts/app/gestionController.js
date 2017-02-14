gestionApp.controller('gestionController', function(){
	var self = this;
	this.contact;
	this.tmpContact;
	this.operation;
	this.edit;

	//Tableau des contacts existants
	self.contacts = [
		{
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "mail": "mark@facebook.com"
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "mail": "bill@microsoft.com"
        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "mail": "steeve@apple.com"
        }
    ];

	self.toUpdate = function(contact){
    };

    self.toAdd = function(){
    	self.edit=true;
    };

    self.add = function(){
    };

    self.update = function(){
    };

    self.delete = function(contact){
    };

});