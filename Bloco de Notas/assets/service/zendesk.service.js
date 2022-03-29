(function (){
    'use strict';   
    angularjs.service('zendeskService', ["$q", function($q) {
        var client = ZAFClient.init();

        return {
                     
            getRelacionamento: function(urlRelacionamento, idUser){
                var deferred = $q.defer();
                let options ={
                method: "GET",
                url: "https://alunos9975.zendesk.com/api/sunshine/objects/records/zen:user:"+ idUser +"/relationships/"+ urlRelacionamento,                 
            };
            client.request(options).then(function (data){
                    deferred.resolve(data);
                }).catch(function(error){
                    deferred.reject(error);
                });
                return deferred.promise;

            },
            getBlocoNotas: function(urlBlocoNotas, idTarget){
                var deferred = $q.defer();
                let options ={
                method: "GET",
                url: urlBlocoNotas + idTarget,   
                
            };
            client.request(options).then(function (data){
                    deferred.resolve(data);
                }).catch(function(error){
                    deferred.reject(error);
                });
                return deferred.promise;
            }, 
             
            salvarBlocoNotas: function (urlBlocoNotas, idTarget, texto) {
                let bloco = {
                    "data": {
                        "attributes": {
                            "texto": texto,
                        }
                    }
                }
                var deferred = $q.defer();
                client.request({
                    url: urlBlocoNotas + idTarget,
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