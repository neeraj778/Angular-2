angular.module('app',[])
       .controller('page1Controller',function($scope,$http){
          $http.get('Data/textFile.txt').success(function(resp){
              $scope.names = resp;
          })
       });
