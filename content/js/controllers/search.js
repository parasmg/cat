catalogEditor.controller('searchController', ['$scope', '$http', 'DataFactory', '$state', '$timeout', 

function ($scope, $http, DataFactory, $state, $timeout) {

    DataFactory.getSearchScope().then(function (result) {
        $scope.items = result.data.SearchScope;
        console.log($scope.items.length);
    });
    
    $scope.selectedCatalogCd = '';
    $scope.searchString = '';

    // Get our stored data, or, a blank array;
    $scope.searchResults = DataFactory.get() || [];
    
    function init() {
        $state.reload();
    }
    
    $scope.onItemSelected = function () {
        console.log("Item Selected - " + $scope.selectedCatalogCd);
        $state.go("details", {
            id: $scope.selectedCatalogCd
        });
    };

    $scope.onClickSearch = function () {
        
        if($scope.searchString != null) {
            /*
                remove special characters and html tags from the synonyms and check if the name 
                or synonym contains the search string.
            */
            
            $scope.searchResults = [];
            for (i = 0; i < $scope.items.length; i++) {
                var synonyms = $scope.items[i].synonyms
                if (synonyms !== "") {
                    synonyms = synonyms.replace(/(<(\s*)(br)(\s*)>)/gi, ' ');
                    synonyms = synonyms.replace(/[^\w\s]/gi, '').toLowerCase();
                }
                var testName = $scope.items[i].test_name.toLowerCase();

                if ((testName.indexOf($scope.searchString.toLowerCase()) > -1) || (synonyms.indexOf($scope.searchString) > -1)) {
                    var searchItem = $scope.items[i];
                    $scope.searchResults.push(searchItem);
                }
            }
            // Store the data;
            DataFactory.set($scope.searchResults);
            $scope.searchResults = [];

            console.log("Loaded");

            if (!$state.is('search')) {
                $state.go('search');
            } else {
                init();
            }

        }
    };

}])