//routes go here i think

Router.route('/chatList');

//this makes the chat threads into links
Router.route('chatList/:_id',{
	//give our raouter a name to prevent broken links
	name:'messagesList',
	//associate the chats list with these pages
	template:'messagesList',

	//using this we pass data into a route from withing the associated function
	data: function(){
		var currentList = this.params._id;
		return ChatList.findOne({_id: currentList});
	}
});

Router.route('/eventsList');

Router.route('/feedList');

Router.route('/',{
	//this is so we can reference the route even if the url page was to change
	name: 'home',
	//options for the route of the homepage
	template:'home'
});

Router.route('/login');

//this sets the header and footer layout template for all pages
Router.configure({

	layoutTemplate: 'main'

});

//not needed with them being dynamic from chats list -- Router.route('/messagesList');

Router.route('/register');