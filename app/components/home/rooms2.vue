<template>
        
        <!-- inner div -->
        <div class="flex flex-col gap-6 h-screen max-w-7xl w-full mx-auto px-4 py-20">
        
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2 text-center h-2/10">
                <!-- <p class="uppercase text-[#059699] transition-colors text-base sm:text-lg whitespace-nowrap font-semibold">Accommodation</p> -->
                <h3 class="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight font-black text-center">Stay Amidst the Mountains</h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[6vw] h-1 rounded-full bg-[#059699]">
                <p class="text-sm sm:text-base font-light leading-relaxed text-gray-700 overflow-y-auto max-w-xl text-center">Discover our spacious, inviting rooms: Comfortable beds, modern amenities, and serene views for ultimate relaxation. Guest favorites inside!</p>
            </div>


            <!-- image content section -->
            <div class="flex flex-col lg:flex-row gap-4 h-8/10">
                <!-- main images -->
                <div class=" w-full lg:w-[87%] relative h-full">
                    <div class="h-full absolute top-0 left-0 right-0 bottom-0">
                        <NuxtImg 
                            provider="imagekit" 
                            :src="allRoomImages[focusedImage]" 
                            :quality="qualityCal" 
                            sizes="200vw md:250vw"
                            preset="cover" 
                            class="h-full w-full object-cover rounded-xl lg:rounded-xl" 
                        />
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
                
                <!-- image thumbnails -->
                <div class="w-full lg:w-[12%] flex flex-row lg:flex-col justify-between gap-4 h-15 md:h-30 lg:h-full my-auto">
                    <div class=" lg:h-full w-full relative" v-for="(image, index) in allRoomImages" @click="selectRoomImageManual(index)">
                        <NuxtImg 
                                provider="imagekit" 
                                :src="image" 
                                :quality="qualityCal" 
                                sizes="40vw md:50vw"
                                preset="cover" 
                                class="h-full w-full object-cover rounded-lg" 
                            />
                        <div class="absolute top-0 left-0 right-0 bottom-0 rounded-lg" :class="index == focusedImage ? 'bg-black/10' : 'bg-black/70'"></div>
                    </div>
                </div>

            </div>
        </div>
</template>

<script setup>
import { useImageStore } from '@/store/imagestore'

const imagestore = useImageStore()

const focusedImage = ref(0)
const qualityCal = ref(20)
const mainImageQualityCal = ref(20)
let rotation = null
const rotationRouds = ref(0)
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
    imagestore.insiderooms[1],
    imagestore.insiderooms[4],
    imagestore.insiderooms[5],
    imagestore.bathroomandfitting[3],
    imagestore.insiderooms[16],

]


const autoRotation = () => {
  rotation = setInterval(() => {
    if(rotationRouds.value != 2){
        if(focusedImage.value >= allRoomImages.length - 1){
            focusedImage.value = 0
            rotationRouds.value += 1
        }else if(focusedImage.value < allRoomImages.length - 1){
            focusedImage.value += 1
        }
    }else if(rotationRouds.value == 2){
        clearInterval(rotation)
    }
  }, 2800)
}

// Cleanup at component level
onUnmounted(() => clearInterval(rotation))

const selectRoomImageManual = (index) => {
    focusedImage.value = index
}

const mainImageQuality = () => {
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 30
    }else if(width >= 1280){
        qualityCal.value = 25
    }else if(width >= 1024){
        qualityCal.value = 20
    }else if(width >= 768){
        qualityCal.value = 18
    }else if(width >= 640){
        qualityCal.value = 16
    }else if(width < 640){
        qualityCal.value = 14
    }
}

const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 14
    }else if(width >= 1280){
        qualityCal.value = 12
    }else if(width >= 1024){
        qualityCal.value = 10
    }else if(width >= 768){
        qualityCal.value = 8
    }else if(width >= 640){
        qualityCal.value = 6
    }else if(width < 640){
        qualityCal.value = 4
    }
}

onBeforeMount(() => {
    calculateImageQuality()
    mainImageQuality()
    autoRotation()
})

</script>