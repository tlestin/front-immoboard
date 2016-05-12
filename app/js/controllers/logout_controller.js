App.controller('logoutCtrl', function ($scope, $http, $window, $location, AuthService){
  AuthService.deleteToken();
  $http.defaults.headers.common['Authorization'] = '';
  $('#menu-login').show();
  $('.menu-logout').hide();
});
