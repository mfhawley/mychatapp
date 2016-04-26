//this subscribes to the chatlist publish function
Meteor.subscribe("chatList");
Meteor.subscribe("messagesList");
Meteor.subscribe("eventsList");
Meteor.subscribe("feedList");
Meteor.subscribe("contactsList");
Meteor.subscribe("directoryList");




//the deafult validator below makes this short and easy
Template.login.onRendered(function(){
	var validator = $('.login').validate({

	//this is so we can uncomment out the form again and make the register and login forms work
		submitHandler: function(event){
			var email= $('[name=email]').val();
			var password = $('[name=password]').val();

			//has a call back function for incorrect information instead of silently failing
			Meteor.loginWithPassword(email, password, function(error){
				if(error){
					if(error.reason =="User not found"){
						//console.log(error.reason); - no longer needed
						//this manually forces an error to appear beside the email field
						validator.showErrors({
							email: error.reason
							//could also pass error message shere with email:"error" for example
						});
					}
					if(error.reason == "Incorrect password"){
						validator.showErrors({
							password: error.reason
						});
					}
				} else {
					Router.go("home");
				}
			});
		}

	});
});




//REGISTER TEMPLATE instead
Template.register.onRendered(function(){
	var validator = $('.register').validate({
		submitHandler: function(event){
			var firstname= $('[name=firstname]').val();
			var lastname= $('[name=lastname]').val();
			var email= $('[name=email]').val();
			var password = $('[name=password]').val();

			//this send the info through the accounts password package 
			//has a callback function for errors
			Accounts.createUser({
				firstname: firstname,
				lsatname: lastname,
				email: email,
				password: password
			}, function (error){
				if(error){
					//remember the period id the email already exists statemetn
					if(error.reason == "Email already exists."){
						validator.showErrors({
							email: error.reason
						})
						//dont need to account for other errors as they are already handled by the validate function
					}
				} else {
					//this sends them to the homepage after registering
					Router.go("home");
				}
			});
		}
	});
});



//this is used for the login and register template since they can share the same errors
$.validator.setDefaults({
	rules: {
		username: {
			required: true,
			maxlength: 12
		},
		email: {
			required: true,
			email: true
		},

		password: {
			required: true,
			minlength: 6
		}
	},

	messages: {
		email: {
			required: "You must enter an email address. yea yea",
			email: "You've entered an invalied email address. shiiit"
		},
		password: {
			required: "You must enter a password. fuuuuck",
			minlength: "Your password must be at least {0} characters. shit shit"
		}
	}
});

