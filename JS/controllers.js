angular.module('app',[])
       .controller('page1Controller',function($scope,$https:){
          $https:.get('Data/textFile.txt').success(function(resp){
              $scope.names = resp;
          })
       });
