


angular.module("NoteApp",[]).controller("noteController",function()
        	{
        		var self=this;
        		self.caracRestant = 100;

        		self.count = function(){
					self.caracRestant = 100-self.messageNote.length;
					self.info="Modifié";
					this.warning = false;
					this.danger = false;
					if(this.caracRestant < 50){
                		this.warning = true;
                	if(this.caracRestant < 20){
               			this.danger = true;
}
}
        		};
        		self.delete = function(){
        			if(self.messageNote!=""){
	        			self.messageNote="";
	        			self.caracRestant=100;
	        			self.info=false;
        			}
        		};
        		self.save = function(){
        			if(self.messageNote!=""){
	            		self.saved = true;
	            		self.info= "note sauvegardée";
	            		self.success=true;
	            	}
        		};

        });