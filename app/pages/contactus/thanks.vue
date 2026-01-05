<template>
    <div class="">
        <Menubar class="bg-black"></Menubar>
        
        <!-- content -->
        <div class="flex flex-col justify-center items-center w-full h-screen bg-teal-800">
            <div class="flex flex-col justify-center items-center gap-5 text-white">
                <div class="flex flex-col gap-4 justify-center items-center" v-if="hotelstore.formsubmit == true">
                    <Icon name="material-symbols:check-circle-rounded" class="text-5xl lg:text-7xl"></Icon>
                    <h1 class="font-black text-2xl sm:text-3xl lg:text-4xl">Thankyou !</h1>
                    <p class="font-light text-lg sm:text-lg lg:text-xl max-w-lg text-center p-4">Appreciate Interest about our villa. we will right back as soon as posible. <br>do you want imideate help ?</p>
                </div>
                <div class="flex flex-col gap-0 sm:gap-4 justify-center items-center" v-if="hotelstore.formsubmit == false">
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div class="flex flex-col justify-center items-center bg-white/20 border-white rounded-full w-16 h-16">
                            <Icon name="ic:round-warning" class="text-5xl lg:text-5xl"></Icon>
                        </div>
                        <h1 class="font-black text-2xl sm:text-3xl lg:text-4xl">Sorry</h1>
                    </div>
                    <p class="font-light text-lg sm:text-lg lg:text-xl max-w-lg text-center p-4">Something go wrong. pleace try to contact <br>using bellow methords.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 pt-10">
                    <a href="tel:+1-800-555-0199">
                        <button class="flex flex-row justify-center items-center gap-2 border-2 border-white bg-white text-teal-800 font-semibold py-2 px-4 rounded-full text-base whitespace-nowrap">
                            <Icon name="material-symbols:add-call-rounded" class="text-xl"></Icon>    
                            Dirrect calls
                        </button>
                    </a>
                    <a href="https://wa.me/0787389913">
                        <button class="flex flex-row justify-center items-center gap-2 border-2 border-white bg-white text-teal-800 font-semibold py-2 px-4 rounded-full text-base whitespace-nowrap">
                            <Icon name="ic:baseline-whatsapp" class="text-xl"></Icon>    
                            WhatsApp
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script setup>
import { useHotelStore } from '@/store/hotelstore';


definePageMeta({
    middleware : 'thanks-router'
})

const hotelstore = useHotelStore()

useSeoMeta({
  title: 'Thanks to Contact Us | Tea Garden Eco Villas Morawaka',

  description: 'Thanks for contact us. we will respons as soon as posible',  // 148 characters

  // Robots & Canonical
  robots: 'noindex, nofollow',
  canonical: 'https://www.teagardenecovillas.com/contactus/thanks', 

})

</script>