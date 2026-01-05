<template>
    <div class="">
        <Menubar></Menubar>
        <Headerimage title="Guest Experiences" description="Escape into paradise: Hear from delighted visitors about breathtaking views, exceptional service, and pure relaxation in our hidden hilltop haven."></Headerimage>
        <div class="p-2">
            <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto max-w-md sm:max-w-7xl md:max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-0 py-20">
                <!-- reviews -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 h-auto">
                    <div 
                        class="flex flex-col gap-4 sm:gap-6 border border-gray-300 rounded-2xl items-center p-6 duration-300 min-h-[320px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px] hover:shadow-xl hover:scale-101 active:shadow-xl active:scale-101 shadow-md"
                        v-for="item in reviews"
                        :key="item.id"
                    >
                        <div class="flex flex-row gap-1">
                            <Icon 
                                name="material-symbols:kid-star"
                                class="p-1 sm:p-2 text-amber-400 text-lg" 
                                v-for="value in Number(item.content.stars)"
                            />
                        </div>
                        <p class="text-center text-base leading-relaxed text-gray-700  md:flex-grow overflow-y-auto">
                            {{ item.content.review_content }}
                        </p>
                        
                        <div class="flex flex-col justify-center items-center w-full mt-4">
                            <p class="flex flex-row items-center gap-3  font-semibold text-base sm:text-lg md:text-xl truncate">{{ item.name }} <Icon :name="item.content.country_flag" class="text-xl"></Icon> </p>
                            <!-- <p class="flex flex-row items-center gap-3 text-gray-500 truncate text-xs">From {{ item.content.country_name }} </p> -->
                            <a :href="item.content.platform_link">
                                <p class="text-gray-500 text-xs truncate flex flex-row items-center gap-3">Reviews On <Icon :name="item.content.platform_icon" class="text-xl"></Icon></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
const runtime = useRuntimeConfig()
const router = useRouter()

const { data, error } = await useFetch('https://api.storyblok.com/v2/cdn/stories', {
    params : {
        token : runtime.public.heldlesscms,
        version : 'published',
        content_type : 'reviews'
        // excluding_fields : 'blog_article_content_r'
    }
})

const reviews = computed(() => data.value?.stories || [])

useSeoMeta({
  title: 'Guest Reviews & Testimonials | Tea Garden Eco Villas - Morawaka',

  description: 'Read real guest reviews for Tea Garden Eco Villas in Morawaka, Sri Lanka. Travelers praise our clean spacious rooms, stunning mountain & rainforest views, refreshing outdoor pool, delicious Sri Lankan cuisine, and friendly service. See why guests love this serene eco retreat!',

  // Open Graph
  ogTitle: 'Guest Reviews & Testimonials | Tea Garden Eco Villas - Morawaka',
  ogDescription: 'Read authentic reviews from guests who stayed at Tea Garden Eco Villas. Highlights include breathtaking views, comfortable rooms, excellent food, and warm hospitality in the heart of Sri Lanka\'s tea country near Sinharaja Rainforest.',
  ogImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a4/bb/9c/caption.jpg?w=1200&h=630', // Bright daytime hero image showing pool, villas, tea gardens & mountains (cropped/resized recommendation: 1200x630 for perfect previews)
  ogImageAlt: 'Daytime view of Tea Garden Eco Villas with outdoor swimming pool, lush tea gardens, and mountain backdrop in Morawaka, Sri Lanka',
  ogType: 'website',
  ogUrl: 'https://www.teagardenecovillas.com/reviews',
  ogSiteName: 'Tea Garden Eco Villas',
  ogLocale: 'en_US',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Guest Reviews & Testimonials | Tea Garden Eco Villas - Morawaka',
  twitterDescription: 'Discover what guests say about Tea Garden Eco Villas: amazing views, clean rooms, tasty food, and peaceful nature escape near Sinharaja Rainforest.',
  twitterImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a4/bb/9c/caption.jpg?w=1200&h=630',
  twitterImageAlt: 'Daytime view of Tea Garden Eco Villas with outdoor swimming pool, lush tea gardens, and mountain backdrop in Morawaka, Sri Lanka',

  // Robots & Canonical
  robots: 'index, follow',
  canonical: 'https://www.teagardenecovillas.com/reviews', // Update to actual reviews page URL

  // Geo locations (minor local SEO benefit)
  geoPosition: '6.7667;80.5833',  // Approx Morawaka coordinates
  geoPlacename: 'Morawaka, Sri Lanka',
  geoRegion: 'LK',

  // Branding
  applicationName: 'Tea Garden Eco Villas',
})

</script>