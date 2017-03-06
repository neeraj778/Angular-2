angular.module('app',[])
        .controller('page1Controller',function($scope,$http){
                    $scope.names2 = [
                                    {name: 'Neeraj', age: 28, sex: 'male'},
                                    {name: 'Ankit', age: 26, sex: 'male'},
                                    {name: 'Deepti', age: 30, sex: 'female'}
                                  ];

                    $http.get('Data/names.json').then(function(data){
                           $scope.names = data;
                    });
