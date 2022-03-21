(function (){
    'use strict';
    
    angularjs.service('zendeskService', ["$q", function($q) {
        
        var client = ZAFClient.init();
       
        return {
            listUsers: function(){
                var deferred = $q.defer();
                client.request({
                    url: '/api/v2/users',
                    type: 'GET',
                    contentType: 'application/json'
                }).then(function (response){
                    deferred.resolve(response);
                }).catch(function (error){
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            criarTicket: function(ticket){
                var deferred = $q.defer();
                client.request({
                    url: '/api/v2/tickets',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(ticket)
                }).then(function(response){
                    deferred.resolve(response);
                }).catch(function (error){
                    deferred.reject(error);
                });
                return deferred.promise;
            },
        }
    }])
})();