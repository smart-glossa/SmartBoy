function alphabets(){
	var strVar="";
	strVar += "<div id=\"a\">";
	strVar += "<h1>Alphabet Letters<\/h1>";
	strVar += "<p>A (a)<\/p>";
	strVar += "<div id=\"imga><img src=\"/images\/apple1.jpg\" id=\"imgapp\" class=\"\">";
	strVar += "<button id=\"na\">next<\/button>";
	strVar += "<button id=\"ba\">back<\/button>";
	strVar += "<\/div>";

	$(".second")[0].innerHTML = strVar;

	
}