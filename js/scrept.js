
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

//  الفيديوهات والتحويل بينهن 

var video = [
    "img/videoflooer.mp4",
    "img/videoflooer2.mp4",
    "img/videoflooer3.mp4",
    "img/videoflooer4.mp4",
    "img/videoflooer5.mp4",
    "img/videoflooer6.mp4"
]
var counterflooer = 0
var videoflooer = document.getElementById("flooer")

if (videoflooer) {
    videoflooer.src = video[counterflooer]

    videoflooer.addEventListener("ended", function () {
        counterflooer++

        if (counterflooer == video.length) {
            counterflooer = 0
        }

        videoflooer.src = video[counterflooer]
        videoflooer.play()
    })
}
////////////////////////////////////////////////////////

let loginbtn = document.querySelector("#loginbtn")
let lginusername = document.querySelector("#lginusername")
let username = localStorage.getItem("username")
if (username && loginbtn && lginusername) {
    loginbtn.remove()
    lginusername.innerHTML = username
}
// ///////////////////////// الاقسام المميزة


let allproductindex = document.querySelector("#allproductindex")
let productindex = [

    {
        img: "img/ساتان.jpg",
        nameproduct: "باقات الساتان",
        titel: "يبقى ذكرى للأبد",
        category: "satan",

    },
    {
        img: "img/صناعي.jpg",
        nameproduct: "باقات الورد الصناعي ",
        titel: "جمال واثر للابد",
        category: "Artificial",

    },
    {
        img: "img/اكسسوارات1.jpg",
        nameproduct: "الأكسسوارات ",
        titel: " قطع انيقة جميلة",
        category: "accessories",

    },
    {
        img: "img/عطرنسائي.jpg",
        nameproduct: " عطور نسائية",
        titel: "روائح ساحرة",
    },
    {
        img: "img/u'vv[hgd.jpg",
        nameproduct: "عطور رجالية ",
        titel: "  اناقة راقية ",
    },

    {
        img: "img/هدايا.jpg",
        nameproduct: " باقات هدايا ",
        titel: " علب جاهزة بلمسة فاخرة ",
        category: "gifts",

    },
    {
        img: "img/طباعة.jpg",
        nameproduct: "هدايا الطباعة ",
        titel: " مسة شخصية بصورك ",
        category: "Printedgifts",

    }
    ,
    {
        img: "img/بكج تخرج.jpg",
        nameproduct: "مجموعة التخرج ",
        titel: " احتفل بلحظاتك ",
        category: "Graduation",

    }

]
function cardindex() {

    if (allproductindex) {
        productindex.map((item) => {
            allproductindex.innerHTML += `<div  onclick="window.location='shop.html?category=${item.category}'"
             class="indexToShop group relative  rounded-3xl overflow-hidden">
                    <img src="${item.img}" alt=""
                        class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-5 right-5 text-right text-white">
                        <h1 class="text-2xl font-bold">${item.nameproduct} </h1>
                        <p class="text-white/80">${item.titel}</p>
                    </div>
                </div>
`
        })
    }
}
cardindex()



let allproduct = document.querySelector("#allproduct")
let allproductstar = document.querySelector("#allproductstar")

