
<template>
  <div class="min-h-screen bg-white font-sans text-stone-600">
    <!-- Navigation -->
    <nav 
      :class="`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`"
    >
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex justify-between items-center">
          <div :class="`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-teal-900' : 'text-white'}`">
            Tea Garden<span class="text-emerald-500">.</span>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              v-for="link in navLinks" 
              :key="link.name" 
              :href="link.href" 
              :class="`text-sm font-medium tracking-wide hover:text-emerald-500 transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-white/90'
              }`"
            >
              {{ link.name }}
            </a>
            <Button :variant="isScrolled ? 'primary' : 'secondary'" class="!py-2 !px-6 text-sm">
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

    <!-- Hero Section -->
    <header class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Eco Resort" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center pt-20">
        <span class="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
          Welcome to Paradise
        </span>
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 drop-shadow-lg">
          Breathe in the <br />
          <span class="italic text-emerald-300">Mountain Air</span>
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience the ultimate eco-luxury retreat where modern comfort meets the raw beauty of nature.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" class="bg-emerald-600 hover:bg-emerald-700 border-none min-w-[180px]">
            Check Availability
          </Button>
          <Button variant="outline" class="min-w-[180px]">
            Watch Video
          </Button>
        </div>
      </div>
    </header>

    <!-- Intro Section -->
    <section class="py-24 md:py-32 bg-white">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div class="md:col-span-6 relative">
            <div class="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800" 
                alt="Resort Detail" 
                class="rounded-2xl h-64 w-full object-cover translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" 
                alt="Relaxation" 
                class="rounded-2xl h-64 w-full object-cover"
              />
            </div>
            <!-- Decorative element -->
            <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stone-50 rounded-full blur-3xl opacity-60" />
          </div>
          <div class="md:col-span-6">
            <span class="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-2 block">Our Philosophy</span>
            <h2 class="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
              Harmonious living <br/> with nature.
            </h2>
            <p class="text-stone-500 text-lg leading-relaxed mb-8">
              Nestled in the heart of the misty mountains, Tea Garden Eco Villa offers a sanctuary for the soul. We believe in sustainable luxury, where every detail is crafted to minimize impact while maximizing your comfort. From organic farm-to-table dining to solar-powered villas, reconnect with the earth without compromise.
            </p>
            <a href="#about" class="inline-flex items-center text-teal-900 font-semibold border-b-2 border-teal-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
              Learn more about our story <ArrowRight class="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities Section -->
    <section id="amenities" class="py-24 bg-stone-50">
      <div class="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Villa Essentials" 
          subtitle="Curated Comforts" 
        />
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          <AmenityItem :icon="Wifi" title="Fast Wifi" />
          <AmenityItem :icon="Car" title="Free Parking" />
          <AmenityItem :icon="Droplets" title="Infinity Pool" />
          <AmenityItem :icon="Utensils" title="Organic Dining" />
          <AmenityItem :icon="Coffee" title="Breakfast" />
          <AmenityItem :icon="Wind" title="AC Rooms" />
        </div>
      </div>
    </section>

    <!-- Video / Experience Section -->
    <section class="py-24 md:py-32 relative bg-teal-900 overflow-hidden">
      <div class="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2000" 
            alt="Tea Garden Background" 
            class="w-full h-full object-cover"
          />
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="max-w-3xl mx-auto">
            <button class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform shadow-2xl text-emerald-600 pl-1">
              <Play size="32" fill="currentColor" />
            </button>
            <h2 class="font-serif text-4xl md:text-6xl text-white mb-6">
              A Day in the Life
            </h2>
            <p class="text-emerald-100 text-lg md:text-xl font-light">
              Watch the mist roll over the tea plantations and feel the serenity of mountain living.
            </p>
        </div>
      </div>
    </section>

    <!-- Rooms Section -->
    <section id="rooms" class="py-24 bg-white">
      <div class="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Stay Amidst the Mountains" 
          subtitle="Accommodations" 
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <RoomCard 
            title="Tea Garden Suite"
            price="$250 / night"
            image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
            description="Panoramic views of the plantations with a private balcony and open-air rainfall shower."
          />
          <RoomCard 
            title="Mountain Villa"
            price="$320 / night"
            image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
            description="A secluded sanctuary perched on the cliff edge, featuring a private plunge pool."
          />
          <RoomCard 
            title="Family Cottage"
            price="$400 / night"
            image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
            description="Spacious two-bedroom cottage perfect for families, located near the main clubhouse."
          />
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section id="gallery" class="py-24 bg-stone-50">
      <div class="container mx-auto px-6 md:px-12">
        <SectionHeading title="Moments Captured" :center="true" />
        <div class="grid grid-cols-12 gap-4 h-[600px]">
          <!-- Large Item -->
          <div class="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200" alt="Pool" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span class="text-white text-xl font-serif">Infinity Pool at Sunset</span>
            </div>
          </div>
          <!-- Small Items -->
          <div class="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1512918760513-95f6929c3c38?auto=format&fit=crop&q=80&w=600" alt="Interior" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          </div>
          <div class="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=600" alt="Dining" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6 md:px-12">
          <SectionHeading title="Guest Experiences" :center="true" />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="i in 3" :key="i" class="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-stone-100 text-center">
                <div class="flex justify-center gap-1 mb-6 text-amber-400">
                  <Star v-for="star in 5" :key="star" size="16" fill="currentColor" />
                </div>
                <p class="text-stone-600 italic mb-6 leading-relaxed">
                  "An absolute dream. The attention to detail, the sustainable practices, and the genuine warmth of the staff made this stay unforgettable."
                </p>
                <div class="flex items-center justify-center gap-4">
                  <div class="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
                    <img :src="`https://i.pravatar.cc/150?img=${i + 20}`" alt="User" class="w-full h-full object-cover" />
                  </div>
                  <div class="text-left">
                    <h4 class="font-serif font-bold text-stone-900">Sarah & James</h4>
                    <span class="text-xs text-stone-400 uppercase tracking-wide">London, UK</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-stone-50">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
              <SectionHeading title="Get in Touch" subtitle="Contact Us" :center="false" />
              <p class="text-stone-500 mb-8 leading-relaxed">
                Whether you're planning a romantic getaway or a family retreat, we're here to help you craft the perfect experience.
              </p>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center flex-shrink-0">
                    <MapPin size="20" />
                  </div>
                  <div>
                    <h5 class="font-bold text-stone-800">Location</h5>
                    <p class="text-stone-500">123 Mountain View Road, Hill Country, Sri Lanka</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center flex-shrink-0">
                    <Utensils size="20" />
                  </div>
                  <div>
                    <h5 class="font-bold text-stone-800">Reservations</h5>
                    <p class="text-stone-500">+94 77 123 4567 <br/> reservations@teagarden.com</p>
                  </div>
                </div>
              </div>
          </div>
          
          <div class="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <form class="space-y-5">
              <div class="grid grid-cols-2 gap-5">
                <input type="text" placeholder="First Name" class="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-teal-900 focus:border-transparent outline-none transition-all" />
                <input type="text" placeholder="Last Name" class="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-teal-900 focus:border-transparent outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-teal-900 focus:border-transparent outline-none transition-all" />
              <select class="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-teal-900 focus:border-transparent outline-none transition-all text-stone-500">
                <option>Select Room Type</option>
                <option>Tea Garden Suite</option>
                <option>Mountain Villa</option>
              </select>
              <textarea rows="4" placeholder="Your Message" class="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-teal-900 focus:border-transparent outline-none transition-all"></textarea>
              <Button class="w-full py-4 text-lg shadow-none">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-20 bg-teal-900 text-white text-center">
      <div class="container mx-auto px-6">
          <h2 class="font-serif text-4xl md:text-5xl mb-6">Ready for your mountain escape?</h2>
          <p class="text-emerald-100 mb-10 max-w-2xl mx-auto">
            Book directly through our website for exclusive offers and a complimentary spa treatment.
          </p>
          <Button variant="secondary" class="bg-white text-teal-900 hover:bg-emerald-50">
            Book Your Stay Now
          </Button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-stone-900 text-stone-400 py-16">
      <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-12">
        <div class="md:col-span-1">
          <div class="font-serif text-2xl font-bold text-white mb-6">
            Tea Garden<span class="text-emerald-500">.</span>
          </div>
          <p class="mb-6 text-sm leading-relaxed">
            A sustainable sanctuary designed to help you reconnect with nature and yourself.
          </p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-emerald-400 transition-colors"><Instagram size="20"/></a>
            <a href="#" class="hover:text-emerald-400 transition-colors"><Facebook size="20"/></a>
            <a href="#" class="hover:text-emerald-400 transition-colors"><Twitter size="20"/></a>
          </div>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Villas & Suites</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Dining</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Experiences</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Cancellation Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
          <p class="text-sm mb-4">Subscribe for seasonal updates.</p>
          <div class="flex">
            <input type="email" placeholder="Email" class="bg-stone-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500 outline-none" />
            <button class="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">OK</button>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6 md:px-12 pt-8 text-center md:text-left text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Tea Garden Eco Villa. All rights reserved.</p>
        <p class="mt-2 md:mt-0">Designed with nature in mind.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// State
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Data
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;
}

.font-serif { font-family: var(--font-serif); }
.font-sans { font-family: var(--font-sans); }
</style>