<template>
  <div class="flex flex-col items-center justify-center h-screen bg-blue-100 p-4">
    <h1 class="text-3xl font-bold text-blue-600 mb-4">🎥 ¡Elige tu Video Favorito! 🎬</h1>
    <p class="text-lg text-gray-700 mb-6">Haz clic en un video para verlo más grande. 📺</p>
    <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
      <video
        v-for="(video, index) in videos"
        :key="index"
        :src="video"
        controls
        class="transition-all cursor-pointer rounded-lg border-4 border-yellow-400 shadow-lg hover:scale-105"
        :class="{
          'w-3/4 md:w-2/3 h-auto': selectedVideo === index,
          'w-1/2 md:w-1/4 h-auto opacity-70': selectedVideo !== index
        }"
        @click="selectedVideo = index"
      ></video>
    </div>
    <p class="text-md text-pink-600 mt-4">✨ ¡Diviértete viendo tus videos favoritos! ✨</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const videos = ref([
  '/public/videos/Act_1.1.mp4',
  '/public/videos/Act_1.2.mp4',
  '/public/videos/Act_1.3.mp4'
]);

const selectedVideo = ref(0);
</script>

<style scoped>
video {
  max-height: 300px;
}
</style>
