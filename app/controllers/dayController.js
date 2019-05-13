angular.module("MainApp", [])
.controller("todayCtrl", function($scope){

    let dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday" ];

    $scope.today = dayNames[(new Date().getDay()) % 7];
})
.controller("tomorrowCtrl", function($scope){

    let dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday" ];

    $scope.tomorrow = dayNames[(new Date().getDay() + 1) % 7];
})