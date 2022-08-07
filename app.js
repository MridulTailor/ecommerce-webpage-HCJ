let hamburger = document.getElementById('ham');
let nav = document.getElementById('nav');
let closeNav = document.getElementById('close-nav');
let shopBag = document.getElementById('shop-bag');
if(hamburger){
    hamburger.addEventListener('click',()=>{
        nav.classList.add('active');
    });
}
if(closeNav){
    closeNav.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}