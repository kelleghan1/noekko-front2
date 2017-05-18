
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

    $scope.stories;
    $scope.articles;
    $scope.orderBy = 'date';


    var getPost = function(){

      HomeService.get().then(function(result){
        $scope.stories = result;
        $scope.articles = result[0].articles;
        console.log('CTRL', result);
      })

    };

    getPost();

  }
])
