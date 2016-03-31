Template.navigation.events({
	'click .logout': function(event){
		event.preventDefault
		Meteor.logout();
		//directs users to the login page after logging out
		Router.go('login');
	}
})