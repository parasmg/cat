catalogEditor.controller('navController', ['$scope','$rootScope', '$state', 'AUTH_EVENT', 'Authentication', 


function ($scope,$rootScope, $state, AUTH_EVENT, Authentication) {

    $scope.isActive = function (givenState) {
        return viewLocation === $state.is();
    };

    $scope.$on('authComplete', confirmAuthEvent)

    function confirmAuthEvent($event, authStatus) {
        if (authStatus.authMessage == AUTH_EVENT.logoutSuccess.text) {
            console.log("NavController");
            console.log($event.name);
            console.log(authStatus);
            $rootScope.authStatus = authStatus;
            $state.reload();
        }
        console.log("NavController caught " + $event.name);
    }

    $scope.logout = function () {
        Authentication.logout();
    }

    $scope.changeStateTo = function (newState, stateParams) {
        $state.go(newState, stateParams);
    }
    
   

    
}])