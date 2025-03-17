<script lang="ts" setup>
import { ref, watch } from 'vue';
import IconUser from '@/components/shared/icons/IconUser.vue';
import IconBars from '@/components/shared/icons/IconBars.vue';

const isOpen = ref(false);

// Evitar scroll en el fondo cuando el menú está abierto
watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'auto';
});
</script>

<template>
  <nav class="bg-white p-4 shadow-md fixed top-0 w-full z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Título a la izquierda -->
      <div class="text-black text-2xl font-extrabold">FUT CHAMPS</div>

      <!-- Menú en desktop -->
      <div class="hidden md:flex space-x-16">
        <a href="#" class="text-letters hover:text-primary font-bold">Home</a>
        <a href="#" class="text-letters hover:text-primary font-bold">Tienda</a>
        <a href="#" class="text-letters hover:text-primary font-bold">Contacto</a>
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

    <!-- Menú desplegable en móviles (de derecha a izquierda) -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col items-start space-y-4 transform transition-transform duration-300 ease-in-out z-50"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Botón de cierre -->
      <button @click="isOpen = false" class="self-end text-black text-2xl font-bold">×</button>
      
      <a href="#" class="text-letters hover:text-primary font-bold">Home</a>
      <a href="#" class="text-letters hover:text-primary font-bold">Tienda</a>
      <a href="#" class="text-letters hover:text-primary font-bold">Contacto</a>
      <div class="flex items-center">
        <span class="mx-2 font-bold">Esp</span>
        <IconUser class="w-8 h-8" />
      </div>
    </div>
  </nav>
</template>
