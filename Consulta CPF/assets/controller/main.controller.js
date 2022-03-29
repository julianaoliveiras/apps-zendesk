angularjs.controller('angularjs', ['$scope', 'zendeskService', function($scope, zendeskService){
     
    $scope.ocultar = function(){
        return $scope.ocultar ? true: false;
    };  
    $scope.consultar = function(){
        
        $scope.dadosPedido= [];
        $scope.dadosCliente=[];

        client.metadata().then(function (parameters) {
            urlCPF = parameters.settings.urlCPF;
            urlPedido = parameters.settings.urlPedido;
            
            if($scope.consultaCPF.length == 11){
                zendeskService.pegarCPF(urlCPF, $scope.consultaCPF).then(function (response){
                    $scope.dadosCliente=response;
                    $scope.dadosCliente = JSON.parse(response)
                    
                    let pedidos = $scope.dadosCliente.pedidos
                    let i=0;              
                    for (i; i<pedidos.length; i++){
                        zendeskService.pegarPedido(urlPedido, pedidos[i]).then(function(response){
                            $scope.oculta = true;
                            $scope.dadosPedido.push(response)
                        });
                    }                     
                });
            }else if($scope.consultaCPF.length != 11 ){
                zendeskService.pegarPedido(urlCPF, $scope.consultaCPF).then(function (response){
                    $scope.oculta= true;
                    $scope.dadosPedido.push(response)               
                }).catch(function (error) {
                    console.log(error);
                    client.invoke("notify",["Não foi possível consultar o CPF"],"error",5000);
                })
            }
        }).catch(function (error) {
            console.log(error);
            client.invoke("notify",["Não foi possível acessar os parâmetros"],"error",5000);
        })    
    }  
}]);