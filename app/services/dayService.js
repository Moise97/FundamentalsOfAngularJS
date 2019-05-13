angular.module("MainApp")
.service("days", function(){
    this.today = new Date().getDay();
    this.tomorrow = this.today + 1;
})