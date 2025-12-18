<template>
    <div class="">
        <menubar></menubar>
        <Headerimage  title="About us" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>
        
        <!-- introduction for the element -->
        <div class="flex flex-col max-w-7xl gap-8 sm:gap-10 md:gap-12 h-auto mx-auto py-12 sm:py-20 md:py-24 lg:py-30 px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                
                <!-- image section 1 -->
                <div class="order-2 lg:order-1">
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imagestore.accomodationview[2]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        loading="lazy" 
                        class="w-full object-cover rounded-xl h-full" 
                    />
                </div>
                
                <!-- description -->
                <div class="flex flex-col gap-6 order-1 lg:order-2">
                    <p class="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed text-left">
                        Tea Garden Eco Villa was born from the vision of Mr. Nanayakkara, a passionate biology science teacher from Matara with deep roots in Sri Lanka’s Southern Province. Owning a breathtaking 50-acre tea estate atop a stunning mountain in Morawaka,
                        <br> he saw the potential to share this natural paradise with travelers exploring the Deniyaya region.
                            In 2012, he transformed part of his lush tea plantation into an inviting eco-villa, designed to offer authentic Sri Lankan hospitality—or “Aaganthuka Sathkaara”—to guests from around the world. Drawing from his unique blend of experiences as an educator, tea farmer, and businessman, Mr. Nanayakkara created a serene retreat where visitors can immerse themselves in rolling tea fields, misty mountain views, and the tranquility of nature. 
                <br>Today, Tea Garden Eco Villa remains a family-run haven, committed to sustainable living, warm personal service, and meaningful connections with the land and local culture. We welcome you to experience the true essence of Southern Sri Lanka’s emerald hills.
                    </p>
                    <div class="flex flex-row gap-4 items-center">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="" class="rounded-full w-24 h-24">
                        <div class="">
                            <h5 class="font-black text-xl">Mr. Nayayakkara</h5>
                            <p class="">Founder of Tea Garden Eco Villa - Morawaka</p>
                            <p class="font-light text-sm">Visionery teacher, leader, tea farmour, businessmess + good father.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '~/components/footer.vue';
import { useImageStore } from '~/store/imagestore';

const imagestore = useImageStore()
const qualityCal = ref(40)

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