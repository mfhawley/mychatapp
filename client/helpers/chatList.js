Template.chatList.helpers({

	'chatList': function(){
		var currentUserId = Meteor.userId();

		return ChatList.find({createdBy: currentUserId}, {sort: {createdAt: 1}});
	}

});