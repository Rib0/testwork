var svg = document.getElementsByClassName("svg")[0],
    input = document.getElementsByClassName("search__input")[0]

input.addEventListener("focus", function () {
    svg.classList.add("svg-active")
})

input.addEventListener("blur", function () {
    svg.classList.remove("svg-active")
})

