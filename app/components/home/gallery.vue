<!-- <template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-[#fafaf9]">
        <div class="flex flex-col gap-12 h-[86vh] w-[75vw] mx-auto">
            
            title section
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Moments Captured</h3>
                <hr class="w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            image gallery
            <div class="grid grid-cols-4 gap-4 h-[60vh]">
                <div class="col-span-2 overflow-hidden rounded-2xl">
                    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" alt="" class="w-full h-full object-cover rounded-2xl hover:scale-104 duration-300">
                </div>
                <div class="overflow-hidden rounded-2xl">
                    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" alt="" class="w-full h-full object-cover rounded-2xl hover:scale-104 duration-300">
                </div>
                <div class="flex flex-col gap-4 boreder w-full">
                    <div class="col-span-2 overflow-hidden rounded-2xl h-1/2">
                        <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" alt="" class="w-full h-full object-cover rounded-2xl hover:scale-104 duration-300">
                    </div>
                    <div class="col-span-2 overflow-hidden rounded-2xl h-1/2">
                        <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" alt="" class="w-full h-full object-cover rounded-2xl hover:scale-104 duration-300">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template> -->

<template>
    <div class="flex flex-col justify-center items-center w-full h-auto sm:h-auto bg-[#fafaf9] py-18 sm:py-20">
        <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto sm:h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto px-4 sm:px-0">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight font-black text-center">
                    Moments Captured
                </h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] xl:w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            <!-- image gallery -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 h-auto sm:min-h-[400px] md:min-h-[500px] lg:h-[60vh]">
                <!-- Large left image -->
                <div class="col-span-1 sm:col-span-2 overflow-hidden rounded-2xl h-64 sm:h-72 md:h-80 lg:h-full">
                    <img 
                        src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" 
                        alt="Gallery image 1" 
                        class="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                </div>
                
                <!-- Middle image -->
                <div class="overflow-hidden rounded-2xl h-64 sm:h-full md:h-auto lg:h-full order-3 sm:order-2">
                    <img 
                        src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" 
                        alt="Gallery image 2" 
                        class="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                </div>
                
                <!-- Right side stacked images -->
                <div class="flex flex-col gap-3 sm:gap-4 w-full order-2 sm:order-3 lg:order-4 h-64 sm:h-auto">
                    <div class="overflow-hidden rounded-2xl flex-1">
                        <img 
                            src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" 
                            alt="Gallery image 3" 
                            class="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                    </div>
                    <div class="overflow-hidden rounded-2xl flex-1">
                        <img 
                            src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" 
                            alt="Gallery image 4" 
                            class="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup></script>