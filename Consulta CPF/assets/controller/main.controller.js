angularjs.controller('angularjs', ['$scope', 'zendeskService', function($scope, zendeskService){
   
    $scope.ocultar = function(){
        return $scope.ocultar ? true: false;
    };
    
    $scope.consultar = function(){
        $scope.dadosCliente= [];
        if($scope.consultaCPF.length == 11){
            zendeskService.pegarCPF($scope.consultaCPF).then(function (response){
                $scope.oculta = false;
                responseCPF = JSON.parse(response)
                let pedidos = responseCPF.pedidos
                console.log($scope.dadosCliente)
                for (let i=0; i<pedidos.length; i++){
                    zendeskService.pegarPedido(pedidos[i]).then(function(response){
                        $scope.oculta = true;
                        $scope.dadosCliente.push(response)
                        console.log($scope.dadosCliente)
                    });
                }
            })
        }else if($scope.consultaCPF.length<11){
            zendeskService.pegarPedido($scope.consultaCPF).then(function (response){
                $scope.oculta= true;
                $scope.dadosCliente.push(response)
                console.log($scope.dadosCliente)
            })
        }
    }
    
}]);