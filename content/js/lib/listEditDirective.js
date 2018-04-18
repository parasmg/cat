catalogEditor.directive('listEdit', ['$timeout',
    function ($timeout) {

        return {
            restrict: 'E',
            scope: {
                myObject: '=',
                myValue: '=',
                myKey: '='
            },
            templateUrl: '/content/views/listEditTemplate.html',
            controller: 'listEditController as lst',
            link: function ($scope, $element, $attrs) {

            }
        }
    }
])