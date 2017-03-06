angular.module('app',[])
       .controller('page1Controller',function($scope,$http){
          $http.get('Data/textFile.txt').then(function(resp){
              $scope.names = resp.data;
          })
       });
