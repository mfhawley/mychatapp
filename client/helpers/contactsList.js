Template.contactsList.helpers({

	'contactsList': function(){
		return ContactsList.find({createdBy: Meteor.userId()}, {sort: {createdAt: -1}});
	}

});