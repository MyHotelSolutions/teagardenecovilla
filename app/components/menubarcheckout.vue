<template>
    <!-- Navigation -->
    <nav 
      :class="`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-black py-4 md:py-6'
      }`"
    >
      <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div :class="`font-serif text-2xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-teal-900' : 'text-white'
          } ${isMobileMenuOpen ? 'text-teal-900' : ''}`">
            Tea Garden Eco Villa<span class="text-emerald-500">.</span>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden xl:flex items-center space-x-6 lg:space-x-8">
            <NuxtLink 
              :to="link.href" 
              class="cursor-pointer text-md font-medium tracking-wide hover:text-emerald-500 transition-colors duration-200"
              :class="isScrolled ? 'text-stone-600' : 'text-white/90'"
              v-for="link in navLinks"
              :key="link.name"
            >
              {{ link.name }}
            </NuxtLink>
            <Button 
              :variant="isScrolled ? 'primary' : 'secondary'" 
              class="py-2 px-4 lg:px-6 text-sm rounded-full whitespace-nowrap"
            >
              Book Now
            </Button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="xl:hidden p-2 transition-colors duration-200"
            :class="isScrolled || isMobileMenuOpen ? 'text-stone-800' : 'text-white'"
            @click="toggleMobileMenu"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              :name="isMobileMenuOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'" 
              class="text-4xl"
            />
          </button>
        </div>
      </div>

      <!-- Full Screen Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen" 
        class="xl:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 animate-in slide-in-from-top duration-300 overflow-y-auto"
      >
        <div class="container mx-auto px-4 sm:px-6 pt-20 pb-8">
          <!-- Close Button -->
          <div class="flex justify-end mb-8">
            <button 
              @click="isMobileMenuOpen = false"
              class="p-2 text-stone-800 hover:text-emerald-500 transition-colors duration-200"
              aria-label="Close menu"
            >
              <Icon name="material-symbols:close-rounded" class="text-2xl" />
            </button>
          </div>

          <!-- Navigation Links -->
          <div class="flex flex-col space-y-6 text-center">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.name" 
              :to="link.href"
              @click="isMobileMenuOpen = false"
              class="text-2xl sm:text-3xl font-serif text-stone-800 hover:text-emerald-500 transition-colors duration-200 py-3 border-b border-stone-100 last:border-b-0"
            >
              {{ link.name }}
            </NuxtLink>
          </div>

          <!-- Mobile Call to Action -->
          <div class="mt-12 sm:mt-16 text-center">
            <Button 
              class=" w-60 mx-auto py-4 text-lg rounded-full"
              @click="isMobileMenuOpen = false"
            >
              Book Your Stay
            </Button>
            
            <!-- Contact Info -->
            <div class="mt-8 sm:mt-12 text-stone-600">
              <p class="text-lg mb-2">Need help with your booking?</p>
              <div class="flex flex-row gap-3 justify-center items-center" @click="coppyToClipbord">
                <p class="text-xl font-semibold text-teal-900">+94 776 874 714</p>
                <button class="flex flex-col justify-center items-center">
                  <Icon name="material-symbols:content-copy-outline" class="text-md text-gray-300 hover:text-gray-500 active:text-gray-500"/>
                </button>
              </div>
              <p class="text-sm mt-2">info@teagardenvillas.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
// Reactive state
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Places to visit', href: 'placetovisit' },
  { name: 'About Us', href: 'aboutus' },
  { name: 'Contacts', href: '/contactus' },
]

// Handle scroll effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const coppyToClipbord = () => {
  // this is for coppy mobile number in to clipbord
  navigator.clipboard.writeText('+94776874714')
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>