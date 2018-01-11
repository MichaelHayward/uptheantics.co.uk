$(document).ready(function(){
	var e = "contact";
	var t = "uptheantics";
	var n = ".co.uk";
	var r = "mailto:" + e + '@' + t + n;
	var w = e + '@' + t + n;
	$(".contactEmail").attr("href", r).html(w);
	return;
});
