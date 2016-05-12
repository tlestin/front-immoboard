App.controller('settingsCtrl', function ($scope, $http, $window, $location){


  $http.get( basePath + 'users/me', {})
  .success(function(data){
    $scope.user = data;
    $('#menu-login').hide();
    $('.menu-logout').show();

    $scope.setUser = function() {
      last_name = $scope.user.last_name;
      first_name = $scope.user.first_name;
      email = $scope.user.email;
      password = $scope.user.password;

      var form = new FormData();
      form.append("first_name", first_name);
      form.append("last_name", last_name);
      form.append("email", email);
      form.append("password", password);
      $http.post('http://staging.immoboard.fr/' + 'users/edit/' + $scope.user.id, $.param({email:email,last_name:last_name,first_name:first_name,password: password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
          console.log(data);
          AuthService.setToken('Bearer ' + data.token);
          $cookies.Auth = data.token;
          $location.path('/dashboard');
        })
        .error(function(data){
          //appendResult('Impossible de modifier votre compte avec ses informations.', 'danger', 'remove');
          $location.path('/dashboard');
        })
    }

  })
  .error(function(data){
    alert("Credentials invalid");
    $location.path('/');
  })



  $('.navbar-bright').css('background-color','#3F6184');

});
