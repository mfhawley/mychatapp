Template.feedList.helpers({

	'feedList': function(){
		return FeedList.find({}, {sort: {createdAt: -1}});
	}

});