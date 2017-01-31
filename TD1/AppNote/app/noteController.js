
angular.module("NoteApp").controller("noteController",["$cookies", function($cookies)
        	{
        		var self=this;
        		self.caracRestant = 100;
				
				var msg = $cookies.get("msg");
				self.messageNote = msg || ""; // Si cookie existe, alors cookie, sinon rien
				self.save = function(){
        			if(self.messageNote!=""){
	            		self.saved = true;
	            		self.info= "note sauvegardée";
	            		self.success=true;
						$cookies.put("msg",this.messageNote);
	            	}
        		};

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
				
        		

        }]);