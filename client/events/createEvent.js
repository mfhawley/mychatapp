Template.createEvent.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
  'submit form': function(event){
    event.preventDefault();
    var eventColor = event.target.eventColor.value;
    var eventTitle = event.target.eventTitle.value;
    var eventDescription = event.target.eventDescription.value;
   	var currentUserId = Meteor.userId();
   	var userEmailVar = Meteor.user().emails[0].address;

	EventsList.insert({
		color: eventColor,
	    title: eventTitle,
	    description: eventDescription,
	    email: userEmailVar,
	    createdBy: currentUserId,
	    createdAt: new Date()
	});

	//event.target.eventColor.value = #006aff;
	event.target.eventTitle.value = "";
	event.target.eventDescription.value = "";

    //Meteor.call('insertMessageData', userSearchVar, userMessageVar);
  }
})