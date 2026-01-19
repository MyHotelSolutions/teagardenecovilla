<template>
  <div>
    <menubar />
    <Headerimage 
      title="Gallery" 
      description="Discover vibrant adventures right at your doorstep, then return to pure tranquility."
    />

    <!-- Gallery Grid -->
    <div class="flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-15 max-w-7xl w-full mx-auto py-6">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 px-4 safari-grid-fix">
        <!-- Image 0 -->
        <div class="col-span-1 lg:col-span-2 safari-grid-item" @click="openPopup(imageList[0])">
          <div class="w-full h-full min-h-[200px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[0]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 1 -->
        <div class="col-span-1 row-span-3 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[1])">
          <div class="w-full h-full min-h-[300px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[1]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 2 -->
        <div class="col-span-1 lg:col-span-1 row-span-2 md:row-span-1 safari-grid-item" @click="openPopup(imageList[2])">
          <div class="w-full h-full min-h-[250px] md:min-h-[200px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[2]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 3 -->
        <div class="col-span-1 row-span-3 md:row-span-1 safari-grid-item" @click="openPopup(imageList[3])">
          <div class="w-full h-full min-h-[300px] md:min-h-[200px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[3]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 4 -->
        <div class="col-span-1 row-span-1 md:row-span-1 safari-grid-item" @click="openPopup(imageList[4])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[4]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 5 -->
        <div class="col-span-1 lg:col-span-2 row-span-2 md:row-span-2 safari-grid-item" @click="openPopup(imageList[5])">
          <div class="w-full h-full min-h-[250px] md:min-h-[300px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[5]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 6 -->
        <div class="col-span-2 md:col-span-1 row-span-2 md:row-span-1 lg:col-span-2 safari-grid-item" @click="openPopup(imageList[6])">
          <div class="w-full h-full min-h-[250px] md:min-h-[200px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[6]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 7 -->
        <div class="col-span-1 row-span-5 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[7])">
          <div class="w-full h-full min-h-[400px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[7]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 8 -->
        <div class="md:col-span-1 lg:col-span-2 row-span-4 md:row-span-1 safari-grid-item" @click="openPopup(imageList[8])">
          <div class="w-full h-full min-h-[350px] md:min-h-[200px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[8]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 9 -->
        <div class="col-span-1 md:row-span-1 lg:row-span-2 safari-grid-item" @click="openPopup(imageList[9])">
          <div class="w-full h-full min-h-[180px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[9]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 10 -->
        <div class="md:col-span-1 lg:col-span-3 md:row-span-2 lg:row-span-3 safari-grid-item" @click="openPopup(imageList[10])">
          <div class="w-full h-full min-h-[300px] md:min-h-[350px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[10]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 11 -->
        <div class="col-span-1 row-span-3 md:row-span-1 safari-grid-item" @click="openPopup(imageList[11])">
          <div class="w-full h-full min-h-[300px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[11]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 12 -->
        <div class="col-span-1 row-span-1 md:row-span-1 safari-grid-item" @click="openPopup(imageList[12])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[12]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 13 -->
        <div class="col-span-1 row-span-1 md:row-span-1 safari-grid-item" @click="openPopup(imageList[13])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[13]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 14 -->
        <div class="col-span-1 row-span-2 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[14])">
          <div class="w-full h-full min-h-[250px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[14]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 15 -->
        <div class="md:col-span-1 row-span-1 md:row-span-1 lg:col-span-2 safari-grid-item" @click="openPopup(imageList[15])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[15]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 16 -->
        <div class="col-span-1 row-span-1 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[16])">
          <div class="w-full h-full min-h-[180px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[16]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 17 -->
        <div class="md:col-span-1 row-span-1 md:row-span-1 lg:col-span-2 safari-grid-item" @click="openPopup(imageList[17])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[17]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 18 -->
        <div class="col-span-1 safari-grid-item" @click="openPopup(imageList[18])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[18]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 19 -->
        <div class="col-span-2 md:col-span-1 row-span-2 lg:col-span-4 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[19])">
          <div class="w-full h-full min-h-[250px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[19]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 20 -->
        <div class="col-span-1 safari-grid-item" @click="openPopup(imageList[20])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[20]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 21 -->
        <div class="col-span-1 row-span-2 md:row-span-1 safari-grid-item" @click="openPopup(imageList[21])">
          <div class="w-full h-full min-h-[250px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[21]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 22 -->
        <div class="col-span-1 row-span-1 md:row-span-1 safari-grid-item" @click="openPopup(imageList[22])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[22]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 23 -->
        <div class="col-span-2 md:col-span-1 lg:col-span-3 md:row-span-1 lg:row-span-2 safari-grid-item" @click="openPopup(imageList[23])">
          <div class="w-full h-full min-h-[250px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[23]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 24 -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-3 safari-grid-item" @click="openPopup(imageList[24])">
          <div class="w-full h-full min-h-[180px] md:min-h-[300px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[24]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 25 -->
        <div class="col-span-1 md:col-span-1 lg:col-span-1 row-span-3 md:row-span-3 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[25])">
          <div class="w-full h-full min-h-[300px] md:min-h-[300px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[25]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 26 -->
        <div class="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 md:row-span-3 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[26])">
          <div class="w-full h-full min-h-[250px] md:min-h-[300px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[26]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 27 -->
        <div class="col-span-2 md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[27])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[27]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 28 -->
        <div class="col-span-1 md:col-span-1 lg:col-span-2 row-span-3 md:row-span-3 lg:row-span-2 safari-grid-item" @click="openPopup(imageList[28])">
          <div class="w-full h-full min-h-[300px] md:min-h-[300px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[28]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 29 -->
        <div class="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 md:row-span-2 safari-grid-item" @click="openPopup(imageList[29])">
          <div class="w-full h-full min-h-[180px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[29]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 30 -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[30])">
          <div class="w-full h-full min-h-[180px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[30]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 31 -->
        <div class="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 md:row-span-1 lg:row-span-2 safari-grid-item" @click="openPopup(imageList[31])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[31]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 32 -->
        <div class="col-span-2 md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-2 safari-grid-item" @click="openPopup(imageList[32])">
          <div class="w-full h-full min-h-[180px] md:min-h-[180px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[32]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 33 -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2 lg:row-span-1 safari-grid-item" @click="openPopup(imageList[33])">
          <div class="w-full h-full min-h-[180px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[33]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>

        <!-- Image 34 -->
        <div class="col-span-1 md:col-span-1 lg:col-span-4 row-span-2 safari-grid-item" @click="openPopup(imageList[34])">
          <div class="w-full h-full min-h-[250px] md:min-h-[250px] rounded-lg md:rounded-2xl overflow-hidden">
            <NuxtImg 
              provider="imagekit" 
              :src="imageList[34]" 
              :quality="qualityCal"
              sizes="175vw md:120vw"
              preset="cover"
              loading="lazy" 
              class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Image Popup Modal -->
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300" 
      :class="popupOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
      v-if="popupOpen"
      @click.self="closePopup"
    >
      <div class="relative w-[95vw] h-[95vh] max-w-7xl bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        <!-- Header -->
        <div class="flex justify-between items-center p-4 bg-black/80 border-b border-white/10">
          <div class="text-white text-sm md:text-base opacity-70">
            {{ (currentImageIndex + 1) }} of {{ imageList.length }}
          </div>
          <button 
            class="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
            @click="closePopup"
            aria-label="Close image viewer"
          >
            <Icon name="material-symbols:close-rounded" class="text-2xl md:text-3xl" />
          </button>
        </div>

        <!-- Image Container -->
        <div class="flex-1 flex items-center justify-center p-4 bg-black relative">
          <button 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-200 group"
            @click="previousImage"
            aria-label="Previous image"
          >
            <Icon name="material-symbols:arrow-circle-left-rounded" 
              class="text-3xl md:text-4xl text-white/70 group-hover:text-white transition-all duration-200" />
          </button>
          
          <div class="w-full h-full flex items-center justify-center">
            <NuxtImg 
              provider="imagekit" 
              :src="selectedImage" 
              :quality="80"
              sizes="100vw"
              loading="lazy" 
              class="max-w-full max-h-full object-contain rounded-lg" 
            />
          </div>
          
          <button 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-200 group"
            @click="nextImage"
            aria-label="Next image"
          >
            <Icon name="material-symbols:arrow-circle-right-rounded" 
              class="text-3xl md:text-4xl text-white/70 group-hover:text-white transition-all duration-200" />
          </button>
        </div>
      </div>
    </div>

    <Booknow />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Booknow from '~/components/booknow.vue'
