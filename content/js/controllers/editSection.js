catalogEditor.controller('editSectionController', ['$q', '$rootScope', '$scope', '$stateParams', '$log', 'AppSupport', 'DataFactory', 'displayHelper','$state',

function ($q, $rootScope, $scope, $stateParams, $log, AppSupport, DataFactory, displayHelper, $state) {

    if ($stateParams.sectionInfo === null) {
        $state.go('details', { id: $stateParams.id });

    } else {

        $scope.sectionInfo = $stateParams.sectionInfo;
    }
    $scope.id = $stateParams.id;

    $scope.reloadSection = function (sectionInfo) {
        $state.go('edit-details', {
            id: $stateParams.id
        });
    }

}]);