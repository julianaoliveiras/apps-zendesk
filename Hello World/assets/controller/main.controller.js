angularjs.controller('angularjs', ['$scope', 'zendeskService', function($scope, zendeskService) {
    
    /*zendeskService.listUsers().then(function(users){
       $scope.arrayUsers = users.users;
    })
    
   var idTicketCriado;
   var ticket = {
    "ticket": {
      "comment": {
        "body": "Ticket criado via Aplicativo."
      },
      "priority": "urgent",
      "subject": "Minha primeira requisição via Aplicativo!"
    }
  }
   zendeskService.criarTicket(ticket).then(function (data) {
       console.log(data);
       idTicketCriado = data.ticket.id
       console.log("Ticked criado de ID:" + idTicketCriado);
   });
   */

client.metadata().then(function(parameters){
    console.log(parameters)
});

}]);