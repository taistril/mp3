document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

function playMP3() {
   // var mp3URL = getMediaURL("sounds/button-1.mp3");
   
   
    alert('PlayMP3');
   
     var media = new Media(/android_asset/button-1.mp3, null, mediaError);
   
    alert('PlayMP3-B');
   
    // media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}
