var element = document.getElementById("face");
var lastScrollTop = 0;
if (element) {
  console.log("works");
}
console.log(element, "element");

window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      console.log("dowm", st);
      element.classList.remove("fa-smile-o");
      element.classList.add("fa-frown-o");
      // downscroll code
    } else {
      console.log("up", st);
      element.classList.remove("fa-frown-o");
      element.classList.add("fa-smile-o");
      // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
