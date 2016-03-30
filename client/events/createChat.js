Template.createChat.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
  'submit form': function(event){
    event.preventDefault();
    var userSearchVar = event.target.userSearch.value;
   	var lastMessageVar = event.target.lastMessage.value;
   	var currentUserId = Meteor.userId();

	ChatList.insert({
		name: userSearchVar,
	    lastMessage: lastMessageVar,
	    createdBy: currentUserId,
	    createdAt: new Date()
	    //call back function for auto direct to new chat created
	    //results retrieve the results of the insert function (the chats id number only)
	},function(error, results){
		Router.go('messagesList', {_id: results});
	});

	//$('[user=userSearch]').val('');
	//$('[message=userMessage]').val('');

    //Meteor.call('insertMessageData', userSearchVar, userMessageVar);
  }
})