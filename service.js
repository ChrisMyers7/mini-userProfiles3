angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deffered = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
        var parsedResponse = response.data.data;
        for (var i = 0; i < parsedResponse.length; i++) {
          parsedResponse[i].first_name = 'Ron';
          parsedResponse[i].last_name = 'Swanson';
        }
        deffered.resolve(parsedResponse);
    })
    return deffered.promise;
  }
});
