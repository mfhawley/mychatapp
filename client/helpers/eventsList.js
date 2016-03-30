Template.eventsList.helpers({

	'eventsList': function(){
		return EventsList.find({}, {sort: {createdAt: -1}});
	}

});