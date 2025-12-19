<template>
    <div class="relative">
        <!-- menu bar -->
        <Menubar></Menubar>
        
        <div class="relative w-full h-screen min-h-[600px] sm:min-h-[700px]">
            <!-- Background Image -->
            <NuxtImg 
                provider="imagekit" 
                :src="imagestore.accomodationview[8]" 
                :quality="qualityCal" 
                sizes="225vw md:200vw"
                preset="cover" 
                class="w-full h-full object-cover" />
            
            <!-- Content Overlay -->
            <div class="flex flex-col justify-start items-end absolute top-0 z-10 w-full h-full">
                <header class="relative h-full flex items-end justify-end overflow-hidden w-full pb-12 sm:pb-16 md:pb-20 lg:pb-22">

                    <div class="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center pt-12 sm:pt-16 md:pt-20 w-full">
                        
                        <!-- booking search box -->
                        <Searchbox v-if="bookingView"></Searchbox>

                        <!-- Initial content -->
                        <div class=" border-white" v-if="!bookingView">
                            <!-- Badge -->
                            <span class="inline-block py-2 px-4 sm:py-1 sm:px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6 animate-fade-in-up w-fit mx-auto">
                                Welcome to Paradise
                            </span>
                            
                            <!-- Main Content -->
                            <div class="flex flex-col justify-center items-center px-2 sm:px-0">
                                <!-- Heading -->
                                <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-snug sm:leading-tight mb-4 sm:mb-6 drop-shadow-lg max-w-4xl mx-auto">
                                    Breathe in the
                                    <span class="inline-block text-emerald-300 mt-1 sm:mt-0">Mountain Air</span>
                                </h1>
                                
                                <!-- Button -->
    `                            <Button variant="primary" class="w-fit text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4" @click="bookingView = true">
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                    
`                    <!-- Gradient Overlay for Better Text Readability -->
                    <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </header>
            </div>
        </div>


        <!-- introduction gallery -->
        <HomeIntrogallery></HomeIntrogallery>

        <!-- amenities -->
        <div class="flex flex-col justify-center gap-8 sm:gap-16 md:gap-20 lg:gap-25 min-h-[75vh] h-auto bg-[#fafaf9] py-8 sm:py-0">
            <div class="flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-20 h-auto sm:min-h-[86vh] w-full mx-auto px-4 sm:px-0">
                
                <!-- Title Section -->
                <div class="flex flex-col justify-center items-center gap-4 text-center">
                    <h3 class="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight font-black text-center">Villa Essentials</h3>
                    <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[6vw] h-1 sm:h-1.5 rounded-full bg-[#059699]">
                    <p class="text-sm sm:text-base font-light leading-relaxed text-gray-700 overflow-y-auto max-w-lg text-center">Key comforts unveiled: Private pool, in-house chef, AC rooms, hot water, and thoughtful amenities for ultimate relaxation in paradise.</p>
                </div>

                <!-- all amenity list -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full max-w-7xl mx-auto gap-3 sm:gap-4 px-4">
                    
                    <!-- single Card -->
                    <div class="group flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 rounded-lg sm:rounded-xl hover:bg-teal-800 transition-colors duration-300 bg-white cursor-pointer h-40 sm:h-auto" 
                        v-for="item in amenitiesList" 
                        :key="item.id">
                        
                        <!-- Icon Container -->
                        <div class="flex flex-col justify-center items-center p-2 rounded-full w-18 h-18 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-800 group-hover:bg-white transition-colors duration-300">
                            <!-- Icon -->
                            <Icon :name="item.icon" class="text-3xl sm:text-2xl md:text-3xl text-white group-hover:text-teal-800 transition-colors duration-300"/>
                        </div>
                        
                        <!-- Facility Name -->
                        <p class="text-center group-hover:text-white transition-colors text-xs sm:text-sm md:text-base lg:text-lg duration-300 whitespace-nowrap font-medium break-words">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <HomeVideo></HomeVideo>

        <HomeRooms2></HomeRooms2>
        
        <HomeGallery></HomeGallery>
        
        <HomeReviews></HomeReviews>

        <HomeActivities></HomeActivities>

        <HomeFaq></HomeFaq>
        
        <HomePlaceToVisit></HomePlaceToVisit>

        <Booknow></Booknow>
                
        <Footer></Footer>
        

        <!-- <div class="h-[2000px] bg-amber-200"></div> -->


    </div>
</template>

<script setup>
// import { mapGamepadToXbox360Controller } from '@vueuse/core';
import { useHotelStore } from '~/store/hotelstore';
import { useImageStore } from '@/store/imagestore';



const imagestore = useImageStore()
const hotelStore = useHotelStore()
const bookingView = ref(false)
const adultCount = ref(0)
const childCount = ref(0)
const qualityCal = ref(null)

// booking date reage controll
const today = ref(null)
const maxBookingDate = ref(null)
// booking date reage controll - date inputbox tracking
const checkin = ref(null)
const checkout = ref(null)
// booking date reage controll - min and max controll in the input boxes
const breakPoint = ref(null) // this is only use for set the show selectable datas after select checkin or checkout

const amenitiesList = [
    {
        name : 'Parking',
        icon : 'material-symbols:directions-car-outline-sharp'
    },
    {
        name : 'Restaurent',
        icon : 'material-symbols:food-bank'
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

const minCompute = computed(() => {
    return `${today.value.getFullYear()}-${(today.value.getMonth()+1).toString().padStart(2,'0')}-${today.value.getDate().toString().padStart(2,'0')}`
})

const maxCompute = computed(() => {
    return `${maxBookingDate.value.getFullYear()}-${(maxBookingDate.value.getMonth()+1).toString().padStart(2,'0')}-${maxBookingDate.value.getDate().toString().padStart(2,'0')}`
})

const setChildCount = (action) => {
    if(action == 'add'){
        if((childCount.value + adultCount.value) < 16){
            childCount.value += 1
        }
    }else if(action == 'remove'){
        if((childCount.value + adultCount.value) != 0){
            childCount.value -= 1
        }
    }
}
const setAdultCount = (action) => {
    console.log('trigger')
    if(action == 'add'){
        if((childCount.value + adultCount.value) < 16){
            adultCount.value += 1
        }
    }else if(action == 'remove'){
        if((childCount.value + adultCount.value) != 0){
            adultCount.value -= 1
        }
    }
}


const searchReset = () => {
    checkin.value = null
    checkout.value = null
    today.value = new Date()
    maxBookingDate.value = new Date()
    maxBookingDate.value.setDate(today.value.getDate() + 180)
    breakPoint.value = null
    adultCount.value = 0
    childCount.value = 0
}

const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 75
    }else if(width >= 1280){
        qualityCal.value = 70
    }else if(width >= 1024){
        qualityCal.value = 65
    }else if(width >= 768){
        qualityCal.value = 60
    }else if(width >= 640){
        qualityCal.value = 55
    }else if(width < 640){
        qualityCal.value = 50
    }
    console.log(qualityCal.value)
}

watch([checkin, checkout], ([newCheckIn, newCheckOut], [oldCheckIn, oldChckOut]) => {
    if(newCheckIn !== oldCheckIn){
        breakPoint.value = new Date(newCheckIn)
        today.value = new Date(newCheckIn)
    }else if(newCheckOut !== oldChckOut){
        breakPoint.value = new Date(newCheckOut)
        maxBookingDate.value = new Date(newCheckOut)
    }
})

onMounted(() => {
    calculateImageQuality()
})

onBeforeMount(() => {
    today.value = new Date()
    // checkin.value = `${today.value.getFullYear()}-${(today.value.getMonth()+1).toString().padStart(2,'0')}-${today.value.getDate().toString().padStart(2,'0')}` //load today as min date of the checkout date when page loaded
    
    // to calcute the final booking date
    maxBookingDate.value = new Date()
    maxBookingDate.value.setDate(today.value.getDate() + 180)
    // checkout.value = `${maxBookingDate.value.getFullYear()}-${(maxBookingDate.value.getMonth()+1).toString().padStart(2,'0')}-${maxBookingDate.value.getDate().toString().padStart(2,'0')}`
})


</script>
