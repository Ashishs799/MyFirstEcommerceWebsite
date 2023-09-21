const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const shoppingbag = document.getElementById("shoppingbag");
const main = document.querySelector('.main')

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    shoppingbag.style.display = 'none'
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
// Redirect to product details of first prod when click on product
let firstProd = document.querySelector('.prod')
firstProd.addEventListener('click', ()=>{
  window.location.href = 'product.html'
})

// Event to change images of product when click on product detail page
let mainimg = document.getElementById('mainImage')
let smimg = document.getElementsByClassName('sm-img')

mainimg.addEventListener('click', ()=>{
  mainimg.src = mainimg.src
})

smimg[0].addEventListener('click', ()=>{
  mainimg.src = smimg[0].src
})
smimg[1].addEventListener('click', ()=>{
  mainimg.src = smimg[1].src
})
smimg[2].addEventListener('click', ()=>{
  mainimg.src = smimg[2].src
})
smimg[3].addEventListener('click', ()=>{
  mainimg.src = smimg[3].src
})
