//catalogEditor.factory('Authentication', ['$rootScope', '$location', '$http',
catalogEditor.factory('Authentication', ['$rootScope', '$http', 'AUTH_EVENT',

function ($rootScope, $http, AUTH_EVENT) {
    var authStatus = {
        'currentUser': null
        , 'authMessage': ''
        , 'authError': false
        , 'authComplete': null
    };

    return {
        login: function (user) {
            var authMessage = null;
            $http({
                url: '/Home/getUser',
                //url: '/data/user.json',
                method: 'POST',
                timeout: 1000,
                data: {
                    domain: 'VCUHS',
                    username: user.username,
                    pwd: user.password
                }
            }).then(function (response) {
                if ((response.data.indexOf("failure") > -1)
                    || (response.data.indexOf("Not") > -1)) {
                    
                    authStatus.authMessage = AUTH_EVENT.loginFailure.text;
                    authStatus.authError = true;
                    authStatus.currentUser = null;
                } else { 
                    authStatus.authMessage = AUTH_EVENT.loginSuccess.text;
                    authStatus.currentUser = response.data;
                    authStatus.authError = false;

                    //add user rights 

                }
                authStatus.authComplete = true;
                $rootScope.$broadcast('authComplete', authStatus);
            }, function (response) {
                authStatus.authMessage = AUTH_EVENT.loginFailure.text;
                authStatus.authError = true;
                authStatus.authComplete = true;
                authStatus.currentUser = null;
                $rootScope.$broadcast('authComplete', authStatus);
            });
            $rootScope.authStatus = authStatus;
            return authStatus;
        },

        logout: function(){
            var authStatus = {
                'currentUser': null
                , 'authMessage': AUTH_EVENT.logoutSuccess.text
                , 'authError': null
                , 'authComplete': false
            };
            $rootScope.$broadcast('authComplete', authStatus);
            $rootScope.authStatus = authStatus;
        },
        
    };

}])