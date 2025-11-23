<template>

    <!-- outer div -->
    <div class="w-full h-screen">
        
        <!-- inner div -->
        <div class="flex flex-col gap-12 h-[86vh] w-[75vw] mx-auto">
        
            <!-- title section -->
            <div class="flex flex-col justify-center items-center h-[20%]">
                <h1 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Stay With Us </h1>
                <p class="text-stone-500 text-lg leading-relaxed text-center w-[50%]">Step into cozy spaces embraced by the mountains. 
                    Wake each morning to sweeping views of mist-covered hills.</p>
            </div>

            <div class="flex flex-row gap-4 w-full h-[80%]">
                
                <!-- image viewer -->
                <div class="h-full w-[85%] relative">
    
                    <!-- images -->
                    <div class="h-full">
                        <img :src="allRoomImages[focusedImage]" alt="" class="h-full w-full object-cover rounded-xl">
                    </div>
    
                    <!-- description -->
                    <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-end items-start p-10">
                        
                        <div class="flex flex-col gap-4 w-[50%]">
                            
                            <!-- icon section -->
                            <div class="flex flex-row justify-around">
                                <div class="w-12 h-12 flex flex-col justify-center items-center bg-white/70 rounded-full" v-for="item in facilities">
                                    <Icon :name="item.icon" class="text-2xl"/>
                                </div>
                            </div>
                            <button class="py-2 bg-white/70 w-full rounded-lg">Boook Now</button>
                        </div>
                    </div>
                </div>

                <!-- image preview section -->
                <div class="flex flex-col gap-2 h-full w-[15%] justify-around">
                    <div class="relative h-[19%]" v-for="(item, index) in allRoomImages">
                        <img :src="item" alt="" class="rounded-md  w-full h-full" @click="showImge(index)">
                        <div class="absolute top-0 bottom-0 left-0 right-0 border-4 border-teal-800 m-1 rounded-md" v-if="index == focusedImage"></div>
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
        icon : 'lucide-lab:kettle-electric',
        name : 'kettle'
    },
    {
        icon : 'solar:hanger-2-bold',
        name : 'hangers'
    },
    {
        icon : 'guidance:showers',
        name : 'shower'
    },
    {
        icon : 'ep:hot-water',
        name : 'hot water shower'
    },
    {
        icon : 'lucide-lab:chairs-table-platter',
        name : 'balcony'
    },
    {
        icon : 'guidance:no-smoking',
        name : 'no smoking'
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