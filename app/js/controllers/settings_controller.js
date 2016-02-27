App.controller('settingsCtrl', function ($scope, $http, $window, $location){

  $scope.setUser = function() {
    $http.post(basePath + 'api/set_user', {"email":$scope.email, "username":$scope.login, "lastpassword":$scope.lastpassword, "plainPassword":{"first":$scope.password,"second":$scope.password_confirm}})
      .success(function(data){
        console.log(data);
        AuthService.setToken('Bearer ' + data.token);
        $cookies.Auth = data.token;
        $location.path('/dashboard');
      })
      .error(function(data){
        appendResult('Impossible de modifier votre compte avec ses informations.', 'danger', 'remove');
      })
  }

});
