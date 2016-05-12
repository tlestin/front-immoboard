App.controller('indexCtrl', function ($scope, $http, $window, $location){

  $('.navbar-bright').css('background-color','#3F6184');

    var dateNow = new Date();
    var theYear = dateNow.getFullYear();
    $('#year').html(theYear);

    $scope.addOffer = function(offer){
      offer_url = $scope.offer_url;
      var form = new FormData();
      form.append("offer_url", offer_url);
      $http.post('http://staging.immoboard.fr/' + 'offers', $.param({offer_url: offer_url}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
          $location.path('/dashboard');
        })
        .error(function(data){
          //appendResult('URL non reconnu', 'danger', 'remove');
          if(data.errors == "Not Authenticated")
          {
              appendResult('Connectez-vous ou URL non reconnu', 'danger', 'remove');
          }
          else {
            $location.path('/dashboard');
          }


        })
    };

});
