<template>
    <div class="border max-w-7xl w-full mx-auto h-screen">
        <!-- gallery -->
        <div class="flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-15 h-auto sm:h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto px-4 sm:px-0 py-10">
            <div class="grid md:grid-cols-3 lg:grid-cols-4 min-h-screen w-full gap-4">
                <div class="md:col-span-1 lg:col-span-2 w-full h-full rounded-lg md:rounded-2xl overflow-clip" @click="openPopup(imageList[0])">
                    <!-- <img :src="imagestore.winetable[1]" alt="" class="h-full w-full object-cover rounded-lg md:rounded-2xl hover:scale-104 duration-200"> -->
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imageList[0]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300" 
                    />
                </div>
                <div class="md:col-span-1 lg:col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[1])">
                    <!-- <img :src="imageList[1]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class="md:col-span-1 lgcol-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[2])">
                <!-- <img :src="imageList[2]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[3])">
                    <!-- <img :src="imageList[3]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[4])">
                    <!-- <img :src="imageList[4]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imageList[4]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 h-full md:rounded-2xl" 
                    />
                </div>
                <div class=" col-span-2 row-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[5])">
                    <!-- <img :src="imageList[5]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[6])">
                    <!-- <img :src="imageList[6]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[7])">
                    <!-- <img :src="imageList[7]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[8])">
                    <!-- <img :src="imageList[8]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 row-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[9])">
                    <!-- <img :src="imageList[9]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-3 row-span-3 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[10])">
                    <!-- <img :src="imageList[10]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[11])">
                    <!-- <img :src="imageList[11]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[12])">
                    <!-- <img :src="imageList[12]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[13])">
                    <!-- <img :src="imageList[13]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[14])">
                    <!-- <img :src="imageList[14]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[15])">
                    <!-- <img :src="imageList[15]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[16])">
                    <!-- <img :src="imageList[16]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-2 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[17])">
                    <!-- <img :src="imageList[17]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[18])">
                    <!-- <img :src="imageList[18]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-4 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[19])">
                    <!-- <img :src="imageList[19]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imageList[19]" 
                        :quality="qualityCal"
                        sizes="175vw md:120vw"
                        preset="cover"
                        oading="lazy" 
                        class="w-full object-cover rounded-2xl hover:scale-106 active:scale-106 duration-300 md:rounded-2xl" 
                    />
                </div>
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[20])">
                    <!-- <img :src="imageList[20]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[21])">
                    <!-- <img :src="imageList[21]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[22])">
                    <!-- <img :src="imageList[22]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
                <div class=" col-span-1 w-full h-full md:rounded-2xl rounded-lg overflow-clip" @click="openPopup(imageList[23])">
                    <!-- <img :src="imageList[23]" alt="" class="h-full w-full object-cover md:rounded-2xl rounded-lg hover:scale-104 duration-200"> -->
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
    </div>
</template>

<script setup></script>