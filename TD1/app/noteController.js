


angular.module("NoteApp",[]).controller("noteController",function()
        	{
        		var self=this;
        		self.caracRestant = 100;

        		self.count = function(){
					self.caracRestant = 100-self.messageNote.length;
					self.info="Modifié";
        		};
        		self.delete = function(){
        			self.messageNote="";
        			self.caracRestant=100;
        			self.info="Effacé";
        		};
        		self.save = function(){
        			self.info= "Enregistré";
            		self.saved = true;
        		};

        });