<template>
  <div class="flex items-center justify-between p-8 bg-gray-100 rounded-2xl shadow-md">
    <!-- Imagen centrada verticalmente -->
    <div class="flex-shrink-0">
      <img src="/public/images/Autonoma.jpg" alt="Logo Universidad" class="w-40 h-40 object-contain rounded-xl" />
    </div>

    <!-- Nombres del grupo -->
    <div class="flex flex-col sm:flex-row sm:space-x-16 text-center sm:text-left text-lg font-medium">
      <!-- Primera columna de nombres -->
      <div class="space-y-2">
        <h2 class="text-blue-700 font-semibold text-xl mb-2">Integrantes</h2>
        <p>Katherin Diaz</p>
        <p>Eduar Tuquerres</p>
        <p>Julian Charfuelan</p>
      </div>

      <!-- Segunda columna de nombres -->
      <div class="space-y-2">
        <h2 class="text-blue-700 font-semibold text-xl mb-2 invisible sm:visible">⠀</h2> <!-- Invisible en móvil, solo para alinear -->
        <p>Emunuel Villa</p>
        <p>Luis Lopez</p>
        <p>Edwin Daza</p>
      </div>
    </div>

    <!-- Universidad -->
    <div class="text-center sm:text-right text-blue-900 font-bold text-xl">
      Universidad Autónoma del Cauca
    </div>
  </div>
</template>
