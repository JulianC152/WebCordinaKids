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
    default: 2,
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
    viewBox="0 0 24 24"
    :fill="fill"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      :stroke-width="strokeWidth"
      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
 />
  </svg>
</template>
