<script lang="ts" setup>
defineProps({
  images: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative w-64 h-40 rounded-lg overflow-hidden shadow-lg">
    <img :src="images" class="w-full h-full object-cover" />

    <!-- Capa de degradado -->
    <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-end p-2">
      <p class="text-white text-sm font-semibold">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Opcional: Estilos adicionales */
</style>
