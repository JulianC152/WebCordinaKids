<script lang="ts" setup>
defineProps({
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: 'text-gray-800',
  },
  strokeWidth: {
    type: Number,
    default: 4,
  },
  fill: {
    type: String,
    default: 'none',
  },
  ariaLabel: {
    type: String,
    default: 'icon',
  },
  role: {
    type: String,
    default: 'img',
  },
})
</script>
<template>
  <svg
    :width="width"
    :height="height"
    :class="color"
    :aria-label="ariaLabel"
    :role="role"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path
      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
</template>
