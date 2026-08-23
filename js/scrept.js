//
//
// زر التلفون 
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


//
//
//

let allproductindex = document.querySelector("#allproductindex")

// الاقسام المميزة
class productsindex {
    constructor(img, nameproduct, titel, category) {
        this.img = img
        this.nameproduct = nameproduct
        this.titel = titel
        this.category = category
    }
}

let productindex = [
    new productsindex("img/ساتان.jpg", "باقات الساتان", "يبقى ذكرى للأبد", "satan"),

    new productsindex("img/صناعي.jpg", "باقات الورد الصناعي", "جمال واثر للابد", "Artificial"),

    new productsindex("img/اكسسوارات1.jpg", "الأكسسوارات", "قطع انيقة جميلة", "accessories"),

    new productsindex("img/عطرنسائي.jpg", "عطور نسائية", "روائح ساحرة"),

    new productsindex("img/u'vv[hgd.jpg", "عطور رجالية", "اناقة راقية"),

    new productsindex("img/هدايا.jpg", "باقات هدايا", "علب جاهزة بلمسة فاخرة", "gifts"),

    new productsindex("img/طباعة.jpg", "هدايا الطباعة", "مسة شخصية بصورك", "Printedgifts"),

    new productsindex("img/بكج تخرج.jpg", "مجموعة التخرج", "احتفل بلحظاتك", "Graduation")

]
function cardindex() {

    if (allproductindex) {
        productindex.map((item) => {
            allproductindex.innerHTML += `<div  onclick="categoryFun('${item.category}')"
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

//  ننخزن النوع  مشان نعرف نوصللها 
function categoryFun(category) {
    localStorage.setItem("category", category)
    window.location = "shop.html"

}



let allproduct = document.querySelector("#allproduct")
let allproductstar = document.querySelector("#allproductstar")

class products {
    constructor(id, category, star, imgproduct, nameproduct, titel, price) {
        this.id = id
        this.category = category
        this.star = star
        this.imgproduct = imgproduct
        this.nameproduct = nameproduct
        this.titel = titel
        this.price = price
    }


}

let product = [
    new products(1, "Graduation", true, "img/wesha7.jpg", "وشاح تخرج", "وشاح تخرج مميز ", 90),
    new products(2, "satan", true, "img/ورد ساتان2.jpg", " باقة ساتان", "حجم كبير مع بيبي فلور ", 115),
    new products(3, "Artificial", true, "img/ورد صناعي.jpg", " باقة صناعي", "حجم وسط", 90),
    new products(4, "Printedgifts", true, "img/بكج مصحف2.jpg", "بكج مصحف", "مصلى مصحف كاسة", 250),
    new products(5, "satan", true, "img/وردساتان.jpg", " باقة ساتان", "حجم كبير مع وشاح وتل", 130),
    new products(6, "gifts", false, "img/packj.jpg", "بكج سكتش", "هدية ورد وكاسة ودفتر سكتش", 150),
    new products(7, "satan", false, "img/ledflooer.jpg", " باقة ساتان", "باقة ساتان مضيئة مع دب سكتش", 170),
    new products(8, "Artificial", false, "img/وردة صناعي.jpg", " باقة صناعي", "حجم كبير", 120),
    new products(9, "Printedgifts", false, "img/بكج مصحف1.jpg", "بكج مصحف", "مصحف ومصلى وباقة", 140),
    new products(10, "Bridalbouquet", true, "img/مسكة.jpg", "مسكة", "مسكة مميزة", 130),
    new products(11, "satan", false, "img/satan1.jpg", " باقة ساتان", "باقة صناعي مع وشاحاقة حجم صغير ٥٠ شيكل (١٥ وردة  مع عبارة ١٠)", 60),
    new products(12, "Graduation", false, "img/وشاح تخرج.jpg", "وشاح تخرج", "وشاح و طاقية تخرج", 100),
    new products(13, "accessories", false, "img/اكسسوارات.jpg", "اكسسوارات", "شنطة سلسال سوارة ساعة", 250),
    new products(14, "Graduation", true, "img/بكج تخرج.jpg", "بكج تخرج", "وشاح طاقية وردة جريدة", 150),
    new products(15, "Artificial", false, "img/ورد صناعي1.jpg", " باقة صناعي", "باقة ساتان مع وشاح", 110),
    new products(16, "gifts", false, "img/mekap.jpg", "  باقة ميكب ", "باقة ميكب بجودة عالية", 200),
    new products(17, "satan", false, "img/satan2.jpg", " باقة ساتان", " باقة ساتان حجم وسط (20وردة)", 80),
    new products(18, "satan", false, "img/boxflooer.jpg", " بوكس ورد", "بوكس ساتان حجم صغير", 60),
    new products(19, "satan", false, "img/boxflooer1.jpg", " بوكس ورد", " بوكس ساتان حجم كبير", 100),
    new products(20, "gifts", false, "img/giftsatanmag.jpg", "هدية باللون الازرق ", "باقة ورد  دب ستيتش كاسة ماسك وجه", 80),
    new products(21, "satan", true, "img/khtopa.jpg", " باقة ساتان خطوبة", "باقة خطوبة حجم كبير  ( ٣٥ وردة) مع وشاح ١٠", 110),
    new products(22, "satan", true, "img/khtopa2.jpg", " باقة ساتان خطوبة", "باقة خطوبة حجم صغير  ( ١٥ وردة)  اضافات بيبي فلور ١٠  /  عبارة ١٠", 70),
    new products(23, "gifts", false, "img/mom.jpg", "هدية ام", "هدية ام كفر نلفون وكاسة ", 50),
    new products(24, "satan", true, "img/toze3t.jpg", " توزيعات ورد", " توزيعات ورد  ", 3),



]
// satan ورد ساتان
// Artificial ورد صناعي
// Graduation تخرج
// gifts هدايا بكج
// accessories اكسسوارات
// Printedgifts بكج طباعة
// Bridalbouquet مسكو عروس

// الاضافة للسلة اشعار 
function massegAddToCart() {
    successMessage = document.querySelector(".successMessage")

    successMessage.classList.add("ShowMessage")
    successMessage.classList.remove("hiddenMessage")

    setTimeout(() => {
        successMessage.classList.add("hiddenMessage")
        successMessage.classList.remove("ShowMessage")

    }, 1500)
}

// //
// //
// //
// //
function productcard(item) {
    return `
                <div
                class="group flex flex-col h-full relative rounded-3xl bg-white shadow-lg shadow-gray  p-3 hover:-translate-y-2 transition-all duration-700 cursor-pointer">
                <div>
                    <img src="${item.imgproduct}"  alt=""
                        class="m-auto imgshop size-42 md:size-80 rounded-[50px] object-cover group-hover:scale-105 transition-all duration-500 ">
                   
                </div>
                <div class="p-4">
                    <h2 class="titelshop text-2xl text-purple-900 font-medium">${item.nameproduct}</h2>
                    <p class="pshop text-gray-500">${item.titel}</p>
                </div>
                  <h2 class="mt-auto price text-purple-900 font-bold text-lg md:text-2xl">${item.price} <i class="fa-solid fa-shekel-sign text-sm"></i></h2>
                          <div class="flex justify-center mt-auto p-3 gap-2 ">  
                            <button onclick="itemCard(${item.id})"
                        id="btnShoping" class=" transition-all md:duration-500 bg-purple-100 rounded-3xl w-20 h-10 md:w-32 md:h-10 md:text-xl
                          group-hover:bg-purple-900 group-hover:text-white">تسوق</button>
                    <button onclick="sendWhatsApp1(${item.id})"
                        id="btnShoping" class=" transition-all md:duration-500 bg-purple-100 rounded-3xl w-20 h-10 md:w-32 md:h-10 md:text-xl
                          group-hover:border-2 border-purple-400 hover:bg-white hover:text-black ">شراء</button>

                </div>
            </div>
`
}
function sendWhatsApp1(id) {
    let message = `أهلاً وسهلاً فيك بـ areen store 🌸💐
نورتنا وشكراً لاهتمامك!

`
    product.map((item) => {
        if (item.id == id) {

            message += `المنتج: ${item.nameproduct}
الوصف: ${item.titel}
سعر القطعة: ${item.price} شيكل
`
            message += `
            حابب نأكد الطلب ولا عندك أي استفسار؟
فريق areen store جاهز يخدمك 🌷`
        }
    })
    let phone = "970566250402"

    window.open(
        "https://api.whatsapp.com/send?phone=" +
        phone +
        "&text=" +
        encodeURIComponent(message)
    )
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
    if (allproductstar) {
        allproductstar.innerHTML = ""
        product.map((item) => {
            let p = productcard(item)

            if (item.star) {
                allproductstar.innerHTML += p
            }

        })
    }
    if (allproduct) {
        allproduct.innerHTML = ""
        product.map((item) => {
            let p = productcard(item)
            if (item.category === localStorage.getItem("category")) {
                allproduct.innerHTML += p
            } else if (!localStorage.getItem("category")) {
                allproduct.innerHTML += p
                allp.classList.add("bg-purple-900")
                allp.classList.add("text-white")
                allp.classList.remove("hover:bg-purple-200")
            }
        })
    }
}
function btnCategory(categ, btn) {
    localStorage.removeItem("category")
    remocolor()
    btn.classList.add("bg-purple-900")
    btn.classList.add("text-white")
    btn.classList.remove("hover:bg-purple-200")

    if (allproduct) {
        allproduct.innerHTML = ""

        product.map((item) => {
            let p = productcard(item)

            if (item.category == categ) {
                allproduct.innerHTML += p
            } else if (categ === "all") {
                allproduct.innerHTML += p

            }
        })

    }

}
addproduct();

// 
// 
// البحثث 
let search = document.querySelector("#search")
let searchType = document.querySelector("#searchType")
if (search && searchType) {
    search.addEventListener("input", () => {
        if (allproduct) {
            allproduct.innerHTML = ""

            product.map((item) => {
                let p = productcard(item)
                if (search.value === "") {
                    allproduct.innerHTML += p
                }
                if (searchType.value === "Name" && item.nameproduct.includes(search.value)) {
                    allproduct.innerHTML += p

                } else if (searchType.value === "Price" && item.price <= (search.value)) {
                    allproduct.innerHTML += p

                }

            })

        }
    })
}
//
//
// // اظهار السلة واخفائها

let sideCart = document.querySelector("#sideCart")
let canselbtn = document.querySelector("#canselbtn")
let overlay = document.querySelector("#overlay")
let theitemincadt = document.querySelector("#theitemincadt")
let cart = JSON.parse(localStorage.getItem("cart")) || []
let totalpricehtml = document.querySelector("#totalpricehtml")
let totalpriceincart = document.querySelector("#totalpriceincart")
let totalpriceincartf = document.querySelector("#totalpriceincartf")
let totalprice = Number(localStorage.getItem("totalprice")) || 0
let countercard = document.querySelector("#countercard")

function clickcarded() {

    sideCart.classList.toggle("OpenSideCart")
    sideCart.classList.remove("hiddenSideCart")
    overlay.classList.toggle("hidden")
    document.body.classList.toggle("overflow-hidden")

}
canselbtn.addEventListener("click", () => {
    sideCart.classList.remove("OpenSideCart")
    sideCart.classList.add("hiddenSideCart")
    overlay.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")

})
overlay.addEventListener("click", () => {
    sideCart.classList.add("hiddenSideCart")
    sideCart.classList.remove("OpenSideCart")
    overlay.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")


})

// اضافة المنتجات للسلة الجانبية 
function productAddToSidCart(item) {

    return `     <div class="flex gap-10  bg-gray-50 p-2 md:p-4 rounded-2xl shadow-sm shadow-gray-400 ">
                <img src="${item.imgproduct}" class="size-20 md:size-28 rounded-lg" alt="">
                <div class="m-auto">
                    <h1 class="text-sm md:text-xl font-semibold">${item.nameproduct}</h1>
                    <p class="text-sm md:text-lg">${item.price} </p>
                </div>
                <div class="m-auto flex flex-col ">
                    <span class="flex gap-2 text-sm md:text-xl justify-center items-center ">
                        <button onclick="Increase(${item.id})" id="Increase-${item.id}" class="bg-purple-300 rounded-full size-4 md:size-6 font-bold">+</button>
                        <p id="counternumofproduct-${item.id}" class="">${item.quantity}</p>
                        <button onclick="Decrease(${item.id})" id="Decrease-${item.id}" class="bg-purple-300 rounded-full size-4 md:size-6 font-bold">-</button>
                    </span>
                    <span  class="flex flex-col justify-center text-center  text-sm md:text-xl mt-2">
                        <p id="newpriceproduct-${item.id}">${item.price * item.quantity}</p>
                    </span>
                </div> 
                <button  onclick="deleteFromCart(${item.id})" class=" text-lg md:text-xl hover:text-red-600"><i class="fa-solid fa-trash-can"></i></button>
            </div>           
                
`
}

function updatecart() {
    theitemincadt.innerHTML = ""

    if (cart.length === 0) {

        theitemincadt.innerHTML = `
            <h1 class="text-center text-xl">
                السلة فارغة
            </h1>
        `
    }
    else {
        theitemincadt.innerHTML = ""

    }
    cart.map((item) => {
        if (!item.quantity) {
            item.quantity = 1
        }
        theitemincadt.innerHTML += productAddToSidCart(item)
    })
}
updatecart()
printtotalprice()
function itemCard(id) {
    let found = false
    cart.map((item) => {
        if (item.id === id) {
            found = true
            item.quantity = item.quantity + 1
            let counternumofproduct =
                document.querySelector(`#counternumofproduct-${item.id}`)
            let newpriceproduct =
                document.querySelector(`#newpriceproduct-${item.id}`)
            counternumofproduct.innerHTML = item.quantity
            newpriceproduct.innerHTML =
                item.price * item.quantity
            totalprice += item.price
            localStorage.setItem("totalprice", totalprice)

        }
    })
    if (found === false) {
        product.map((item) => {
            if (item.id === id) {
                item.quantity = 1
                cart.push(item)
                updatecart()
                totalprice += item.price
                localStorage.setItem("totalprice", totalprice)
                if (document.querySelector("#pagecard")) {
                    addToPageCard()
                }
            }
        })
    }

    printtotalprice()
    localStorage.setItem("cart", JSON.stringify(cart))
    massegAddToCart()
}
// كاونتر 

