Template.createFeed.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
    'submit form': function(event){
      event.preventDefault();
      var feedText = event.target.feedContent.value;
     	var currentUserId = Meteor.user().emails[0].address;

  	FeedList.insert({
  		  content: feedText,
  	    createdBy: currentUserId,
  	    createdAt: new Date()
  	});

    event.target.feedContent.value = "";
  }
})