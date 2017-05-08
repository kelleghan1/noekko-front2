
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

    $scope.story = 'No Story';
    $scope.articles = [];
    $scope.orderBy = 'date';


    var getPost = function(){

      HomeService.get().then(function(result){
        $scope.articles = result[0].articles;
        console.log('CTRL', result);
      })

    };

    getPost();

  }
])
