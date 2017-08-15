$(document).ready(function(){
  $("#wordForm").submit(function(event){
    var userSentence = $("#sentenceInput").val();
    var codeSentence = [];
    for(var i = 0; i < userSentence.length; i++){
      var currentChar = userSentence.charAt(i);
      if(currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u"){
        codeSentence.push("-");
      }else {
        codeSentence.push(userSentence.charAt(i));
      }
    };
    newSentence = codeSentence.join("");
    $("#output").text(newSentence);
    event.preventDefault();
  });
});
