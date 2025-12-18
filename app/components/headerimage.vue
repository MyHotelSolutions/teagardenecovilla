<template>
    <div class="h-[40vh] sm:h-[44vh] md:h-[48vh] lg:h-[44vh] w-full relative">
        <NuxtImg 
            provider="imagekit" 
            :src="imagestore.pool[0]" 
            :quality="qualityCal" 
            sizes="175vw md:120vw"
            preset="cover" 
            class="w-full h-full object-cover" />

        <!-- background bluer -->
        <div class="absolute top-0 left-0 right-0 h-[50%] bg-linear-to-b from-black to-slate-50/0 w-full"></div>
        
        <!-- text content -->
        <div class="flex flex-col justify-end pb-4 items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 absolute top-0 bottom-0 left-0 right-0 px-4 sm:px-6 md:px-8">
            <h1 class="font-serif text-2xl sm:text-3xl md:text-3xl text-white leading-tight font-black text-center">
                {{ title }}
            </h1>
            <p class="text-white text-sm sm:text-base md:text-lg leading-relaxed text-center w-[80%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[30%]">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useImageStore } from '@/store/imagestore';

defineProps({
  title: String,
  description: String
})

const qualityCal = ref(20)
const imagestore = useImageStore()

const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 45
    }else if(width >= 1280){
        qualityCal.value = 40
    }else if(width >= 1024){
        qualityCal.value = 35
    }else if(width >= 768){
        qualityCal.value = 30
    }else if(width >= 640){
        qualityCal.value = 18
    }else if(width < 640){
        qualityCal.value = 16
    }
    console.log(qualityCal.value)
}

onBeforeMount(() => {
    calculateImageQuality()
})

</script>