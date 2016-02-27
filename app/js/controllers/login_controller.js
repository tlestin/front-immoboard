App.controller('loginCtrl', function ($scope, $http, $window, $location, AuthService, $cookies){

  $scope.login = null;
  $scope.password = null;

  $scope.getUser = function(user){
    username = $scope.login;
    password = $scope.password;
    $http.post(basePath + 'api/login_check', {username: username, password: password})
      .success(function(data){
        AuthService.setToken('Bearer ' + data.token);
        $cookies.Auth = data.token;
        $location.path('/dashboard');
      })
      .error(function(data){
        appendResult('Votre nom d’utilisateur ou mot de passe sont incorrect.', 'danger', 'remove');
      })
  };

  

  $scope.showModal = false;
  $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
  };

});
