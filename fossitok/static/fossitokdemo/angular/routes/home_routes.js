fossDemoApp.config(function ($routeProvider) {
    $routeProvider.when("",{
        templateUrl: '/static/fossitokdemo/angular/views/home/index.html',
        controller: 'homeController'
    })
    
});