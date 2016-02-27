App.controller('signupCtrl', function ($scope, $http, $window, $location, AuthService, $cookies){

  $scope.createUser = function() {
    $http.post(basePath + 'api/register', {"email":$scope.email, "username":$scope.login, "plainPassword":{"first":$scope.password,"second":$scope.password_confirm}})
      .success(function(data){
        console.log(data);
        AuthService.setToken('Bearer ' + data.token);
        $cookies.Auth = data.token;
        $location.path('/dashboard');
      })
      .error(function(data){
        appendResult('Impossible de créer un compte avec ses informations.', 'danger', 'remove');
      })
  }

});
