<script lang="ts" setup>
defineProps({
  classSpan: {
    type: String,
    default: 'relative block w-16 h-1 bg-primary mx-auto mt-2 rounded-full',
  },
  classSpanChield: {
    type: String,
    default: 'absolute -right-5 top-0 w-4 h-1 bg-primary rounded-full',
  },

})
</script>


<template>
  <span :class="classSpan">
    <span :class="classSpanChield"></span>
  </span>
</template>
