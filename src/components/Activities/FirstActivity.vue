<script lang="ts" setup>
import { ref } from 'vue'
import IconPlay from '../shared/icons/IconPlay.vue'
import IconPause from '../shared/icons/IconPause.vue'
import IconReload from '../shared/icons/IconReload.vue'
import LineBar from '../shared/LineBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const counter = ref(0)
const isRunning = ref(false)
let interval: number | null = null
const videoRef = ref<HTMLIFrameElement | null>(null)

const toggleCounter = () => {
  if (isRunning.value) {
    clearInterval(interval!)
    interval = null
    videoRef.value?.contentWindow?.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    )
  } else {
    interval = setInterval(() => {
      counter.value++
    }, 1000)
    videoRef.value?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    )
  }
  isRunning.value = !isRunning.value
}

const resetCounter = () => {
  clearInterval(interval!)
  interval = null
  counter.value = 0
  isRunning.value = false
  videoRef.value?.contentWindow?.postMessage(
    '{"event":"command","func":"stopVideo","args":""}',
    '*'
  )
}

// Lista de videos con títulos y descripciones únicas
const videos = [
  {
    id: 1,
    title: 'Avtividad 2',
    description: 'Aprende los conceptos básicos de la programación en este curso introductorio.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    route: '/activities/first'
  },
  {
    id: 2,
    title: 'Avtividad 3',
    description: 'Explora cómo funcionan los arrays, listas y objetos en JavaScript.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    route: '/activities/second'
  },
  {
    id: 3,
    title: 'Avtividad 4',
    description: 'Descubre cómo usar Vue.js para crear aplicaciones web interactivas.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    route: '/activities/third'
  },
  {
    id: 4,
    title: 'Avtividad 5',
    description: 'Aprende los principios del diseño UX/UI y cómo aplicarlos en tus proyectos.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    route: '/activities/fourth'
  }
]
const navigate = (route: string) => {
  router.push(route)
}
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-between p-6 max-w-6xl mx-auto mt-16">
    <!-- Contenido de Texto -->
    <div class="md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl font-bold text-gray-800">Título del Video</h2>
      <p class="mt-4 text-gray-600">
        Aquí puedes agregar una descripción del video. Explica de qué trata y qué información relevante tiene.
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
          class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <component :is="isRunning ? IconPause : IconPlay" class="w-4 h-4 mr-2" />
          {{ isRunning ? 'Pausar' : 'Iniciar' }}
        </button>
        <button
          @click="resetCounter"
          class="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <IconReload class="w-4 h-4 mr-2" />
          Reiniciar
        </button>
      </div>
    </div>
  </section>

  <!-- Lista de Videos -->
  <h2 class="text-center font-bold text-4xl mt-24">Más Actividades</h2>
  <LineBar />
  <ul class="max-w-6xl mx-auto p-6 space-y-6">
    <li
      v-for="video in videos"
      :key="video.id"
      class="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-300 to-gray-100 p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <div class="flex items-center space-x-4">
        <input type="checkbox" class="w-5 h-5" />
        <iframe
          :src="video.url"
          frameborder="0"
          class="rounded-lg w-60 h-32 shadow-md"
          allowfullscreen
        ></iframe>
      </div>

      <div class="flex-1 md:ml-6 mt-4 md:mt-0">
        <h3 class="text-lg font-bold text-gray-800">{{ video.title }}</h3>
        <p class="text-gray-600">{{ video.description }}</p>
      </div>

      <!-- Botón interactivo con animaciones -->
      <button
        class="relative inline-flex items-center justify-center px-6 py-3 text-white font-bold bg-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-blue-700 hover:scale-110 hover:shadow-xl group"
        @click="navigate( video.route)"
      >
        <span class="absolute inset-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        🔥 Ver Más
      </button>
    </li>
  </ul>
</template>

<style scoped>
/* Animación del botón */
button:hover {
  animation: pulse 0.5s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}
</style>
