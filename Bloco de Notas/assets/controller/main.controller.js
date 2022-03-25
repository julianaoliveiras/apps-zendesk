angularjs.controller('angularjs', ['$scope', 'zendeskService', function($scope, zendeskService){
    
    zendeskService.getBlocoNotas().then(function(data){
        console.log(data)
        $scope.Arraydata = data.data; 
        
    });
    zendeskService.getUser().then(function(data){
        console.log(data)
        $scope.Arraydata = data.data; 
    });
    
    $scope.salvar = function (texto) {
       // console.log(texto)
         zendeskService.criarBlocoNotas(texto).then(function (data) {
            console.log(data)
             client.invoke('notify', ["Salvo com sucesso!"],'',5000)
            //getTexto()
        }).catch(function (error) {
            console.log(error);
            client.invoke('notify', "Não foi possível salvar !", )
         })
    }
    $scope.consultarID = function(target){
        console.log(target)
        zendeskService.getUser(target).then(function(data){
           console.log(data)
          
        })

    }
    
    
    /*
    function getTexto() {
        zendeskService.acessarBlocoNotas().then(function (data) {
            $scope.texto = [];
            for (let i = 0; data.data.length > i; i++) {

                $scope.enviarTexto = data.data[i].attributes;
                $scope.texto.push($scope.enviarTexto)
            }
        }).catch(function (error) {
            console.log(error)
        })
    } */   
}]);