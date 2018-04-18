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
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: '/content/data/SearchScopeMin.json'
            }).then(function (response) {

                defer.resolve(response)
                t1 = performance.now();
                console.log("Search Scope - JSON downloaded and parsed in " + (t1 - t0).toFixed(2) + " milliseconds.");
                
            }, function (response) {
                defer.reject(response);
                results = response.status;
            });
            return defer.promise;
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
