<template>
  <footer class="bg-gray-700 text-white py-8 px-6 rounded-2xl shadow-lg text-center relative">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <!-- Logo -->
      <div class="flex justify-center md:justify-start">
        <img
          src="/public/images/Autonoma.jpg"
          alt="Logo Universidad"
          class="w-32 h-32 object-contain rounded-xl"
        />
      </div>

      <!-- Integrantes -->
      <div class="text-center md:text-left">
        <h2 class="text-yellow-400 font-semibold text-xl mb-4">Integrantes</h2>
        <div class="grid grid-cols-2 gap-x-6 text-sm md:text-base">
          <div>
            <p>Katherin Diaz</p>
            <p>Eduar Tuquerres</p>
            <p>Julian Charfuelan</p>
          </div>
          <div>
            <p>Emmanuel Villa</p>
            <p>Luis Lopez</p>
            <p>Edwin Daza</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Universidad -->
    <div class="text-center mt-6 text-yellow-400 font-bold text-lg md:text-xl">
      Corporación Universitaria Autónoma del Cauca
    </div>

    <!-- Información del proyecto -->
    <div class="text-sm md:text-base text-center max-w-6xl mx-auto mt-2">
      <strong>(Coordi Kids), © 2025</strong> es un producto del Tercer Laboratorio de Innovación
      Educativa "Herramientas didácticas para una generación digital", convocado por La Cátedra
      UNESCO Movimiento Educativo Abierto para América Latina del Tecnológico de Monterrey y la
      Especialización en Pedagogía de la Facultad de Ciencias Sociales y Humanidades de la
      Corporación Universitaria Autónoma del Cauca, con apoyo del Centro Universitario de la
      Universidad Autónoma del Estado de México - Texcoco, la Universidad Francisco de Paula
      Santander y la Universidad Filadelfia de México. En el marco del proyecto educativo
      “Herramientas didácticas para una generación digital ” by Promotoras: Katherin Diaz Ordoñez,
      Julian Andres Charfuelan Sanchez, Eduar Hernan Tuquerrez Ruiz, Emmanuel Villa Hoyos, Edwin
      Hernan Daza Bermeo y Luis Eduardo López Chilito, Mentor/a: Dra Ana Mendieta L: Magister, Luz
      Marina Chalapud Narváez is licensed under Creative Commons
      Attribution-NonCommercial-ShareAlike 4.0 International
    </div>

    <!-- Imagen en la esquina derecha -->
    <div class="absolute top-4 right-4">
      <img src="/public/images/logoFooter.jpg" alt="Equipo" class="w-70 h-50 " />
    </div>
  </footer>
</template>