var app = angular.module("PasswordManager", ["ngCookies"
    , "ngMessages"
    , "ngResource"
    , "ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/main.html"
    })
    .when("/login", {
        templateUrl: "views/login.html",
        controller: "loginCtrl"
    })
    .when("/signup", {
        templateUrl: "views/signup.html"
    })
}]);