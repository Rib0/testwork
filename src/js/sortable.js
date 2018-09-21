
var li = document.querySelectorAll("li.nav__item"),
    products = document.getElementsByClassName("product"),
    curMenuItem = 0


function checkItems() {
    switch(curMenuItem) {
        case 0:
            Array.prototype.forEach.call(products, function (item) {               
                item.classList.remove("product-hidden")      
            })
        break;

        case 1:
            Array.prototype.forEach.call(products, function (item) {
                if (item.dataset.type != 1) {
                   item.classList.add("product-hidden")
                }
                else {                   
                    item.classList.remove("product-hidden")                   
                }              
            })
        break;

        case 2:
            Array.prototype.forEach.call(products, function (item) {
                if (item.dataset.type != 3) {
                    item.classList.add("product-hidden")
                }
                else {                    
                    item.classList.remove("product-hidden")      
                }
            })
        break;

        case 3:
            Array.prototype.forEach.call(products, function (item) {
                if (item.dataset.type != 2) {
                    item.classList.add("product-hidden")
                }
                else {              
                    item.classList.remove("product-hidden")      
                }
            })
        break;
    }
}

Array.prototype.forEach.call(li, (item, index)=> {
    item.addEventListener("click", function () {     
        li.forEach((item)=> {
            item.classList.remove("nav__item-active")
        })
        this.classList.add("nav__item-active")
        curMenuItem = index
        checkItems();  
    })
})

document.body.onload = function () {
    li[0].classList.add("nav__item-active")
}