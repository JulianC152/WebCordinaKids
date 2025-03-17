<script lang="ts" setup>
import BaseButton from '@/components/shared/Base/BaseButton.vue'
import BaseIcon from '@/components/shared/Base/BaseIcon.vue'

defineProps({
  buttons: {
    type: Array as () => {
      label: string
      classButtonCustom?: string
      classLabel?: string
      icon?: string
      iconClassCustom?: string | object
    }[],
    default: () => [],
  },
  classContainer: {
    type: String,
    default: 'flex gap-2',
  },
  classButton: {
    type: String,
    default:
      'flex justify-center items-center font-bold py-1 px-4 rounded-full bg-primary text-white hover:bg-primary-dark hover:text-white',
  },
  hasIcons: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :class="classContainer">
    <BaseButton
      v-for="(button, index) in buttons"
      :key="index"
      :button="button"
      :class="[classButton, button.classButtonCustom].join(' ')"
    >
      <BaseIcon
        v-if="button.icon"
        :name="button.icon"
        :class="button.iconClassCustom"
        fill="transparent"
      />
      <span :class="button.classLabel"> {{ button.label }}</span>
    </BaseButton>
  </div>
</template>

<style scoped></style>
