Template.chatList.helpers({

	'chatList': function(){
		var currentUserId = Meteor.userId(); // THIS IS  PROBLEM WHEN INSERTED

		return ChatList.find({createdBy: currentUserId}, {sort: {createdAt: 1}});
	}

});