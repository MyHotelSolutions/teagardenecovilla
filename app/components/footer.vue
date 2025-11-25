<template>
    <div class="w-full h-full">
        <!-- <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/footer.jpg" alt="" class="h-full w-full object-cover"> -->
        
        <!-- text content -->
        <!-- <div class=" backdrop-blur-xs bg-white/40 border border-white/30 shadow-lg h-auto w-full absolute bottom-0"> -->
        <div class="bg-black py-12">
            <div class="grid grid-cols-12 w-[75vw] mx-auto py-20">
                <div class="flex flex-col gap-8 col-span-4">
                    <h3 class="font-serif text-4xl md:text-3xl text-white leading-tight font-black">Tea Garden Eco Villa<span class="text-4xl text-teal-600">.</span> </h3>
                    <p class="w-[75%] text-white/60 text-lg tracking-wide">Discover vibrant adventures right at your doorstep, 
                        then return to pure  tranquility. Your perfect balance of excitement 
                        and serene relaxation  awaits.Discover vibrant adventures right at your doorstep, 
                        then return to pure  tranquility. </p>
                </div>
                <!-- <div class="flex flex-col gap-8 col-span-3 pt-3"> -->
                    <div class="flex flex-col gap-8 col-span-2 pt-3">
                        <h4 class="text-4xl md:text-lg text-white/80 leading-tight font-black">BOOKING PLATFORMS</h4>
                        <div class="flex flex-row gap-6">
                            <div class="" v-for="value in bookingPlatforms">
                                <Icon :name="value.icon" class="text-3xl text-white/60"></Icon>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 col-span-2 pt-3">
                        <h4 class="text-4xl md:text-lg text-white/80 leading-tight font-black">SOCIAL MEDIA</h4>
                        <div class="flex flex-row gap-6">
                            <div class="" v-for="value in socialMedia">
                                <Icon :name="value.icon" class="text-3xl text-white/60"></Icon>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <div class="flex flex-col gap-8 col-span-4 pt-3">
                    <h4 class="text-4xl md:text-lg text-white/80 leading-tight font-black">ESSENTIAL LINKS</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <p class="text-white/60" v-for="value in links">{{ value.name }}</p>
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
        link : ''
    },
    {
        name : 'About us',
        link : ''
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
        link : ''
    },
    {
        name : 'Place to visit',
        link : ''
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