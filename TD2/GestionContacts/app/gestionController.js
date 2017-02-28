gestionApp.controller('gestionController', function(){
	var self = this;
	this.contact;
	this.tmpContact;
	this.operation;
	this.edit = false;
	this.filtre = ""
	this.operation = "";


	//Tableau des contacts existants
	self.contacts = [
		{
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "mail": "mark@facebook.com",
            "deleted": false
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "mail": "bill@microsoft.com",
            "deleted": false
        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "mail": "steeve@apple.com",
            "deleted": false
        }
    ];

    self.tmpContact = [
    	{
    		"nom" : "",
    		"prenom" : "",
    		"mail" : "" 
    	}
    ];

	self.toUpdate = function(contact){
		self.edit=true;
		console.log(contact);
		self.tmpContact = contact;
    };

    self.toAdd = function(){
    	self.edit=true;
    };

    self.add = function(){
    	console.log(self.tmpContact);
    	self.contacts.push(self.tmpContact);
    };

    self.update = function(){
    };

    self.delete = function(contact){
    	console.log(contact);
    	//i = self.contacts.indexOf(contact);
        //self.contacts[i].deleted = true;
    };

});

gestionApp.directive('frmContactElem', function() {
    return {
        templateUrl: 'app/frmContacts.html'
    };
});