<template>
    <div class="flex flex-col justify-center items-center w-full h-auto sm:h-auto bg-[#fafaf9] py-18 sm:py-20">
        <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto sm:h-auto w-[96vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight font-black text-center">
                    Moments Captured
                </h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] xl:w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            <!-- image gallery -->
            <div class="grid grid-cols-6 gap-3 sm:gap-4 sm:min-h-[400px] md:min-h-[500px] sm:h-[60vh] h-[45vh]">
                <div class="rounded-xl duration-300 h-full" v-for="(item, index) in imageList.length">
                    <NuxtLink to="/gallery" class="flex flex-row justify-center items-center h-full"> 
                        <NuxtImg 
                            provider="imagekit" 
                            :src="imageList[index]" 
                            :quality="qualityCal" 
                            preset="cover" 
                            class="w-full object-cover rounded-2xl hover:scale-110 active:scale-110 duration-300" 
                            :class="index == 0 || index == 5 ? 'h-[84%]' : index == 1 || index == 4 ? 'h-[92%]' : index == 2 || index == 3 ? 'h-full' : ''"
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

const imageList = ref(
    [
        imagestor.restaurant[4],
        imagestor.pool[1],
        imagestor.garden[2],
        imagestor.dinner[3],
        imagestor.accomodationview[3],
        imagestor.winetable[2],
    ]
)



const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 35
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