/**
 * videolad.js 
 * 
 * Script to load the background of the page. 
 * 
 * Argument determine the rate 
 */

/*****************************************************/

// Obtain background video id in the DOM 
var v = document.getElementById("myVideo"); 

// alter playback rate
function setVideoRate(rate=0.3) {  
    v.playbackRate = rate; 
} 

// set rate by default
setTimeout(function(){ 
    setVideoRate(rate=0.5) 
}, 4000);