Template.directoryList.events({

	'click .addFriend': function(event){
        event.preventDefault();
        console.log(Meteor.userId());
        console.log(this.firstname);

        //var existingContactEmail = .findOne(this.email);

        var existingContactEmail = ContactsList.findOne({email: this.email}).email;
        console.log(existingContactEmail);
        console.log(this.email);
        if(this.email != existingContactEmail){
	        ContactsList.insert({
	            firstname: this.firstname,
	            lastname: this.lastname,
	            email: this.email,
	            createdBy: Meteor.userId()
	        });
		} else {
			window.confirm("You already have that contact");
		}
	} 
});