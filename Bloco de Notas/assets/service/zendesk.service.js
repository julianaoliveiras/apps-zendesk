(function (){
    'use strict';   
    angularjs.service('zendeskService', ["$q", function($q) {
        var client = ZAFClient.init();

        return {
            
            getBlocoNotas: function(){
                var deferred = $q.defer();
                let options ={
                method: "GET",
                url: "https://viaconsulting7794.zendesk.com/api/sunshine/objects/records/05e24a85-ab8c-11ec-a4b4-1b124cb0265f",
                
            };
            client.request(options).then(function (data){
                    deferred.resolve(data);
                }).catch(function(error){
                    deferred.reject(error);
                });
                return deferred.promise;
            }, 
            getUser: function (id) {
                var deferred = $q.defer();
                let options ={
                    method: "GET",
                    url: "https://viaconsulting7794.zendesk.com/api/sunshine/objects/records/zen:user:" + id +"/relationships/bloco_de_notas_usuario", 
                };
                client.request(options).then(function (data){
                        deferred.resolve(data);
                    }).catch(function(error){
                        deferred.reject(error);
                    });
                    return deferred.promise;
                },        
            criarBlocoNotas: function (texto) {

                let bloco = {
                    "data": {
                        "attributes": {
                            "texto": texto,
                        }
                    }
                }
                console.log(bloco)
                var deferred = $q.defer();
                client.request({
                    url: "https://viaconsulting7794.zendesk.com/api/sunshine/objects/records/05e24a85-ab8c-11ec-a4b4-1b124cb0265f",
                    type: "PATCH",
                    contentType: 'application/merge-patch+json',
                   
                    data: JSON.stringify(bloco)
                }).then(function (data) {
                    deferred.resolve(data)
                }).catch(function (error) {
                    deferred.reject(error)
                })
                return deferred.promise;
            }, 
            
            
            
        }
    }]);
})();