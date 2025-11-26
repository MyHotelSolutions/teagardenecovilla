<template>
    <div class="w-full h-full cursor-default">
        <div class="bg-black py-6 sm:py-8 md:py-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 w-[90vw] sm:w-[85vw] md:w-[75vw] mx-auto py-6 sm:py-10 md:py-20 gap-12 sm:gap-8 md:gap-0">
                
                <!-- Brand Section -->
                <div class=" flex flex-col gap-4 sm:gap-6 md:gap-8 sm:col-span-2 lg:col-span-4">
                    <h3 class="text-start font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight font-black sm:text-left">
                        Tea Garden Eco Villa<span class="text-teal-600">.</span>
                    </h3>
                    <p class="text-start w-full sm:w-[90%] lg:w-[75%] text-white/60 text-sm sm:text-base lg:text-lg tracking-wide sm:text-left">
                        Discover vibrant adventures right at your doorstep, 
                        then return to pure tranquility. Your perfect balance of excitement 
                        and serene relaxation awaits.
                    </p>
                </div>

                <!-- Essential Links Section -->
                <div class=" flex flex-col gap-4 sm:gap-6 md:gap-8 sm:col-span-1 lg:col-span-5 md:pt-3">
                    <h4 class="text-start text-lg sm:text-xl lg:text-lg text-white/80 leading-tight font-black sm:text-left">
                        ESSENTIAL LINKS
                    </h4>
                    <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-1 md:gap-2 sm:gap-2 w-full sm:w-auto mx-auto sm:mx-0">
                        <NuxtLink 
                            :to="item.link" 
                            v-for="item in links" 
                            class="text-start text-white/60 hover:text-white/80 sm:text-left text-sm sm:text-base lg:text-base transition-colors py-1 sm:py-0"
                        >
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Booking & Social Media Section -->
                <div class=" w-full sm:col-span-1 lg:col-span-3 flex flex-col gap-6 sm:gap-8 md:items-end">
                    <!-- Booking Platforms -->
                    <div class="flex flex-col gap-3 sm:gap-4 md:gap-6">
                        <h4 class="text-start text-lg sm:text-xl lg:text-lg text-white/80 leading-tight font-black sm:text-right">
                            BOOKING PLATFORMS
                        </h4>
                        <div class=" justify-start flex flex-row gap-8 sm:gap-4 md:gap-6 sm:justify-end">
                            <div v-for="value in bookingPlatforms" :key="value.name">
                                <Icon 
                                    :name="value.icon" 
                                    class="text-2xl sm:text-2xl lg:text-3xl text-white/40 hover:text-white/80 transition-colors"
                                ></Icon>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class=" flex flex-col gap-3 sm:gap-4 md:gap-6">
                        <h4 class="text-start text-lg sm:text-xl lg:text-lg text-white/80 leading-tight font-black sm:text-right">
                            SOCIAL MEDIA
                        </h4>
                        <div class="justify-start flex flex-row gap-6 sm:gap-4 md:gap-6 sm:justify-end lg:justify-end">
                            <div v-for="value in socialMedia" :key="value.name">
                                <Icon 
                                    :name="value.icon" 
                                    class="text-2xl sm:text-2xl lg:text-3xl text-white/40 hover:text-white/80 transition-colors"
                                ></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const links = [
    {
        name : 'Gallery',
        link : '/gallery'
    },
    {
        name : 'About us',
        link : '/aboutus'
    },
    {
        name : 'MyBooking',
        link : ''
    },
    {
        name : 'Reviews',
        link : ''
    },
    {
        name : 'Contact us',
        link : '/contactus'
    },
    {
        name : 'Place to visit',
        link : '/placetovisit'
    },
]

const bookingPlatforms = [
    {
        name : 'Booking.com',
        icon : 'simple-icons:bookingdotcom',
        link : ''
    },
    {
        name : 'Agoda.com',
        icon : 'simple-icons:tripadvisor',
        link : ''
    },
    {
        name : 'Airbnb.com',
        icon : 'mingcute:airbnb-fill',
        link : ''
    },
]

const socialMedia = [
    {
        name : 'facebook',
        icon : 'ri:facebook-box-fill',
        link : ''
    },
    {
        name : 'instagram',
        icon : 'mingcute:instagram-line',
        link : ''
    },
    {
        name : 'tiktok',
        icon : 'akar-icons:tiktok-fill',
        link : ''
    },
]

</script>