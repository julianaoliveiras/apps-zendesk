angularjs.controller("angularjs", ["$scope","zendeskService", function ($scope, zendeskService) {
 
  var urlCEP;
  $scope.consultar = function () {
    
    $scope.dadosCliente = [];
    client.metadata().then(function (parameters) {
      urlCEP = parameters.settings.urlCEP;
      
      zendeskService.pegarCEP(urlCEP, $scope.consultaCEP).then(function (response) {
        $scope.dadosCliente.push(response);
      }).catch(function (error) {
        console.log(error);
        client.invoke("notify",["Não foi possível consultar o CEP"],"error",5000);
      });
    }).catch(function (error) {
      console.log(error);
      client.invoke("notify",["Não foi possível acessar os parâmetros"],"error",5000);
    });
  };
}]);
