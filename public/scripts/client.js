var app = angular.module('BasicApp', []);

app.controller('BasicController', function(){
  console.log('basic controller ready');

  var self = this;

  self.greeting = "Hi there!";

  self.printGreeting = function() {
    console.log(self.greeting);
  }

});
