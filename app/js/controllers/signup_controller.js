App.controller('signupCtrl', function ($scope, $http, $window, $location, AuthService, $cookies){

  $scope.createUser = function() {
    var form = new FormData();
    form.append("email", $scope.email);
    form.append("first_name", $scope.prenom);
    form.append("last_name", $scope.login);
    form.append("password", $scope.password);

    $http.post(basePath + 'users/',$.param({email: $scope.email, first_name: $scope.prenom, last_name: $scope.login, password: $scope.password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .success(function(data){
        console.log(data);
        $location.path('/login');
      })
      .error(function(data){
        appendResult('Impossible de créer un compte avec ses informations.', 'danger', 'remove');
      })
  }

  $scope.signUpWithFb = function(fb) {
    appendResult('Inscription avec Facebook prochainement disponible', 'warning', 'remove');
  };

  $('.navbar-bright').css('background-color','transparent');

});
