Template.messagesList.helpers({

	'messagesList': function(){
		//because of this, messages will only appear on the page of chats that they have been assigned to
		var currentList = this._id;
		var currentUserId = Meteor.userId(); //THIS IS A PROBELM

		//ensures both the list and tasks only appear if they are owned by the currently loggin in user
		return MessagesList.find({chatId: currentList, createdBy: currentUserId}, {sort: {createdAt: 1}});
	},

	'checked':function(){

		var isUnread = this.unread;
		
		if(isUnread){
			return "checked";
		} else {
			return "";
		}
	}

});