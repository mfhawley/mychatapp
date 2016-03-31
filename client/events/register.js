Template.register.events({

	'submit form': function(){
		event.preventDefault();

		var email= event.target.email.value;
		var password = event.target.password.value;

		//this send the info through the accounts password package 
		//has a callback function for errors
		Accounts.createUser({
			email: email,
			password: password
		}, function (error){
			if(error){
				console.log(error.reason);
			} else {
				Router.go("home");
			}
		});

		//this send them to the home page after registering
		Router.go('home');
	}
})