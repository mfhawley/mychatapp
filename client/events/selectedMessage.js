Template.selectedMessage.events({
	
	'click .delete-message': function(event){
		//prevent deafult prevent sthe link from behaving like a normal link, giving us total control
		event.preventDefault();
		var documentId = this._id;

		//this pops up a default confirm window
		var confirm = window.confirm("Delete this message?");
		if(confirm){
			MessagesList.remove({_id: documentId});
		}

	},

	/*attaching the keyup event to items that have the todoItem name
	'keyup [name=todoItem]': function(event){

		if(event.which == 13 || event.which == 27){ 
			//this makes the focused fields lose focus
			$(event.target).blur();

		} else { 
			//the unique id of the item that is being edited
			var documentId = this._id; 
			//EVENT ITSELF IS ALREADY ATTACHED TO A SPECIFIC ITEM SO WE DONE HAVE TO SPECIFY THE PRECISE FIELD
			var todoItem = $(event.target).val(); 

			Todos.update({ _id: documentId }, {$set: { name: todoItem }}); 
		}
	},*/

	//change type event which will trigger whne the value of the checkbox changes
	'change [type=checkbox]':function(){
		console.log("You check or unchecked this box");
		var documentId = this._id;
		var isUnread = this.unread;
		if(isUnread){
			MessagesList.update({_id: documentId}, {$set: {unread: false}});
			console.log("Messages marked as unread.");
		} else {
			MessagesList.update({_id: documentId}, {$set: {unread: true}});
			console.log("Messages marked as read.");
		}

	}

})