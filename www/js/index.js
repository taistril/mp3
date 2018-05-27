document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

function playMP3() {
    // var mp3URL = getMediaURL("sounds/button-1.mp3");

        alert('PlayMP3');
        
        
console.log("playAudio():Audio Success");



        alert('PlayMP3-B');
        
        
    //  var media = new Media("http://cbpsyorks.co.uk/mp3/A1.mp3",       
    var media = new Media("http://cbpsyorks.co.uk/mp3/A1.mp3", 
    
            // success callback
            function() {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function(err) {
                console.log("playAudio():Audio Error: "+err);
    }
    
    
    
    
    
    
//    mediaOK, mediaError);
    

                
    media.play();
    

}

// function getMediaURL(s) {
//     if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
//     return s;
// }


function mediaOK(e) {
    alert('Media OK');
    alert(JSON.stringify(e));
}


function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}

// console.log(JSON.parse(JSON.stringify(obj)));