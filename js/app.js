$(document).ready(function(){
$( "#addNumbers" ).keypress(function(e) {
	if (e.keyCode == 13) {
		var itemvalueString = $("#addNumbers" ).val();
		var itemvalue= + itemvalueString;
       $(".message").empty();
      $(".resultArea" ).empty();
      $("#addNumbers").val('');

		if (isNaN(itemvalue)) {
		$( ".resultArea" ).append("please enter a valid number");
		} else if (itemvalue>100) {
      $( ".message" ).append(itemvalue+ " not between 1 to 100");
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
   var resultstring="<p> <table class='resultTable'> <tr>" ;

   for (var i = 1; i <=itemvalue; i++) {
   
   if(i%3==0 && i%5==0) {
     
   resultstring=resultstring+" <td> <label id='fizbuzz'> fizzbuzz </label> </td>";
   }else if(i%3==0) {
      
   resultstring=resultstring+"<td> <label> fizz </label> </td>";
   }else if(i%5==0) {
      
   resultstring=resultstring+"<td> <label> buzz </label> </td>";
   }else { 
   resultstring=resultstring+ "<td> <label>"+" " + i +"</label> </td>";

   }if(i%10==0){
      resultstring=resultstring+"</tr> <tr>";
   }

}
resultstring= resultstring +' </tr></table> </p>';
return resultstring;
}