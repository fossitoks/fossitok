fossDemoApp.directive('footerDirective', function ($rootScope) {
    function linkfunc(scope, elem, attrs) {
    }

    return {
        templateUrl: '/static/fossitokdemo/angular/directives/footer/footer.html',
        replace: true,
        restrict: "E",
        scope: {
        },
        link: linkfunc
    };
});