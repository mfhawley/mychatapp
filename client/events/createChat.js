Template.createChat.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
	'submit form': function(event){
	    event.preventDefault();
	   	var recipientId = Session.get("searchQuery");
	    var lastMessageVar = event.target.lastMessage.value;
	   	var currentUserId = Meteor.userId();
	   	var userEmailVar = Meteor.user().emails[0].address;
	   	
	   	
		ChatList.insert({
			name: recipientId,
		    lastMessage: lastMessageVar,
		    email: userEmailVar,
		    createdBy: currentUserId,
		    createdAt: new Date()
		    //call back function for auto direct to new chat created
		    //results retrieve the results of the insert function (the chats id number only)
		},function(error, results){
			Router.go('messagesList', {_id: results});
		});

		event.target.searchQuery.value = "";
		event.target.lastMessage.value = "";

	    //Meteor.call('insertMessageData', userSearchVar, userMessageVar);
	},

	//used for user search in capturing the input content
    'keyup input.userSearch': function (event) {
      Session.set("search-query", event.currentTarget.value);
    },

    //used for user serach in settings the value of the input field
  	'click .selectPersonButton': function(event){
	    event.preventDefault();
	    var buttonValue = document.getElementById("selectPersonButton").innerHTML;
	    //end part replaces the spaces in the name
		document.getElementById("userSearch").value = buttonValue.replace(/\s+/g, '');
    }

  


})