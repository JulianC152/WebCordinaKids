<script lang="ts" setup>
// import BrowseCategories from '@/components/landing/BrowseCategories.vue';
import NavBar from '../components/landing/NavBar.vue'
import PropuestaSection from '@/components/landing/PropuestaSection.vue';
// import FeaturedLocation from '@/components/landing/FeaturedLocation.vue';
import FooterSection from '@/components/landing/FooterSection.vue';

</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main class="bg-background">
     <PropuestaSection />
      <div>
        <FooterSection class="bg-gray-200"/>
      </div>
    </main>
  </div>
</template>
