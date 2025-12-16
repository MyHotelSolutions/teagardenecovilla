<template>
    <div class="relative">
        <Menubar></Menubar>
        <img :src="data.story.content.image.filename" alt="" class="w-full h-[60vh] object-cover rounded-lg">
        <div class="bg-linear-to-b from-teal-800/80 to-slate-50/0 absolute top-0 bottom-0 left-0 right-0"></div>
    </div>
        <div class="max-w-7xl w-full mx-auto border border-gray-200 p-6 rounded-lg flex flex-col gap-4">
            <!-- <p>{{ item.content.image.filename }}</p> -->
            <h1>{{ data.story.content.title }}</h1>
            <div v-html="renderRichText(data.story.content.blog_article_content_r)" class="rich-content"></div>
            <div class="flex flex-row gap-5 mt-auto ml-auto">
                <img :src="data.story.content.written_by_image.filename" alt="" class="w-20 h-20 bg-blue-200 rounded-full">
                <div class="flex flex-col">
                    <p class="flex flex-col text-lg"><span class="text-xs text-gray-400">written by</span> {{ data.story.content.written_by }}</p>
                    <p class="flex flex-col text-lg">{{ data.story.content.written_by_title }}</p>
                </div>
            </div>
        </div>
    <Footer></Footer>
</template>

<script setup>
import { useBlogStore } from '~/store/blogstore'
import { renderRichText } from '@storyblok/vue'

const runtime = useRuntimeConfig()
const blogstore = useBlogStore()
const route = useRoute()
const articleTitle = ref(null)

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

<style>
h1 {
    font-size: xx-large;
    font-weight: 800;
}
h2 {
    font-size: x-large;
    font-weight: 600;
    padding-top: 40px;
    padding-bottom: 10px;
}

</style>