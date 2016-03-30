Template.createEvent.events({
  	//will trigger when the form inside the createMessage form tempalte is submitted
  'submit form': function(event){
    event.preventDefault();
    var eventColor = event.target.eventColor.value;
    var eventTitle = event.target.eventTitle.value;
    var eventDescription = event.target.eventDescription.value;
   	var currentUserId = Meteor.user().emails[0].address;

	ChatsList.insert({
		color: eventColor,
	    title: eventTitle,
	    description: eventDescription,
	    createdBy: currentUserId,
	    createdAt: new Date()
	});

	/*$('[color=eventColor]').val('#006aff');
	$('[title=eventTitle]').val('');
	$('[title=eventDescription]').val('');*/

    //Meteor.call('insertMessageData', userSearchVar, userMessageVar);
  }
})