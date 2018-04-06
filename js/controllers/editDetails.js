catalogEditor.controller('editDetailsController', ['$rootScope', '$scope', '$stateParams', '$log', '$state', '$transitions',

function ($rootScope, $scope, $stateParams, $log, $state, $transitions) {

    $scope.connected = true;
    $scope.testSections = [];
    var fromState = null;


    if ($stateParams.obj === null) {
        console.log($stateParams.id);
        $state.go('details', { id: $stateParams.id });
    } else {
        $scope.testSections = $stateParams.obj.testSections;
        console.log("OK");
    }

    $scope.editSection = function editSection(section_id, $event) {

        var elememt = $event.target;

        $state.go('edit-details.edit-section', {
            id: $stateParams.id,
            sectionInfo: $scope.testSections[section_id - 1]
            
        })
    }

}]);