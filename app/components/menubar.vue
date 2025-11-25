<template>
    <!-- Navigation -->
    <nav 
      :class="`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`"
      class="bg-green-500"
    >
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex justify-between items-center">
          <div :class="`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-teal-900' : 'text-white'}`">
            Tea Garden Eco Villa<span class="text-emerald-500">.</span>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink :to="`${link.href}`" class="cursor-pointer" :class="`text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white/90'}`" v-for="link in navLinks">{{ link.name }}</NuxtLink>
            <Button :variant="isScrolled ? 'primary' : 'secondary'" class="py-2 px-6 text-sm rounded-full">
              Book Now
            </Button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden text-stone-800"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <X v-if="isMobileMenuOpen" :class="isScrolled ? 'text-stone-800' : 'text-white'" />
            <Menu v-else :class="isScrolled ? 'text-stone-800' : 'text-white'" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          @click="isMobileMenuOpen = false"
          class="text-stone-800 font-medium text-lg"
        >
          {{ link.name }}
        </a>
        <Button class="w-full mt-4">Book Your Stay</Button>
      </div>
    </nav>
</template>

<script setup>
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Places to visit', href: 'placetovisit' },
  { name: 'About Us', href: 'aboutus' },
  { name: 'Contacts', href: '/contactus' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>