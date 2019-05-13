angular.module("MainApp")
.directive("highlight", function(){
    return function(scope, element, attrs){
        if(scope.today == attrs["highlight"]){
            element.css("color", "red");
        }
    }
})