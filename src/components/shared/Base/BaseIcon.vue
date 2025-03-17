<template>
  <component
    :is="iconComponent"
    v-if="iconComponent"
    :class="[`w-${size} h-${size}`, color, bg, rounded, margin, padding]"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
import { defineProps, shallowRef, watchEffect } from 'vue'

// Cargar dinámicamente todos los íconos desde la carpeta
const icons = import.meta.glob('@/components/shared/icons/*.vue') as Record<
  string,
  () => Promise<{ default: unknown }>
>

// Definir las props del icono
const props = defineProps<{
  name: string // Nombre del icono (debe coincidir con el nombre del archivo)
  size?: string // Tamaño del icono (ej. '6' para w-6 h-6)
  color?: string // Color del icono (ej. 'text-red-500')
  bg?: string // Fondo del icono (ej. 'bg-red-200')
  rounded?: string // Borde redondeado del icono (ej. 'rounded-full')
  margin?: string // Espaciado del icono (ej. 'mr-2')
  padding?: string // Relleno del icono (ej. 'p-2')
}>()

const iconComponent = shallowRef<unknown>(null)

watchEffect(async () => {
  const iconPath = `/src/components/shared/icons/${props.name}.vue`
  if (props.name && icons[iconPath]) {
    iconComponent.value = (await icons[iconPath]()).default
  } else {
    iconComponent.value = null // Si no se encuentra, no renderiza nada
  }
})
</script>

<style scoped></style>
