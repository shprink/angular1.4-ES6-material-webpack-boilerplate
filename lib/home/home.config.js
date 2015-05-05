/* @ngInject */
export default function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('public.home', {
        url: "/home",
        views: {
            'content@': {
                templateUrl: require("./home.html"),
                controller: "HomeController as home"
            }
        }
    });
    $urlRouterProvider.otherwise("/public/home");
}