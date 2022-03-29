angularjs.controller("angularjs", [
  "$scope",
  "zendeskService",
  function ($scope, zendeskService) {
    var urlBlocoNotas;
    var urlRelacionamento;
           
    getRelacionamento();
    
    function getRelacionamento(){
        client.metadata().then(function(parameters){
            urlRelacionamento = parameters.settings.urlRelacionamento;
            client.get("currentUser").then(function (data) {
                zendeskService.getRelacionamento(urlRelacionamento, data.currentUser.id).then(function(data){            
                    getBlocoNotas(data.data[0].target);                                                    
                })
            });
        })         
    }
    
    function getBlocoNotas(idTarget){
        client.metadata().then(function(parameters){
            urlBlocoNotas = parameters.settings.urlBlocoNotas;          
            zendeskService.getBlocoNotas(urlBlocoNotas, idTarget).then(function(data){
                $scope.Arraydata = data.data;
            }); 
        })           
    }  
    $scope.salvarNotas = function (texto) {      
        
        let idTarget
        
        client.metadata().then(function(parameters){
            urlBlocoNotas = parameters.settings.urlBlocoNotas;
            urlRelacionamento = parameters.settings.urlRelacionamento;
            
            client.get("currentUser").then(function (data) {
                zendeskService.getRelacionamento(urlRelacionamento, data.currentUser.id).then(function(data){            
                    idTarget = data.data[0].target;
                    
                    zendeskService.salvarBlocoNotas(urlBlocoNotas, idTarget, texto).then(function (data) {
                        console.log(data)
                        client.invoke('notify', ["Salvo com sucesso!"],'',5000)
                    }).catch(function (error) {
                        console.log(error);
                        client.invoke("notify",["Não foi possível salvar o bloco de notas!"],"error",5000);
                    })                                                                     
                })
            });
        }).catch(function (error) {
            console.log(error);
            client.invoke("notify",["Não foi possível acessar os parâmetros"],"error",5000);
          });               
    }   
  },
]);
