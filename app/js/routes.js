App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      title: 'Home',
      templateUrl: 'views/index.html',
      controller:  'indexCtrl'
    })
  $routeProvider
    .when('/login', {
      title: 'Connexion',
      templateUrl: 'views/login.html',
      controller:  'loginCtrl'
    })
  $routeProvider
    .when('/signup', {
      title: 'Inscription',
      templateUrl: 'views/signup.html',
      controller:  'signupCtrl'
    })
  $routeProvider
    .when('/password', {
      title: 'Réinitialisation du mot de passe',
      templateUrl: 'views/lostpwd.html',
      controller:  'LostpwdCtrl'
    })
  $routeProvider
    .when('/dashboard', {
      title: 'Tableau de board',
      templateUrl: 'views/dashboard.html',
      controller:  'dashboardCtrl'
    })
  $routeProvider
    .when('/account', {
      title: 'Mon compte',
      templateUrl: 'views/settings.html',
      controller:  'settingsCtrl'
    })
});
