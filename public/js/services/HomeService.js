thisApp
.factory('HomeService', function($http){
console.log('SERVICE');
  return {

    get: function(){
      console.log('CHECK');
      return $http.get('http://ec2-35-165-125-36.us-west-2.compute.amazonaws.com/stories/json')
      .then(
        function(success){
          console.log('success1', success);
          return success.data;
        },
        function(error){
          console.log('error1', error);
          return error;
        }
      );

    }

  }


  // return {
  //   get: function(){
  //
  //     return [
  //       {
  //         article_id: 123,
  //         title: 'The Title 1',
  //         description: 'This is the description',
  //         author: 'The Author',
  //         url: 'https://google.com',
  //         image: 'http://placehold.it/350x150',
  //         published: '2017-02-08 02:40:12',
  //         source: 'the-huffington-post',
  //         x_score: 25
  //       },
  //       {
  //         article_id: 111,
  //         title: 'The Title 2',
  //         description: 'This is the description',
  //         author: 'The Author',
  //         url: 'https://google.com',
  //         image: 'http://placehold.it/350x150',
  //         published: '2017-02-08 02:40:12',
  //         source: 'the-huffington-post',
  //         x_score: 75
  //       },
  //       {
  //         article_id: 222,
  //         title: 'The Title 3',
  //         description: 'This is the description',
  //         author: 'The Author',
  //         url: 'https://google.com',
  //         image: 'http://placehold.it/350x150',
  //         published: '2017-02-08 02:40:12',
  //         source: 'the-huffington-post',
  //         x_score: 50
  //       }
  //     ]
  //
  //
  //   }
  // }








});
