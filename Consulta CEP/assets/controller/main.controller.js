angularjs.controller('angularjs', ['$scope', 'zendeskService', function($scope, zendeskService){
        zendeskService.consultaCEP(cep).then(function(data){
            console.log(data);
            
        })
    
}]);