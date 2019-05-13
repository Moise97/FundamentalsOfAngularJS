angular.module("MainApp", [])
.controller("todayCtrl", function($scope, days){

    $scope.today = days.today;

})
.controller("tomorrowCtrl", function($scope, days){

    $scope.tomorrow = days.tomorrow;

})