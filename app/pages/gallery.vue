<template>
    <div class="">
        <menubar></menubar>
        <Headerimage title="Gallery" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>

        <!-- gallery -->
        <div class="flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-15 h-auto sm:h-auto max-w-7xl w-full mx-auto py-6">
            <div class="grid md:grid-cols-3 lg:grid-cols-4 min-h-screen w-full gap-4 px-4">
                <div class="col-span-1 lg:col-span-2 w-full h-full rounded-lg md:rounded-2xl overflow-clip relative" @click="openPopup(imageList[0])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">0</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[0]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full h-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300" 
                        />
                    </div>
                <div class="col-span-1 md:row-span-2 lg:row-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[1])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">1</p>
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imageList[1]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />  
                </div>
                <div class="col-span-1 lgcol-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[2])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">2</p>
                    <NuxtImg 
                    provider="imagekit" 
                    :src="imageList[2]" 
                    :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[3])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">3</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[3]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[4])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">4</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[4]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 colduration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="col-span-1 lg:col-span-2 row-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[5])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">5</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[5]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="md:col-span-1 lg:col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[6])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">6</p>
                    <NuxtImg 
                    provider="imagekit" 
                    :src="imageList[6]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="col-span-1 md:row-span-2 lg:row-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[7])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">7</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[7]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="md:col-span-1 lg:col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[8])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">8</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[8]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class=" col-span-1 md:row-span-1 lg:row-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[9])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">9</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[9]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="md:col-span-1 lg:col-span-3 md:row-span-2 lg:row-span-3 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[10])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">10</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[10]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[11])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">11</p>
                    <NuxtImg 
                    provider="imagekit" 
                    :src="imageList[11]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[12])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">12</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[12]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[13])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">13</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[13]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="col-span-1 md:row-span-2 lg:row-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[14])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">14</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[14]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="md:col-span-1 lg:col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[15])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">15</p>
                    <NuxtImg 
                    provider="imagekit" 
                    :src="imageList[15]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="col-span-1 md:row-span-2 lg:row-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[16])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">16</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[16]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="md:col-span-1 lg:col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[17])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">17</p>
                    <NuxtImg 
                    provider="imagekit" 
                    :src="imageList[17]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                        />
                    </div>
                <div class="col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[18])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">18</p>
                    <NuxtImg 
                    provider="imagekit" 
                    :src="imageList[18]" 
                    :quality="qualityCal"
                    sizes="175vw md:120vw"
                    preset="cover"
                    oading="lazy" 
                    class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class="md:col-span-1 lg:col-span-4 md:row-span-2 lg:row-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[19])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">19</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[19]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full h-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 md:rounded-2xl" 
                    />
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[20])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">20</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[20]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 md:rounded-2xl" 
                    />
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[21])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">21</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[21]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 md:rounded-2xl" 
                    />
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[22])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">22</p>
                    <NuxtImg 
                    provider="imagekit" 
                        :src="imageList[22]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 md:rounded-2xl" 
                    />
                </div>
                <div class="md:col-span-3 lg:col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip relative" @click="openPopup(imageList[23])">
                    <p class="absolute top-0 left-0 text-2xl text-white bg-black">23</p>
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imageList[23]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 md:rounded-2xl" 
                    />
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50" v-if="popupOpen">
        <div class="w-[98vw] h-[95vh] 
                    sm:w-[95vw] sm:h-[90vh] 
                    md:w-[90vw] md:h-[85vh] 
                    lg:w-[80vw] lg:h-[75vh] 
                    xl:w-[70vw] xl:h-[70vh] 
                    bg-black rounded-lg 
                    sm:rounded-xl md:rounded-2xl 
                    overflow-hidden shadow-2xl relative flex flex-col">
            
            <div class="flex justify-between items-center p-3 sm:p-4 bg-black/80 border-b border-white/10">
                <div class="text-white text-xs sm:text-sm md:text-base opacity-70">
                    {{ (imageList.indexOf(selectedImage) + 1) }} of {{ imageList.length }}
                </div>
                <button 
                    class="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 sm:p-2 transition-all duration-200 backdrop-blur-sm"
                    @click="popupOpen = false"
                    aria-label="Close image viewer"
                >
                    <Icon name="material-symbols:close-rounded" class="text-xl sm:text-2xl md:text-3xl"></Icon>
                </button>
            </div>

            <div class="flex-1 flex items-stretch relative">
                <button 
                    class="w-10 sm:w-12 md:w-16 lg:w-20 flex flex-col justify-center items-center 
                        bg-black/30 hover:bg-black/50 transition-all duration-200 group 
                        absolute left-0 top-0 bottom-0 z-10 sm:relative sm:z-0"
                    @click="previousImage"
                    aria-label="Previous image"
                >
                    <Icon name="material-symbols:arrow-circle-left-rounded" 
                        class="text-2xl sm:text-3xl md:text-4xl text-white/70 group-hover:text-white transition-all duration-200 transform group-hover:scale-110"></Icon>
                </button>
                
                <div class="flex-1 relative overflow-hidden bg-black flex items-center justify-center p-1 sm:p-2 md:p-4">
                    <img 
                        :src="selectedImage" 
                        alt="Gallery image" 
                        class="max-w-full max-h-full object-contain rounded-md sm:rounded-lg"
                        loading="eager"
                    >
                </div>
                
                <button 
                    class="w-10 sm:w-12 md:w-16 lg:w-20 flex flex-col justify-center items-center 
                        bg-black/30 hover:bg-black/50 transition-all duration-200 group
                        absolute right-0 top-0 bottom-0 z-10 sm:relative sm:z-0"
                    @click="nextImage"
                    aria-label="Next image"
                >
                    <Icon name="material-symbols:arrow-circle-right-rounded" 
                        class="text-2xl sm:text-3xl md:text-4xl text-white/70 group-hover:text-white transition-all duration-200 transform group-hover:scale-110"></Icon>
                </button>
            </div>

            <div class="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white/60 text-xs px-3 py-1 rounded-full">
                Press ← → keys to navigate • ESC to close
            </div>
        </div>

        <div 
            class="absolute inset-0 -z-10" 
            @click="popupOpen = false"
        ></div>
    </div>
        

        <Booknow></Booknow>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Booknow from '~/components/booknow.vue';
