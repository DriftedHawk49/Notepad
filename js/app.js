
class notepad {
	constructor(){
		this.noteData = "";
	}
}
// localStorage.clear();
var viewmodel = function(){
	var self = this;
	if(!localStorage.notepad){
		self.notepadArray = ko.observableArray();
	} else {
		self.notepadArray = ko.observableArray(JSON.parse(localStorage.getItem("notepad")));
	}

	if(localStorage.notepad!="[]"){
		document.getElementsByClassName("placeholder")[0].style.display = 'none';
	}

	setInterval(function(){
			localStorage.setItem("notepad", JSON.stringify(self.notepadArray()));
		 },1000);

	self.deleteNote = function(note){
		self.notepadArray.remove(note);
		console.log(self.notepadArray());
		if(self.notepadArray().length==0){
			document.getElementsByClassName("placeholder")[0].style.display = 'block';
		}
	}

	self.addNote = function(){
		document.getElementsByClassName("placeholder")[0].style.display = 'none';
		var note = new notepad();
		self.notepadArray.push(note);
	}
};
var currentVM = new viewmodel();
ko.applyBindings(currentVM);
