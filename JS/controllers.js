angular.module('app',[])
       .controller('page1Controller',function($scope,$http){
          $http.get('https://www.w3schools.com/angular/welcome.htm').then(function(resp){
              $scope.names = resp.data;
          })
       });
