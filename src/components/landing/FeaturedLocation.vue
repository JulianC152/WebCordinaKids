<script setup lang="ts">
// import { ref } from 'vue'
import CardImage from '../shared/CardImage.vue'
import LineBar from '../shared/LineBar.vue'

// const cards = ref([
//   {
//     images: '../images/Stadium1.jpg',
//     title: 'Luxury villa in Rego Park',
//   },
//   {
//     images: '../images/Stadium1.jpg',
//     title: 'Luxury villa in Rego Park',
//   },
//   {
//     images: '../images/Stadium1.jpg',
//     title: 'Luxury villa in Rego Park',
//   },
// ])
</script>

<template>
  <div class="flex flex-col items-center mb-12">
    <h2 class="text-center font-bold text-4xl mt-24">Featured Listings</h2>
    <LineBar />

    <div class="grid grid-cols-2 gap-4 mt-6">
      <div class="col-span-2 flex justify-center space-x-4">
        <CardImage images="/images/Stadium1.jpg" title="Anuradhapura" class="hover:scale-105 transition-transform "/>
        <CardImage images="/images/Stadium2.jpg" title="Badulla" class="hover:scale-105 transition-transform "/>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="col-span-3 flex justify-center space-x-4">
        <CardImage images="/images/Stadium3.jpg" title="Kandy" class="hover:scale-105 transition-transform "/>
        <CardImage images="/images/Stadium4.jpg" title="Gampaha" class="hover:scale-105 transition-transform "/>
        <CardImage images="/images/Stadium5.jpg" title="Jaffna" class="hover:scale-105 transition-transform "/>
      </div>
    </div>
  </div>
</template>
