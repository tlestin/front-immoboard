App.controller('editCtrl', function ($scope, $http, $window, $location, AuthService, $cookies, $routeParams){

  $scope.showModal = false;

  $http.get( basePath + 'users/me', {})
  .success(function(data){
    $scope.user = data;
    $('#menu-login').hide();
    $('.menu-logout').show();


    $scope.setOffer = function(offer){
      name = $scope.offer.name;
      offer_type = $scope.offer.offer_type;
      surface = $scope.offer.surface;
      rooms = $scope.offer.rooms;
      chambers = $scope.offer.chambers;
      year = $scope.offer.year;
      zip = $scope.offer.zip;
      city = $scope.offer.city;
      description = $scope.offer.description;
      cost = $scope.offer.cost;
      agency = $scope.offer.agency;
      phone = $scope.offer.phone;
      notes = $scope.offer.notes;
      flags = $scope.offer.flags;
      var form = new FormData();
      form.append("name", name);
      form.append("offer_type", offer_type);
      form.append("surface", surface);
      form.append("rooms", rooms);
      form.append("chambers", chambers);
      form.append("year", year);
      form.append("zip", zip);
      form.append("city", city);
      form.append("description", description);
      form.append("cost", cost);
      form.append("agency", agency);
      form.append("phone", phone);
      form.append("notes", notes);
      form.append("flags", flags);

      $http.post('http://staging.immoboard.fr/' + 'offers/edit/'+$scope.offer.id, $.param({offer:{name:name,offer_type:offer_type,surface:surface,rooms:rooms,chambers:chambers,year:year,city:city,description:description,cost:cost,agency:agency,phone:phone,zip:zip,notes:notes,flags:flags }}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
          //console.log(data);
          $route.reload();
        })
        .error(function(data){
          //appendResult('URL non reconnu', 'danger', 'remove');
          $location.path('/dashboard');
        })
    };

    $scope.addOffer = function(offer){
      name = $scope.offer.name;
      offer_type = $scope.offer.offer_type;
      surface = $scope.offer.surface;
      rooms = $scope.offer.rooms;
      chambers = $scope.offer.chambers;
      year = $scope.offer.year;
      zip = $scope.offer.zip;
      city = $scope.offer.city;
      description = $scope.offer.description;
      cost = $scope.offer.cost;
      agency = $scope.offer.agency;
      phone = $scope.offer.phone;
      notes = $scope.offer.notes;
      flags = $scope.offer.flags;
      var form = new FormData();
      form.append("name", name);
      form.append("offer_type", offer_type);
      form.append("surface", surface);
      form.append("rooms", rooms);
      form.append("chambers", chambers);
      form.append("year", year);
      form.append("zip", zip);
      form.append("city", city);
      form.append("description", description);
      form.append("cost", cost);
      form.append("agency", agency);
      form.append("phone", phone);
      form.append("notes", notes);
      form.append("flags", flags);

      $http.post('http://staging.immoboard.fr/' + 'offers', $.param({offer:{name:name,offer_type:offer_type,surface:surface,rooms:rooms,chambers:chambers,year:year,city:city,description:description,cost:cost,agency:agency,phone:phone,zip:zip,notes:notes,flags:flags }}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
          //console.log(data);
          $route.reload('/dashboard');
        })
        .error(function(data){
          //appendResult('URL non reconnu', 'danger', 'remove');
          $location.path('/dashboard');
        })
    };

    $scope.profileId = $routeParams.id;
    // getting user posts
    $http.get( 'http://staging.immoboard.fr/' + 'offers', {})
    .success(function(data){
      $scope.offer  = data[$scope.profileId];

    })

  })
  .error(function(data){
    alert("Credentials invalid");
    $location.path('/');
  })


  $('.navbar-bright').css('background-color','#3F6184');
});
