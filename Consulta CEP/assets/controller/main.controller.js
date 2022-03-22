angularjs.controller('angularjs', ['$scope', 'zendeskService', function($scope, zendeskService){
   
    $scope.consultar = function () {
        $scope.dadosCliente = [];
        
        if ($scope.consultaCEP.length == 8) {
            zendeskService.pegarCEP($scope.consultaCEP).then(function (response){
                $scope.dadosCliente.push(response)
                console.log($scope.dadosCliente)
            });
        }
    }   
}]);