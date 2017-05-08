thisApp
.factory('HomeService', function($http, $q){
  console.log('SERVICE');


  // return {
  //
  //   get: function(){
  //     console.log('CHECK');
  //     return $http.get('http://ec2-35-165-125-36.us-west-2.compute.amazonaws.com/stories/json')
  //     .then(
  //       function(success){
  //         console.log('success1', success);
  //         return success.data[0];
  //       },
  //       function(error){
  //         console.log('error1', error);
  //         return error;
  //       }
  //     );
  //
  //   }
  //
  // }


  return {
    get: function(){

      var allStories = [];

      var i = 0;
      var defer = $q.defer();

      var makeStories = function(id){

        if (id >= 9) {

          defer.resolve(allStories);

        }else{

          return $http.get('http://ec2-35-165-125-36.us-west-2.compute.amazonaws.com/stories/json')
          .then(
            function(success){
              console.log('success1', success.data[0].articles);

              allStories.push({
                articles: success.data[0].articles,
                storyTitle: success.data[0].title + id,
                date: "2017-03-11 18:02:37",
                featured_image: success.data[0].featured_image + ''
              });

              i++;
              makeStories(i);

            });
          }
        }

        makeStories(i);
        return defer.promise;


      }
    }








  });
