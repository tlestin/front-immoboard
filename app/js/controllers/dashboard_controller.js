App.controller('dashboardCtrl', function ($scope, $http, $window, $location, $route, AuthService){
  $scope.showModal = false;
  $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
  };
});