function updateCartCounter() {

    let counter = 0

    cart.map((item) => {
        counter += item.quantity
    })

    if (countercard) {
        countercard.innerHTML = counter
    }
}

// المجموع وطباعتها 
function printtotalprice() {

    if (totalpricehtml) {

        totalpricehtml.innerHTML = "المجموع : " + totalprice + " " + `<i class="fa-solid fa-shekel-sign text-sm"></i>`
    }
    if (totalpriceincart) {

        totalpriceincart.innerHTML = `<i class="fa-solid fa-shekel-sign text-lg"></i>` + " " + totalprice
    }
    if (totalpriceincartf) {

        totalpriceincartf.innerHTML = `<i class="fa-solid fa-shekel-sign text-sm"></i>` + " " + totalprice
    }
    updateCartCounter()
}




function Increase(id) {
    product.map((item) => {
        let Increase = document.querySelector(`#Increase-${item.id}`)
        let counternumofproduct = document.querySelector(`#counternumofproduct-${item.id}`)
        let newpriceproduct = document.querySelector(`#newpriceproduct-${item.id}`)
        if (Increase && counternumofproduct && item.id === id) {
            counternumofproduct.innerHTML =
                Number(counternumofproduct.innerHTML) + 1
            newpriceproduct.innerHTML =
                Number(newpriceproduct.innerHTML) + item.price
            cart.map((cartitem) => {

                if (cartitem.id === id) {

                    cartitem.quantity =
                        Number(cartitem.quantity) + 1
                    totalprice += item.price
                    localStorage.setItem("totalprice", totalprice)

                    if (document.querySelector("#pagecard")) {
                        addToPageCard()
                    }

                }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    })
    printtotalprice()
}
function Decrease(id) {

    product.map((item) => {

        let Decrease = document.querySelector(`#Decrease-${item.id}`)
        let counternumofproduct = document.querySelector(`#counternumofproduct-${item.id}`)
        let newpriceproduct = document.querySelector(`#newpriceproduct-${item.id}`)

        if (Decrease && counternumofproduct && item.id === id) {

            if (Number(counternumofproduct.innerHTML) > 1) {

                counternumofproduct.innerHTML =
                    Number(counternumofproduct.innerHTML) - 1

                newpriceproduct.innerHTML =
                    Number(newpriceproduct.innerHTML) - item.price

                cart.map((cartitem) => {

                    if (cartitem.id === id) {

                        cartitem.quantity =
                            Number(cartitem.quantity) - 1
                        totalprice -= item.price
                        localStorage.setItem("totalprice", totalprice)

                        if (document.querySelector("#pagecard")) {
                            addToPageCard()
                        }
                    }

                })

                localStorage.setItem("cart", JSON.stringify(cart))

            }
        }
    })

    printtotalprice()
}
// 
// 
//  حذف المنتج من السلة 
function deleteFromCart(id) {

    cart.map((item, index) => {

        if (item.id === id) {


            for (let index = 0; index < item.quantity; index++) {
                totalprice -= item.price
                localStorage.setItem("totalprice", totalprice)

            }
            cart.splice(index, 1)

            localStorage.setItem("cart", JSON.stringify(cart))
        }

    })

    theitemincadt.innerHTML = ""

    updatecart()
    if (document.querySelector("#pagecard")) {
        addToPageCard()
    }
    printtotalprice()
}






// //
// //
// //
// // اضافة للسلة الجانبية
// //
// // id: 1,
// //         category: "Graduation",
// //         star: true,
// //         imgproduct: "img/wesha7.jpg",
// //         nameproduct: "وشاح تخرج",
// //         titel: "وشاح تخرج مميز ",
// //         price: 90
// let btnShoping = document.querySelector("#btnShoping")
// let theitemincadt = document.querySelector("#theitemincadt")
// function itemCard() {
//     product.id
//     product.map((item) => {

//     })
// }




// //
// //
// //







// carded.innerHTML += ` <div id="${i}" class="bg-white shadow-gray shadow-md flex  items-center   p-3 gap-2 rounded-2xl">
//                     <div class=""><img src="${arrcard[i].img}" class="size-[100px] rounded-2xl " alt=""></div>
//                     <div class="w-full">
//                         <div class="px-3">
//                             <div class="flex justify-between ">
//                                 <h2 class="font-bold text-purple-950 text-xl">${arrcard[i].titelshop}</h2> <i
//                                     onclick="removeCard(${[i]})" class="fa-regular fa-trash-can hover:text-red-500 cursor-pointer"></i>
//                             </div>
//                             <p class="text-gray-600  ">${arrcard[i].pshop}</p>
//                         </div>
//                         <div class="  flex  justify-between  px-3 mt-4">
//                             <div>- 1 +</div>
//                             <h2 class="text-gray-600  text-2xl font-bold ">${arrcard[i].price}</h2>
//                         </div>
//                     </div>
//                 </div>`
// console.log(1)

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
// ////////////////////////////////////////////////////////

// /////// phone login
let loginbtnphone = document.querySelector("#loginbtnphone")
let logoutbtnphone = document.querySelector("#logoutbtnphone")
let username = localStorage.getItem("username")
if (username && loginbtnphone && logoutbtnphone) {
    loginbtnphone.remove()
    loginusernamephone.innerHTML = username
}
else {
    logoutbtnphone.remove()
}
logoutbtnphone.addEventListener("click", () => {
    localStorage.removeItem("username")
    setTimeout(() => {
        window.location = "login.html"

    }, 1000);
})
// /////

let lgoutbtn = document.querySelector("#lgoutbtn")
let loginbtn = document.querySelector("#loginbtn")
let loginusername = document.querySelector("#lginusername")
if (username && loginbtn && loginusername) {
    loginbtn.remove()
    lgoutbtn.classList.add("md:block")
    loginusername.innerHTML = username
}
if (lgoutbtn) {
    lgoutbtn.addEventListener("click", () => {
        localStorage.removeItem("username")

        setTimeout(() => {
            window.location = "login.html"
        }, 1000)
    })
}
// // ///////////////////////// الاقسام المميزة

