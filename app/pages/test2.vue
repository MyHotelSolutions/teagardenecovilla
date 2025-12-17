<template>
    <div class="flex flex-col justify-center items-center w-full min-h-screen py-18 sm:py-12 lg:py-16 xl:min-h-screen">
        <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto px-4 sm:px-0">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2 sm:gap-3">
                <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight font-black text-center">
                    Guest Experiences
                </h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] xl:w-[6vw] h-1 sm:h-1.5 rounded-full bg-[#059699]">
            </div>

            <!-- reviews -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 h-auto">
                <div 
                    class="flex flex-col gap-4 shadow-sm/10 sm:gap-6 border border-gray-200 rounded-2xl items-center p-6 sm:p-6 md:p-8 duration-300 min-h-[320px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px]"
                    v-for="item in reviews"
                    :key="item.id"
                >
                    <p class="text-left text-base font-light leading-relaxed text-gray-700 flex-grow overflow-y-auto">
                        {{ item.content.review_content }}
                    </p>
                    
                    <div class="flex flex-col w-full mt-4">
                        <div class="flex flex-row gap-1">
                            <Icon 
                                name="material-symbols:kid-star"
                                class="p-1 sm:p-2 text-amber-400 text-lg" 
                                v-for="value in Number(item.content.stars)"
                            />
                        </div>
                        <p class="font-semibold text-base sm:text-lg md:text-xl truncate">{{ item.name }}</p>
                        <p class="flex flex-row items-center gap-3 text-gray-500 truncate text-xs">From {{ item.content.country_name }} <Icon :name="item.content.country_flag" class="text-2xl"></Icon></p>
                        <a :href="item.content.platform_link">
                            <p class="text-gray-500 text-xs truncate flex flex-row items-center gap-3">Reviews On <Icon :name="item.content.platform_icon" class="text-2xl"></Icon></p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const runtime = useRuntimeConfig()
const router = useRouter()

const { data, error } = await useFetch('https://api.storyblok.com/v2/cdn/stories', {
    params : {
        token : runtime.public.heldlesscms,
        version : 'published',
        content_type : 'reviews',
        per_page : 4
        // excluding_fields : 'blog_article_content_r'
    }
})

const reviews = computed(() => data.value?.stories || [])
</script>