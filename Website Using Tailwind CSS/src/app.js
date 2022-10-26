let navlinksParent = [
  ...document.getElementsByClassName("nav-links")[0].children,
];

let navigate = (event) => {
  //   console.log(navlinksParent[3]);
  //   navlinksParent[3].className = "indicator-default"
  for (var i in ["1", "2"]) {
    navlinksParent[i].className = "navDefault";
  }
  for (var i in ["1", "2"]) {
    for (var j in ["1"]) {
      navlinksParent[i].children[j].getAttribute("data-label") ===
        event.getAttribute("data-label") &&
        (event.parentElement.className = "navActive");

      if (event.getAttribute("data-label") === "Find Jobs") {
        navlinksParent[3].className = "indicator-default";
      } else {
        navlinksParent[3].className = "indicator-switch";
      }
    }
  }
};
