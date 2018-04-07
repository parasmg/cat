catalogEditor.controller('detailsController', ['$q','$rootScope', '$scope', '$log', 'AppSupport', 'DataFactory', 'displayHelper', '$stateParams', '$state', '$transitions',

function ($q, $rootScope, $scope, $log, AppSupport, DataFactory, displayHelper, $stateParams, $state, $transitions) {

    var testID = null;
    var ajaxError = null;
    var all_lists = []
    var fields = [];
    var newFields = []
    var testSections = []

    //$scope.newFields = []
    $scope.connected = true;
    $scope.globalTestInfo = {}
    $scope.$log = $log;

    testCatalogCd = $stateParams.id;
    
    testCatalogCd = 16268; //temporary setting this to 16268

    performance.mark('load-details');

    getTestData(testCatalogCd).then(function (response) {
        
        $log.log('Got Test Data For -', testCatalogCd);
        

        // testSections = JSON.parse(response[0].data);
        // fields = JSON.parse(response[1].data);
        // hValues = JSON.parse(response[2].data);
        testSections = response[0].data;
        fields = response[1].data;
        hValues = response[2].data;
        
        testSections = displayHelper.addEmptyFieldsToSections(testSections); //all an empty fields[] to each test section later populated by new fields.

        all_lists = displayHelper.getAllLists(fields); //separate out all the fields that belong to lists and put them in an array of lists.
        
        newFields = displayHelper.createDisplayObject(fields, all_lists) //push new qualifying fields to the empty fields[] in sections.
        newFields = displayHelper.createHListFields(newFields, hValues); // create hlists in all fields of type h-list

        $scope.testSections = displayHelper.addNewFieldsToSections(testSections, newFields);
        $rootScope.globalTestInfo = displayHelper.getGlobalTestObject();
        angular.copy($rootScope.globalTestInfo, $scope.globalTestInfo);
        $log.log($scope.globalTestInfo);
        $log.log('Created Display Object');
    });
    
    function getTestData(testCatalogCd) {
        var promises = []
        promises.push(DataFactory.getTestDisplaySections(testCatalogCd));
        promises.push(DataFactory.getTestFields(testCatalogCd));
        promises.push(DataFactory.getTestHFields(testCatalogCd));
        return $q.all(promises);
    }

    $scope.editDetails = function editDetails() {

        $state.go('edit-details', {
            obj: { testSections: $scope.testSections },
            id: $rootScope.globalTestInfo.test_catalog_cd
        });

    }

}]);
