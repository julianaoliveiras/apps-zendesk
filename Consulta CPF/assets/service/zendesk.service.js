//Chamada da api para dentro do zedndesk

(function (){
    'use strict';
    
    angularjs.service('zendeskService', ["$q", function($q){
        
        var client = ZAFClient.init();
       
        return{
            pegarCPF: function(cpf){
                var deferred = $q.defer();
                let options = {
                    url: "https://n0e6xtbvqa.execute-api.us-east-1.amazonaws.com/default/flordemaio-zendesk-mock?cpf=" + cpf,
                    cors: false,
                    method: "GET",
                    headers: {
                        "x-api-key":
                        "JBjAVMqtRovzYJ8iRJm559U5mLn9Hwl7X5iVCvm9"
                    },
                };
                client.request(options).then(function (data){
                    deferred.resolve(data);
                }).catch(function(error){
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            pegarPedido: function(cpf){
                var deferred = $q.defer();
                let options = {
                    url:"https://v4c1btaq78.execute-api.us-east-1.amazonaws.com/default/allShopping?idShopping=" + cpf,
                    cors: false,
                    method: "GET",
                    headers:{
                        "x-api-key": "Q8umEmH6Pa2sn2qh1V0AT7SegPfcNtbd2iXSIfyX"
                    },
                };
                client.request(options).then(function (data){
                    deferred.resolve(data);
                }).catch(function(error){
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    }]);
})();