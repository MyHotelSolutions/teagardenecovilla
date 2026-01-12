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
                        <!-- <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="" class="rounded-full w-24 h-24"> -->
                        
                        <NuxtImg 
                            provider="imagekit" 
                            src="TeaGardenEcovillas/third%20party%20images/Mr.%20Nanayakkara%20image%202.png" 
                            :quality="qualityCal"
                            sizes="175vw md:120vw"
                            preset="cover"
                            loading="lazy" 
                            class="rounded-full w-34 h-34" 
                        />
                        <div class="">
                            <h5 class="font-black text-xl">Mr. Nayayakkara</h5>
                            <p class="">Founder of Tea Garden Eco Villa - Morawaka</p>
                            <p class="font-light text-sm">Biology and Zoology lecturer.</p>
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

useSeoMeta({
  title: 'About Us | Tea Garden Eco Villas Morawaka',

  description: 'Founded in 2012 by passionate teacher and tea farmer Mr. Nanayakkara on his 50-acre tea estate in Morawaka. A family-run eco villa offering authentic Sri Lankan hospitality amid lush tea fields near Sinharaja Rainforest.', 

  // Open Graph
  ogTitle: 'About Us - Tea Garden Eco Villas | Family-Run Eco Retreat in Morawaka, Sri Lanka',
  ogDescription: 'Founded in 2012 by passionate teacher and tea farmer Mr. Nanayakkara on his 50-acre tea estate in Morawaka. A family-run eco villa offering authentic Sri Lankan hospitality amid lush tea fields near Sinharaja Rainforest.',
  ogImage: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513', 
  ogImageAlt: 'Panoramic daytime view of Tea Garden Eco Villas surrounded by lush tea estates and mountains in Morawaka, Sri Lanka',
  ogType: 'website',
  ogUrl: 'https://www.teagardenecovillas.com/aboutus', // Update to your actual About Us page URL
  ogSiteName: 'Tea Garden Eco Villas',
  ogLocale: 'en_US',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Us - Tea Garden Eco Villas | Family-Run Eco Retreat in Morawaka, Sri Lanka',
  twitterDescription: 'Founded in 2012 by passionate teacher and tea farmer Mr. Nanayakkara on his 50-acre tea estate in Morawaka. A family-run eco villa offering authentic Sri Lankan hospitality amid lush tea fields near Sinharaja Rainforest.',
  twitterImage: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
  twitterImageAlt: 'Panoramic daytime view of Tea Garden Eco Villas surrounded by lush tea estates and mountains in Morawaka, Sri Lanka',

  // Robots & Canonical
  robots: 'index, follow',
  canonical: 'https://www.teagardenecovillas.com/aboutus', // Update to actual URL

  // Geo locations (minor local SEO benefit)
  geoPosition: '6.7667;80.5833',  // Approx Morawaka coordinates
  geoPlacename: 'Morawaka, Sri Lanka',
  geoRegion: 'LK',

  // Branding
  applicationName: 'Tea Garden Eco Villas',
})

</script>