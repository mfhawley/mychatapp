Template.createMessage.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
  'submit form': function(event){
    event.preventDefault();
    var userNameVar = event.target.userName.value;
   	var userMessageVar = event.target.userMessage.value;
   	var currentUserId = Meteor.user().emails[0].address;
   	//this grabs the id that the user is currentl viewing and storing it withing a currentchat variable
   	var currentList = this._id;

	MessagesList.insert({
		name: userNameVar,
	    message: userMessageVar,
	    unread: false,
	    createdBy: currentUserId,
	    createdAt: new Date(),
	    //this stores the id of the current chat
	    chatId: currentList
	});

	event.target.userName.value = "";
	event.target.userMessage.value = "";

    //Meteor.call('insertMessageData', userSearchVar, userMessageVar);
  }
})