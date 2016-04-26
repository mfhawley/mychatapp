Meteor.publish("chatList",function(){
	//this makes it so only the data belonging to the current user is published
	var currentUser = this.userId;
	return ChatList.find({createdBy: currentUser});
});

Meteor.publish("messagesList",function(){
	var currentUser = this.userId;
	return MessagesList.find({createdBy: currentUser});
});

Meteor.publish("eventsList",function(){
	return EventsList.find();
});

Meteor.publish("feedList",function(){
	return FeedList.find();
});

Meteor.publish("contactsList",function(){
	var currentUser = this.userId;
	return ContactsList.find({createdBy: currentUser});
});

Meteor.publish("directoryList",function(){
	return DirectoryList.find();
});



