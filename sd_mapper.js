"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Juan Verduzco
   Date:   02.12.19
*/
/////////////// Date Settings //////////////////

// Changed date to  February 3, 2018, 03:15:28
var thisTime = new Date("February 3, 2018, 03:15:28");
var timeStr = thisTime.toLocaleString();
//changed the html using the inner Html method
document.getElementById("timeStamp").innerHTML = timeStr;

/////////////// Hour Setting ////////////////////
// Retrives the hour and month from the thisTime variables
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();


/////////////// Image Settings ///////////////
//Makes the image appear in the html 
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);