import Footer from '~/components/footer.vue'
import { useImageStore } from '@/store/imagestore'

const imagestore = useImageStore()
const popupOpen = ref(false)
const selectedImage = ref('')
const qualityCal = ref(20)

// Image list
const imageList = [
  imagestore.garden[2],
  imagestore.breakfast[0],
  imagestore.winetable[0],
  imagestore.restaurant[1],
  imagestore.balconey[0],
  imagestore.insiderooms[2],
  imagestore.restaurant[2],
  imagestore.pool[0],
  imagestore.restaurant[4],
  imagestore.pool[6],
  imagestore.balconey[2],
  imagestore.insiderooms[4],
  imagestore.lunch[1],
  imagestore.garden[4],
  imagestore.insiderooms[5],
  imagestore.bbqandfire[2],
  imagestore.lunch[0],
  imagestore.insiderooms[6],
  imagestore.balconey[3],
  imagestore.breakfast[1],
  imagestore.garden[1],
  imagestore.garden[3],
  imagestore.dinner[1],
  imagestore.bathroomandfitting[1],
  imagestore.garden[5],
  imagestore.bathroomandfitting[3],
  imagestore.garden[6],
  imagestore.accomodationview[0],
  imagestore.breakfast[2],
  imagestore.breakfast[3],
  imagestore.accomodationview[3],
  imagestore.dinner[3],
  imagestore.balconey[1],
  imagestore.restaurant[0],
  imagestore.lunch[2],
]

