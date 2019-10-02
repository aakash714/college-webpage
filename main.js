function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)?/gi, function( m, key, value ) { 
		vars[key] = value;
	});
	return vars;
}
	
window.addEvent = function(e,ev,f,c){
	if(e.addEventListener){
		e.addEventListener(ev,f,c);
	}else if(e.attachEvent){
		var r = e.attachEvent('on'+ev,f);return r;
	}else{
		e['on'+ev] = f;
	}
};
	
function updateValue(){ 
	function formatVars(query){
		var result = decodeURIComponent(getUrlVars()[query]);
		result = result.split("+").join(" ");
		if (result == 'undefined'){
			document.getElementById(query).innerHTML = "NA";
		}else{
			document.getElementById(query).innerHTML = result;
		}
	}
	
	formatVars("firstname")
	formatVars("middlename")
	formatVars("lastname")
	formatVars("dateofbirth")
	formatVars("sex")
	formatVars("phone")
	formatVars("email")
	formatVars("address")
	formatVars("pincode")
	formatVars("standard")
	formatVars("percentage")
}
			
window.addEvent(window, "load", updateValue, false);
			
function printDiv(divName){
	var printContents = document.getElementById(divName).innerHTML;
	var orignalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = orignalContents;
	updateValue()
}

//block rahul
var m = decodeURIComponent(getUrlVars()["firstname"]).toLowerCase();
var n = decodeURIComponent(getUrlVars()["lastname"]).toLowerCase();
var o = decodeURIComponent(getUrlVars()["dateofbirth"]);
var p = decodeURIComponent(getUrlVars()["contact"]);

function myAlert(){
	if(m == 'rahul'||n == 'kongari'||o == '2002-02-24'||p =='9284215073'||p == '7387476031'){ 
		alert("Access Denied!! \nYou are not allowed to enter :D :D");
	}else{
		alert("Done!");
		window.location = "index.html"
	}
}