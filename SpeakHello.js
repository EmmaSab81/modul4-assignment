(function (window){
		
	var speakWord = "Hello ";
	var HelloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

 window.HelloSpeaker = HelloSpeaker ;
 
})(window);


