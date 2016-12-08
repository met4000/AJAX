function Communication(){}
var AJAX = new Communication();
//data is optional
AJAX.prototype.get = function (target, set, data) {
	if (target === undefined) { target = "index.php"; }
	if (set === undefined) { set = false; }
	if (data === undefined) { data = ""; }
	var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	if (!!set) {
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200)
					eval(set + "= this.responseText");
				else
					console.error("AJAX error:\nError " + this.status + ": " + this.statusText + "\nMode: Async\nReceive Target: " + set + "\nRT Value: " + eval(set) + "\nTarget: " + target + "\nData: " + data + "\n\nPlease send this error to the developers if this page.");
			}
		};
	}
	xhttp.open("GET", "ajax_info.txt", !!set);
	xhttp.send();
	if (!set) { return this.responseText; }
}
AJAX.prototype.post = function (target, set, data) {
	
}
