Template.searchContacts.events({
  'keyup input.searchQuery': function (event) {
    Session.set("searchQuery", event.currentTarget.value);
  },
    
  'click .selectPersonButton': function(event){
    event.preventDefault();
    var buttonValue = document.getElementById("selectPersonButton").innerHTML;
    //end part replaces the spaces in the name
		document.getElementById("searchQuery").value = buttonValue.replace(/\s+/g, '');

    document.getElementById("selectPersonButton").innerHTML = "";
  }

});