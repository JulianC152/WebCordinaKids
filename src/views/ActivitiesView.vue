<script lang="ts" setup>
import NavBar from '../components/landing/NavBar.vue'
import FooterSection from '../components/landing/FooterSection.vue'
</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main class="bg-background">
      <div>
        <RouterView />
      </div>
      <div>
        <FooterSection class="bg-gray-200" />
      </div>
    </main>
  </div>
</template>
