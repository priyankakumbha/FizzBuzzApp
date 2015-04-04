$(document).ready(function(){
$( "#addNumbers" ).keypress(function(e) {
	if (e.keyCode == 13) {
		var itemvalue = $("#addNumbers" ).val();
		console.log(itemvalue);
		var resultstring='<p>' ;

	   for (var i = 1; i <=itemvalue; i++) {
   
   if(i%3==0 && i%5==0){
   	console.log("fizzbuzz"
   		+i);
   	resultstring=resultstring+" fizzbuzz  ";
   }else if(i%3==0){
   	console.log("fizz"
   		+i);
   		resultstring=resultstring+" fizz  ";
   }else if(i%5==0){
   	console.log("buzz"
   		+i);
   		resultstring=resultstring+" buzz  ";
   }else{ console.log(i);
   		resultstring=resultstring+ "  "+i;

   }
   

}
resultstring= resultstring +'</p>';
   console.log(resultstring);
 $( ".resultArea" ).append( $(resultstring) );
	}

});

});