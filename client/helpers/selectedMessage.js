//this template is to have the checkbox boxes actually save to the server that they are checked rather than jus the interface
//it is a helper for the selectedMessage template
Template.selectedMessage.helpers({
	
	'selected':function(){

		var isUnread = this.unread;
		
		if(isUnread){
			return "selected";
		} else {
			return "";
		}
		
	}
})