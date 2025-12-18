<template>
    <div class="">
        <div class="relative">
            <Menubar></Menubar>
            <img :src="data.story.content.image.filename" alt="" class="w-full h-[80vh] object-cover">
            
            <!-- background for menu bar -->
            <div class="bg-linear-to-b from-black to-slate-50/0 absolute top-0 left-0 right-0 h-[25%]"></div>
        </div>
        <div class="w-full h-auto p-2 lg:p-0">
            <div class="max-w-7xl w-full mx-auto p-4 rounded-lg flex flex-col gap-4 my-10">
                
                <!-- article header section -->
                <div class="flex flex-col gap-5 lg:flex-row justify-between pb-10 md:pb-4">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-black text-2xl md:text-4xl">{{ data.story.content.title }}</h1>
                        <!-- <p class="text-xs flex flex-row items-center gap-1 w-fit">category <span class="bg-teal-200/50 px-4 py-1 rounded-full text-black">{{ data.story.content.category }}</span></p> -->
                    </div>
                    <div class="flex flex-row gap-5 lg:mt-auto lg:ml-auto">
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
                        <div class="flex flex-col gap-1 w-full">
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="icon-park-solid:drone" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Drones</p>
                                </div>
                                <p class="text-base">{{ data.story.content.drones ? 'Allowed' : 'Not allowed' }}</p>
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
                                    <Icon name="material-symbols:android-camera" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Photography</p>
                                </div>
                                <p>{{ data.story.content.photography ? 'Allowed' : 'Not allowed' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="solar:dollar-minimalistic-linear" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Entrance fee</p>
                                </div>
                                <p>{{ !data.story.content.entrance_fee ? 'Free' : 'No' }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:timer-10-alt-1-outline-rounded" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Eequired time</p>
                                </div>
                                <p>{{ data.story.content.required_time }}</p>
                            </div>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-4 items-center">
                                    <Icon name="material-symbols:add-road" class="text-xl text-black/30"></Icon>
                                    <p class="text-lg lg:text-base font-medium lg:font-semibold">Accesible roads</p>
                                </div>
                                <p>{{ data.story.content.accesible_road ? 'Yes' : 'No' }}</p>
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
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
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
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.519375105288!2d80.43297778525732!3d6.318643846906847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3dffbb2f95e61%3A0xcd012b0e534d5c9f!2z4Lav4LeW4La94LeSIOC2h-C2veC3iuC2vSAoRHVsaSBFbGxhKQ!5e0!3m2!1sen!2slk!4v1766007850852!5m2!1sen!2slk';

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