let product = [
    {
        id: 1,
        category: "Graduation",
        star: true,
        imgproduct: "img/wesha7.jpg",
        nameproduct: "وشاح تخرج",
        titel: "وشاح تخرج مميز ",
        price: 90

    }

    ,
    {
        id: 2,
        category: "satan",
        star: true,
        imgproduct: "img/ورد ساتان2.jpg",
        nameproduct: " باقة ساتان",
        titel: "حجم كبير مع بيبي فلزر ",
        price: 115

    },
    {
        id: 3,
        category: "Artificial",
        star: true,
        imgproduct: "img/ورد صناعي.jpg",
        nameproduct: " باقة صناعي",
        titel: "حجم وسط    ",
        price: 90

    },
    {
        id: 4,
        category: "Printedgifts",
        star: true,
        imgproduct: "img/بكج مصحف2.jpg",
        nameproduct: "بكج مصحف ",
        titel: "مصلى مصحف كاسة ",
        price: 250

    }
    ,

    {
        id: 5,
        category: "satan",
        star: true,
        imgproduct: "img/وردساتان.jpg",
        nameproduct: " باقة ساتان",
        titel: " حجم كبير مع وشاح وتل",
        price: 130

    }
    ,
    {
        id: 6,
        category: "gifts",
        star: false,
        imgproduct: "img/packj.jpg",
        nameproduct: "بكج سكتش ",
        titel: "هدية ورد وكاسة ودفتر سكتش",
        price: 150

    }
    ,
    {
        id: 7,
        category: "satan",
        star: false,
        imgproduct: "img/ledflooer.jpg",
        nameproduct: " باقة ساتان ",
        titel: "باقة ساتان مضيئة مع دب سكتش",
        price: 170

    }
    ,
    {
        id: 8,
        category: "Artificial",
        star: false,
        imgproduct: "img/وردة صناعي.jpg",
        nameproduct: " باقة صناعي ",
        titel: "حجم كبير",
        price: 120

    }
    ,
    {
        id: 9,
        category: "Printedgifts",
        star: false,
        imgproduct: "img/بكج مصحف1.jpg",
        nameproduct: "بكج مصحف",
        titel: "مصحف ومصلى وباقة",
        price: 140

    },
    {
        id: 10,
        category: "Bridalbouquet",
        star: true,
        imgproduct: "img/مسكة.jpg",
        nameproduct: "مسكة ",
        titel: "مسكة مميزة",
        price: 130

    }
    ,
    {
        id: 11,
        category: "Graduation",
        star: false,
        imgproduct: "img/وشاح تخرج.jpg",
        nameproduct: " وشاح تخرج ",
        titel: "وشاح و طاقية تخرج",
        price: 100

    }
    ,
    {
        id: 12,
        category: "accessories",
        star: false,
        imgproduct: "img/اكسسوارات.jpg",
        nameproduct: "اكسسوارات",
        titel: "شنطة سلسال سوارة ساعة ",
        price: 250

    }
    ,
    {
        id: 13,
        category: "Graduation",
        star: true,
        imgproduct: "img/بكج تخرج.jpg",
        nameproduct: "بكج تخرج",
        titel: "وشاح طاقية وردة جريدة ",
        price: 150

    }
    ,
    {
        id: 14,
        category: "Artificial",
        star: false,
        imgproduct: "img/ورد صناعي1.jpg",
        nameproduct: " باقة صناعي",
        titel: "باقة صناعي مع وشاح",
        price: 110

    }

]
// satan ورد ساتان
// Artificial ورد صناعي
// Graduation تخرج
// gifts هدايا بكج
// accessories اكسسوارات
// Printedgifts بكج طباعة
// Bridalbouquet مسكو عروس

function productcard(item) {
    return `
                <div
                class="group relative rounded-3xl bg-white shadow-md shadow-black p-3 hover:-translate-y-2 transition-all duration-700 cursor-pointer">
                <div>
                    <img src="${item.imgproduct}"  alt=""
                        class="imgshop size-40 md:size-80 rounded-[50px] object-cover group-hover:scale-105 transition-all duration-500 ">
                   
                </div>
                <div class="p-4">
                    <h2 class="titelshop text-2xl text-purple-900 font-medium">${item.nameproduct}</h2>
                    <p class="pshop text-gray-500">${item.titel}</p>
                </div>
                <div class="flex justify-between p-3 ">
                    <h2 class="price text-purple-900 font-bold text-xl">${item.price} شيكل</h2>
                    <button onclick="itemCard(this.parentElement.parentElement,this)"
                         class=" transition-all duration-700 bg-purple-100 rounded-3xl w-32 h-10 text-xl font-bold group-hover:bg-purple-900 group-hover:text-white">تسوق</button>

                </div>
            </div>
`
}


