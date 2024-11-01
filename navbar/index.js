const menuIcon = document.getElementById("menu-icon")
const mobileMenu = document.getElementById("mobile")
const exitMenu = document.getElementById("exit-icon")    

menuIcon.addEventListener("click", function(){
    mobileMenu.style.display = "flex";
})


exitMenu.addEventListener("click", function(){
    mobileMenu.style.display = "none";
})

