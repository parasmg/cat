catalogEditor.directive('textEdit', [

    function () {
        return {
            restrict: 'AE',
            scope: {
                myObject: '=',
                myValue: '=',
                myKey:'='
            },
            templateUrl: '/content/views/textEditTemplate.html',
            controller: 'textEditController as txt'
            
        }
    }
])

//2 places