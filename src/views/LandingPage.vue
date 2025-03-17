<script lang="ts" setup>
import BrowseCategories from '@/components/landing/BrowseCategories.vue';
import NavBar from '../components/landing/NavBar.vue'
import HeroSection from '@/components/landing/HeroSection.vue';
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import FeaturedLocation from '@/components/landing/FeaturedLocation.vue';

</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main class="bg-background">
      <HeroSection />
      <div class="container mx-auto">
        <BrowseCategories/>
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <FeaturedLocation />
      </div>
    </main>
  </div>
</template>
