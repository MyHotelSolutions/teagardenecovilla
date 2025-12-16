<template>
    <div class="">
        <Menubar></Menubar>
        <Headerimage></Headerimage>
        <div class="max-w-7xl w-full mx-auto grid grid-cols-2 gap-4 p-10">
            <div class="border border-gray-200 p-6 rounded-lg flex flex-col gap-4" v-for="item  in articleList" @click="reditToArticle(item.slug ,item.full_slug)">
                <img :src="item.content.image.filename" alt="" class="w-full h-[30vh] object-cover rounded-lg">
                <h1>{{ item.content.title }}</h1>
                <p>{{ item.content.introduction }}</p>
                <div class="flex flex-row gap-5 mt-auto ml-auto">
                    <img :src="item.content.written_by_image.filename" alt="" class="w-20 h-20 bg-blue-200 rounded-full">
                    <div class="flex flex-col">
                        <p class="flex flex-col text-lg"><span class="text-xs text-gray-400">written by</span> {{ item.content.written_by }}</p>
                        <p class="flex flex-col text-lg">{{ item.content.written_by_title }}</p>
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

<style scoped>
h1 {
    font-size: xx-large;
    font-weight: 800;
}

.rich-content :deep(h2) {
    font-size: x-large;
    font-weight: 900;
    padding-top: 40px;
    padding-bottom: 10px;
}

</style>