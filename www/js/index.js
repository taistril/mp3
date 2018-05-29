// src="https://jsconsole.com/js/remote.js?aaaaa";

document.addEventListener('deviceready', onDeviceReady, false);



function onDeviceReady() {

//        src="http://jsconsole.com/js/remote.js?cdaa1f08-24a1-4507-8ff8-d7e1f3d7c7d3";

	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

function playMP3() {


    // var mp3URL = getMediaURL("sounds/button-1.mp3");

        alert('PlayMP3');
        
    //     var roy = "aaaaaaaaaaaaaaaa";
        
    //     document.write(roy);

       var media = new Media(/android_asset/www/sounds/button-1.mp3");

    // var media = new Media("http://cbpsyorks.co.uk/mp3/A1.mp3");
   
   
   // document.write(media);
    

        alert('PlayMP3-B');
        
        
     //    var royb = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
        
     //    document.write(royb);

    

    
    

         
        
  /*      
    //  var media = new Media("http://cbpsyorks.co.uk/mp3/A1.mp3", 
    
     //   var media = new Media(/android_asset/www/sounds/button-1.mp3",
    
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
    
  */  

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