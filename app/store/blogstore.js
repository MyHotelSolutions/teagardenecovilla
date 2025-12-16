export const useBlogStore = defineStore('blog', () => {
  
    const selectedArticleSlug = ref()
    const selectedArticleFullSlug = ref()

  return { selectedArticleFullSlug, selectedArticleSlug }
})