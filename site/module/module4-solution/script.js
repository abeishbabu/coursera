var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (prop in names)
{

  var firstLetter = names[prop].charAt(0);
  if (firstLetter.toLowerCase() == "j"){
    byeSpeaker.speak(names[prop]);
  } else {
    helloSpeaker.speak(names[prop]);
  }
}
