<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconLeft from '../shared/icons/IconLeft.vue'
import IconRight from '../shared/icons/IconRight.vue'

const currentIndex = ref(0)
const images = [
  '/images/Stadium1.jpg',
  '/images/Stadium2.jpg',
  '/images/Stadium3.jpg',
  '/images/chicos.jpeg',
]

let interval: ReturnType<typeof setInterval>

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 10000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <!-- Carrusel de imágenes -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="min-w-full relative">
        <img :src="image" class="w-full h-120 object-cover brightness-90" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
    </div>

    <!-- Flechas de navegación -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-900"
    >
      <IconLeft />
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-900"
    >
      <IconRight />
    </button>
    <!-- Indicador de puntos -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
      >
      </span>
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background 0.3s ease;
}
</style>
