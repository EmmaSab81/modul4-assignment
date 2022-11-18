(function () {
var names = ["Yaakov","Emma", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0 ; i < names.length ; i++) {


    var fLetter = names[i].charAt(0).toLowerCase() ;
  
  if (fLetter === "j") {
     byeSpeaker(names[i]);
  } else {
    HelloSpeaker(names[i]);
  }
}


})();
