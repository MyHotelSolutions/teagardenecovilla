<template>
    <div class="">
        <menubar></menubar>
        <Headerimage title="Gallery" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>

        <!-- gallery -->
        <div class="flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-15 h-auto sm:h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto px-4 sm:px-0 py-10">
            <div class="grid grid-cols-4 min-h-screen w-full gap-4">
                <div class="col-span-2 w-full h-full rounded-lg md:rounded-2xl overflow-clip" @click="openPopup(imageList[0])">
                    <img :src="imageList[0]" alt="" class="h-full w-full object-cover rounded-lg md:rounded-2xl hover:scale-104 duration-200">
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[1])">
                    <img :src="imageList[1]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[2])">
                <img :src="imageList[2]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[3])">
                    <img :src="imageList[3]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[4])">
                    <img :src="imageList[4]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-2 row-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[5])">
                    <img :src="imageList[5]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[6])">
                    <img :src="imageList[6]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[7])">
                    <img :src="imageList[7]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[8])">
                    <img :src="imageList[8]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 row-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[9])">
                    <img :src="imageList[9]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-3 row-span-3 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[10])">
                    <img :src="imageList[10]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[11])">
                    <img :src="imageList[11]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[12])">
                    <img :src="imageList[12]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[13])">
                    <img :src="imageList[13]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[14])">
                    <img :src="imageList[14]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[15])">
                    <img :src="imageList[15]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">

                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[16])">
                    <img :src="imageList[16]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[17])">
                    <img :src="imageList[17]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[18])">
                    <img :src="imageList[18]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">

                </div>
                <div class=" col-span-4 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[19])">
                    <img :src="imageList[19]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[20])">
                    <img :src="imageList[20]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                    
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[21])">
                    <img :src="imageList[21]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[22])">
                    <img :src="imageList[22]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[23])">
                    <img :src="imageList[23]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200">
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

const popupOpen = ref(false)
const selectedImage = ref('')
const imageList = [
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Acomodation/DSC00586.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Acomodation/DSC00587.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Breakfast/DSC00714.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Breakfast/DSC00717.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Breakfast/WhatsApp%20Image%202025-11-08%20at%2021.51.58_3d4ad825.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Garden/DSC00394.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Garden/DSC00236.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Kotapola%20temple/DSC00616.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Kotapola%20temple/DSC00613.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Kotapola%20temple/DSC00591.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Lunch/DSC00750.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Lunch/DSC00778.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00403.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00577%20(2).jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00397%20(1).jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Sun%20Rise/DSC00328.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Sun%20Rise/DSC00325.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Tea%20Estate/DSC00329.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Tea%20Estate/DSC00343_1.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Tea%20Table/DSC00211.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Tea%20Table/DSC00219.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Three%20arch/DSC00543.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Water%20fall/DSC00514.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Water%20fall/DSC00518.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Water%20fall/DSC00521.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Water%20fall/DSC00523.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00700.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00244.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00415.jpg',
    'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00198.jpg',
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
</script>
