<script lang="ts" setup>
import LineButtons from '@/components/shared/LineButtons.vue'
import LineBar from '@/components/shared/LineBar.vue'


interface Button {
  label: string
  classButtonCustom: string
  iconClassCustom: string
  classLabel?: string
  icon?: string
  onClick: () => void
}

const buttons: Button[] = [
  {
    classButtonCustom: 'hover:bg-red-200 ',
    iconClassCustom: 'w-8 h-8 bg-red-100 mr-4 rounded-full text-primary p-1',
    label: 'Extremidades Superiores',
    icon: 'IconHand',
    onClick: () => {
      console.log('Fields')
    },
  },
  {
    classButtonCustom: 'hover:bg-green-200',
    iconClassCustom: 'w-8 h-8 bg-green-100 mr-4 rounded-full text-green-600 p-1',
    label: 'Extremidades Inferiores',
    icon: 'IconShoes',
    onClick: () => {
      console.log('Mvp')
    },
  },
  {
    classButtonCustom: 'hover:bg-purple-200',
    iconClassCustom: 'w-8 h-8 bg-purple-100 mr-4 rounded-full text-purple-600 p-1',
    label: 'Todo Junto',
    icon: 'IconChild',
    onClick: () => {
      console.log('Teams')
    },
  },
]
</script>

<template>
  <section class="browse-categories">
    <h2 class="text-center font-bold text-4xl mt-24">Elige la categoria que mas te guste</h2>
    <LineBar></LineBar>
    <div class="categories-container flex justify-center items-center gap-24 m-10">
      <LineButtons
        :buttons="buttons"
        :classContainer="'grid gap-4 content-cente font-bold py-1 px-2 rounded-full text-white hover:text-white grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:py-0'"
        :classButton="'flex items-center hover:scale-105 font-bold py-1 px-4 rounded-full border-2 border-radius bg-transparent text-black'"
        :classLabel="''"
      />
    </div>
  </section>
</template>
