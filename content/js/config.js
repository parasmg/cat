catalogEditor.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: '/content/views/home.html'
        })
        .state('search', {
            url: '/search',
            controller: 'searchController',
            templateUrl: '/content/views/search.html'
        })
        .state('details', {
            url: '/details/:id',
            controller: 'detailsController',
            templateUrl: '/content/views/details.html'
        })
        .state('edit-details', {
            url: '/edit-details/:id',
            controller: 'editDetailsController',
            templateUrl: '/content/views/edit-details.html',
            params: { obj: null, id: null }
        })
            .state('edit-details.edit-section', {
                url: '/edit-section',
                templateUrl: '/content/views/edit-section.html',
                controller: 'editSectionController',
                params: {
                    id: null,
                    sectionInfo: null
                }
            })
        .state('login', {
            url: '/login',
            controller: 'loginController',
            templateUrl: '/content/views/login.html'
        })
        .state('additional-info', {
            url: '/additional-info',
            controller: function () {
                                console.log("Additional Info");
                        },
            template: '<h1>Additional Information</h1>'
        })
        .state('spec-info', {
            url: '/spec-info',
            controller: function () {
                            console.log("Specimen Info");
                        },
            template: '<h1>Specimen Information</h1>'
        })
        .state('request-access', {
            url: '/request-access',
            controller: function () {
                            console.log("Request Access");
                        },
            template: '<h1>Request Access</h1>'
        });
        $urlRouterProvider.otherwise('/home');

    }])

catalogEditor.config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(true);
}]);

catalogEditor.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(true);
}])
