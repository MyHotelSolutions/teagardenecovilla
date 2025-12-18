<template>
    <div class="">
        <Menubar></Menubar>
        <Headerimage title="Travel Beyond the Map" description="Embark on hidden adventures just steps from your villa—discover pristine rainforests, ancient temples, cascading waterfalls, and untouched natural wonders waiting to be explored."></Headerimage>
        <div class="max-w-2xl lg:max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 px-2 lg:px-0">
            <div class="border border-gray-200 p-2 md:p-6 rounded-lg flex flex-col gap-4 hover:shadow-2xl duration-200 hover:scale-101" v-for="item  in articleList" @click="reditToArticle(item.slug ,item.full_slug)">
                <!-- <img :src="item.content.image.filename" alt="" class="w-full h-[25vh] lg:h-[30vh] object-cover rounded-lg"> -->
                <NuxtImg  
                    :src="item.content.image.filename"
                    quality="30"
                    format="webp"
                    loading="lazy" 
                    class="w-full h-[25vh] lg:h-[30vh] object-cover rounded-lg" 
                />
                <h1 class="font-black text-lg sm:text-xl">{{ item.content.title }}</h1>
                <p class="text-sm sm:text-base">{{ item.content.introduction }}</p>
                <div class="flex flex-row items-center gap-5 mt-auto">
                    <div class="flex flex-col justify-center items-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-teal-100">
                        <img :src="item.content.written_by_image.filename" alt="" class="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-blue-200 rounded-full">
                    </div>
                    <div class="flex flex-col">
                        <p class="flex flex-col text-sm"><span class="text-xs text-gray-400">written by</span> {{ item.content.written_by }}</p>
                        <p class="text-sm hidden sm:block">{{ item.content.written_by_title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script setup>
import { useBlogStore } from '~/store/blogstore'
import Footer from '~/components/footer.vue'

const runtime = useRuntimeConfig()
const blogstor = useBlogStore()
const router = useRouter()

const { data, error } = await useFetch('https://api.storyblok.com/v2/cdn/stories', {
    params : {
        token : runtime.public.heldlesscms,
        version : 'published',
        content_type : 'blog-article',
        // excluding_fields : 'blog_article_content_r'
    }
})

const articleList = computed(() => data.value?.stories || [])

console.log(articleList)
console.log(error)

const reditToArticle = ( slug, full_slug) => {
    blogstor.selectedArticleSlug = slug
    blogstor.selectedArticleFullSlug = full_slug
    router.push(`/place-to-visit/${slug}`)
}

</script>
