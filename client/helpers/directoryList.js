Template.directoryList.helpers({

	'directoryList': function(){
		return Meteor.users.find({}, {sort: {createdAt: -1}});
	}

});