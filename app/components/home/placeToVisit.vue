<template>
    <div class="flex flex-col justify-center items-center w-full h-[90vh] sm:min-h-screen py-8 sm:py-12 lg:py-0 lg:h-screen">
        <div class="flex flex-col justify-center items-center gap-12 sm:gap-12 lg:gap-16 h-auto w-full mx-auto px-4 sm:px-6 lg:px-0">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-2 w-full max-w-4xl">
                <h3 class="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight font-black text-center">Travel Beyond the Map</h3>
                <hr class="w-[20vw] sm:w-[15vw] lg:w-[6vw] h-1 rounded-full bg-[#059699]">
                <p class="text-sm sm:text-base font-light leading-relaxed text-gray-700 overflow-y-auto max-w-xl text-center">Embark on hidden adventures just steps from your villa—discover pristine rainforests, ancient temples, cascading waterfalls, and untouched natural wonders waiting to be explored.</p>
            </div>

            <!-- place scroll section -->
            <div class="flex flex-col lg:grid lg:grid-cols-10 gap-8 sm:gap-6 lg:gap-4 w-full h-auto lg:h-[500px]">
                <!-- left side - hidden on mobile, shown on tablet+ -->
                <div class="hidden lg:flex lg:col-span-2 overflow-hidden h-64 sm:h-80 lg:h-full"> 
                    <div class="w-full h-full border relative overflow-hidden rounded-r-2xl">
                        <img :src="placessList[leftImage].image" alt="" class="w-full h-full object-cover">
                        <div class="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black/60 cursor-pointer" @click="placeRalling('down')">
                            <Icon name="material-symbols-light:arrow-left-alt-rounded" class="text-white text-4xl sm:text-5xl lg:text-6xl"></Icon>
                        </div>
                    </div>
                </div>

                <!-- center - main content -->
                <div class="col-span-full lg:col-span-6 overflow-hidden h-80 sm:h-96 lg:h-full"> 
                    <div class="w-full h-full relative overflow-hidden rounded-2xl">
                        <img :src="placessList[selected].image" alt="" class="w-full h-full object-cover">
                        <div class="flex flex-col gap-3 sm:gap-4 lg:gap-4 justify-end items-start absolute top-0 bottom-0 right-0 left-0 p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-black/70 to-transparent">
                            <p class="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white leading-tight font-black">{{ placessList[selected].title }}</p>
                            <button class="text-teal-800 font-semibold py-2 lg:py-2 sm:py-3 px-6 sm:px-8 lg:px-6 rounded-full bg-white hover:bg-gray-100 text-sm sm:text-base lg:text-base transition-colors" @click="directTo">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                <!-- right side - hidden on mobile, shown on tablet+ -->
                <div class="hidden lg:flex lg:col-span-2 overflow-hidden h-64 sm:h-80 lg:h-full"> 
                    <div class="w-full h-full border relative overflow-hidden rounded-l-2xl">
                        <img :src="placessList[rightImage].image" alt="" class="w-full h-full object-cover">
                        <div class="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black/60 cursor-pointer" @click="placeRalling('up')">
                            <Icon name="material-symbols-light:arrow-right-alt-rounded" class="text-white text-4xl sm:text-5xl lg:text-6xl"></Icon>
                        </div>
                    </div>
                </div>

                <!-- Mobile navigation buttons -->
                <div class="flex lg:hidden justify-center items-center gap-8 mt-4">
                    <button @click="placeRalling('down')" class="flex items-center justify-center w-12 h-12 rounded-full bg-[#059699] text-white">
                        <Icon name="material-symbols-light:arrow-left-alt-rounded" class="text-2xl"></Icon>
                    </button>
                    <button @click="placeRalling('up')" class="flex items-center justify-center w-12 h-12 rounded-full bg-[#059699] text-white">
                        <Icon name="material-symbols-light:arrow-right-alt-rounded" class="text-2xl"></Icon>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { useBlogStore } from '~/store/blogstore'
const runtime = useRuntimeConfig()    

const blogstore = useBlogStore()
const router = useRouter()

const leftImage = ref(0)
const selected = ref(1)
const rightImage = ref(2)

const placessList = ref([])

// this is help to rolling without stoping
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

// change the position of place
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

// get data from  the API
const { data, error } = await useFetch('https://api.storyblok.com/v2/cdn/stories', {
    params : {
        token : runtime.public.heldlesscms,
        version : 'published',
        content_type : 'blog-article',
        excluding_fields : 'blog_article_content_r'
    }
})

// set the get data in to list
const articleList = computed(() => data.value?.stories || [])

// if data available, then get what I want
if(data){
    console.log('this is executed')
    for (let i = 0; i < articleList.value.length ; i++) {
        const article = {
            "image" : articleList.value[i].content.image.filename,
            "title" : articleList.value[i].content.title,
            "slug" : articleList.value[i].slug,
            "full_slug" : articleList.value[i].full_slug
        }
        placessList.value.push(article)   
    }
}

// API error message 
console.log(articleList)
console.log(error)

// redirect to the blog article
const directTo = () => {
    blogstore.selectedArticleSlug = placessList.value[selected.value].slug
    blogstore.selectedArticleFullSlug = placessList.value[selected.value].full_slug
    router.push(`/place-to-visit/${placessList.value[selected.value].slug}`)
}


</script>
