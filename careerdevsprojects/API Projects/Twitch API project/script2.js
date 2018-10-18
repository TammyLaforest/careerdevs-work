/* global $ */
    document.getElementById("streaming").appendChild("div").addClass("card").id = "card" + [i];
    document.getElementById('"card" + [i]').createElement('ul').id = "list" + [i];
    document.getElementById('"list" + [i]').createElement("li").innerHTML=user;
  document.getElementById('"list" + [i]').createElement("li").innerHTML=channel;
  document.getElementById('"list" + [i]').createElement("li").innerHTML=stream;
     
   }
   "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"

for (var i = 0; i < channels.length; i++)

  document.getElementById('testdiv2').innerHTML = apilist;

data.url, data.logo, data.status


 document.createElement("LI").id = (name[i]);
     alert('displaydata');
  
  str += '<li>'+ slide + '</li>';
  
  
    document.getElementById('name').innerHTML = data.display_name;
  document.getElementById('urllink').href = data.url;
  document["logo"].src = data.logo;
  document.getElementById("status").innerHTML = data.status;
  
  
}}}


apilist = [https://wind-bow.glitch.me/twitch-api/channels/ESL_SC2?callback=?,https://wind-bow.glitch.me/twitch-api/channels/OgamingSC2?callback=?,https://wind-bow.glitch.me/twitch-api/channels/cretetion?callback=?,https://wind-bow.glitch.me/twitch-api/channels/freecodecamp?callback=?,https://wind-bow.glitch.me/twitch-api/channels/storbeck?callback=?,https://wind-bow.glitch.me/twitch-api/channels/habathcx?callback=?,https://wind-bow.glitch.me/twitch-api/channels/RobotCaleb?callback=?,https://wind-bow.glitch.me/twitch-api/channels/noobs2ninjas?callback=?}]

var url = ("https://wind-bow.glitch.me/twitch-api/channels/" + channels[i] + "?callback=?");

fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  
 
var settings = {
  "async": true,
  "crossDomain": true,
  "url": ("https://wind-bow.glitch.me/twitch-api/channels/" + channels[i] + "/?callback=?"),
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "be7d45ca-bf92-4609-a11e-80cea37b639a"
  }
};

$.each( [ "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"], function( i, l ) {
$.ajax(settings).done(function (response) {
  {i = 0; i < channels.length; i++}
  console.log(response);
});


    
function viewData(data){
  document.getElementById("testdiv1").innerHTML = data.name;}



function ajax () {
        $.ajax({
            url: "https://api.twitch.tv/kraken/streams/" + twitchStreamers[i] + "?callback=?",
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function (data) {
                fetchData(data);
            },
            error: function () {
                console.log("unable to access json");
            }
        });
    }
