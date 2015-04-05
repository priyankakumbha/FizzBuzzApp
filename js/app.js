$(document).ready(function(){
$( "#addNumbers" ).keypress(function(e) {
	if (e.keyCode == 13) {
		var itemvalueString = $("#addNumbers" ).val();
		var itemvalue= + itemvalueString;
      $(".resultArea" ).empty();
      $("#addNumbers").val('');
		if (isNaN(itemvalue)){
			
        
         $( ".resultArea" ).append("please enter a valid number");
		}else{


		console.log(itemvalue);
		var resultstring= generateFizzBuzz(itemvalue)

	 

   console.log(resultstring);
 $( ".resultArea" ).append( $(resultstring) );
 
	}
}

});

});
function generateFizzBuzz(itemvalue){
   var resultstring='<p>' ;

   for (var i = 1; i <=itemvalue; i++) {
   
   if(i%3==0 && i%5==0){
     
      resultstring=resultstring+" fizzbuzz  ";
   }else if(i%3==0){
      
         resultstring=resultstring+" fizz  ";
   }else if(i%5==0){
      
         resultstring=resultstring+" buzz  ";
   }else{ 
         resultstring=resultstring+ "  "+i;

   }
   

}
resultstring= resultstring +'</p>';
return resultstring;
}