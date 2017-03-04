angular.module('app',['ngRoute'])
        .config('routeProvider',function($routeProvider){
          routeProvider.when('/',function(){
            templateUrl: 'partials/page1.html',
            controller: 'page1Controller'
          })
        
        })
