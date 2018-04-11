catalogEditor.controller('loginController', ['$scope', 'Authentication', '$state', '$rootScope', '$timeout', 'AUTH_EVENT',

function ($scope, Authentication, $state, $rootScope, $timeout, AUTH_EVENT) {

    $scope.authStatus = {
        'currentUser': null
        , 'authMessage': 'Enter Information and Click Login or Hit Enter'
        , 'authError': ''
        , 'authComplete': false
    };
        //'loginSuccess': 'auth-login-success',
        //'loginFailure': 'auth-login-failure',
        //'logoutSuccess': 'auth-logout-success',
        //'sessionTimeout': 'auth-session-timeout'

    $scope.$on('authComplete', confirmAuthEvent)

    function confirmAuthEvent($event, authStatus) {
        if (authStatus.authMessage == AUTH_EVENT.loginSuccess.text || authStatus.authMessage == AUTH_EVENT.loginFailure.text) {
            console.log("Login Controller");
            console.log($event);
            console.log(authStatus);
            $scope.authStatus = authStatus;
        }
    }

    $scope.login = function () {
        $scope.authStatus.currentUser = null;
        $scope.authStatus.authComplete = false;
        $scope.authStatus.authError = null;
        $scope.authStatus.authMessage = AUTH_EVENT.loginInProgress.text;
        Authentication.login($scope.user);
    };

}])