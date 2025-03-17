<script lang="ts" setup>
import { ref } from 'vue'
import LineButtons from '@/components/shared/LineButtons.vue'
import LineBar from '@/components/shared/LineBar.vue'
import BaseCard from '../shared/Base/BaseCard.vue'
import OnlyButton from '../buttons/OnlyButton.vue'
import CardOnly from '../shared/CardText.vue'

interface Button {
  label: string
  classButtonCustom: string
  iconClassCustom: string
  classLabel?: string
  icon?: string
  onClick: () => void
}

const handleClick = () => {
  alert('¡Botón clickeado!')
}

const buttons: Button[] = [
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-red-100 mr-4 rounded-full text-primary p-1',
    label: 'Holiday Rentals',
    onClick: () => {
      console.log('Fields')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-green-100 mr-4 rounded-full text-green-600 p-1',
    label: 'Residential Spaces',
    onClick: () => {
      console.log('Mvp')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-purple-100 mr-4 rounded-full text-purple-600 p-1',
    label: 'Event Spaces',
    onClick: () => {
      console.log('Teams')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-blue-100 mr-4 rounded-full text-sky-600 p-1',
    label: 'Commercial Properities',
    onClick: () => {
      console.log('Teams')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-orange-100 mr-4 rounded-full text-orange p-1',
    label: 'More',
    onClick: () => {
      console.log('Teams')
    },
  },
]

const containerRef = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (containerRef.value) {
    containerRef.value.scrollBy({ left: -200, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (containerRef.value) {
    containerRef.value.scrollBy({ left: 200, behavior: 'smooth' })
  }
}

const cards = ref([
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 85000,
    currency: 'COL',
    title: 'Luxury villa in Rego Park',
    city: 'Popayán',
    owner: 'Juan Pablo',
    ocupation: 'Property',
    time: 1,
    players: 11,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 75000,
    currency: 'COL',
    title: 'Modern apartment in Cali',
    city: 'Cali',
    owner: 'Pedro Juan',
    ocupation: 'Property',
    time: 2,
    players: 8,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 65000,
    currency: 'COL',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Camila La Leona',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 65000,
    currency: 'COL',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Juan Pedro',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 65000,
    currency: 'COL',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Juan Pedro',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 65000,
    currency: 'COL',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Juan Pedro',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
  {
    images: ['../images/Stadium1.jpg', '../images/Stadium2.jpg'],
    price: 65000,
    currency: 'COL',
    title: 'Cozy house in Medellín',
    city: 'Medellín',
    owner: 'Juan Pedro',
    ocupation: 'Property',
    time: 3,
    players: 5,
  },
])
</script>

<template>
  <section class="relative max-w-screen-lg mx-auto px-6">
    <h2 class="text-center font-bold text-4xl mt-24">Featured Listings</h2>
    <LineBar />
    <div class="relative flex items-center">
      <button @click="scrollLeft" class="mr-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400">
        ◀
      </button>
      <div
        ref="containerRef"
        class="flex gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 py-2"
        style="scroll-behavior: smooth"
      >
        <LineButtons
          :buttons="buttons"
          :classContainer="'flex gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 py-2'"
          :classButton="'flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all bg-gray-200 hover:bg-primary hover:text-white'"
          :classLabel="''"
        />
      </div>
      <button @click="scrollRight" class="ml-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400">
        ▶
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 justify-self-center">
      <BaseCard
        v-for="(card, index) in cards"
        :key="index"
        :images="card.images"
        :price="card.price"
        :currency="card.currency"
        :title="card.title"
        :city="card.city"
        :time="card.time"
        :players="card.players"
        :owner="card.owner"
        :oupation="card.ocupation"
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
            Insights and <br />
            Performance <br />
            Metrics
          </h2>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardOnly
            :title="'5000+'"
            :description="'Total Listings in the System'"
            :cardClass="' bg-black text-white w-full h-40 flex flex-col items-center justify-center text-center rounded-lg'"
            :link="''"
          />

          <CardOnly
            :title="'1000+'"
            :description="'Active Listings'"
            :cardClass="' bg-black text-white w-full h-40 flex flex-col items-center justify-center text-center rounded-lg'"
            :link="''"
          />

          <CardOnly
            :title="'30+'"
            :description="'Articles in the Blog'"
            :cardClass="' bg-black text-white w-full h-40 flex flex-col items-center justify-center text-center rounded-lg'"
            :link="''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ocultar scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
