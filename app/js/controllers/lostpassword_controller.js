App.controller('LostpwdCtrl', function ($scope,$http, $window, $location, AuthService, $cookies,$routeParams) {

  $scope.sendPwd = function(){
    mail = $scope.email;
    var form = new FormData();
    form.append("email", email);
    $http.post('http://staging.immoboard.fr/' + 'users/password_reset/' + mail, $.param({email: email, password: password}))
      .success(function(data){
        appendResult('Consultez vos e-mail pour obtenir un lien de réinitialisation de votre mot de passe', 'success', 'ok');
      })
      .error(function(data){
        appendResult('Aucun compte pour cette e-mail', 'danger', 'remove');
      })
  };


  $scope.setPassword = function(){

    //alert($routeParams.id);
    password = $scope.password;
    var form = new FormData();
    form.append("password", password);
    $http.post('http://staging.immoboard.fr/' + 'users/password_reset/update/' + $routeParams.id, $.param({password: password}))
      .success(function(data){
        $('#setpassword').hide();
        appendResult('Votre mot de passe a été modifier avec succès <a href="#/">retour à l\'accueil</a>', 'success', 'ok');
      })
      .error(function(data){
        appendResult('Erreur lors de l\'edtion du mot de passe', 'danger', 'remove');
      })
  };



  $('.navbar-bright').css('background-color','transparent');

});
