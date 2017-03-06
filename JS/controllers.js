angular.module('app',[])
       .controller('page1Controller',function($scope,$http){
          $http.get('Data/names.json').then(function(resp){
              $scope.names = resp.data;
          })
       });
