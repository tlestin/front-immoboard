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
    .when('/logout', {
      title: 'Deconnexion',
      templateUrl: 'views/logout.html',
      controller:  'logoutCtrl'
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
  $routeProvider
    .when('/dossier/:id', {
      title: 'Edition dossier ',
      templateUrl: 'views/edit.html',
      controller:  'editCtrl'
    })
  $routeProvider
    .when('/dossier', {
      title: 'Edition dossier ',
      templateUrl: 'views/add.html',
      controller:  'editCtrl'
    })
    $routeProvider
    .when('/password_reset/:id', {
      title: 'Edition mot du passe ',
      templateUrl: 'views/newpassword.html',
      controller:  'LostpwdCtrl'
    })
});
