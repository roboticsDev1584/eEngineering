window.onload = function() {
var showCodeSwitch = false;

var section1 = document.getElementById("section1");
var sectionBody1 = document.getElementById("sectionbody1");
var section2 = document.getElementById("section2");
var sectionBody2 = document.getElementById("sectionbody2");
var section3 = document.getElementById("section3");
var sectionBody3 = document.getElementById("sectionbody3");
var section4 = document.getElementById("section4");
var sectionBody4 = document.getElementById("sectionbody4");
var section5 = document.getElementById("section5");
var sectionBody5 = document.getElementById("sectionbody5");
var section6 = document.getElementById("section6");
var sectionBody6 = document.getElementById("sectionbody6");
var header = document.getElementById("header");
var body = document.getElementById("body");
var createdBy = document.getElementById("createdBy");
//var contact = document.getElementById("contact");

//arrows
var uArrow1 = document.getElementById("uArrow1");
var dArrow1 = document.getElementById("dArrow1");
var uArrow2 = document.getElementById("uArrow2");
var dArrow2 = document.getElementById("dArrow2");
var uArrow3 = document.getElementById("uArrow3");
var dArrow3 = document.getElementById("dArrow3");
var uArrow4 = document.getElementById("uArrow4");
var dArrow4 = document.getElementById("dArrow4");
var uArrow5 = document.getElementById("uArrow5");
var dArrow5 = document.getElementById("dArrow5");
var uArrow6 = document.getElementById("uArrow6");
var dArrow6 = document.getElementById("dArrow6");

//bios
var Avi = document.getElementById("avi");
var AviBio = document.getElementById("aviBio");
var Aryan = document.getElementById("aryan");
var AryanBio = document.getElementById("aryanBio");
var Matthew = document.getElementById("matthew");
var MatthewBio = document.getElementById("matthewBio");
var Du = document.getElementById("du");
var DuBio = document.getElementById("duBio");
var Laina = document.getElementById("laina");
var LainaBio = document.getElementById("lainaBio");

//show code ids
var showCode = document.getElementById("showCode");
var showCode2 = document.getElementById("showCode2");
var hNavbarCodeBubble = document.getElementById("hNavbarCodeBubble");
var navbarCodeBubble = document.getElementById("navbarCodeBubble");
var section1CodeBubble = document.getElementById("section1CodeBubble");
var section1BodyCodeBubble = document.getElementById("section1BodyCodeBubble");
var section2CodeBubble = document.getElementById("section2CodeBubble");
var section2BodyCodeBubble = document.getElementById("section2BodyCodeBubble")
var section3CodeBubble = document.getElementById("section3CodeBubble");
var section3BodyCodeBubble = document.getElementById("section3BodyCodeBubble")
var section4CodeBubble = document.getElementById("section4CodeBubble");
var section4BodyCodeBubble = document.getElementById("section4BodyCodeBubble")
var section5CodeBubble = document.getElementById("section5CodeBubble");
var section5BodyCodeBubble = document.getElementById("section5BodyCodeBubble")
var section6CodeBubble = document.getElementById("section6CodeBubble");
var section6BodyCodeBubble = document.getElementById("section6BodyCodeBubble")
var createdByCodeBubble = document.getElementById("createdByCodeBubble");
//var contactCodeBubble = document.getElementById("contactCodeBubble")

//bio click functions
Avi.onclick = function() {
  if (Aryan.style.display === "none"){
  Aryan.style.display = "block";
  Matthew.style.display = "block";
  Du.style.display = "block";
  Laina.style.display = "block";
  AviBio.style.display = "none";
  }
  else {
  AviBio.style.display = "block";
  Aryan.style.display = "none";
  Matthew.style.display = "none";
  Du.style.display = "none";
  Laina.style.display = "none";
  }
}

Aryan.onclick = function() {
  if (Avi.style.display === "none"){
  Avi.style.display = "block";
  Matthew.style.display = "block";
  Du.style.display = "block";
  Laina.style.display = "block";
  AryanBio.style.display = "none";
  }
  else {
  AryanBio.style.display = "block";
  Avi.style.display = "none";
  Matthew.style.display = "none";
  Du.style.display = "none";
  Laina.style.display = "none";
  }
}

Matthew.onclick = function() {
  if (Aryan.style.display === "none"){
  Aryan.style.display = "block";
  Avi.style.display = "block";
  Du.style.display = "block";
  Laina.style.display = "block";
  MatthewBio.style.display = "none";
  }
  else {
  MatthewBio.style.display = "block";
  Aryan.style.display = "none";
  Avi.style.display = "none";
  Du.style.display = "none";
  Laina.style.display = "none";
  }
}

Du.onclick = function() {
  if (Matthew.style.display === "none"){
  Aryan.style.display = "block";
  Matthew.style.display = "block";
  Avi.style.display = "block";
  Laina.style.display = "block";
  DuBio.style.display = "none";
  }
  else {
  DuBio.style.display = "block";
  Aryan.style.display = "none";
  Matthew.style.display = "none";
  Avi.style.display = "none";
  Laina.style.display = "none";
  }
}

Laina.onclick = function() {
  if (Du.style.display === "none"){
  Aryan.style.display = "block";
  Matthew.style.display = "block";
  Du.style.display = "block";
  Avi.style.display = "block";
  LainaBio.style.display = "none";
  }
  else {
  LainaBio.style.display = "block";
  Aryan.style.display = "none";
  Matthew.style.display = "none";
  Du.style.display = "none";
  Avi.style.display = "none";
  }
}

//show code functions
showCode.onclick = function() {
    showCode.style.display = "none";
    showCode2.style.display = "block";
    showCodeSwitch = true;
    //alert('Show code: ' + showCodeSwitch);
    
}
showCode2.onclick = function() {
    showCode2.style.display = "none";
    showCode.style.display = "block";
    showCodeSwitch = false;
    //alert('Show code: ' + showCodeSwitch);
}
navbar.onclick = function() {
  if (showCodeSwitch) {
      if (hNavbarCodeBubble.style.display === "none"){
        hNavbarCodeBubble.style.display = "block";
      }
      else {
        hNavbarCodeBubble.style.display = "none";
      }
  }
}
header.onclick = function() {
  if (showCodeSwitch) {
      if (navbarCodeBubble.style.display === "none"){
        navbarCodeBubble.style.display = "block";
      }
      else {
        navbarCodeBubble.style.display = "none";
      }
  }
}
sectionBody1.onclick = function() {
  if (showCodeSwitch) {
      if (section1BodyCodeBubble.style.display === "none"){
        section1BodyCodeBubble.style.display = "block";
      }
      else {
        section1BodyCodeBubble.style.display = "none";
      }
  }
}
sectionBody2.onclick = function() {
  if (showCodeSwitch) {
      if (section2BodyCodeBubble.style.display === "none"){
        section2BodyCodeBubble.style.display = "block";
      }
      else {
        section2BodyCodeBubble.style.display = "none";
      }
  }
}
sectionBody3.onclick = function() {
  if (showCodeSwitch) {
      if (section3BodyCodeBubble.style.display === "none"){
        section3BodyCodeBubble.style.display = "block";
      }
      else {
        section3BodyCodeBubble.style.display = "none";
      }
  }
}
sectionBody4.onclick = function() {
  if (showCodeSwitch) {
      if (section4BodyCodeBubble.style.display === "none"){
        section4BodyCodeBubble.style.display = "block";
      }
      else {
        section4BodyCodeBubble.style.display = "none";
      }
  }
}
sectionBody5.onclick = function() {
  if (showCodeSwitch) {
      if (section5BodyCodeBubble.style.display === "none"){
        section5BodyCodeBubble.style.display = "block";
      }
      else {
        section5BodyCodeBubble.style.display = "none";
      }
  }
}
sectionBody6.onclick = function() {
  if (showCodeSwitch) {
      if (section6BodyCodeBubble.style.display === "none"){
        section6BodyCodeBubble.style.display = "block";
      }
      else {
        section6BodyCodeBubble.style.display = "none";
      }
  }
}
createdBy.onclick = function() {
  if (showCodeSwitch) {
      if (createdByCodeBubble.style.display === "none"){
        createdByCodeBubble.style.display = "block";
      }
      else {
        createdByCodeBubble.style.display = "none";
      }
  }
}
/*contact.onclick = function() {
  if (showCodeSwitch) {
      if (contactCodeBubble.style.display === "none"){
        contactCodeBubble.style.display = "block";
      }
      else {
        contactCodeBubble.style.display = "none";
      }
  }
}*/


//rest of the functions
section1.onclick = function() {
  if (showCodeSwitch) {
      if (section1CodeBubble.style.display === "none"){
        section1CodeBubble.style.display = "block";
      }
      else {
        section1CodeBubble.style.display = "none";
      }
  }
  //sectionBody1.style.transition = "display 2s";
  if (sectionBody1.style.display === "none"){
  sectionBody1.style.display = "block";
  uArrow1.style.display = "none";
  dArrow1.style.display = "inline";
  }
  else {
  sectionBody1.style.display = "none";
  uArrow1.style.display = "inline";
  dArrow1.style.display = "none";
  }
}
section2.onclick = function() {
  if (showCodeSwitch) {
      if (section2CodeBubble.style.display === "none"){
        section2CodeBubble.style.display = "block";
      }
      else {
        section2CodeBubble.style.display = "none";
      }
  }
  //sectionBody2.style.transition = "display 2s";
  if (sectionBody2.style.display === "none"){
  sectionBody2.style.display = "block";
  uArrow2.style.display = "none";
  dArrow2.style.display = "inline";
  }
  else {
  sectionBody2.style.display = "none";
  uArrow2.style.display = "inline";
  dArrow2.style.display = "none";
  }
}
section3.onclick = function() {
  if (showCodeSwitch) {
      if (section3CodeBubble.style.display === "none"){
        section3CodeBubble.style.display = "block";
      }
      else {
        section3CodeBubble.style.display = "none";
      }
  }
  //sectionBody3.style.transition = "display 2s";
  if (sectionBody3.style.display === "none"){
  sectionBody3.style.display = "block";
  uArrow3.style.display = "none";
  dArrow3.style.display = "inline";
  }
  else {
  sectionBody3.style.display = "none";
  uArrow3.style.display = "inline";
  dArrow3.style.display = "none";
  }
}
section4.onclick = function() {
  if (showCodeSwitch) {
      if (section4CodeBubble.style.display === "none"){
        section4CodeBubble.style.display = "block";
      }
      else {
        section4CodeBubble.style.display = "none";
      }
  }
  //sectionBody4.style.transition = "display 2s";
  if (sectionBody4.style.display === "none"){
  sectionBody4.style.display = "block";
  uArrow4.style.display = "none";
  dArrow4.style.display = "inline";
  }
  else {
  sectionBody4.style.display = "none";
  uArrow4.style.display = "inline";
  dArrow4.style.display = "none";
  }
}
section5.onclick = function() {
  if (showCodeSwitch) {
      if (section5CodeBubble.style.display === "none"){
        section5CodeBubble.style.display = "block";
      }
      else {
        section5CodeBubble.style.display = "none";
      }
  }
  //sectionBody5.style.transition = "display 2s";
  if (sectionBody5.style.display === "none"){
  sectionBody5.style.display = "block";
  uArrow5.style.display = "none";
  dArrow5.style.display = "inline";
  }
  else {
  sectionBody5.style.display = "none";
  uArrow5.style.display = "inline";
  dArrow5.style.display = "none";
  }
}
section6.onclick = function() {
  if (showCodeSwitch) {
      if (section6CodeBubble.style.display === "none"){
        section6CodeBubble.style.display = "block";
      }
      else {
        section6CodeBubble.style.display = "none";
      }
  }
  //sectionBody6.style.transition = "display 2s";
  if (sectionBody6.style.display === "none"){
  sectionBody6.style.display = "block";
  uArrow6.style.display = "none";
  dArrow6.style.display = "inline";
  }
  else {
  sectionBody6.style.display = "none";
  uArrow6.style.display = "inline";
  dArrow6.style.display = "none";
  }
}
window.onscroll = function(){
    header.style.padding = "0px";
}

}