import Footer from '~/components/footer.vue';
import { useImageStore } from '@/store/imagestore';
const imagestore = useImageStore()

const popupOpen = ref(false)
const selectedImage = ref('')
const qualityCal = ref(20)
const imageList = [
    imagestore.winetable[0],
    imagestore.restaurant[1],
    imagestore.restaurant[2],
    imagestore.restaurant[4],
    imagestore.pool[0],
    imagestore.pool[3],
    imagestore.pool[6],
    imagestore.insiderooms[2],
    imagestore.insiderooms[4],
    imagestore.insiderooms[5],
    imagestore.insiderooms[6],
    imagestore.garden[0],
    imagestore.garden[2],
    imagestore.garden[4],
    imagestore.garden[3],
    imagestore.garden[6],
    imagestore.dinner[3],
    imagestore.dinner[1],
    imagestore.bbqandfire[2],
    imagestore.bbqandfire[1],
    imagestore.bathroomandfitting[1],
    imagestore.bathroomandfitting[3],
    imagestore.accomodationview[0],
    imagestore.accomodationview[3],

]

const closePopup = () => {
    selectedImage.value = ''
    popupOpen.value = false
}

const openPopup = (image) => {
    selectedImage.value = image
    popupOpen.value = true
}

const nextImage = () => {
    const currentIndex = imageList.indexOf(selectedImage.value)
    if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % imageList.length
        selectedImage.value = imageList[nextIndex]
    }
}

const previousImage = () => {
    const currentIndex = imageList.indexOf(selectedImage.value)
    if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length
        selectedImage.value = imageList[prevIndex]
    }
}

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
