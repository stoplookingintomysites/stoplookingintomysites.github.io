function obj(id){
	return document.getElementById(id);
}
obj("causes").onclick = function() {
	location.href = "causes.html";
}

obj("location").onclick = function() {
	location.href = "location.html";
}

obj("protection").onclick = function() {
	location.href = "protection.html";
}

obj("survival").onclick = function() {
	location.href = "survival.html";
}

obj("riskesc").onclick = function() {
	location.href = "riskesc.html";
}

obj("title").onclick = function() {
	location.href = "index.html";
}

var h = window.innerHeight;
obj("title").style.fontSize = 0.05296610169*h + 'px';
obj("stitle").style.fontSize = 0.03707627119*h + 'px';
if(obj("text")) {
	obj("text").style.fontSize = 0.03707627119*h + 'px';
}
for(var i = 0; i < document.getElementsByClassName("button").length; i ++) {
	document.getElementsByClassName("button")[i].style.fontSize = 0.04237288136*h + 'px';
}

window.onresize = function() {
	h = window.innerHeight;
	obj("title").style.fontSize = 0.05296610169*h + 'px';
	obj("stitle").style.fontSize = 0.03707627119*h + 'px';
	if(obj("text")) {
		obj("text").style.fontSize = 0.03707627119*h + 'px';
	}
	for(var i = 0; i < document.getElementsByClassName("button").length; i ++) {
		document.getElementsByClassName("button")[i].style.fontSize = 0.04237288136*h + 'px';
	}
}