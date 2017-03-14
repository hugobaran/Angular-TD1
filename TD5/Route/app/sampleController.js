sampleApp.controller("sampleController",["$routeParams", function($routeParams){
    this.content1="Contenu du template de route1";
    this.content2="Contenu du template de route2";
    this.params=$routeParams;
}]);