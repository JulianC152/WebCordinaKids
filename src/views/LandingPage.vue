<script lang="ts" setup>
// import BrowseCategories from '@/components/landing/BrowseCategories.vue';
import NavBar from '../components/landing/NavBar.vue'
import HeroSection from '@/components/landing/HeroSection.vue';
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
// import FeaturedLocation from '@/components/landing/FeaturedLocation.vue';
import FooterSection from '@/components/landing/FooterSection.vue';

</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main class="bg-background">
      <HeroSection />
      <div class="container mx-auto">
        <BrowseCategories />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <FeaturedLocation />
      </div>
      <div>
        <FooterSection class="bg-gray-200"/>
      </div>
    </main>
  </div>
</template>
