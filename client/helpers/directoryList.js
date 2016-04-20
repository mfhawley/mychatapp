Template.directoryList.helpers({

	'directoryList': function(){
		return DirectoryList.find({}, {sort: {createdAt: -1}});
	}

});