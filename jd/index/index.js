$(document).ready(function(){
	window.load(function (){
var thisURL=document.URL;
var getval=thisURL.split("?")[1];
var showval=getval.split("=")[1];
function showvalf(){
	alert(showval);
	document.getElementById("#val").value=showval;
}
	});

});