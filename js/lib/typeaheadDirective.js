catalogEditor.directive('typeahead', ['$timeout', '$compile',

    function ($timeout, $compile) {
    return {
        restrict: 'AEC',
        scope: {
            items: '=',
            prompt: '@',
            title: '@',
            subtitle: '@',
            synonyms: '@',
            model: '=',
            onSelect: '&',
            selecteditemcode: '=',
            searchstring: '=',
            onSearchClick: '&',
            searchResults: '='

        },
        link: function (scope, elem, attrs) {

            scope.handleSelection = function (selectedCd, selectedName, synonyms) {
                if (typeof synonyms === "undefined") {
                    synonyms = '';
                } else {
                    synonyms = synonyms.replace(/(<(\s*)(br)(\s*)>)/gi, ' ');
                    synonyms = synonyms.replace(/[^\w\s]/gi, '');
                }
                scope.model = selectedName, "+", synonyms   //search name and synonyms
                scope.selecteditemcode = selectedCd;
                scope.selected = true;
                $timeout(function () {
                    scope.onSelect();
                }, 200);
            };

            scope.handleSearchClick = function () {     //handle search click
                scope.searchstring = scope.model;
                scope.current = 0;
                scope.selected = true;
                console.log("Search Click in Directive - " + scope.searchstring);
                $timeout(function () {
                    scope.onSearchClick();
                }, 200);
            };

            scope.current = 0;

            scope.selected = true; // hides the list initially

            scope.isCurrent = function (index) {
                return scope.current == index;
            };

            scope.setCurrent = function (index) {
                scope.current = index;
            };

        },

        templateUrl: '/searchTemp.html'
    };
}]);/**/