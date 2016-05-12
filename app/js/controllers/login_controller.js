App.controller('loginCtrl', function ($scope, $http, $window, $location, AuthService, $cookies){

  $scope.email = null;
  $scope.password = null;



  $scope.getUser = function(user){
    email = $scope.email;
    password = $scope.password;
    var form = new FormData();
    form.append("email", email);
    form.append("password", password);
    $http.post(basePath + 'authenticate', $.param({email: email, password: password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .success(function(data){
        AuthService.setToken('' + data.auth_token);
        $cookies.Auth = data.auth_token;
        //console.log(data.token.auth_token);
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

  $('.navbar-bright').css('background-color','transparent');

});
