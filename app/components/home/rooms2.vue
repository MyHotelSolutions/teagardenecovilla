<!-- <template>

    outer div
    <div class="w-full h-screen flex items-center">
        
        inner div
        <div class="flex flex-col gap-15 h-[80vh] w-[75vw] mx-auto">
        
            title section
            <div class="flex flex-col justify-center items-center gap-2">
                <p class="uppercase text-center text-[#059699] transition-colors text-lg whitespace-nowrap font-semibold">Accomodation</p>
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Stay Amidst the Mountains</h3>
                <hr class="w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            <div class="flex flex-row gap-4 w-full h-[80%]">
                
                image viewer
                <div class="h-full w-[80%] relative">
    
                    images
                    <div class="h-full">
                        <img :src="allRoomImages[focusedImage]" alt="" class="h-full w-full object-cover rounded-xl">
                    </div>
    
                    description
                    <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-end items-start p-10">
                        
                        <div class="flex flex-col gap-4 w-[36%]">
                            
                            icon section
                            <div class="flex flex-row justify-around">
                                <div class="w-12 h-12 flex flex-col justify-center items-center bg-white rounded-full" v-for="item in facilities">
                                    <Icon :name="item.icon" class="text-2xl text-[#047857]"/>
                                </div>
                            </div>
                            <Button variant="secondary" class="py-2 px-6 text-sm rounded-full border-white border text-[#047857]/20">
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>

                image preview section
                <div class="flex flex-col gap-2 h-full w-[15%] justify-around">
                    <div class="relative h-[19%]" v-for="(item, index) in allRoomImages">
                        <img :src="item" alt="" class="rounded-md  w-full h-full" @click="showImge(index)">
                        <div class="absolute top-0 bottom-0 left-0 right-0 border-4 border-[#059699] rounded-md" v-if="index == focusedImage"></div>
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/40 rounded-md" v-if="index != focusedImage"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template> -->

<template>
    <!-- outer div -->
    <div class="w-full h-[80vh] sm:h-[95vh] lg:h-screen flex items-center py-8 sm:py-0">
        
        <!-- inner div -->
        <div class="flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-15 h-auto sm:h-[80vh] w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto px-4 sm:px-0">
        
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2 text-center">
                <p class="uppercase text-[#059699] transition-colors text-base sm:text-lg whitespace-nowrap font-semibold">Accommodation</p>
                <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight font-black">Stay Amidst the Mountains</h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full h-auto lg:h-[80%]">
                
                <!-- image viewer -->
                <div class="h-64 sm:h-80 md:h-96 lg:h-full w-full lg:w-full relative order-2 lg:order-1">
    
                    <!-- images -->
                    <div class="h-full">
                        <img :src="allRoomImages[focusedImage]" alt="Room accommodation image" class="h-full w-full object-cover rounded-xl lg:rounded-xl">
                    </div>
    
                    <!-- description -->
                    <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-t from-black/20 to-transparent rounded-xl">
                        
                        <div class="flex flex-col gap-3 sm:gap-4 w-full lg:w-[36%]">
                            
                            <!-- icon section -->
                            <div class="flex flex-row justify-start gap-2 sm:gap-3 overflow-x-auto pb-2 lg:justify-around lg:overflow-visible">
                                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex flex-col justify-center items-center bg-white rounded-full flex-shrink-0" 
                                     v-for="item in facilities" :key="item.name">
                                    <Icon :name="item.icon" class="text-lg sm:text-xl lg:text-2xl text-[#047857]"/>
                                </div>
                            </div>
                            
                            <Button variant="secondary" class="py-2 px-4 sm:px-6 text-xs sm:text-sm rounded-full border-white border text-[#047857] bg-white/90 hover:bg-white transition-colors">
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>

                <!-- image preview section -->
                <div class="flex lg:flex-col gap-2 sm:gap-3 h-auto lg:h-full w-full lg:w-[15%] justify-start lg:justify-around order-1 lg:order-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                    <div class="relative h-16 sm:h-20 lg:h-[18%] w-16 sm:w-20 lg:w-full flex-shrink-0 lg:flex-shrink" 
                         v-for="(item, index) in allRoomImages" :key="index">
                        <img :src="item" alt="Room thumbnail" class="rounded-md w-full h-full object-cover cursor-pointer" @click="showImge(index)">
                        <div class="absolute top-0 bottom-0 left-0 right-0 border-2 sm:border-3 lg:border-4 border-[#059699] rounded-md" v-if="index == focusedImage"></div>
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/40 rounded-md transition-opacity hover:bg-black/20" v-if="index != focusedImage"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>


const focusedImage = ref(0)
let rotation = null
const facilities = [
    {
        icon : 'mdi:kettle-outline',
        name : 'kettle'
    },
    {
        icon : 'solar:hanger-2-bold',
        name : 'hangers'
    },
    {
        icon : 'ep:hot-water',
        name : 'hot water shower'
    },
    {
        icon : 'iconoir:balcony',
        name : 'balcony'
    },
    {
        icon : 'ic:outline-live-tv',
        name : 'television'
    },
    {
        icon : 'material-symbols:android-wifi-4-bar-rounded',
        name : 'wifi'
    }
]

const allRoomImages = [
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00666.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00672.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00478%20(1).jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/washroom&fitting/DSC00493.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/washroom&fitting/DSC00453.jpg',

]


const autoRotation = () => {
  rotation = setInterval(() => {
    focusedImage.value = focusedImage.value >= allRoomImages.length - 1 
      ? 0 
      : focusedImage.value + 1
  }, 3500)
}

// Cleanup at component level
onUnmounted(() => clearInterval(rotation))

const showImge = (index) => {
    focusedImage.value = index
}

onBeforeMount(() => {
    autoRotation()
})

</script>