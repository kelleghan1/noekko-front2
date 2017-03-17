
thisApp
.controller('HomeController', [
  'HomeService',
  '$scope',
  '$http',
  function(
    HomeService,
    $scope,
    $http
  ){

    $scope.testing = 'TEST';
    $scope.articles = [];

    var getPost = function(){

      // console.log('control', HomeService.get());

      HomeService.get().then(function(result){
        console.log(result.data);
        $scope.articles = result.data;
      })

    };

    getPost();

  }
])
