
// head 
function headd() {
    return `<div
        class="h-20 w-full flex justify-between items-center px-4 md:px-8 lg:px-12 fixed z-50 bg-[#FDFBF9]/70 backdrop-blur-sm border-b border-[#E9E2DD]">
        <div class="flex  gap-4">
            <button id="btnmun"
                class="md:hidden  relative bg-purple-100 w-10 h-10 flex rounded-full justify-center items-center"><i
                    id="iconlist" class="fa-solid fa-bars"></i></button>
            <div id="listmubile" class="hidden lg:hidden  fixed right-0 flex top-0 flex-col rounded-2xl w-screen 
                bg-white border-2 border-purple-100 text-gray-800 shadow-xl  mt-[80px] z-50 p-4">

                <a href="index.html"
                    class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl w-full text-right"><i
                        class="fas fa-home"></i> الرئيسية</a>
                <a href="shop.html" onclick="localStorage.removeItem('category')"
                    class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl w-full text-right">
                    <i class="fas fa-shopping-bag"></i> المتجر</a>
                <a href="howme.html"
                    class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl w-full text-right"><i
                        class="fas fa-user-circle"></i> من
                    نحن</a>
                <a href="contact.html"
                    class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl w-full text-right"><i
                        class="fas fa-envelope"></i> تواصل
                    معنا</a>
                <a id="loginbtnphone" href="login.html"
                    class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl w-full text-right"><i
                        class="fa-regular fa-user text-2xl"></i> تسجيل الدخول</a>
                <a id="logoutbtnphone" href="login.html"
                    class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl w-full text-right flex"><i
                        class="fa-regular fa-user text-2xl my-auto"></i>
                    <div class="mr-2"> تسجيل الخروج | <span id="loginusernamephone"></span></div>
                </a>


            </div>

            <button class="" id="btncard" type="button" onclick="clickcarded()">
                <div class="flex gap-5">

                    <div class="relative  bg-purple-100 w-10 h-10 flex rounded-full justify-center items-center">
                        <p id="countercard"
                            class="counter absolute -top-3 right-7 text-white bg-purple-950 rounded-full w-6 h-6  text-center">
                        </p>

                        <i class="fa-solid fa-cart-plus"></i>

                    </div>
                </div>

            </button>

        </div>


        <div class="hidden md:flex gap-3  lg:gap-10">
            <a href="index.html"
                class="btnpage font-[Tajawal] font-medium tracking-normal  rounded-3xl p-3 text-xl ">الرئيسية</a>
            <a href="shop.html" onclick="localStorage.removeItem('category')"
                class="btnpage font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl">المتجر</a>
            <a href="howme.html"
                class="btnpage font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl">من
                نحن</a>
            <a href="contact.html"
                class="btnpage  font-[Tajawal] font-medium tracking-normal hover:bg-purple-100 rounded-3xl p-3 text-xl">تواصل
                معنا</a>


        </div>
        <div class="flex gap-2">
            <a id="loginbtn" href="login.html" class="m-auto ml-4 md:block hidden"><i
                    class="fa-regular fa-user text-2xl"></i></a>
            <button id="lgoutbtn" class=" text-xl hidden  m-auto  ">تسجيل الخروج |</button>
            <p id="lginusername" class=" text-2xl hidden md:block m-auto ml-4 -mr-4"></p>
            <div class="flex justify-center items-center text-center ">
                <p class="text-purple-950 font-['Tajawal'] font-normal text-xl hidden md:block ml-3">
                    Areen <br>
                    <span class="font-[Tajawal] text-sm tracking-[3px]">Store</span>
                </p>
                <div><a href="index.html"> <img src="img/areen-logo.jpeg" class="rounded-full w-[60px] h-[60px]"
                            alt=""></a></div>
            </div>

        </div>

    </div>
<!-- اشعار الاضافة للسلة  -->
<div class="successMessage" >
تمت إضافة المنتج إلى السلة   
</div>    <!-- end head -->

<!-- سلة المشترايات الجانبية  -->
    <div id="overlay" class="hidden fixed inset-0 bg-black/40  z-40">
    </div>

    <div id="sideCart"
        class="z-50 rounded-3xl  flex w-[45vh] lg:w-[100vh] flex-col space-y-4 p-4 md:p-10 bg-white border-2 border-gray-400   top-20 right-2 max-h-[60vh] md:max-h-[80vh] overflow-y-auto">
        <div class=" flex ">
            <h1 class=" text-2xl mx-auto font-bold">سلة المشتريات </h1>
        <button id="canselbtn"><i class=" fa-regular fa-circle-xmark text-3xl hover:text-red-600 "></i></button>
    </div>
    <div id="theitemincadt"  class="flex flex-col-reverse gap-4">

    </div>
    <p id="totalpricehtml" class=" text-2xl font-semibold"></p>
    <a href="card.html" class="text-center bg-purple-200 rounded-lg py-2 hover:bg-purple-300">الذهاب للسلة</a>
</div>
    <!--  -->
    <!--  -->
`
}
let head =document.querySelector(".head")
head.innerHTML=headd();
