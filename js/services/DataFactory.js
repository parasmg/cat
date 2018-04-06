catalogEditor.factory('DataFactory', ['$http', '$log','$q', function ($http, $log, $q) {

        
    var results = [];

    var dataObject = {

        set: function (value) {
            results = [];
            results = value;
        },

        get: function () {
            return results;
        },

        getSearchScope: function () {
            var results = null;
            var searchScope = new Array();
            var t0 = performance.now();
            var t1 = null;
            $http({
                method: 'GET',
                url: '/data/SearchScope.json'
            }).then(function (response) {
                results = response.data.SearchScope
                for (i = 0; i < results.length; i++) {
                    var searchItem = results[i];
                    searchScope.push(searchItem);
                }
                t1 = performance.now();
                console.log("Search Scope - JSON downloaded and parsed in " + (t1 - t0).toFixed(2) + " milliseconds.");
            }, function (response) {
                results = response.status;
            });
            return searchScope;
        },

        getSearchData: function (searchString) {
            var results = null;
            var t0 = performance.now();
            var t1 = null;
            var searchScope = new Array();

            $http({
                method: 'GET',
                url: '/data/SearchScope.json'
            }).then(function (response) {
                results = response.data.SearchScope
                for (i = 0; i < results.length; i++) {
                    var synonyms = results[i].synonyms

                    /*
                        remove special characters and html tags from the synonyms and check if the name 
                        or synonym contains the search string.
                    */
                    if (synonyms !== "") {
                        synonyms = synonyms.replace(/(<(\s*)(br)(\s*)>)/gi, ' ');
                        synonyms = synonyms.replace(/[^\w\s]/gi, '').toLowerCase();
                    }
                    var testName = results[i].test_name.toLowerCase();

                    if ((testName.indexOf(searchString) > -1) || (synonyms.indexOf(searchString) > -1))
                    {
                        var searchItem = results[i];
                        searchScope.push(searchItem);
                    }
                }
                t1 = performance.now();
            }, function (response) {
                results = response.status;
            });
            return searchScope;
        },

        getTestFields: function (test_catalog_cd) {
            return $http.get('/Home/getTestDetails?test_catalog_cd=' + test_catalog_cd)
            //return $http.get('/data/TestFields.json')
            
        },

        getTestHFields: function (test_catalog_cd) {
            return $http.get('/Home/getHFields?test_catalog_cd=' + test_catalog_cd)
            //return $http.get('/data/H-Fields.json')
        },

        getTestDisplaySections: function (test_catalog_cd) {
            return $http.get('/Home/getTestDisplaySections?test_catalog_cd=' + test_catalog_cd);
            //return $http.get('/data/Sections.json')
        },

        getTestFieldsBySectionAndTestID: function (testId, sectionId) {
        }
 
    }
    return dataObject;
}]);