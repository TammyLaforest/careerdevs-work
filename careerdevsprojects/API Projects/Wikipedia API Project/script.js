/* global $ */
/* global result  */
$(document).ready(function() {
  
  var query = document.getElementById("query");
    // var searchQuery = query.replace(/\s+/g, ''); //takes out spaces!
  
  $('.form').submit(function() {
    $('#results').html(" ");
    searchResultsFunc();
    return false;
  });

  $('#search').click(function() {
    $('#results').html(" ");
    searchResultsFunc();
  });

  function searchResultsFunc() {
    var q = query.value;
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + q + "&callback=?";
    
 if (q.length < 1) {
      query.style.border = "1.5px solid red";
      query.placeholder = 'Please input text or use the random article button';
    }
    else if (q.length > 0) {
      query.style.border = "none";
      // document.getElementById("loading").innerHTML = "Loading...";
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'jsonp',
      success: function(result) {
        var data = result.query.pages;
        render(data);
      },
      error: function(err) {
        console.log(err);
        alert("It will never work. Nothing ever works. Just. Give. Up. ");
      }
    });
  } else {
        alert('How can this be?');
      }
}

  function render(data) {
 
    var pageurl = "http://en.wikipedia.org/?curid=";
    for (var i in data) {
      $('#results').append("<div style='border: 2px solid gainsboro; padding: 1.5em; margin-top: .5em;' id='resultdiv'><a target='_blank' href='" + pageurl + data[i].pageid + "'><h5 style='font-weight: bold;'>" + data[i].title + "</h5><p>" + data[i].extract + "</p></a></div>");
          }    
   
  }
});
