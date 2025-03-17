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
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-red-100 mr-4 rounded-full text-primary p-1',
    label: 'Holiday Rentals',
    icon: 'IconLike',
    onClick: () => {
      console.log('Fields')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-green-100 mr-4 rounded-full text-green-600 p-1',
    label: 'Residential Spaces',
    icon: 'IconHome',
    onClick: () => {
      console.log('Mvp')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-purple-100 mr-4 rounded-full text-purple-600 p-1',
    label: 'Event Spaces',
    icon: 'IconTooling',
    onClick: () => {
      console.log('Teams')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-blue-100 mr-4 rounded-full text-sky-600 p-1',
    label: 'Commercial Properities',
    icon: 'IconDollar',
    onClick: () => {
      console.log('Teams')
    },
  },
  {
    classButtonCustom: '',
    iconClassCustom: 'w-8 h-8 bg-orange-100 mr-4 rounded-full text-orange p-1',
    label: 'More',
    icon: 'IconEllipsis',
    onClick: () => {
      console.log('Teams')
    },
  },
]
</script>

<template>
  <section class="browse-categories">
    <h2 class="text-center font-bold text-4xl mt-24">Browse From Top Categories</h2>
    <LineBar></LineBar>
    <div class="categories-container flex justify-center gap-24 m-10">
      <LineButtons
        :buttons="buttons"
        :classContainer="'grid gap-4 content-center font-bold py-1 px-2 rounded-full text-white hover:text-white grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:py-0'"
        :classButton="'flex items-center font-bold py-1 px-4 rounded-full border-2 border-radius bg-transparent text-black'"
        :classLabel="''"
      />
    </div>
  </section>
</template>
