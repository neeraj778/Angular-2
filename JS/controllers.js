angular.module('app',[])
       .controller('page1Controller',function($scope,$http){
          $http.get('Data/names.json').success(function(data){
              $scope.names = data;
          })
       })
