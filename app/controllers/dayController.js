angular.module("MainApp", [])
.controller("todayCtrl", function($scope){

    $scope.today = new Date().getDay() % 7;

})
.controller("tomorrowCtrl", function($scope){

    $scope.tomorrow = (new Date().getDay() + 1) % 7;

})