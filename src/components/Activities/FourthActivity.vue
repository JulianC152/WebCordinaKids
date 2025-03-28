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
const videoRef = ref<HTMLVideoElement | null>(null)

const toggleCounter = () => {
  if (isRunning.value) {
    clearInterval(interval!)
    interval = null
    videoRef.value?.pause()
  } else {
    interval = setInterval(() => {
      counter.value++
    }, 1000)
    videoRef.value?.play()
  }
  isRunning.value = !isRunning.value
}

const resetCounter = () => {
  clearInterval(interval!)
  interval = null
  counter.value = 0
  isRunning.value = false
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
}

const videos = [
  {
    id: 1,
    title: 'Diferenciación',
    description: 'Aprende los conceptos básicos de la programación en este curso introductorio.',
    url: '/videos/1-Diferenciacion.mp4',
    route: '/activities/first',
  },
  {
    id: 2,
    title: 'Orientacion Equilibrio',
    description: 'Aprende los conceptos básicos de la programación en este curso introductorio.',
    url: '/videos/2-Orientacion Equilibrio.mp4',
    route: '/activities/second',
  },
  {
    id: 3,
    title: 'Reaccion',
    description: 'Explora cómo funcionan los arrays, listas y objetos en JavaScript.',
    url: '/videos/3-Reaccion.mp4',
    route: '/activities/third',
  },
  {
    id: 4,
    title: 'Ritmo',
    description: 'Descubre cómo usar Vue.js para crear aplicaciones web interactivas.',
    url: '/videos/4-ritmo.mp4',
    route: '/activities/fourth',
  },
  {
    id: 5,
    title: 'Adaptacion',
    description: 'Aprende los principios del diseño UX/UI y cómo aplicarlos en tus proyectos.',
    url: '/videos/5-Adaptacion.mp4',
    route: '/activities/fifth',
  },
]

const navigate = (route: string) => {
  router.push(route)
}

const comments = ref<{ id: number; text: string }[]>([])
const newComment = ref('')
const addComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({ id: Date.now(), text: newComment.value.trim() })
    newComment.value = ''
  }
}
</script>

<template>
  <section
    class="flex flex-col md:flex-row items-center justify-between p-6 max-w-6xl mx-auto mt-16"
  >
    <div class="md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl font-bold text-gray-800">Diferenciación</h2>
      <p class="mt-4 text-gray-600">
        Aquí puedes agregar una descripción del video. Explica de qué trata y qué información
        relevante tiene.
      </p>
    </div>

    <div class="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
      <div class="w-full max-w-lg aspect-video bg-gray-300 rounded-lg shadow-md">
        <video ref="videoRef" class="w-full h-full rounded-lg" controls>
          <source :src="videos[0].url" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

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
        <video :src="video.url" class="rounded-lg w-60 h-32 shadow-md" controls></video>
      </div>
      <div class="flex-1 md:ml-6 mt-4 md:mt-0">
        <h3 class="text-lg font-bold text-gray-800">{{ video.title }}</h3>
        <p class="text-gray-600">{{ video.description }}</p>
      </div>
      <button
        class="relative inline-flex items-center justify-center px-6 py-3 text-white font-bold bg-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-blue-700 hover:scale-110 hover:shadow-xl group"
        @click="navigate(video.route)"
      >
        <span
          class="absolute inset-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        ></span>
        🔥 Ver Más
      </button>
    </li>
  </ul>
  <div class="max-w-6xl mx-auto p-6 my-10 bg-white shadow-lg rounded-xl">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Comentarios</h2>
    <div class="flex space-x-4 mb-4">
      <input
        v-model="newComment"
        type="text"
        class="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Escribe un comentario..."
      />
      <button
        @click="addComment"
        class="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
      >
        Publicar
      </button>
    </div>
    <ul v-if="comments.length" class="space-y-4">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="p-4 bg-gray-100 rounded-lg shadow-md"
      >
        {{ comment.text }}
      </li>
    </ul>
    <p v-else class="text-gray-500">No hay comentarios aún. Sé el primero en comentar.</p>
  </div>
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
