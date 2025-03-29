<script lang="ts" setup>
import { ref } from 'vue'
import LineBar from '@/components/shared/LineBar.vue'
import BaseCard from '../shared/Base/BaseCard.vue'
import CardOnly from '../shared/CardText.vue'

const cards = ref([
  {
    images: [
      '../images/LanzamientoPelota.webp',
      '../images/Lanzamiento2.jpg',
      '../images/Lanzamiento3.jpg',
    ],
    price: 'Acomplamiento',
    title: 'Lanzamiento de Pelota',
    city: 'Manos',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 2,
    players: 2,
    redireccion: '/activities/first'
  },
  {
    images: ['../images/Equilibrio.webp', '../images/Equilibrio2.jpg', '../images/Equilibrio3.jpg'],
    price: 'Orientacion',
    title: 'Equilibrio sobre una pierna',
    city: 'Completo',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 2,
    players: 1,
    redireccion: '/activities/second'
  },
  {
    images: ['../images/reaccion.jpeg', '../images/Stadium1.jpg'],
    price: 'Diferenciacion',
    title: 'Balon al aire',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
    redireccion: '/activities/third'
  },
  {
    images: ['../images/adaptacion.jpeg', '../images/Stadium1.jpg'],
    price: 'Equilibrio',
    title: 'Saltar la cuerda',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
     redireccion: '/activities/fourth'
  },
  {
    images: ['../images/ritmo.jpeg', '../images/Stadium1.jpg' ],
    price: 'Adaptacion',
    title: 'Aplaudir y Saltar',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
     redireccion: '/activities/fifth'
  },
  {
    images: ['../images/acoplamiento.jpeg', '../images/Stadium1.jpg'],
    price: 'Ritmo',
    title: 'Skipping entre conos',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
     redireccion: '/activities/sixth'
  },
  {
    images: ['../images/orientacion.jpeg', '../images/Stadium1.jpg'],
    price: 'Reaccion',
    title: 'Espejo',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
     redireccion: '/activities/seventh'
  },
])
</script>

<template>
  <section class="relative max-w-screen-lg mx-auto px-6">
    <h2 class="text-center font-bold text-4xl mt-24">Nuestros Ejercicios</h2>
    <LineBar />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 justify-self-center">
      <BaseCard
        v-for="(card, index) in cards"
        :key="index"
        :images="card.images"
        :price="card.price"
        :title="card.title"
        :city="card.city"
        :time="card.time"
        :players="card.players"
        :owner="card.owner"
        :oupation="card.ocupation"
        :redireccion="card.redireccion"
      />
    </div>
  </section>
  <div class="w-full bg-red-100 py-10">
    <div class="max-w-screen-lg mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-4xl font-bold text-gray-800 leading-tight text-center md:text-left">
            Conoce <br />
            Todos Nuestros <br />
            Objetivos
          </h2>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardOnly
            :title="'1'"
            :description="'Desarrollar una aplicación web interactiva para la enseñanza de actividades en las capacidades coordinativas'"
            :cardClass="' bg-black text-sky-50 w-full h-50 flex flex-col items-center  text-center rounded-lg'"
            :link="''"
          />

          <CardOnly
            :title="'2'"
            :description="'Facilitar el proceso de aprendizaje por medio de estas actividades'"
            :cardClass="' bg-black text-sky-50 w-full h-50 flex flex-col items-center  text-center rounded-lg'"
            :link="''"
          />

          <CardOnly
            :title="'3'"
            :description="'Fortalecer fisica y mentalmete a los estudiantes por medio de estas actividades'"
            :cardClass="' bg-black text-sky-50 w-full h-50 flex flex-col items-center  text-center rounded-lg'"
            :link="''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
