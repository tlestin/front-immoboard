App.controller('dashboardCtrl', function ($scope, $http, $window, $location, $route, AuthService){


  $scope.showModal = false;
  $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
  };

  $scope.hideModal = function(){
      $('#addModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $location.path('/dossier');
  };

  $('.navbar-bright').css('background-color','#3F6184');


  $http.get( basePath + 'users/me', {})
  .success(function(data){
    $scope.user = data;
    $('#menu-login').hide();
    $('.menu-logout').show();

    $scope.addOffer = function(offer){
      offer_url = $scope.offer_url;
      var form = new FormData();
      form.append("offer_url", offer_url);
      $http.post('http://staging.immoboard.fr/' + 'offers', $.param({offer_url: offer_url}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
          $('#addModal').modal('hide');
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
          $route.reload();
        })
        .error(function(data){
          appendResult('URL non reconnu', 'danger', 'remove');
          //$location.path('/dashboard');
          console.log(data);
        })
    };

    $scope.deleteOffer = function(id){

      offer_id = id;
      var form = new FormData();
      form.append("offer_id", offer_id);
      $http.post('http://staging.immoboard.fr/' + '/offers/delete/' + id, $.param({offer_id: offer_id}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
          $route.reload();
        })
        .error(function(data){
          appendResult('URL non reconnu', 'danger', 'remove');
          //$location.path('/dashboard');
          console.log(data);
        })
    };

    // getting user posts
    $http.get( 'http://staging.immoboard.fr/' + 'offers', {})
    .success(function(data){
      $scope.offers  = data;

    })

  })
  .error(function(data){
    alert("Credentials invalid");
    $location.path('/');
  })

});
