/*
 ------------------------ 
|      Windows 96 +      |
|   Created by Terminal  |
|  Hav u considr upgrad  |
|   to w97?!?!?11!??     |
 ------------------------

----------

Welcome to Windows 96 Plus!

Please enjoy.
*/

// -- Config -- \\

var dev = true;
var rescuemode = false;
var build = 'b8';
var updaturl = 'https://raw.githubusercontent.com/TermOfficial/plus/main/b.txt';
var addon = '';

// Might make it so it runs off of the raw URL instead of the file.

// -- End Config -- \\
if(rescuemode == true){
	console.warn("W96 Plus is currently running in recovery mode.")
	console.warn("since we don't actually have a real recovery mode i'm just going to exit the script now.")
} else {
console.log("Windows 96 PLUS! is now starting up...")
console.log("We are running build:", build)
if(dev == true){
console.warn("W96+ is running in dev mode. To disable this, please disable it in config.")
console.warn("bypassing self check...")
} else {
    /*
    broken
function reqListener () {
  if (this.status==200)
{
      if(this.responseText !== build) {
          console.log("W96+ is up-to-date.")
      } else {
        console.warn("Your build of W96+ (plus.js) is out of date. Please update it.")
        console.log("determined by", build, "compared to", this.responseText)
      }
}
  else
      throw new Error(this.statusText);

}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", updaturl);
oReq.send();
*/
    // -- Self Check -- \\
const fs = w96.FS;

console.log("Starting self-check...")


const PATH = 'C:/system/boot';
const EXEC = 'C:/system/boot/plus.js';
// if the file doesn't exist, or the path, it will not boot, because any programs that depend on this will not be able to detect it.
// modifications are fine, just don't modify the name.
if(fs.exists(PATH) && fs.exists(EXEC)){
    console.log("Self-check pass.")
    console.log("slfchk b2 exited with normal 0x1000000")
} else {
    console.error("Self-check fail. Could not find boot dir or JS scipt.")
    console.log("Please reboot into recovery mode and move this script into C:/system/boot and name it plus.js, or enable dev mode in config.")
    throw new Error("slfchk b2 exited with fatal 0x0000001");
}
// -- End Self Check -- \\

// startup
}
}
