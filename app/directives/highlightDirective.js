angular.module("MainApp")
.directive("highlight", function( $filter ){

    let dayFilter = $filter("dayName");

    return function(scope, element, attrs){
        if(dayFilter(scope.today) == attrs["highlight"]){
            element.css("color", "red");
        }
    };
    
});