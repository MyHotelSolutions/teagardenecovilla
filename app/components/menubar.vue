<!-- <template>
    Navigation
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

          Desktop Nav
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink :to="`${link.href}`" class="cursor-pointer" :class="`text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white/90'}`" v-for="link in navLinks">{{ link.name }}</NuxtLink>
            <Button :variant="isScrolled ? 'primary' : 'secondary'" class="py-2 px-6 text-sm rounded-full">
              Book Now
            </Button>
          </div>

          Mobile Menu Button
          <button 
            class="md:hidden text-stone-800"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <X v-if="isMobileMenuOpen" :class="isScrolled ? 'text-stone-800' : 'text-white'" />
            <Menu v-else :class="isScrolled ? 'text-stone-800' : 'text-white'" />
          </button>
        </div>
      </div>

      Mobile Menu
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

</script> -->

<template>
    <!-- Navigation -->
    <nav 
      :class="`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-6'
      }`"
    >
      <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div :class="`font-serif text-3xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-teal-900' : 'text-white'
          } ${isMobileMenuOpen ? 'text-teal-900' : ''}`">
            Tea Garden Eco Villa<span class="text-emerald-500">.</span>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NuxtLink 
              :to="link.href" 
              class="cursor-pointer text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors duration-200"
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
            class="md:hidden p-2 transition-colors duration-200"
            :class="isScrolled || isMobileMenuOpen ? 'text-stone-800' : 'text-white'"
            @click="toggleMobileMenu"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              :name="isMobileMenuOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'" 
              class="text-5xl"
            />
          </button>
        </div>
      </div>

      <!-- Full Screen Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 animate-in slide-in-from-top duration-300 overflow-y-auto"
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
              class="w-full max-w-xs mx-auto py-4 text-lg rounded-full"
              @click="isMobileMenuOpen = false"
            >
              Book Your Stay
            </Button>
            
            <!-- Contact Info -->
            <div class="mt-8 sm:mt-12 text-stone-600">
              <p class="text-lg mb-2">Need help with your booking?</p>
              <p class="text-xl font-semibold text-teal-900">+94 77 123 4567</p>
              <p class="text-sm mt-2">contact@teagardenvilla.com</p>
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

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>