let allp = document.querySelector("#allp")
let satanp = document.querySelector("#satanp")
let Artificialp = document.querySelector("#Artificialp")
let giftsp = document.querySelector("#giftsp")
let Printedgiftsp = document.querySelector("#Printedgiftsp")
let Graduationp = document.querySelector("#Graduationp")
let accessoriesp = document.querySelector("#accessoriesp")
let thecolorJS = document.querySelectorAll(".thecolorJS")
function remocolor() {
    thecolorJS.forEach((btn) => {
        btn.classList.remove("bg-purple-900")
        btn.classList.remove("text-white")
        btn.classList.add("hover:bg-purple-200")

    })
}
function addproduct() {

    let categoryURL =
        new URLSearchParams(window.location.search).get("category")

    remocolor()

    if (categoryURL === "satan") {
        satanp.classList.add("bg-purple-900")
        satanp.classList.add("text-white")
        satanp.classList.remove("hover:bg-purple-200")
    }
    else if (categoryURL === "Artificial") {
        Artificialp.classList.add("bg-purple-900")
        Artificialp.classList.add("text-white")
        Artificialp.classList.remove("hover:bg-purple-200")
    }
    else if (categoryURL === "gifts") {
        giftsp.classList.add("bg-purple-900")
        giftsp.classList.add("text-white")
        giftsp.classList.remove("hover:bg-purple-200")
    }
    else if (categoryURL === "Printedgifts") {
        Printedgiftsp.classList.add("bg-purple-900")
        Printedgiftsp.classList.add("text-white")
        Printedgiftsp.classList.remove("hover:bg-purple-200")
    }
    else if (categoryURL === "Graduation") {
        Graduationp.classList.add("bg-purple-900")
        Graduationp.classList.add("text-white")
        Graduationp.classList.remove("hover:bg-purple-200")
    }
    else if (categoryURL === "accessories") {
        accessoriesp.classList.add("bg-purple-900")
        accessoriesp.classList.add("text-white")
        accessoriesp.classList.remove("hover:bg-purple-200")
    }
    else {
        allp.classList.add("bg-purple-900")
        allp.classList.add("text-white")
        allp.classList.remove("hover:bg-purple-200")
    }

    // وبعدها كود عرض المنتجات
if (allproduct) {
    allproduct.innerHTML = ""

    product.map((item) => {
        let p = productcard(item)

        if (categoryURL) {
            if (item.category === categoryURL) {
                allproduct.innerHTML += p
            }
        } else {
            allproduct.innerHTML += p
        }
    })
}

    allp.addEventListener("click", () => {
        remocolor()
        allp.classList.add("bg-purple-900")
        allp.classList.add("text-white")
        allp.classList.remove("hover:bg-purple-200")

        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            allproduct.innerHTML += p
        })
    })
    satanp.addEventListener("click", () => {
        remocolor()
        satanp.classList.add("bg-purple-900")
        satanp.classList.add("text-white")
        satanp.classList.remove("hover:bg-purple-200")
        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            if (item.category === "satan") {
                allproduct.innerHTML += p
            }

        })
    })
    Artificialp.addEventListener("click", () => {
        remocolor()
        Artificialp.classList.add("bg-purple-900")
        Artificialp.classList.add("text-white")
        Artificialp.classList.remove("hover:bg-purple-200")
        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            if (item.category === "Artificial") {
                allproduct.innerHTML += p
            }

        })
    })
    giftsp.addEventListener("click", () => {
        remocolor()
        giftsp.classList.add("bg-purple-900")
        giftsp.classList.add("text-white")
        giftsp.classList.remove("hover:bg-purple-200")
        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            if (item.category === "gifts") {
                allproduct.innerHTML += p
            }

        })
    })
    Printedgiftsp.addEventListener("click", () => {
        remocolor()
        Printedgiftsp.classList.add("bg-purple-900")
        Printedgiftsp.classList.add("text-white")
        Printedgiftsp.classList.remove("hover:bg-purple-200")
        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            if (item.category === "Printedgifts") {
                allproduct.innerHTML += p
            }

        })
    })
    Graduationp.addEventListener("click", () => {
        remocolor()
        Graduationp.classList.add("bg-purple-900")
        Graduationp.classList.add("text-white")
        Graduationp.classList.remove("hover:bg-purple-200")
        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            if (item.category === "Graduation") {
                allproduct.innerHTML += p
            }

        })
    })
    accessoriesp.addEventListener("click", () => {
        remocolor()
        accessoriesp.classList.add("bg-purple-900")
        accessoriesp.classList.add("text-white")
        accessoriesp.classList.remove("hover:bg-purple-200")
        if (allproduct) {
            allproduct.innerHTML = ""
        }
        product.map((item) => {
            let p = productcard(item)
            if (item.category === "accessories") {
                allproduct.innerHTML += p
            }

        })
    })




}


addproduct();
