Template.login.events({
	'submit form': function(event){
		event.preventDefault();

		var email= event.target.email.value;
		var password = event.target.password.value;

		//has a call back function for incorrect information instead of silently failing
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason);
			} else {
				Router.go("home");
			}
		});
	}
})