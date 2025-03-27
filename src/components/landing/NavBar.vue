<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IconUser from '@/components/shared/icons/IconUser.vue'
import IconBars from '@/components/shared/icons/IconBars.vue'
import IconDown from '../shared/icons/IconDown.vue'

const router = useRouter()

const isOpen = ref(false)
const isDropdownOpen = ref(false)

// Lista de actividades con sus respectivas rutas
const activities = [
  { name: 'Acoplamiento', image: '../images/Avatar1.jpeg', route: '/activities/first' },
  { name: 'Orientacion', image: '../images/Avatar2.jpeg', route: '/activities/second' },
  { name: 'Diferenciación', image: '../images/Avatar3.jpeg', route: '/activities/third' },
  { name: 'Equilibrio', image: '../images/Avatar4.jpeg', route: '/activities/fourth' },
  { name: 'Adaptación', image: '../images/Avatar3.jpeg', route: '/activities/fourth' },
  { name: 'Ritmo', image: '../images/Avatar2.jpeg', route: '/activities/fourth' },
  { name: 'Reaccion', image: '../images/Avatar1.jpeg', route: '/activities/fourth' },
]

// Función para redirigir dinámicamente según la actividad seleccionada
const navigate = (route: string) => {
  router.push(route)
}
</script>

<template>
  <nav class="bg-white p-4 shadow-md fixed top-0 w-full z-50">
    <div class="container mx-auto flex justify-between items-center relative">
      <!-- Título a la izquierda -->
      <div class="flex text-black text-2xl font-extrabold items-center">
        <img src="/public/images/logo.webp" alt="" class="mr-5 w-10 h-10 rounded-full" />
        CoordinaKids
      </div>

      <!-- Menú en desktop -->
      <div class="hidden md:flex space-x-8 items-center">
        <a
          @click.prevent="navigate('/')"
          class="text-letters hover:text-primary font-bold cursor-pointer"
        >
          Home
        </a>

        <!-- Dropdown -->
        <div class="relative">
          <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="flex items-center rounded-m py-2 px-4 text-letters text-md font-bold hover:text-primary focus:outline-none"
          >
            Actividades
            <IconDown
              class="ml-2 w-4 h-4 transition-transform"
              :class="{ 'rotate-180': isDropdownOpen }"
            />
          </button>
          <ul
            v-if="isDropdownOpen"
            class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <li
              v-for="activity in activities"
              :key="activity.name"
              class="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              @click="navigate(activity.route)"
            >
              <img :src="activity.image" alt="Avatar" class="w-8 h-8 rounded-full mr-3" />
              {{ activity.name }}
            </li>
          </ul>
        </div>

        <a href="#" class="text-letters hover:text-primary font-bold">Quienes Somos</a>
        <a href="#" class="text-letters hover:text-primary font-bold">Propuesta</a>
      </div>

      <!-- Icono de usuario y menú hamburguesa en móviles -->
      <div class="flex items-center text-letters">
        <span class="mx-2 font-bold hidden md:inline">Esp</span>
        <IconUser class="w-8 h-8 hidden md:inline" />
        <button @click="isOpen = true" class="md:hidden ml-4">
          <IconBars class="w-8 h-8 text-black" />
        </button>
      </div>
    </div>

    <!-- Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
      @click="isOpen = false"
    ></div>

    <!-- Menú desplegable en móviles -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col items-start space-y-4 transform transition-transform duration-300 ease-in-out z-50"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Botón de cierre -->
      <button @click="isOpen = false" class="self-end text-black text-2xl font-bold">×</button>

      <a href="/activities/first" class="text-letters hover:text-primary font-bold">Home</a>
      <a href="#" class="text-letters hover:text-primary font-bold">Actividades</a>
      <a href="#" class="text-letters hover:text-primary font-bold">Propuesta</a>
      <a href="#" class="text-letters hover:text-primary font-bold">Quienes Somos</a>
      <div class="flex items-center">
        <span class="mx-2 font-bold">Esp</span>
        <IconUser class="w-8 h-8" />
      </div>
    </div>
  </nav>
</template>
