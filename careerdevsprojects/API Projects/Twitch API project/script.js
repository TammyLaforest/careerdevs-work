/*global $*/

$(document).ready(function() {
  
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404"];

    // Call the Twitch API and access the data to determine if Free Code Camp is online or offline
    $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp").done(function(data) {
        
        // If FCC is offline, display as such to the screen
        if (data.stream === null) {
            $("#fccStatus").html(" is currently offline!");
        }
        // If FCC is online, display such to the screen
        else {
            $("#fccStatus").html(" is curently online!");
        }
    });


    // Use this for loop to cycle through the given data from the API and display the info
    for (var i = 0; i < users.length; i++) {
        //create new  <table class="table">
            // <tr>
            //     <th id="userLogoLabel">Logo:
            //         </th>
            //     <th id="userNameLabel">User:
            //         </th>
            //     <th id="userStatusLabel">Status:
            //         </th>
            //       <th id="currentGameLabel">Currently Playing:
            //         </th>

        // Request an AJAX request
        $.ajax({
            type: "GET",
            // Use the array users to check the info of each streamer
            url: "https://wind-bow.glitch.me/twitch-api/channels/" + users[i],
            
            // If successful, check the online status of each user
            success: function(dataIndex) {
                
                // Call the API again, this time accessing data about the user
                $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + dataIndex.name).done(function(data2) {
                    console.log(data2);
                    var name = data2._links.self.slice(37);
                    
            
                    if (data2.stream === null) {
                        //   $("#userLogo").removeClass("hide");
                        // $("#userLogoLabel").removeClass("hide");
                        //  $("#userLogo").append('<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-70x70.jpeg" /><br>');
                        //  $("#userLogo").attr("src", "https://static-cdn.jtvnw.net/jtv_user_pictures/" + name + "2-profile_image-9021dccf9399929e-70x70.jpeg");
                        $("#userName").append('<p class="offline"><a class ="offline" target = "_blank" href = "https://www.twitch.tv/' + name + '">'+ name +'</a></p>');
                        $("#userStatus").append('<p class="offline"><a class="offline" style="color: red; text-decoration: none" target = "_blank" href = "https://www.twitch.tv/' + name +'">' + '(x) offline</p>');
                        $("#currentGame").append("<p class='offline'>N/A</p>");
                       
                    }
                    else {
                       $("#userName").append('<p class="online"><a class="online" target = "_blank" href = "https://www.twitch.tv/' + name + '">'+ name +'</a></p>');
                       $("#userStatus").append('<p class-"online" ><a class="online" style="color: green; text-decoration: none" target = "_blank" href = "https://www.twitch.tv/' + name +'">' +"(o) online</p>");
                       $("#currentGame").append('<p class="online">' + data2.stream.game + '</p>');
                    }
                });
            },
           

        });
    }
     var showOnline = document.getElementById("showOnline");
   var showOffline = document.getElementById("showOffline");
 var showAll = document.getElementById("showAll");
var online = document.getElementsByClassName("online");
    var offline = document.getElementsByClassName("offline");
    
    showOnline.onclick = function showOnline(){
  
          $('.offline').css('display', 'none');
        $('.online').css('display', 'block');
         
    };
    
    showOffline.onclick =  function showOffline(){
         
        $('.offline').css('display', 'block');
        $('.online').css('display', 'none');
    
    }
    showAll.onclick =  function showAll(){
   var online = document.getElementsByClassName("online");
   var offline = document.getElementsByClassName("offline");

    $('.offline').css('display', 'block');
        $('.online').css('display', 'block');
         
     }
    
});