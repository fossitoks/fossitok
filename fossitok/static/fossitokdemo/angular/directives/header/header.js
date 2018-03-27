fossDemoApp.directive('headerDirective', function ($rootScope) {
    function linkfunc(scope, elem, attrs) {
    }

    return {
        templateUrl: '/static/fossitokdemo/angular/directives/header/header.html',
        replace: true,
        restrict: "E",
        scope: {
        },
        link: linkfunc
    };
});