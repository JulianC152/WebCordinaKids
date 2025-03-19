<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import IconLeft from '../icons/IconLeft.vue'
import IconRight from '../icons/IconRight.vue'
import IconHeart from '../icons/IconHeart.vue'

const router = useRouter();
const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
    default: () => [],
  },
  price: {
    type: String,
    required: true,
    default: '',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  city: {
    type: String,
    required: true,
    default: '',
  },
  time: {
    type: Number,
    required: true,
    default: 1,
  },
  players: {
    type: Number,
    required: true,
    default: 1,
  },
  owner: {
    type: String,
    required: true,
    default: '',
  },
  oupation: {
    type: String,
    required: true,
    default: '',
  },
  redireccion: {
    type: String,
    required: true,
    default: '',
  },
})

const currentImageIndex = ref(0)

const slideStyle = computed(() => ({
  transform: `translateX(-${currentImageIndex.value * 100}%)`,
  transition: 'transform 0.5s ease-in-out',
}))

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + props.images.length) % props.images.length
}

const redirectToPage = () => {
  if (props.redireccion) {
    router.push(props.redireccion)
  }
}
</script>

<template>
  <div class="rounded-lg shadow max-w-sm bg-white relative mb-10">
    <div class="relative group">
      <!-- Carrusel con desplazamiento correcto -->
      <div class="overflow-hidden rounded-lg relative h-48 w-full z-10">
        <div class="flex w-full h-full" :style="slideStyle">
          <img
            v-for="(image, index) in props.images"
            :key="index"
            :src="image"
            alt="Property Image"
            class="w-full h-full flex-shrink-0"
          />
        </div>
      </div>

      <!-- Botones de navegación -->
      <button
        @click="prevImage"
        class="absolute left-2 z-20 top-1/2 transform -translate-y-1/2 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <IconLeft :width="10" :height="10" />
      </button>

      <button
        @click="nextImage"
        class="absolute z-20 right-2 top-1/2 transform -translate-y-1/2 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <IconRight :width="10" :height="10" />
      </button>
    </div>
    <div class="mt-4 p-2">
      <div class="flex text-red-500 text-lg font-semibold">
        {{ props.price }}
      </div>
      <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
      <div class="text-gray-600 text-sm mt-4 flex space-x-4">
        <span>{{ props.city }}</span>
        <span>|</span>
        <span>{{ props.players }} Jugadores</span>
        <span>|</span>
        <span>{{ props.time }} Minutos</span>
      </div>
      <div class="m-5 flex justify-between items-center">
        <div>
          <button
            @click="redirectToPage"
            class="text-lg font-bold text-black border-1 rounded-full p-2 hover:bg-red-400"
          >
            {{ props.owner }}</button
          ><br />
          <!-- <span class="text-sm text-letters">{{ props.oupation }}</span> -->
        </div>
        <IconHeart class="ml-2 hover:text-primary bg-gray-100" />
      </div>
    </div>
  </div>
</template>
