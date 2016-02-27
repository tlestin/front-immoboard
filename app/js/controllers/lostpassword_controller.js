App.controller('LostpwdCtrl', function ($scope,$http, $window, $location, AuthService, $cookies) {

  $scope.sendPwd = function(){
    mail = $scope.email;
    $http.post(basePath + 'api/user_check', {email: mail})
      .success(function(data){
        appendResult('Consultez vos e-mail pour obtenir un lien de réinitialisation de votre mot de passe', 'success', 'ok');
      })
      .error(function(data){
        appendResult('Aucun compte pour cette e-mail', 'danger', 'remove');
      })
  };

});
