if (Meteor.isClient) {

//alert(document.meteorites.user.checked);
  // counter starts at 0
  Session.setDefault('counter', 0);


  function collectData(){
    var user 
   = document.getElementsByName("user");

   for (var i = 0; i < user.length; i++) {
    if (user[i].checked) {
      alert(user[i].value);
      break;
    };
   }
}






  //var skill = document.getElementById("skill").value;

  //alert(skill);

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
//var userData = prompt("Do you use Meteor?")
//console.log(userData)

//var userData = prompt("Are you a founder?")

//var userData = prompt("Do you use Meteor?")
//if (userData = yes){
  //ask another question
       //some code
//}
//else{
  //then ask another
        //some code
//}








// code for questionnaire ends
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
