/*global $*/
 $(document).ready(function(){
    function complete() {
     alert ("Don't use alerts like this. It's amature.")
    } 
     $("section > h2").on("click", function(){
      $(this).animate({"width": "500px", "height" : "100px"}, 1000, "linear", complete);
     
          
 });
     
     
 });
     
     


