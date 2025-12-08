<template>
    <!-- Navigation -->
    <nav 
      :class="`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-teal-800 py-4 md:py-6'
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