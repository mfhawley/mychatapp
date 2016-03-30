Template.messagesList.helpers({

	'messagesList': function(){
		//because of this, messages will only appear on the page of chats that they have been assigned to
		var currentChat = this._id;

		return MessagesList.find({chatId: currentChat}, {sort: {createdAt: 1}});
	}

});