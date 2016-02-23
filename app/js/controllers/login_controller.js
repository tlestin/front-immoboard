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
        appendResult('Votre nom d’utilisateur ou mot de passe sont incorrect.', 'error', 'remove', 'rect');
      })
  };

  $scope.sendPwd = function(){
    mail = $scope.email;
    $http.post(basePath + 'api/user_check', {email: mail})
      .success(function(data){
        appendResult('Consultez vos e-mail pour obtenir un lien de réinitialisation de votre mot de passe', 'success', 'ok');
      })
      .error(function(data){
        appendResult('Aucun compte pour cette e-mail', 'error', 'remove','rect2');
      })
  };

  $scope.showModal = false;
  $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
  };

});








function appendResult(userText , className, iconClass, idElement){
  var resultHTML = "<div class='stretchLeft result "+ className + "'><span class='glyphicon glyphicon-" + iconClass + "'></span> " + userText + "" + "</div>";
  $('#'+idElement).append(resultHTML);
  $('.result').delay(10000).fadeOut('1000');
}
