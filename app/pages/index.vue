<template>
    <div class="relative">
        <!-- menu bar -->
        <Menubar></Menubar>
        
        <!-- hero section -->
        <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" alt="" class="w-screen h-screen object-cover">
        <div class="flex flex-col justify-start items-end absolute top-0 z-10  w-full h-screen">
            <header class="relative h-screen min-h-[700px] flex items-end justify-end overflow-hidden w-full pb-22">

            <div class="container mx-auto px-6 relative z-10 text-center pt-20 ">
                <span class="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold tracking-[0.2em] uppercase mb-6 animate-fade-in-up w-fit">
                Welcome to Paradise
                </span>
                <div class="flex flex-col gap-5 justify-center items-center">
                    <h1 class="font-serif text-5xl md:text-7xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-lg">
                    Breathe in the
                    <span class=" text-emerald-300">Mountain Air</span>
                    </h1>
                    <Button variant="primary" class="w-fit">
                        Book Now
                    </Button>
                </div>
            </div>
            </header>
        </div>

        <!-- introduction gallery -->
        <HomeIntrogallery></HomeIntrogallery>

        <!-- amenities -->
        <div class="flex flex-col justify-center gap-25 h-[60vh] bg-[#fafaf9]">
            <div class="flex flex-col justify-center gap-12 h-[86vh] w-full mx-auto">
                <div class="flex flex-col justify-center items-center gap-2">
                    <p class="uppercase text-center text-[#059699] transition-colors text-lg whitespace-nowrap font-semibold">Curated comforts</p>
                    <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-[500] tracking-wider">Villa Essentials</h3>
                    <hr class="w-[6vw] h-1.5 rounded-full bg-[#059699]">
                </div>

                <!-- outer layer -->
                <div class="grid grid-cols-6 w-[90vw] mx-auto gap-4">
                    <!-- card -->
                    <div class="group flex flex-col items-center gap-6 p-14 rounded-xl hover:bg-teal-800 transition-colors duration-300 border border-gray-200 " v-for="item in amenitiesList">
                        <!-- icon container -->
                        <div class="flex flex-col justify-center items-center p-2 rounded-full w-16 h-16 bg-[#D1FAE5] group-hover:bg-white transition-colors duration-300">
                            <!-- icon -->
                            <Icon :name="item.icon" class="text-3xl text-[#047857] transition-colors duration-300"/>
                        </div>
                        <!-- facility name -->
                        <p class="text-center group-hover:text-white transition-colors text-lg duration-300 whitespace-nowrap font-medium">{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <HomeVideo></HomeVideo>

        <HomeRooms2></HomeRooms2>
        
        <HomeGallery></HomeGallery>
        
        <HomeReviews></HomeReviews>
        
        <HomeFaq></HomeFaq>
        
        <HomePlaceToVisit></HomePlaceToVisit>

        <Booknow></Booknow>
                
        <Footer></Footer>
        

        <!-- <div class="h-[2000px] bg-amber-200"></div> -->


    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore';

const hotelStore = useHotelStore()

const amenitiesList = [
    {
        name : 'Parking',
        icon : 'material-symbols:directions-car-outline-sharp'
    },
    {
        name : 'Daily Cleaning',
        icon : 'mdi:broom'
    },
    {
        name : 'AC',
        icon : 'mdi:snowflake'
    },
    {
        name : 'Breakfast',
        icon : 'streamline-plump:fried-egg-breakfast'
    },
    {
        name : 'Picnic Area',
        icon : 'majesticons:basket-2-line'
    },
    {
        name : 'Airport Shuttle',
        icon : 'streamline:airport-plane-solid'
    },
]

const placeToVist = [
    {
        name : 'Dellawa Ela',
        image : [
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawa/DSC00521.jpg',
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawa/DSC00523.jpg'
        ],
        description : '',
        location : 'Deniyaya'
    },
    {
        name : 'Dellawa waterfall',
        image : [
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawaWatterFall/DSC00514.jpg',
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawaWatterFall/DSC00518.jpg'
        ],
        description : '',
        location : 'Deniyaya'
    },
    {
        name : 'Duli ella',
        image : [
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawa/DSC00521.jpg',
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawa/DSC00523.jpg'
        ],
        description : '',
        location : 'Neluwa'
    },
    {
        name : 'Getabaruwa Rajamaha wiharaya',
        image : [
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/getabaruwa/DSC00591.jpg',
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/getabaruwa/DSC00608.jpg'
        ],
        description : '',
        location : 'Getabaruwa'
    },
    {
        name : 'Three Arch Bridge',
        image : [
            'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/threeArchBridge/WhatsApp%20Image%202025-11-08%20at%2022.21.03_2cd2a0ba.jpg',
        ],
        description : '',
        location : 'Getabaruwa'
    },
]

</script>
