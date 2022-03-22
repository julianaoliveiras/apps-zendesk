(function (){
    'use strict';   
    angularjs.service('zendeskService', ["$q", function($q) {
        
        var client = ZAFClient.init();

        return {

            pegarCEP: function (cep) {
                var deferred = $q.defer();

                let options = {
                    url: "https://viacep.com.br/ws/" + cep + "/json/",
                    cors: false,
                    method: "GET",
                };
                client.request(options)
                    .then(function (data) {
                        deferred.resolve(data);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            }
        }
    }]);
})();