// Computed current image index
const currentImageIndex = computed(() => {
  return imageList.indexOf(selectedImage.value)
})

// Methods
const openPopup = (image) => {
  selectedImage.value = image
  popupOpen.value = true
  // Prevent body scroll when popup is open
  document.body.style.overflow = 'hidden'
}

const closePopup = () => {
  selectedImage.value = ''
  popupOpen.value = false
  // Re-enable body scroll
  document.body.style.overflow = ''
}

const nextImage = () => {
  const currentIndex = currentImageIndex.value
  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % imageList.length
    selectedImage.value = imageList[nextIndex]
  }
}

const previousImage = () => {
  const currentIndex = currentImageIndex.value
  if (currentIndex !== -1) {
    const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length
    selectedImage.value = imageList[prevIndex]
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!popupOpen.value) return
  
  switch(e.key) {
    case 'Escape':
      closePopup()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      previousImage()
      break
  }
}

// Calculate image quality based on screen size
const calculateImageQuality = () => {
  if (typeof window === 'undefined') return
  
  const width = window.innerWidth
  if (width >= 1536) {
    qualityCal.value = 35
  } else if (width >= 1280) {
    qualityCal.value = 13
  } else if (width >= 1024) {
    qualityCal.value = 10
  } else if (width >= 768) {
    qualityCal.value = 8
  } else if (width >= 640) {
    qualityCal.value = 6
  } else {
    qualityCal.value = 3
  }
}

// Lifecycle hooks
onMounted(() => {
  calculateImageQuality()
  window.addEventListener('resize', calculateImageQuality)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateImageQuality)
  window.removeEventListener('keydown', handleKeydown)
  // Ensure body scroll is re-enabled
  document.body.style.overflow = ''
})

// SEO Meta
useSeoMeta({
  title: 'Photo Gallery | Tea Garden Eco Villas - Morawaka',
  description: 'Explore the breathtaking photo gallery of Tea Garden Eco Villas in Morawaka, Sri Lanka. Discover lush tea estates, serene outdoor swimming pool, luxurious villas with balconies, majestic mountain views, and proximity to Sinharaja Rainforest.',
  ogTitle: 'Photo Gallery - Tea Garden Eco Villas, Morawaka | Stunning Views & Eco Luxury',
  ogDescription: 'Explore the breathtaking photo gallery of Tea Garden Eco Villas in Morawaka, Sri Lanka. Discover lush tea estates, serene outdoor swimming pool, luxurious villas with balconies, majestic mountain views, and proximity to Sinharaja Rainforest.',
  ogImage: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
  ogImageAlt: 'Stunning nighttime view of Tea Garden Eco Villas accommodation with warm lighting, balconies, and lush surrounding greenery in Morawaka, Sri Lanka',
  ogType: 'website',
  ogUrl: 'https://www.teagardenecovillas.com/gallery',
  ogSiteName: 'Tea Garden Eco Villas',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Photo Gallery - Tea Garden Eco Villas, Morawaka | Stunning Views & Eco Luxury',
  twitterDescription: 'Explore the breathtaking photo gallery of Tea Garden Eco Villas in Morawaka, Sri Lanka. Discover lush tea estates, serene outdoor swimming pool, luxurious villas with balconies, majestic mountain views, and proximity to Sinharaja Rainforest.',
  twitterImage: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
  twitterImageAlt: 'Stunning nighttime view of Tea Garden Eco Villas accommodation with warm lighting, balconies, and lush surrounding greenery in Morawaka, Sri Lanka',
})
</script>