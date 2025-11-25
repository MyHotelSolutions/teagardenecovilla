<template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-[#fafaf9]">
        <div class="flex flex-col gap-12 h-[86vh] w-[75vw] mx-auto">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Moments Captured</h3>
                <hr class="w-[6vw] h-1 rounded-full bg-[#059699]">
            </div>

            <!-- image gallery -->
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
</template>

<script setup></script>