let navlinksParent = document.getElementsByClassName("nav-links")[0]
let findJobs = navlinksParent.querySelector('a[data-label="Find Jobs"]') 
let discoverComp = navlinksParent.querySelector('a[data-label="Discover Companies"]') 

console.log(navlinksParent);

function navigate (event){
  for (var i in ["1", "2"]) {
    navlinksParent.children[i].className = "navDefault";
  }
  for (var i in ["1", "2"]) {
    for (var j in ["1"]) {
      navlinksParent.children[i].children[j].getAttribute("data-label") ===
        event.getAttribute("data-label") &&
        (event.parentElement.className = "navActive");

      if (event.getAttribute("data-label") === "Find Jobs") {
        navlinksParent.children[3].className = "indicator-default";
      } else {
        navlinksParent.children[3].className = "indicator-switch";
      }
    }
  }
};

findJobs.addEventListener('click',()=>{
  navigate(findJobs)
})
discoverComp.addEventListener('click',()=>{
  navigate(discoverComp)
})
