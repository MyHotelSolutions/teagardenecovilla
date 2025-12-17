<template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-[#fafaf9] py-18 sm:py-20 p-2">
        <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto sm:h-auto max-w-7xl w-full mx-auto">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight font-black text-center">
                    Moments Captured
                </h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] xl:w-[6vw] h-1 rounded-full bg-[#059699]">
                <p class="text-sm sm:text-base font-light leading-relaxed text-gray-700 overflow-y-auto max-w-lg text-center">Explore our villa through guests' eyes: breathtaking views, serene pools, lush greenery, and cozy interiors captured in stunning photos. Let these images inspire your dream escape!</p>
            </div>

            <!-- image gallery -->
            <!-- for mobile screens -->
            <div class="grid grid-cols-5 gap-2 h-[68vh]" v-if="screenSize < 768 && screenSize != null">
                <!-- for lager screen -->
                <div class="rounded-xl duration-300 h-full" v-for="(item, index) in imageList.slice(0,5).length">
                    <NuxtLink to="/gallery" class="flex flex-row justify-center items-center h-full"> 
                        <NuxtImg 
                            provider="imagekit" 
                            :src="imageList[index]" 
                            :quality="qualityCal" 
                            sizes="175vw md:120vw"
                            preset="cover" 
                            class="w-full object-cover rounded-2xl hover:scale-110 active:scale-110 duration-300" 
                            :class="index == 0 || index == 4 ? 'h-[84%]' : index == 1 || index == 3 ? 'h-[92%]' : index == 2  ? 'h-full' : ''"
                        />
                    </NuxtLink>
                </div>
            </div>
            
            <!-- for lager screens -->
            <div class="grid grid-cols-7 gap-2 sm:gap-4 h-[65vh]" v-if="screenSize > 768 && screenSize != null">
                <!-- for lager screen -->
                <div class="rounded-xl duration-300 h-full" v-for="(item, index) in imageList.slice(0,7).length">
                    <NuxtLink to="/gallery" class="flex flex-row justify-center items-center h-full"> 
                        <NuxtImg 
                            provider="imagekit" 
                            :src="imageList[index]" 
                            :quality="qualityCal" 
                            sizes="175vw md:120vw"
                            preset="cover" 
                            class="w-full object-cover rounded-2xl hover:scale-110 active:scale-110 duration-300" 
                            :class="index == 0 || index == 6 ? 'h-[76%]' : index == 1 || index == 5 ? 'h-[84%]' : index == 2 || index == 4 ? 'h-[92%]' : 'h-full'"
                        />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useImageStore } from '~/store/imagestore';


const imagestor = useImageStore()
const qualityCal = ref(20)
const screenSize = ref(null)

const imageList = ref(
    [
        imagestor.restaurant[4],
        imagestor.pool[1],
        imagestor.garden[2],
        imagestor.dinner[3],
        imagestor.accomodationview[3],
        imagestor.insiderooms[1],
        imagestor.breakfast[8],
    ]
)



const calculateImageQuality = () => {
    
    const width = window.innerWidth
    screenSize.value = width

    if(width >= 1536){
        qualityCal.value = 15
    }else if(width >= 1280){
        qualityCal.value = 13
    }else if(width >= 1024){
        qualityCal.value = 10
    }else if(width >= 768){
        qualityCal.value = 8
    }else if(width >= 640){
        qualityCal.value = 6
    }else if(width < 640){
        qualityCal.value = 3
    }
    console.log(qualityCal.value)
}

onBeforeMount(() => {
    calculateImageQuality()
})

</script>