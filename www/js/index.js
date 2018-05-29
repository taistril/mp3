document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

var media = null;

function playMP3() {
   // var mp3URL = getMediaURL("sounds/button-1.mp3");
   
   
    alert('PlayMP3-A');
   
     var mp3URL = "/android_asset/www/sounds/button-1.mp3";
     
    alert('PlayMP3-B');
     
     media = new Media(mp3URL, null, mediaError);
   
    alert('PlayMP3-C');
   
    media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}
