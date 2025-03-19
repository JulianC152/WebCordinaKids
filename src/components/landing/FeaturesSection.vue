<script lang="ts" setup>
import { ref } from 'vue'
import LineBar from '@/components/shared/LineBar.vue'
import BaseCard from '../shared/Base/BaseCard.vue'
import OnlyButton from '../buttons/OnlyButton.vue'
import CardOnly from '../shared/CardText.vue'

const handleClick = () => {
  alert('¡Botón clickeado!')
}

const cards = ref([
  {
    images: [
      '../images/LanzamientoPelota.webp',
      '../images/Lanzamiento2.jpg',
      '../images/Lanzamiento3.jpg',
    ],
    price: 'Agilidad',
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
    price: 'Equilibrio',
    title: 'Equilibrio sobre una pierna',
    city: 'Completo',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 2,
    players: 1,
    redireccion: '/detalles/123'
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 'Coordinacion',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
    redireccion: '/detalles/123'
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 'Equilibrio',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 'Agilidad',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 'Coordinacion',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Practiquemos',
    ocupation: 'Property',
    time: 3,
    players: 5,
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
    <div class="flex justify-center">
      <OnlyButton
        :text="'Load More'"
        :buttonClass="'bg-primary text-white py-1 px-4 rounded-full my-4'"
        :textClass="'text-sm'"
        :onClick="handleClick"
      />
    </div>
  </section>
  <div class="w-full bg-gray-200 py-10">
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
            :title="'Meta #1'"
            :description="'Total Listings in the System'"
            :cardClass="' bg-black text-white w-full h-40 flex flex-col items-center justify-center text-center rounded-lg'"
            :link="''"
          />

          <CardOnly
            :title="'Meta #2'"
            :description="'Active Listings'"
            :cardClass="' bg-black text-white w-full h-40 flex flex-col items-center justify-center text-center rounded-lg'"
            :link="''"
          />

          <CardOnly
            :title="'Meta #3'"
            :description="'Articles in the Blog'"
            :cardClass="' bg-black text-white w-full h-40 flex flex-col items-center justify-center text-center rounded-lg'"
            :link="''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
