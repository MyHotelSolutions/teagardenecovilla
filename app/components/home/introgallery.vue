<template>
    <!-- amanities heighlights -->
        <section class="py-24 md:py-32 bg-white min-h-screen">
            <div class="flex flex-col justify-center items-center gap-20 container mx-auto px-6 md:px-12">

                <!-- title section -->
                <div class="flex flex-col justify-center items-center gap-2 w-[60%]">
                    <p class="text-stone-500/60 text-lg leading-relaxed">Your Escape to Nature’s Heart</p>
                    <h3 class="font-serif text-4xl md:text-5xl text-teal-800 leading-tight font-black">Tea Garden Eco Villa</h3>
                    <p class="text-stone-500 text-lg leading-relaxed w-[55%] text-center font-light">Where misty trails, hidden waterfalls, and forest whispers create your perfect mountain retreat.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center">
                    
                    <!-- image section -->
                    <div class="md:col-span-9 relative">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex flex-col mt-30 gap-4">
                                <div class="">
                                    <img :src="randomImageList[0]" alt="" class="rounded-2xl">
                                </div>
                                <div class="flex flex-col justify-start">
                                    <img :src="randomImageList[1]" alt="" class="rounded-2xl h-[80%] w-full object-cover">
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col justify-end">
                                    <img :src="randomImageList[2]" alt="" class="rounded-2xl h-[80%] w-full object-cover">
                                </div>
                                <div class="">
                                    <img :src="randomImageList[3]" alt="" class="rounded-2xl">
                                </div>
                            </div>
                        </div>

                        <!-- Decorative element -->
                        <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stone-50 rounded-full blur-3xl opacity-60" />
                    </div>
                    
                    <!-- description section -->
                    <div class="flex flex-col justify-between gap-4 md:col-span-3 h-[72vh] p-2 rounded-xl">
                        <div class="flex flex-col gap-4 p-4 rounded-xl" v-for="(items, index) in introductionText" @mouseenter="selectSpecialImageCategory(items.name)" @mouseleave="startShuffle">
                            <div class="flex flex-row gap-4 items-center">
                                <div class="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-red-100/30">
                                    <Icon :name="items.icon" class="text-2xl text-red-400"></Icon>
                                </div>
                                <h4 class="font-serif text-4xl md:text-2xl text-stone-900 leading-tight font-black">{{ items.name }}</h4>
                            </div>
                            <p class="text-stone-500 text-md leading-relaxed ml-6">{{ items.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
const randomImageList = ref([])
const allImages = ref([])
let shuffle = null;

const introductionImages = {
    Restaurant : [
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00388.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00410.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00577%20(2).jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00403.jpg'
    ],
    Pool : [
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00267.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00383.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00415.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/pool/DSC00436.jpg'
    ],
    Nature : [
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00139.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00574.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00701.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00581.jpg'        
    ],
    BBQ : [
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/BBQ/DSC00314.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/BBQ/DSC00317.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/BBQ/DSC00318.jpg',
        'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/BBQ/_DSC0016.jpg'
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
        icon : 'solar:fire-outline',
        name : 'BBQ',
        description : 'Vibrant, sizzling feasts under the stars—the ultimate setting for fun, flavor, and making memories.'
    },
]


const selectSpecialImageCategory = (index) => {
    // sleect special image category to view what are the images avialable
    
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
    }, 2000)
    
    onUnmounted(() => clearInterval(shuffle))
}

onBeforeMount(() => {
    // execute this once once the component rendered

    allImages.value = Object.values(introductionImages).flat()
    startShuffle()
})

</script>