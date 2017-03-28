angular.module('TecnicaTM').config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/', {
                templateUrl: '/components/init/init.view.html',
                controller: 'TecnicaTM_InitController'
            })
            .when('/posts/:pageNo?', {
                templateUrl: '/components/shared/posts/post.list.view.html',
                controller: 'TecnicaTM_PostListController'
            })
            .when('/post/:postNo?', {
                templateUrl: '/components/post/post.view.html',
                controller: 'TecnicaTM_PostController'
            })            
            .when('/posts/search/:post?', {
                templateUrl: '/components/shared/posts/post.list.view.html',
                controller: 'TecnicaTM_PostSearchListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
