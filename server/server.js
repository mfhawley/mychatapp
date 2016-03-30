/*if(Meteor.isServer){

	Meteor.methods({
	    'insertMessageData': function(userSearchVar){
	      var currentUserId = Meteor.userId();
	      MessagesList.insert({
	          name: userSearchVar,
	          text: userMessageVar,
	          createdBy: currentUserId
	      });
	    }
	});
}*/