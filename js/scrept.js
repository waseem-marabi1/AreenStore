
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


const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".btnpage").forEach(button => {
    if (button.getAttribute("href") === currentPage) {
        button.classList.add("bg-purple-900", "text-white");
        button.classList.remove("hover:bg-purple-100");
    }
});

// اضافة للسلة
function clickcarded() {



    if (arrcard.length > 0) {
        window.location.href = "card.html"
    } else {
        window.location.href = "cardempty.html"


    }

}

var countercard = document.getElementById("countercard")

var arrcard = JSON.parse(localStorage.getItem("arrcard")) || [];
    var carded = document.getElementById("carded")

    countercard.textContent = arrcard.length;


function itemCard(item, btn) {
    var product = {
        img: item.querySelector(".imgshop").src,
        pshop: item.querySelector(".pshop").textContent,
        titelshop: item.querySelector(".titelshop").textContent,
        price: item.querySelector(".price").textContent
    }

    arrcard.push(product)
    localStorage.setItem("arrcard", JSON.stringify(arrcard));
    countercard.textContent = arrcard.length;

}



function AddToCard() {
    var carded = document.getElementById("carded")
    carded.innerHTML = "";



    for (let i = 0; i < arrcard.length; i++) {
        carded.innerHTML += ` <div id="${i}" class="bg-white shadow-gray shadow-md flex  items-center   p-3 gap-2 rounded-2xl">
                    <div class=""><img src="${arrcard[i].img}" class="size-[100px] rounded-2xl " alt=""></div>
                    <div class="w-full">
                        <div class="px-3">
                            <div class="flex justify-between ">
                                <h2 class="font-bold text-purple-950 text-xl">${arrcard[i].titelshop}</h2> <i
                                    onclick="removeCard(${[i]})" class="fa-regular fa-trash-can hover:text-red-500 cursor-pointer"></i>
                            </div>
                            <p class="text-gray-600  ">${arrcard[i].pshop}</p>
                        </div>
                        <div class="  flex  justify-between  px-3 mt-4">
                            <div>- 1 +</div>
                            <h2 class="text-gray-600  text-2xl font-bold ">${arrcard[i].price}</h2>
                        </div>
                    </div>
                </div>`
        console.log(1)
    }
}
if (document.getElementById("carded")) {
    AddToCard();


} function removeCard(id) {
    arrcard.splice(id, 1);
    localStorage.setItem("arrcard", JSON.stringify(arrcard))
    if (arrcard.length === 0) {
        clickcarded()
    }
    countercard.textContent = arrcard.length;

    AddToCard();

}