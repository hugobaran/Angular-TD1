sampleApp.controller("sampleController",["$routeParams", "code",function($routeParams,code){
    this.content1="Contenu du template de route1";
    this.content2="Contenu du template de route2";
    this.params=$routeParams;
    this.code=code;
}]);