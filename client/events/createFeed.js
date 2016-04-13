Template.createFeed.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
    'submit form': function(event){
      event.preventDefault();
      var feedText = event.target.feedContent.value;
      var userEmailVar = Meteor.user().emails[0].address;
     	var currentUserId = Meteor.userId();

  	FeedList.insert({
  		  content: feedText,
        email: userEmailVar,
  	    createdBy: currentUserId,
  	    createdAt: new Date()
  	});

    event.target.feedContent.value = "";
  }
})