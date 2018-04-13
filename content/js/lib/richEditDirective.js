catalogEditor.directive('richEdit', ['$timeout', 
    function ($timeout) {

        return {
            restrict: 'E',
            scope: {
                myObject: '=',
                myValue: '=',
                myKey: '='
            },
            templateUrl: '/content/views/richEditTemplate.html',
            controller: 'richEditController as rich',
            link: function ($scope, $element, $attrs) {
               
           }
        }
    }
])
