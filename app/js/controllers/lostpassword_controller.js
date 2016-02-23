App.controller('LostpwdCtrl', function ($scope,$http, $window, $location, AuthService, $cookies) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
});
