// Load video
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function loadVideo() {
	var scary = "8rnvHHzSTzE";
	var tbt = "7uKOnInJXhY";
	var lucy = "Cv_Y35jnTwA";
	var mtb = "PgdXazzkQJc";
	//var a = getUrlVars()['x'];
	var c = getUrlVars()['y'];
	var b = '<iframe id="vidPlayer"src="https://www.youtube.com/embed/';
	var d = '?rel=0&amp;showinfo=0"frameborder="0" allow="autoplay; encrypted-media"allowfullscreen></iframe>';
	//document.getElementById("vidTitle").innerHTML = a.replace('+'/g,' ');
	document.getElementById("vidContainer").innerHTML = b + c + d;
}

// Load video title
