catalogEditor.directive('richEdit', ['$timeout', 'TinymceFactory',
    function ($timeout, TinymceFactory) {

        return {
            restrict: 'E',
            scope: {
                myObject: '=',
                myValue: '=',
                myKey:'='
            },
            templateUrl: '/content/views/richEditTemplate.html',
            controller: 'richEditController as rich',
            link: function ($scope, $element, $attrs) {

                var editElement = $element[0].querySelector('textarea');
                console.log('Found Text Area: ', editElement.id);

                TinymceFactory({
                    selector: '#'+editElement.id,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table contextmenu paste code'
                    ],
                    font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n' //, height: 500
                }).then(function (editors) {
                    console.log("Editors:",editors);
                })
                
                
                
           }
        }
    }
])
