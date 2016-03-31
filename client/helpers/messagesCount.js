Template.messagesCount.helpers({

	'totalMessages': function(){
		var currentList = this._id;

		//this counts the number of messages in each individual chat list
		return MessagesList.find({listId: currentList}).count();
	},

	'unreadMessages': function(){
		var currentList = this._id;
		//this will count the number of messages where unread field = true NOT SET UP YET
		//return messagesList.find({listId: currentList, unread: true}).count():

	}
});