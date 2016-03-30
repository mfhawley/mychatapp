Template.chatList.helpers({

	'chatList': function(){
		return ChatList.find({}, {sort: {createdAt: 1}});
	}

});