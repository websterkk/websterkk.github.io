// SET TITLE IMAGE TO SCROLL FOR IPHONE
function checkOS() {
    var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    var condClass = document.querySelector("#indexImgText");
    if (isiOS) {
        document.getElementById("titleImg").style.backgroundAttachment = "scroll";
    } else {
        var els = [].slice.apply(document.getElementsByClassName("dd"));
        for (var i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replace("dd", "ddHidden");
        }
    }
}


// Open Modal Window
function myFunction(imgName, hv, imgCap) {
    document.getElementById("modalImg").style.backgroundImage = "url(" + imgName + ")";
    document.getElementById("modalDescription").innerHTML = imgCap;
    document.getElementById("modalContainer").style.display = "block";
}

/*
// SET GOOGLE MAPS
var myCenter = new google.maps.LatLng(41.878114, -87.629798);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

 STUFF TO REMOVE FROM INDEX - OR RENAME:
indexImgLinkContainer
indexImgPadding
indexHoverText
indexFont
indexImgText*/
