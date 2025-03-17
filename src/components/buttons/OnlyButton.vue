<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  buttonClass?: string
  onClick: () => void
  text?: string
  textClass?: string
}>()
</script>

<template>
  <button :class="props.buttonClass" @click="props.onClick">
    <span :class="props.textClass">{{ text }}</span>
  </button>
</template>
