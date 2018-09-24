
var li = document.querySelectorAll("li.nav__item"),
    products = document.getElementsByClassName("product")

Array.prototype.forEach.call(li, (item, index)=> {
    item.addEventListener("click", function () {
        Array.prototype.forEach.call(li, (item)=> {
            item.classList.remove("nav__item-active")
        })
        this.classList.add("nav__item-active")
        if (index === 0) { //если выбрали пункт "все" - показать все товары и завершить функцию
            Array.prototype.forEach.call(products, (item)=> {
                item.classList.remove("product-hidden")
            })
            return
        }
        for (var i = 0; i < products.length; i++) { //иначе
            if (products[i].dataset.type == index){ //проверяем тип всех товаров,если он равен типу выбранного
                products[i].classList.remove("product-hidden") //показываем этот товар
                continue
            }
            products[i].classList.add("product-hidden") //если не равен, скрываем товар
        }
    })
})

document.body.onload = function () {
    li[0].classList.add("nav__item-active")
}