import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let price = document.getElementsByClassName("price");
  let parent = document.getElementsByClassName("product");

  for(let i=0; i<parent.length; i++){
    parent[i].setAttribute('data-price', price[0].innerHTML);
  }

});
