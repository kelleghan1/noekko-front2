
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

    // var ellipsizeTextBox = function(element) {

      // var el = document.getElementsByClassName(element);
      // console.log("checking", el);


      // for (var i = 0; i < el.length; i++) {
      //   var keep = el[i].innerHTML;
      //
      //   while(el[i].scrollHeight > el[i].offsetHeight) {
      //     el[i].innerHTML = keep;
      //     el[i].innerHTML = el[i].innerHTML.substring(0, el[i].innerHTML.length-1);
      //     keep = el[i].innerHTML;
      //     el[i].innerHTML = el[i].innerHTML + "...";
      //   }
      //
      // }
    // }



    var getPost = function(){

      HomeService.get().then(function(result){
        $scope.articles = result.articles;
        // $scope.story = result.data.story;

        // setTimeout(function(){
          // ellipsizeTextBox('article-description');

        // }, 500)
      })

    };

    getPost();

  }
])
