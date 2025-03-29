<template>
  <div class="container mx-auto py-12 px-4 text-center mt-10">
    <h2 class="text-4xl font-bold mb-8 text-gray-800">¿Quiénes Somos?</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="(member, index) in team"
        :key="index"
        class="bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <img :src="member.image" :alt="member.name" class="w-32 h-32 mx-auto rounded-full mb-4" />
        <h3 class="text-xl font-semibold text-gray-700">{{ member.name }}</h3>
        <p class="text-gray-500">{{ member.role }}</p>
        <p class="mt-2 text-gray-600">{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const team = ref([
        {
          name: "Katherin Diaz",
          role: "Ing. Softaware y Computacion",
          description: "Apasionada del diseño y la experiencia de usuario.",
          image: "/public/images/Katherin.jpeg",
        },
        {
          name: "Eduar Túquerres",
          role: "Ing. Softaware y Computacion",
          description: "Lider en bases de datos y servidores.",
          image: "/public/images/Eduard.jpeg",
        },
        {
          name: "Julian Charfuelan",
          role: "Ing. Softaware y Computacion",
          description: "Crea experiencias digitales intuitivas y atractivas.",
          image: "/public/images/Julian.jpeg",
        },
        {
          name: "Emmanuel Villa",
          role: "Entredor Deportivo",
          description: "Lidera el equipo con eficiencia y visión estratégica.",
          image: "/public/images/Emanuel.jpeg",
        },
        {
          name: "Luis Lopez",
          role: "Entredor Deportivo",
          description: "Garantiza la calidad y el rendimiento de las actividades.",
          image: "/public/images/Luis.jpeg",
        },
        {
          name: "Edwin Daza",
          role: "Entredor Deportivo",
          description: "Garantiza la calidad y el rendimiento de las actividades. ",
          image: "/public/images/Edwin.jpeg",
        },
]);
</script>

<style>
body {
  background-color: #f9fafb;
}
</style>
