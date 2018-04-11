catalogEditor.directive('clickLink', ['$state', function ($state) {
    return {
        link: function (scope, element, attrs) {
            element.on('click', function () {
                scope.$apply(function () {
                    $state.go(attrs.clickLink);
                });
            });
        }
    }
}]);