angular.module("MainApp")
.value("now", new Date())
.service("days", function(now){
    this.today = now.getDay();
    this.tomorrow = this.today + 1;
})