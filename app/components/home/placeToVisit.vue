<template>
    <div class="flex flex-col justify-center items-center w-full h-screen">
        <div class="flex flex-col justify-center items-center gap-12 h-auto w-full mx-auto">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-6">
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Place to visit</h3>
                <p class="text-stone-500 text-lg leading-relaxed text-center w-[75%]">Discover vibrant adventures right at your doorstep,
                    then return to pure  tranquility. Your perfect balance of excitement and serene relaxation  awaits.</p>
            </div>
            
            <!-- place scroll section -->
            <div class="grid grid-cols-10 gap-4 w-full h-[500px]">
                <!-- left side -->
                <div class="col-span-2 overflow-hidden"> 
                    <div class="w-full h-full border relative overflow-hidden rounded-r-2xl">
                        <img :src="placessList[leftImage].image" alt="" class="w-full h-full object-cover">
                        <div class="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black/60" @click="placeRalling('down')">
                            <Icon name="material-symbols-light:arrow-left-alt-rounded" class="text-white text-6xl"></Icon>
                        </div>
                    </div>
                </div>
                <!-- center -->
                <div class="col-span-6 overflow-hidden"> 
                    <div class="w-full h-full relative overflow-hidden rounded-2xl">
                        <img :src="placessList[selected].image" alt="" class="w-full h-full object-cover">
                        <div class="flex flex-col gap-4 justify-end items-start absolute top-0 bottom-0 right-0 left-0 p-10 bg-gradient-to-t from-black/70 to-transparent">
                            <p class="font-serif text-4xl md:text-5xl text-white leading-tight font-black">{{ placessList[selected].name }}</p>
                            <button class="text-black py-2 px-6 rounded-md bg-white hover:bg-gray-100 transition-colors">read more</button>
                        </div>
                    </div>
                </div>
                <!-- right side -->
                <div class="col-span-2 overflow-hidden"> 
                    <div class="w-full h-full border relative overflow-hidden rounded-l-2xl">
                        <img :src="placessList[rightImage].image" alt="" class="w-full h-full object-cover">
                        <div class="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black/60" @click="placeRalling('up')">
                            <Icon name="material-symbols-light:arrow-right-alt-rounded" class="text-white text-6xl"></Icon>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

const leftImage = ref(0)
const selected = ref(1)
const rightImage = ref(2)

const placessList = ref(
    [
        {
            name : 'Dellawa fall',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawaWatterFall/DSC00514.jpg',
        },
        {
            name : 'Dellawa Ela',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/dellawa/DSC00523.jpg',
        },
        {
            name : 'Duuli fall',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/duuliElla/dullifall-neluwa%5C.webp',
        },
        {
            name : 'Getabaruwa temple',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/getabaruwa/DSC00608.jpg',
        },
        {
            name : 'Three arch bridge',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/threeArchBridge/WhatsApp%20Image%202025-11-08%20at%2022.21.03_2cd2a0ba.jpg',
        },
        {
            name : 'Sinharaja Rain Forest',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/placeToVisit/sinharajaRainForest/sinharaja.jpg',
        },
    ]
)

watch(
  () => selected.value,
  (newVal) => {
    const maxIndex = placessList.value.length - 1;
    
    if(newVal === 0) {
      leftImage.value = maxIndex;
      rightImage.value = 1;
    } else if(newVal === maxIndex) {
      leftImage.value = maxIndex - 1;
      rightImage.value = 0;
    } else {
      leftImage.value = newVal - 1;
      rightImage.value = newVal + 1;
    }
  }
);


const placeRalling = (direction) => {

    if (direction === 'up') {
        selected.value = selected.value === placessList.value.length - 1 
            ? 0 
            : selected.value + 1;
    } else if (direction === 'down') {
        selected.value = selected.value === 0 
            ? placessList.value.length - 1 
            : selected.value - 1;
    }
};

</script>