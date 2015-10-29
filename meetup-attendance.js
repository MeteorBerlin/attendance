if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
// code for questionnaire begins
var userData = prompt("Do you use Meteor?")
console.log(userData)









// code for questionnaire ends
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
