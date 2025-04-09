let buttons =document.querySelectorAll(".filter-btn");
let menuItems=document.querySelectorAll(".menu-item");

buttons.forEach(button => {
button.addEventListener("click", () => {
    let category =button.getAttribute("data-category");
    menuItems.forEach(item => {
        if(category==="all" || category===item.getAttribute("data-category")) {
            item.style.display="flex";
        } else {
            item.style.display="none";
        }
    })
})
});