var btnmun = document.getElementById("btnmun")
var liststayle = document.getElementById("listmubile")
var btnhead = document.querySelectorAll(".btnhead")
var iconlist = document.getElementById("iconlist")
btnmun.onclick = function (e) {
    e.stopPropagation();
    liststayle.classList.toggle("hidden")

    if (liststayle.classList.contains("hidden")) {
        iconlist.classList.remove("fa-x");
        iconlist.classList.add("fa-bars");
    } else {
        iconlist.classList.remove("fa-bars");
        iconlist.classList.add("fa-x");

    }
}
btnhead.forEach(function (link) {
    link.onclick = function () {
        liststayle.classList.add("hidden")
        iconlist.classList.remove("fa-x");
        iconlist.classList.add("fa-bars");
    }
})
document.body.onclick = function () {
    liststayle.classList.add("hidden")
    iconlist.classList.remove("fa-x");
    iconlist.classList.add("fa-bars");
}
var page = document.querySelectorAll(".page")


var btnpage = document.querySelectorAll(".btnpage")


btnpage.forEach(function (button) {

    button.onclick = function () {
        page.forEach(function (p) {
            p.classList.add("hidden");
        })
        var pageshow = document.getElementById(button.dataset.page)
        pageshow.classList.remove("hidden")



        btnpage.forEach(function (btn) {
            btn.classList.remove("bg-purple-900", "text-white")
        })
        button.classList.add("bg-purple-900", "text-white")
        button.classList.remove("hover:bg-purple-100")

    }

})

var btnpagefoter = document.querySelectorAll(".btnpagefoter")

btnpagefoter.forEach(function (button) {
    button.onclick = function () {
        page.forEach(function (pags) {
            pags.classList.add("hidden")
        })
        var pageshow = document.getElementById(button.dataset.page)
        pageshow.classList.remove("hidden")


        btnpage.forEach(function (btncolor) {
            btncolor.classList.remove("bg-purple-900", "text-white")
            if(btncolor.dataset.page==button.dataset.page){
            btncolor.classList.add("bg-purple-900", "text-white")
            btncolor.classList.remove("hover:bg-purple-100")}
        })

    }
})