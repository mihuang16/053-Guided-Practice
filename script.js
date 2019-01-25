$("#replyYes").click(function() {
    $("#homers-reply").text("Nom");
    $("body").css("background" , "lightgreen");
    $("body").css("color" , "green");
    //Add a reply from Homer. Look for the div with #homers-reply.
  
  
    //Use this click handler to add changes to the CSS
    
    
});

$("#replyNo").click(function() {
    $("#homers-reply").text("Am I too fat?");
    $("body").css("background" , "lightcoral");
    $("body").css("color" , "brown");
});