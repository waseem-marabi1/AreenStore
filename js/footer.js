function footerr(){
    return ` <!-- floot -->
         <div class="bg-gradient-to-t via-purple-200/50 from-purple-200/60 to-white">
        <div class="p-5 mt-20 grid gap-4 lg:grid-cols-4  ">
            <!--  -->
            <div class="space-y-4">
                <div class="flex items-center gap-4">

                    <div>
                        <img src="img/areen-logo.jpeg" class="w-20 h-20 rounded-full object-cover" alt="">
                    </div>
                    <div class="text-right">
                        <h1 class="font-['Great_Vibes'] text-5xl text-purple-900 italic ">
                            Areen
                        </h1>

                        <p class="font-['Tajawal'] text-gray-600 text-sm tracking-[5px] uppercase mt-2">
                            Store
                        </p>
                    </div>
                </div>
                <div class="text-gray-500 font-medium text-lg mt-3">
                    <p>متجر متكامل للورد والهدايا الفاخرة لجميع المناسبات — لمسة أنيقة لكل لحظة مميزة.</p>
                </div>
            </div>


            <div class="space-y-4">
                <h1 class="text-2xl text-purple-900 font-bold">روابط سريعة</h1>
                <ul class=" flex flex-col gap-2 text-gray-500 font-semibold ">

                    <li class="hover:-translate-x-2 transition-all duration-200">
                        <a href="shop.html" class="">
                            <i class="fa-solid fa-angle-left ml-2"></i>
                            المتجر
                        </a>
                    </li>
                    <li class="hover:-translate-x-2 transition-all duration-200"> <a href="howme.html" class="">
                            <i class="fa-solid fa-angle-left ml-2"></i>
                            من نحن</a>
                    </li>
                    <li class="hover:-translate-x-2 transition-all duration-200"> <a href="contact.html" class="">
                            <i class="fa-solid fa-angle-left ml-2"></i>
                            تواصل معنا</a>
                    </li>
                    <li class="hover:-translate-x-2 transition-all duration-200"> <a href="card.html" class="">
                            <i class="fa-solid fa-angle-left ml-2"></i>
                            سلة التسوق</a>
                    </li>
                </ul>
            </div>
            <div class="space-y-4">
                <h1 class="text-2xl text-purple-900 font-bold">تواصل معنا</h1>
                <ul class=" flex flex-col gap-2 text-gray-500 font-semibold ">
                    <li class="hover:-translate-x-2 transition-all duration-200"><i
                            class="fa-solid fa-angle-left ml-2"></i><a href="https://wa.me/972569506109"
                            target="_blank">972569506109</a></li>
                    <li class="hover:-translate-x-2 transition-all duration-200"><i
                            class="fa-solid fa-angle-left ml-2"></i><a
                            href="https://www.instagram.com/areen.store19?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank">AreenStore</a></li>
                    <li class="hover:-translate-x-2 transition-all duration-200"><i
                            class="fa-solid fa-angle-left ml-2"></i><a>فلسطين\جنين</a></li>
                </ul>
            </div>
            <div class="space-y-4">
                <h1 class="text-2xl text-purple-900 font-bold">تابعنا</h1>
                <div class="flex gap-5 text-center ">
                    <a href="https://www.instagram.com/areen.store19?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank">
                        <div
                            class=" bg-white shadow-md flex justify-center items-center shadow-black rounded-full size-12 cursor-pointer hover:bg-purple-800 hover:text-white transition-all duration-200">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@areen.store19?is_from_webapp=1&sender_device=pc" target="_blank">
                        <div
                            class=" bg-white shadow-md flex justify-center items-center shadow-black rounded-full size-12 cursor-pointer hover:bg-purple-800 hover:text-white transition-all duration-200">
                            <i class="fa-brands fa-tiktok"></i>
                        </div>
                    </a>
                </div>
                <p class="mt-4">اشترك في نشرتنا لتصلك أحدث المجموعات والعروض.</p>
            </div>

        </div>
        <hr>
        <div class="flex p-6 justify-between">
            <p class=" ">© 2026 Areen Store — جميع الحقوق محفوظة</p>
            <p class="tracking-[2px] "><i class="fa-solid fa-heart text-red-600"></i> Development by <a
                    href="https://www.linkedin.com/in/waseem-marabi-b17b06326/" target="_blank"
                    class="text-purple-700 font-bold"> waseem mrabi</a> </p>
        </div>
        </div>
       <a href="https://www.instagram.com/areen.store19?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Instagram"
   title="تابعنا على Instagram"
   class="flex justify-center items-center fixed bottom-4 right-4 z-50
          w-14 h-14 rounded-full shadow-lg
          bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
          hover:scale-110 transition duration-300">

    <i class="fa-brands fa-instagram text-white text-3xl"></i>
</a>
        
        `
}
let footer = document.querySelector(".footer")
footer.innerHTML = footerr()