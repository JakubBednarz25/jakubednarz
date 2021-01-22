const openBtn = document.querySelector('#openMobileMenu')
const closeBtn = document.querySelector('#closeMobileMenu')
const mobileMenu = document.querySelector(".nav-mobile")


openBtn.addEventListener('click',()=>{
    mobileMenu.style.transform = "translateY(0)";
})

closeBtn.addEventListener('click',()=>{
    mobileMenu.style.transform = "translateY(-120vh)";
})