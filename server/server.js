/*Meteor.publish("allUsers",function(){
	return Meteor.users.find();
});*/

Meteor.publish("chatsList",function(){
	//this makes it so only the data belonging to the current user is published
	var user = Meteor.users.findOne(this.userId);
	var currentUserEmail = user.emails[0].address;
	console.log(currentUserEmail);
	console.log("hi");
	return ChatList.find({$or: [{email: currentUserEmail}, {recipientEmail: currentUserEmail}]}, {sort: {createdAt: -1}});
});

Meteor.publish("messagesList",function(){
	var currentUser = this.userId;
	console.log("hii");
	return MessagesList.find({createdBy: currentUser});
});

Meteor.publish("eventsList",function(){
	console.log("hiii");
	return EventsList.find();
});

Meteor.publish("feedList",function(){
	console.log("hiiii");
	return FeedList.find();
});

Meteor.publish("contactsList",function(){
	var currentUser = this.userId;
	console.log("hiiiii");
	return ContactsList.find({createdBy: currentUser});
});

Meteor.publish("directoryList",function(){
	console.log("hiiiiii");
	return DirectoryList.find();
});



