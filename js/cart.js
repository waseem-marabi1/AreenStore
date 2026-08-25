
let carded = document.querySelector("#carded")
let pagecard = document.querySelector("#pagecard")
function addToPageCard() {
    if (cart.length === 0) {
        pagecard.innerHTML = `
     <div>
    <div class="h-screen  flex justify-center items-center text-center">
        <div class="flex flex-col items-center">
            <div class="size-[50px]">
                <i class="fa-solid fa-basket-shopping text-4xl text-purple-950"></i>
            </div>

            <h1 class="text-3xl font-bold text-purple-950 mt-3">سلتك فارغة</h1>

            <p class="text-gray-500 mt-2 text-xl">
                أضف منتجاتك المفضلة وابدأ رحلتك
            </p>

            <a href="shop.html"
                class="mt-5 hover:bg-purple-900 bg-purple-950 w-48 h-10 text-white flex rounded-2xl text-xl items-center justify-center transition">
                تصفح المتجر
            </a>
        </div></div>`
    }

    else {

        carded.innerHTML = ""

        cart.map((item) => {
            carded.innerHTML += `
            <div class="bg-white shadow-gray shadow-md flex items-center p-3 gap-2 rounded-2xl">
                <div>
                    <img src="${item.imgproduct}"
                        class="size-[100px] rounded-2xl"
                        alt="">
                </div>
                <div class="w-full">
                    <div class="px-3">
                        <div class="flex justify-between">
                            <h2 class="font-bold text-purple-950 text-xl">
                                ${item.nameproduct}
                            </h2>
                            <i onclick="deleteFromCart(${item.id})"
                                class="fa-regular fa-trash-can hover:text-red-500 cursor-pointer">
                            </i>
                        </div>
                        <p class="text-gray-600">
                            ${item.titel}
                      </p>
                    </div>
                    <div class="flex justify-between px-3 mt-4">
                        <div class="flex gap-3">
                        <button onclick="Increase(${item.id})" id="Increase-${item.id}" class="bg-purple-300 rounded-full size-4 md:size-6 font-bold">+</button>
                        <p id="counternumofproduct-${item.id}" class="">${item.quantity}</p>
                        <button onclick="Decrease(${item.id})" id="Decrease-${item.id}" class="bg-purple-300 rounded-full size-4 md:size-6 font-bold">-</button>                        </div>
                        <h2 class="text-gray-600 text-2xl font-bold">
                            ${item.price * item.quantity} شيكل
                        </h2>
                    </div>
                </div>
            </div>
        `
        })
    }
}
addToPageCard()

function sendWhatsApp() {

    let message = `أهلاً وسهلاً فيك بـ areen store 🌸💐
نورتنا وشكراً لاهتمامك!

`

    cart.map((item) => {

        message += `المنتج: ${item.nameproduct}
الوصف: ${item.titel}
سعر القطعة: ${item.price} شيكل
الكمية: ${item.quantity}
إجمالي المنتج: ${item.price * item.quantity} شيكل

`
    })

    message += `الإجمالي: ${totalprice} شيكل

حابب نأكد الطلب ولا عندك أي استفسار؟
فريق areen store جاهز يخدمك 🌷`

    let phone = "972569506109"

    window.open(
        "https://api.whatsapp.com/send?phone=" +
        phone +
        "&text=" +
        encodeURIComponent(message)
    )
}