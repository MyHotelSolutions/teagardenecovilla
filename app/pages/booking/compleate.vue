<template>
    <div class="">
        <Menubarcheckout></Menubarcheckout>
        <div class="xl:pt-30 p-2 pt-30">
            <checkoutsteps :step="stepNumber"></checkoutsteps>
            
            <!-- confimation message -->
            <div class="flex flex-col justify-center items-center gap-5 h-auto w-full border max-w-7xl mx-auto my-20 lg:p-20 sm:p-6 px-2 py-6 bg-gray-100 border-gray-300 rounded-xl">
                <div class=" w-fit h-fit rounded-full leading-1 bg-teal-300 p-2">
                    <Icon name="material-symbols:check-circle" class=" text-5xl text-teal-700"></Icon>
                </div>
                <h1 class="font-serif font-black sm:text-4xl text-2xl">Booking confirmed!</h1>
                <p class="sm:text-lg text-base font-light max-w-3xl text-center">Congradulation {{ hotelstor.personalData.firstName }}. Your tranquil mountain retreat is reserved. A detail Invoice has been send to the {{ hotelstor.accountDetails.email }}. If you want to know anything just call us.</p>
                
                <!-- booking details -->
                <div class="grid md:grid-cols-3 grid-cols-2 gap-4 border w-full sm:p-8 px-2 py-8 bg-white border-gray-300 rounded-xl">
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row sm:gap-3 gap-2 items-center">
                            <Icon name="material-symbols:person-2-rounded" class="text-teal-700 sm:text-2xl text-lg"></Icon>
                            <h4 class="font-medium sm:text-lg text-sm">Guest name</h4>
                        </div>
                        <p class="font-light text-sm">Chamodi janithya</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row sm:gap-3 gap-2 items-center">
                            <Icon name="material-symbols:person-2-rounded" class="text-teal-700 sm:text-2xl text-lg"></Icon>
                            <h4 class="font-medium sm:text-lg text-sm">Check-in date</h4>
                        </div>
                        <p class="font-light text-sm">2025 Dec 12</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row sm:gap-3 gap-2 items-center">
                            <Icon name="material-symbols:person-2-rounded" class="text-teal-700 sm:text-2xl text-lg"></Icon>
                            <h4 class="font-medium sm:text-lg text-sm">Check-out date</h4>
                        </div>
                        <p class="font-light text-sm">2025 Dec 15</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row sm:gap-3 gap-2 items-center">
                            <Icon name="material-symbols:person-2-rounded" class="text-teal-700 sm:text-2xl text-lg"></Icon>
                            <h4 class="font-medium sm:text-lg text-sm">Number of night</h4>
                        </div>
                        <p class="font-light text-sm">03 nights, 02 Days</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row sm:gap-3 gap-2 items-center">
                            <Icon name="material-symbols:person-2-rounded" class="text-teal-700 sm:text-2xl text-lg"></Icon>
                            <h4 class="font-medium sm:text-lg text-sm">Payment methord</h4>
                        </div>
                        <p class="font-light text-sm">Card payment</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row sm:gap-3 gap-2 items-center">
                            <Icon name="material-symbols:person-2-rounded" class="text-teal-700 sm:text-2xl text-lg"></Icon>
                            <h4 class="font-medium sm:text-lg text-sm">Total cost</h4>
                        </div>
                        <p class="font-light text-sm">Rs. 32,000.00</p>
                    </div>
                </div>
                <button class="flex flex-row gap-4 items-center ml-auto py-2 px-6 rounded-full bg-teal-800 text-white sm:text-base text-sm">
                    <Icon name="material-symbols:download"></Icon>
                    Download the invoice
                </button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore';


const stepNumber = 2
const hotelstor = useHotelStore()

useSeoMeta({
  title: 'Reservation is Done',

  description: 'Thanks for make booking with Tea garden eco villas - morawaka. hope to see you in our premiss',

  // Robots & Canonical
  robots: 'noindex, follow',
  canonical: 'https://www.teagardenecovillas.com/booking/compleate',
})

</script>