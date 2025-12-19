<template>
    <!-- outer layer -->
    <div class="w-full min-h-[40vh] md:min-h-[50vh] bg-teal-800 flex flex-col justify-center items-center gap-6 md:gap-12 px-4 py-8 md:py-0">
        <div class="flex flex-col gap-3 md:gap-4 justify-center items-center text-center max-w-4xl">
            <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl  leading-snug md:leading-tight font-medium tracking-wide text-white">
                Ready for your mountain escape?
            </h3>
            <p class="text-base sm:text-lg md:text-xl leading-relaxed md:leading-tight tracking-wide text-white/90 max-w-2xl">
                Book directly through our website for exclusive offers
            </p>
        </div>
        <button class="bg-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl" @click="bookNow">
            Book Your Stay Now
        </button>
    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore';


const hotelstore = useHotelStore()
const router = useRouter()

const bookNow = () => {
    router.push('/#booknow')
    hotelstore.bookingView = true
}

</script>