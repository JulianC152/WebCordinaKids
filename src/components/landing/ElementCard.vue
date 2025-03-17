<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import IconSearch from '../icons/IconSearch.vue'

const currentIndex = ref(0)
const currentOption = ref(0)
const images = [
  '/images/Stadium1.jpg',
  '/images/Stadium2.jpg',
  '/images/Stadium3.jpg',
  '/images/Stadium4.jpg',
]

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

onMounted(() => {
  setInterval(nextSlide, 10000)
})
</script>

<template>
  <div class="w-full overflow-hidden relative">
    <div class="flex items-center justify-center relative">
      <div
        class="flex transition-transform duration-1000 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="index" class="min-w-full relative">
          <img :src="image" class="w-full h-screen object-cover brightness-50" />
          <div class="absolute inset-0 bg-gradient-to-t from-red-500/45 to-transparent"></div>
        </div>
      </div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4/5 text-center z-10 w-11/12 md:w-2/5"
    >
      <h1 class="text-white text-4xl font-bold mb-4">Descubre la renta perfecta para tu equipo</h1>
      <h2 class="text-white text-xl mb-4">Separa la cancha perfecta para tu equipo en solo un clic</h2>

      <div class="flex rounded-full items-center text-sm bg-gray-300">
        <div class="flex py-2 items-center w-1/2 border-r-2 border-gray-200 gap-1">
          <div class="flex items-center p-2 m-1 rounded-full">
            <IconSearch :width="24" :height="24" fill="transparent" color="text-letters" />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            class="w-full bg-transparent outline-none placeholder:text-sm sm:placeholder:text-base"
          />
        </div>

        <div class="flex items-center w-1/2 gap-3 p-2">
          <select
            class="p-1 rounded ml-2 w-full text-center bg-transparent outline-none"
            :class="{ 'text-letters': currentOption == 0 }"
            v-model="currentOption"
          >
            <option value="0" selected disabled>Seleccionar opción</option>
            <option value="1">Fútbol</option>
            <option value="2">Básquet</option>
            <option value="3">Vóley</option>
          </select>
          <div class="flex items-center p-2 rounded-full bg-primary text-white">
            <IconSearch :width="24" :height="24" fill="transparent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
