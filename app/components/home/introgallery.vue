<template>
    <!-- amenities highlights -->
    <section class="py-12 sm:py-20 md:py-24 lg:py-32 bg-white min-h-screen">
        <div class="flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2 sm:gap-3 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-center">
                <!-- <p class="text-stone-500/60 text-base sm:text-lg leading-relaxed">Your Escape to Nature's Heart</p> -->
                <h3 class="font-serif text-2xl sm:text-4xl text-stone-900 leading-tight font-black text-center">Your Escape to Nature's Heart</h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[6vw] h-1 rounded-full bg-[#059699]">
                <!-- <p class="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-[80%] md:w-[70%] lg:w-[55%] font-light mt-2">
                    Where misty trails, hidden waterfalls, and forest whispers create your perfect mountain retreat.
                </p> -->
            </div>

            <div class="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-10 items-start w-full">
                
                <!-- image section -->
                <div class="w-full lg:w-[65vw] relative order-2 lg:order-1">
                    <div class="grid grid-cols-2 gap-3 sm:gap-4">
                        <!-- Left column -->
                        <div class="flex flex-col gap-3 sm:gap-4 mt-0 sm:mt-8 md:mt-16 lg:mt-30">
                            <!-- left column - first image -->
                            <div class="aspect-square sm:aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                                
                                <!-- actual image -->
                                <NuxtImg 
                                    provider="imagekit" 
                                    :src="randomImageList[0]" 
                                    :quality="qualityCal" 
                                    preset="cover"
                                    sizes="50vw sm:50vw" 
                                    class="w-full h-full object-cover" v-if="!randomImageList.length == 0"/>
                                    
                                <!-- loading effect -->
                                <div class="w-full h-full" v-if="randomImageList.length == 0">
                                    <NuxtImg 
                                        provider="imagekit" 
                                        :src="imagestore.restaurant[7]" 
                                        preset="cover"
                                        sizes="50vw sm:50vw" 
                                        class="w-full h-full object-cover"
                                        :modifiers="{ blur: 20 }"/>
                                </div>
                            </div>
                            
                            <!-- left column - second image -->
                            <div class="aspect-square sm:aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                                <!-- actual image -->
                                <NuxtImg 
                                provider="imagekit" 
                                :src="randomImageList[1]" 
                                    :quality="qualityCal" 
                                    preset="cover"
                                    sizes="50vw sm:50vw" 
                                    class="w-full h-full object-cover"  v-if="!randomImageList.length == 0"/>
                                <!-- loading effect -->
                                <div class="w-full h-full" v-if="randomImageList.length == 0">
                                    <NuxtImg 
                                        provider="imagekit" 
                                        :src="imagestore.pool[10]" 
                                        preset="cover"
                                        sizes="50vw sm:50vw" 
                                        class="w-full h-full object-cover"
                                        :modifiers="{ blur: 20 }"/>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right column -->
                        <div class="flex flex-col gap-3 sm:gap-4">
                            <div class="aspect-square sm:aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                                
                                <!-- actual image -->
                                <NuxtImg 
                                provider="imagekit" 
                                    :src="randomImageList[2]" 
                                    :quality="qualityCal" 
                                    preset="cover"
                                    sizes="50vw sm:50vw" 
                                    class="w-full h-full object-cover"  v-if="!randomImageList.length == 0"/>
                                
                                <!-- loading effect -->
                                <div class="w-full h-full" v-if="randomImageList.length == 0">
                                    <NuxtImg 
                                        provider="imagekit" 
                                        :src="imagestore.garden[5]" 
                                        preset="cover"
                                        sizes="50vw sm:50vw" 
                                        class="w-full h-full object-cover"
                                        :modifiers="{ blur: 20 }"/>
                                </div>
                            </div>
                            <div class="aspect-square sm:aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                                <!-- actual image -->
                                <NuxtImg 
                                    provider="imagekit" 
                                    :src="randomImageList[3]" 
                                    :quality="qualityCal" 
                                    preset="cover"
                                    sizes="50vw sm:50vw" 
                                    class="w-full h-full object-cover" v-if="!randomImageList.length == 0"/>
                                    
                                <!-- loading effect -->
                                <div class="w-full h-full" v-if="randomImageList.length == 0">
                                    <NuxtImg 
                                        provider="imagekit" 
                                        :src="imagestore.bbqandfire[3]" 
                                        preset="cover"
                                        sizes="50vw sm:50vw" 
                                        class="w-full h-full object-cover"
                                        :modifiers="{ blur: 20 }"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Decorative element -->
                    <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] sm:w-[120%] h-[100%] sm:h-[120%] bg-stone-50 rounded-full blur-2xl sm:blur-3xl opacity-40 sm:opacity-60" />
                </div>
                
                <!-- description section -->
                <div class="grid grid-cols-2 lg:grid-cols-1 w-full lg:w-[35vw] justify-between gap-4 sm:gap-6 lg:gap-4 h-auto lg:h-[72vh] p-2 rounded-xl order-1 lg:order-2">
                    <div class="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-stone-50/50 transition-colors duration-300 cursor-pointer" 
                         v-for="(items, index) in introductionText" 
                         :key="index"
                         @mouseenter="selectSpecialImageCategory(items.name)" 
                         @mouseleave="startShuffle"
                         @touchstart.passive="selectSpecialImageCategory(items.name)">
                        <div class="flex flex-row gap-3 sm:gap-4 items-center">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex flex-col justify-center items-center bg-red-100/30 flex-shrink-0">
                                <Icon :name="items.icon" class="text-xl sm:text-2xl text-red-400"></Icon>
                            </div>
                            <h4 class="font-serif text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl text-stone-900 leading-tight font-black break-words">
                                {{ items.name }}
                            </h4>
                        </div>
                        <p class="text-stone-500 text-sm sm:text-base leading-relaxed ml-0 sm:ml-6 mt-1 sm:mt-0">
                            {{ items.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useImageStore } from '@/store/imagestore';

const randomImageList = ref([])
const allImages = ref([])
let shuffle = null;
const screenWidth = ref(null)

const imagestore = useImageStore()

const introductionImages = {
    Restaurant : [
        imagestore.restaurant[7],
        imagestore.restaurant[0],
        imagestore.restaurant[6],
        imagestore.restaurant[3],
    ],
    Pool : [
        imagestore.pool[10],
        imagestore.pool[1],
        imagestore.pool[4],
        imagestore.pool[12],
    ],
    Nature : [
        imagestore.garden[5],
        imagestore.garden[14],
        imagestore.garden[3],
        imagestore.garden[16],
    ],
    BBQ : [
        imagestore.bbqandfire[3],
        imagestore.bbqandfire[5],
        imagestore.bbqandfire[6],
        imagestore.bbqandfire[0],
    ]
}

const introductionText = [
    {
        icon : 'ri:restaurant-line',
        name : 'Restaurant',
        description : 'Award-winning cuisine crafted from local ingredients, offering an unforgettable dining experience without leaving the villa.'
    },
    {
        icon : 'mdi:pool',
        name : 'Pool',
        description : 'Your private oasis for sun-soaked relaxation and refreshing dips in a stunning, exclusive setting.'
    },
    {
        icon : 'tabler:leaf',
        name : 'Nature',
        description : 'Immerse yourself in serene, lush landscapes that offer a perfect escape and a breath of fresh air.'
    },
    {
        icon : 'tabler:meat',
        name : 'BBQ',
        description : 'Vibrant, sizzling feasts under the stars—the ultimate setting for fun, flavor, and making memories.'
    },
]


const selectSpecialImageCategory = (index) => {
    // sleect special image category to view what are the images avialable
        console.log('this is executed')
        clearInterval(shuffle)
        randomImageList.value = introductionImages[index]
}


const selectRandomImageList = () => {
    // select 4 random images from 'alImages' list and append to 'randomImageList'
    
    const selectedItems = ref([])
    const temparySelectedImage = ref([])

    while (selectedItems.value.length < 4) {
        const randomNumber = Math.floor(Math.random() * 14);
        if (!selectedItems.value.includes(randomNumber)) {
            selectedItems.value.push(randomNumber)
            temparySelectedImage.value.push(allImages.value[randomNumber])
        }
    }
    return temparySelectedImage.value
}

const startShuffle = () => {
    // select four random images form the image list
  
    shuffle = setInterval(() => {
        randomImageList.value = selectRandomImageList()   
    }, 3000)
    
    onUnmounted(() => clearInterval(shuffle))
}


onBeforeMount(() => {
    // execute this once once the component rendered
    allImages.value = Object.values(introductionImages).flat()
    startShuffle()

    // get screen width
    screenWidth.value = window.innerWidth
})

</script>