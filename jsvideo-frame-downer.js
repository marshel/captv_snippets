// this file is to find a frame that is over a youtube video on captivate html5 export.
// this frame prevents user interaction with player controls.
// we need to set its CSS to show bellow the video using z-index.
// first, on the slide you have the video, add to execute javascript on enter and add all this script.
// also ***important*** after exporting the scorm package, you need to decompress it and change
// the assets/js/CPM.js file, search and alter both "fs:0" to "fs:1" and "controls:0" to "controls:1"
// the compress it again to zip file format and upload to your LMS.
// By Marcel Aniceto - linkedin.com/in/marcelaniceto - 20200128

// searching for the youtube video by its captivates layer/object name tha starts/contains "SlideVideo_"
var myVideo = document.querySelectorAll('div[id*="SlideVideo_"].cp-frameset');

//you can show what you got on the console if you want
//console.log(myVideo);

//iterate on everything sent back by the search and alter the z-index to a negative value to stay bellow the video frame.
for (i = 0; i < myVideo.length; i++)
{
    myVideo[i].style.zIndex = "-100";
    
};
