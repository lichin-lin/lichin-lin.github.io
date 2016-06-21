// $(window).on("scroll", function(){
//   //console.log("Scrolled :P");
// });
// document.getElementById("enable").onclick = function() {
//   enableScroll();
//   document.getElementById("status").innerHTML = "enabled";
//     document.getElementById("status").className = "enabled";
// };
//
// document.getElementById("disable").onclick = function() {
//   disableScroll();
//   document.getElementById("status").innerHTML = "disabled";
//   document.getElementById("status").className = "disabled";
// };
var docElem = window.document.documentElement;
function scrollY() { return window.pageYOffset || docElem.scrollTop; }
// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};
//
// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }
//
// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }
//
// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
//   counter++;
//   console.log(counter);
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }
function myFunc() {
  $('.OldNews_container').css({
    "-webkit-transform":"translate3d(0," + -scrollY() + "px,0)",
    "-ms-transform":"translate3d(0," + -scrollY() + "px,0)",
    "transform":"translate3d(0," + -scrollY() + "px,0)"
 });
}
var objTable = document.getElementById("test");

document.addEventListener("scroll", function () {
    myFunc();
}, false);
