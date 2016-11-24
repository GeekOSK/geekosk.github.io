angular.module('GeekOSK')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views:{
                    'header': {
                        templateUrl: 'tpls/header.html'
                    },
                    'content':{
                        templateUrl: 'tpls/pages/home.html'
                    },
                    'footer':{
                        templateUrl: 'tpls/footer.html'
                    }
                }
            })
    });
