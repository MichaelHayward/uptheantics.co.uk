$(document).ready(function(){
	var e = "uptheanticsgroup";
	var t = "gmail";
	var n = ".com";
	var r = "mailto:" + e + '@' + t + n;
	var w = e + '@' + t + n;
	$(".contactEmail").attr("href", r).html(w);
	return;
});