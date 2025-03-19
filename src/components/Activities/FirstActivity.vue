<script lang="ts" setup>
import { ref } from 'vue'
import IconPlay from '../shared/icons/IconPlay.vue'
import IconPause from '../shared/icons/IconPause.vue'
import IconReload from '../shared/icons/IconReload.vue'

const counter = ref(0)
const isRunning = ref(false)
let interval: number | null = null
const videoRef = ref<HTMLIFrameElement | null>(null)

const toggleCounter = () => {
  if (isRunning.value) {
    clearInterval(interval!)
    interval = null
    videoRef.value?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  } else {
    interval = setInterval(() => {
      counter.value++
    }, 1000)
    videoRef.value?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
  }
  isRunning.value = !isRunning.value
}

const resetCounter = () => {
  clearInterval(interval!);
  interval = null;
  counter.value = 0;
  isRunning.value = false;
  videoRef.value?.contentWindow?.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
};
</script>

<template>
  <section
    class="flex flex-col md:flex-row items-center justify-between p-6 max-w-6xl mx-auto mt-16"
  >
    <!-- Contenido de Texto -->
    <div class="md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl font-bold text-gray-800">Título del Video</h2>
      <p class="mt-4 text-gray-600">
        Aquí puedes agregar una descripción del video. Explica de qué trata y qué información
        relevante tiene.
      </p>
    </div>

    <!-- Espacio para el Video -->
    <div class="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
      <div class="w-full max-w-lg aspect-video bg-gray-300 rounded-lg shadow-md">
        <iframe
          ref="videoRef"
          class="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
          title="Video de ejemplo"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Contador -->
      <div class="mt-4 flex items-center space-x-4">
        <span class="text-xl font-bold text-gray-800">{{ counter }} s</span>
        <button
          @click="toggleCounter"
          class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          <component :is="isRunning ? IconPause : IconPlay" class="w-4 h-4 mr-2" />
          {{ isRunning ? 'Pausar' : 'Iniciar' }}
        </button>
        <button
          @click="resetCounter"
          class="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
        >
          <IconReload class="w-4 h-4 mr-2" />
          Reiniciar
        </button>
      </div>
    </div>
  </section>

  <!-- Lista de Videos -->
  <ul class="max-w-6xl mx-auto p-6">
    <li v-for="index in 4" :key="index" class="flex items-center justify-start mt-5 space-x-4">
      <input type="checkbox" class="w-5 h-5" />
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        class="rounded-lg w-60 h-32"
      ></iframe>
      <span class="m-2">Aquí puedes agregar una descripción del video.</span>
    </li>
  </ul>
</template>

<style scoped></style>