var App = angular.module('App', [ 'ngRoute', 'ngCookies'] );

// App Authentication
App.factory('AuthService', function($http) {
  var logged = false;
  $http.defaults.headers.common.Authorization = ''

  return {
    getToken: function(){
      return $http.defaults.headers.common.Authorization;
    },
    setToken: function(newToken){
      $http.defaults.headers.common.Authorization = newToken;
      logged = true;
    },
    deleteToken: function(){
      $http.defaults.headers.common.Authorization = null;
      logged = false;
    }
  }
});


App.controller('AuthCookieCtrl', function($cookies, AuthService) {
  var Authorization = $cookies.Auth;
  AuthService.setToken('Bearer ' + Authorization);
});

App.run(function ($rootScope) {
        $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            $rootScope.title = current.title;
        });
    });

App.directive('modal', function () {
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ title }}</h4>' +
              '</div>' +
              '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

  

  function appendResult(userText , className, iconClass){
    var resultHTML = '<div class="alert alert-'+className+' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+userText+'</div>';
    $('#rect').html(resultHTML);
    $('.alert').delay(10000).fadeOut('1000');
  }
