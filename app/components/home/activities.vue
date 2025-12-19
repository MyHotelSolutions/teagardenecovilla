<template>
    <div class="flex flex-col justify-center items-center w-full min-h-[80vh] h-full bg-[#fafaf9] px-4 xl:px-0 py-20 lg:py-0">
        <div class="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto h-[60%]">
            
            <!-- left side -->
            <div class="w-full lg:w-[60%] h-[40vh] lg:h-full overflow-clip rounded-2xl order-2 lg:order-1">
                <img :src="activityList[selectedActivity].content.image.filename" alt="" class="w-full min-h-[80%] h-full object-cover rounded-2xl hover:scale-108 duration-200">
            </div>
    
            <!-- right side -->
            <div class="flex flex-col gap-8 w-full lg:w-[40%] order-1 lg:order-2">
                <!-- component title -->
                <div class="flex flex-col justify-center items-center gap-2">
                    <h3 class="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight font-black text-center">Things to do</h3>
                    <hr class="w-10 md:w-[6vw] h-1.5 rounded-full bg-[#059699]">
                    <p class="text-sm sm:text-base font-light leading-relaxed text-gray-700 overflow-y-auto max-w-lg text-center">Discover authentic experiences blending tea heritage, culture, and nature at our serene eco villa amid lush plantations near Sinharaja rainforest.</p>
                </div>
                
                <!-- buttton section -->
                <div class="flex flex-row flex-wrap gap-2" >
                    <button class="py-1 px-6 rounded-full border-2 border-teal-800" :class="index == selectedActivity ? 'bg-teal-800 text-white' : 'bg-white text-teal-800'" @click="selectedActivity = index" v-for="(item, index) in activityList">{{ item.content.name }}</button>
                </div>
    
                <!-- text content -->
                <div class="mt-auto">
                    <p class="">{{ activityList[selectedActivity].content.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const runtime = useRuntimeConfig()
const selectedActivity = ref(0)

// load data from API
const { data, error } = await useFetch(`https://api.storyblok.com/v2/cdn/stories/`, {
    query : {
        token : runtime.public.heldlesscms,
        version : 'published',
        content_type : 'activities',
    }
})

const activityList = computed(() => data.value ?.stories || [])

</script>