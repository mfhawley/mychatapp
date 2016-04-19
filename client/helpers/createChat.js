Template.createChat.helpers({
    
	'people': function(){
	    var keyword  = Session.get("searchQuery");
	    var query = new RegExp( keyword, 'i' );
	    /*var results = Meteor.users.find( { $or: [{'name': query},
	      {'gender': query},
	      {'email': query},
	      {'phone': query}] } );*/

		return Meteor.users.find({email: keyword}, {sort: {name: -1}});//{results: results};
	}
});