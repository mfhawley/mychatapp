  Template.searchContacts.helpers({
    
  	'people': function(){
  	    var keyword  = Session.get("searchQuery");
  	    var query = new RegExp(keyword, 'i' );


  		return ContactsList.find({$or: [{email: keyword}, {firstname: keyword}, {lastname: keyword}]}, {sort: {name: -1}});//{results: results};
  	}
  });