
function responsive() { 
    const menuHeader = document.getElementById("headerNav");
    const items = document.querySelectorAll(".nav-item");

    if (menuHeader.className === "headerNav") {
      menuHeader.className += " responsive";
      items.forEach(item => {
          item.className += " responsive"
      });
    } else {
      menuHeader.className = "headerNav";
      items.forEach(item => {
        item.className = "nav-item"
    });
    }
} 

function filterShow() {
  const btn = document.querySelector("#filter-btn");
  const galerie = document.querySelector(".form-galerie");
  
  if (galerie.className === "form-galerie") {
    galerie.classList.add("filter");
  } else if (galerie.className === "form-galerie filter"){
    galerie.classList.remove("filter");
  }
}