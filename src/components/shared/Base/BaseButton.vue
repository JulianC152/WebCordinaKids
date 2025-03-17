<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default:
      'font-bold py-1 px-4 rounded-full bg-primary text-white hover:bg-primary-dark hover:text-white',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <button :class="props.class" :disabled="props.disabled" @click="emit('click')">
    <slot />
  </button>
</template>
