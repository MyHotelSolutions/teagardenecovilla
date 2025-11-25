<template>

    <!-- outer div -->
    <div class="w-full h-screen flex items-center">
        
        <!-- inner div -->
        <div class="flex flex-col gap-15 h-[80vh] w-[75vw] mx-auto">
        
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2">
                <p class="uppercase text-center text-[#059699] transition-colors text-lg whitespace-nowrap font-semibold">Accomodation</p>
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Stay Amidst the Mountains</h3>
                <hr class="w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            <div class="flex flex-row gap-4 w-full h-[80%]">
                
                <!-- image viewer -->
                <div class="h-full w-[80%] relative">
    
                    <!-- images -->
                    <div class="h-full">
                        <img :src="allRoomImages[focusedImage]" alt="" class="h-full w-full object-cover rounded-xl">
                    </div>
    
                    <!-- description -->
                    <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-end items-start p-10">
                        
                        <div class="flex flex-col gap-4 w-[36%]">
                            
                            <!-- icon section -->
                            <div class="flex flex-row justify-around">
                                <div class="w-12 h-12 flex flex-col justify-center items-center bg-white rounded-full" v-for="item in facilities">
                                    <Icon :name="item.icon" class="text-2xl text-[#047857]"/>
                                </div>
                            </div>
                            <!-- <button class="py-2 bg-white/70 w-full rounded-lg">Boook Now</button> -->
                            <Button variant="secondary" class="py-2 px-6 text-sm rounded-full border-white border text-[#047857]/20">
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>

                <!-- image preview section -->
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