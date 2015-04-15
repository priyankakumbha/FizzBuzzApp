$(document).ready(function(){
$( "#addNumbers" ).keypress(function(e) {
	if (e.keyCode == 13) {
		var itemvalueString = $("#addNumbers" ).val();
		var itemvalue= + itemvalueString;
      $(".resultArea" ).empty();
      $("#addNumbers").val('');

		if (isNaN(itemvalue)) {
		$( ".resultArea" ).append("please enter a valid number");
		} else if (itemvalue>100) {
      $( ".resultArea" ).append("please enter a number between 1 to 100");
      }else {
      console.log(itemvalue);
      var resultstring= generateFizzBuzz(itemvalue) 
       console.log(resultstring);
      $( ".resultArea" ).append( $(resultstring) );
      }
   }
});
});
function generateFizzBuzz(itemvalue) {
   var resultstring='<p>' ;

   for (var i = 1; i <=itemvalue; i++) {
   
   if(i%3==0 && i%5==0) {
     
   resultstring=resultstring+"<label id='fizbuzz'> fizzbuzz </label> ";
   }else if(i%3==0) {
      
   resultstring=resultstring+"<label> fizz </label>";
   }else if(i%5==0) {
      
   resultstring=resultstring+"<label> buzz </label> ";
   }else { 
   resultstring=resultstring+ "<label>"+i +"</label>";

   }
}
resultstring= resultstring +'</p>';
return resultstring;
}