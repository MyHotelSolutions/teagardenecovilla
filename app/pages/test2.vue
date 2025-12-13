<template>
    <div class="w-full h-screen">
        <NuxtImg 
            provider="imagekit" 
            :src="imagestore.accomodationview[8]" 
            :quality="qualityCal" 
            preset="cover"
            sizes="100vw sm:50vw" 
            class="w-[50vw] sm:w-full"/>
    </div>
</template>

<script setup>
import { useImageStore } from '@/store/imagestore';

const imagestore = useImageStore()

const qualityCal = ref(null)

const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 85
    }else if(width >= 1280){
        qualityCal.value = 80
    }else if(width >= 1024){
        qualityCal.value = 75
    }else if(width >= 768){
        qualityCal.value = 70
    }else if(width >= 640){
        qualityCal.value = 65
    }else if(width < 640){
        qualityCal.value = 60
    }
    console.log(qualityCal.value)
}

onMounted(() => {
    calculateImageQuality()

})

</script>