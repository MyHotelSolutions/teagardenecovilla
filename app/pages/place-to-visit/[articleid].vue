<template>
    <div class="">
        <div class="relative">
            <Menubar></Menubar>
            <NuxtImg  
                :src="data.story.content.image.filename"
                :quality="qualityCal"
                format="webp"
                loading="lazy" 
                class="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover" 
            />
            
            <!-- background for menu bar -->
            <div class="bg-linear-to-b from-black to-slate-50/0 absolute top-0 left-0 right-0 h-[25%]"></div>
        </div>
        <div class="w-full h-auto p-2 lg:p-0">
            <div class="max-w-7xl w-full mx-auto p-4 rounded-lg flex flex-col gap-4 my-10">
                <!-- article header section -->
                <div class="flex flex-col gap-5 lg:flex-row justify-between pb-10 md:pb-4 w-full">
                    <div class="flex flex-col gap-2 lg:w-[80%] ">
                        <h1 class="font-black text-2xl md:text-4xl">{{ data.story.content.title }}</h1>
                        <!-- <p class="text-xs flex flex-row items-center gap-1 w-fit">category <span class="bg-teal-200/50 px-4 py-1 rounded-full text-black">{{ data.story.content.category }}</span></p> -->
                    </div>
                    <div class="flex flex-row gap-5 lg:mt-auto lg:ml-auto lg:w-[50%] justify-end items-end">
                        <div class="flex flex-col order-2 lg:order-1">
                            <p class="flex flex-col text-sm lg:text-base lg:text-right"><span class="text-xs text-gray-400">written by</span> {{ data.story.content.written_by }}</p>
                            <p class="flex flex-col text-sm lg:text-base lg:text-right">{{ data.story.content.written_by_title }}</p>
                        </div>
                        <div class="flex flex-col justify-center items-center order-1 lg:order-2 w-16 h-16 bg-teal-200/50 rounded-full">
                            <img :src="data.story.content.written_by_image.filename" alt="" class="w-14 h-14 bg-blue-200 rounded-full">
                        </div>
                    </div>
                </div>
                
                <!-- article -->
                <div class="flex flex-col lg:flex-row gap-6 lg:gap-12 relative">
                    <!-- left side -->
                    <div class="flex flex-col gap-4 w-full lg:w-[60%]">
                        <!-- article dates -->
                        <div class="flex flex-row gap-2 text-gray-300 lg:text-gray-400">
                            <!-- <p>publish on {{ data.story.published_at }}</p> -->
                            <p class="text-sm">publish on {{ new Date(data.story.published_at).getFullYear() }}-{{ String(new Date(data.story.published_at).getMonth() + 1).padStart(2, '0') }}-{{ new Date(data.story.published_at).getDate() }}.{{ String(new Date(data.story.published_at).getHours() + 1).padStart(2, '0') }}:{{ String(new Date(data.story.published_at).getMinutes() + 1).padStart(2, '0') }}</p>
                            <p>|</p>
                            <!-- <p>updated at {{ data.story.updated_at }}</p> -->
                            <p class="text-sm">updated at {{ new Date(data.story.published_at).getFullYear() }}-{{ String(new Date(data.story.published_at).getMonth() + 1).padStart(2, '0') }}-{{ new Date(data.story.published_at).getDate() }}.{{ String(new Date(data.story.published_at).getHours() + 1).padStart(2, '0') }}:{{ String(new Date(data.story.published_at).getMinutes() + 1).padStart(2, '0') }}</p>
                        </div>
                        <p class="text-xs flex flex-row items-center gap-1 w-fit">category <span class="bg-teal-200/50 px-4 py-1 rounded-full text-black">{{ data.story.content.category }}</span></p>
                        
                        <!-- article content -->
                        <div v-html="renderRichText(data.story.content.blog_article_content_r)" class="rich-content"></div>
                        
                        <!-- video section -->
                        <div class="flex flex-col gap-4">
                            <h4 class="font-black text-lg">Video</h4>
                            <iframe
                                :src="`https://www.youtube.com/embed/${data.story.content.video}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
                                allowfullscreen
                                allowtransparency
                                allow="autoplay"
                                class="w-full h-[28vh] md:h-[38vh] lg:h-[47vh] xl:h-[43vh] rounded-lg sm:rounded-xl"
                                title="Accommodation video tour"
                            ></iframe>
                        </div>
                        
                    </div>
        
                    <!-- right side -->
                    <div class="flex flex-col md:flex-row lg:flex-col gap-10 md:gap-14 w-full lg:w-[40%] h-fit sticky top-25 p-4 rounded-2xl  border-2 border-gray-200">
                        <div class="flex flex-col gap-3 lg:gap-1 w-full">
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="solar:dollar-minimalistic-linear" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Entrance fee</p>
                                </div>
                                <p>{{ !data.story.content.entrance_fee ? 'Free' : 'No' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="icon-park-solid:drone" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Drones</p>
                                </div>
                                <p class="text-base">{{ data.story.content.drones ? 'Allowed' : 'Not allowed' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:android-camera" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Photography</p>
                                </div>
                                <p>{{ data.story.content.photography ? 'Allowed' : 'Not allowed' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:local-parking-rounded" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Parking</p>
                                </div>
                                <p>{{ data.story.content.parking ? 'Available' : 'Not available' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="lucide:toilet" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Washroom facility</p>
                                </div>
                                <p>{{ data.story.content.washroom ? 'Available' : 'Not available' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:add-road" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Accesible roads</p>
                                </div>
                                <p>{{ data.story.content.accesible_road ? 'Yes' : 'No' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:timer-10-alt-1-outline-rounded" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Required time</p>
                                </div>
                                <p>{{ data.story.content.required_time }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center" v-if="data.story.content.entrance_fee">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="solar:dollar-minimalistic-linear" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Entrance fee</p>
                                </div>
                                <p>{{ data.story.content.entrance_fee_cost }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:alarm" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Best time to visit</p>
                                </div>
                                <p>{{ data.story.content.best_time_to_visit }}</p>
                            </div>
                        </div>
                        <div class="w-full">
                            <!-- map section -->
                            <div class="flex flex-col gap-4">
                                <h4 class="font-black text-lg md:hidden lg:block">Location on map</h4>
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    frameborder="0" 
                                    scrolling="no" 
                                    marginheight="0" 
                                    marginwidth="0" 
                                    :src="data.story.content.location"
                                    class="min-h-[40vh] md:min-h-[25vh] lg:min-h-[35vh] w-full rounded-2xl"
                                    title="Tea Garden Eco Villa Location Map"
                                >
                                </iframe>
                                <a :href="data.story.content.direction_from_villa" class="" target="_blank">
                                    <button class="bg-teal-800 text-white w-full py-2 rounded-full">Direction from villa</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Booknow></Booknow>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { useBlogStore } from '~/store/blogstore'
import { renderRichText } from '@storyblok/vue'

const runtime = useRuntimeConfig()
const blogstore = useBlogStore()
const route = useRoute()
const articleTitle = ref(null)
const qualityCal = ref(null)

if(blogstore.selectedArticleSlug != null){
    articleTitle.value = blogstore.selectedArticleFullSlug
}else if(route.params.articleid){
    articleTitle.value = `blog/${route.params.articleid}`
}

const { data, error } = await useFetch(`https://api.storyblok.com/v2/cdn/stories/${articleTitle.value}`, {
    query : {
        token : runtime.public.heldlesscms,
        version : 'published',
        content_type : 'blog-article',
    }
})


// console.log(articleList)
console.log(error)

const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 55
    }else if(width >= 1280){
        qualityCal.value = 33
    }else if(width >= 1024){
        qualityCal.value = 30
    }else if(width >= 768){
        qualityCal.value = 28
    }else if(width >= 640){
        qualityCal.value = 26
    }else if(width < 640){
        qualityCal.value = 23
    }
    console.log(qualityCal.value)
}

onBeforeMount(() => {
    calculateImageQuality()
})

const articleTitles = ref(null)
const articleDiscription = ref(null)

// Watch data and update SEO when story loads
watch(data, (story) => {
  if (story?.story?.content) {
    const content = story.story.content

    articleTitles.value = content.title || story.story.name
    articleDiscription.value = content.introduction || content.title

    // Set all SEO meta here (it will update reactively)
    useSeoMeta({
      title: content.title || story.story.name,
      description: content.introduction || content.title,

      ogTitle: content.title || story.story.name,
      ogDescription: content.introduction || content.title,
      ogImage: content.featured_image?.filename || 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
      ogImageAlt: content.image_alt || 'Tea Garden Eco Villas',
      ogType: 'article', // better for blog posts
      ogUrl: `https://www.teagardenecovillas.com/place-to-visit/${articleTitle.value}`,
      ogSiteName: 'Tea Garden Eco Villas',

      twitterCard: 'summary_large_image',
      twitterTitle: content.title || story.story.name,
      twitterDescription: content.introduction || content.title,
      twitterImage: content.featured_image?.filename || 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',

      robots: 'index, follow',
      canonical: `https://www.teagardenecovillas.com/blog/${articleTitle.value}`,
    })
  }
}, { immediate: true })

</script>

<style scoped>
.rich-content :deep(h3) {
    font-size: large;
    font-weight: 800;
    margin-top: 30px;
    margin-bottom: 10px;
}

.rich-content :deep(p) {
    font-size: medium;
}

@media (min-width: 768px) { /* md */
  .rich-content :deep(p) { font-size: 1.1rem; }
}

@media (min-width: 1024px) { /* lg */
  .rich-content :deep(p) { font-size: 1.1rem; }
}

</style>