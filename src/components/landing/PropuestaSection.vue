<template>
  <div class="container mx-auto py-12 px-6 mt-10">
    <div class="text-center mb-12">
      <h2 class="text-5xl font-bold text-gray-800">Aplicativo web para la enseñanza de actividades coordinativas </h2>
    </div>
    <div class="bg-white p-10 rounded-2xl shadow-lg space-y-8">
      
      <div>
        <h4 class="text-2xl font-semibold text-gray-600">Objetivo General</h4>
        <p class="text-gray-600 mt-2">{{ proposal.generalObjective }}</p>
      </div>
      
      <div>
        <h4 class="text-2xl font-semibold text-gray-600 text-center">Objetivos Específicos</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div v-for="(objective, index) in proposal.specificObjectives" :key="index" class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <p class="text-gray-700">{{ objective }}</p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 order-2 md:order-1 p-4">
          <img src=" /images/justificacion.webp " alt="Justificación" class="rounded-lg shadow-md w-80" />
        </div>
        <div class="md:w-1/2 order-1 md:order-2">
          <h4 class="text-2xl font-semibold text-gray-600">Justificación</h4>
          <p class="text-gray-600 mt-2 text-justify">{{ proposal.justification }}</p>
        </div>
      </div>
      
      <div>
        <h4 class="text-2xl font-semibold text-gray-600">Público Objetivo</h4>
        <p class="text-gray-600 mt-2">{{ proposal.targetAudience }}</p>
      </div>
      <div class="j ">
        <h4 class="text-2xl font-semibold text-gray-600">
          Conclusión</h4>
        <p class="text-gray-600 mt-2">{{ proposal.conclusion }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const proposal = reactive({
  title: "Plataforma de E-commerce Sostenible",
  generalObjective: "Desarrollar un aplicativo web para la enseñanza de actividades en las capacidades coordinativas, que faciliten el proceso de aprendizaje en los estudiantes.",
  specificObjectives: [
    "Diseñar una interfaz accesible y amigable que facilite la navegación y el uso de la aplicación a los estudiantes de diferentes niveles educativos.",
    "Implementar recursos interactivos que permitan a los estudiantes comprender y practicar actividades de las capacidades coordinativas de manera dinámica."
  ],
  justification: "El desarrollo del aplicativo web representa una solución innovadora que ofrece recursos didácticos, dinámicos y accesibles, permitiendo a los estudiantes aprender de manera práctica y atractiva. Además, proporciona a los docentes herramientas para monitorear el progreso de los estudiantes mediante el uso de actividades de coordinación desde un ámbito deportivo y adaptar sus estrategias pedagógicas según las necesidades individuales.",
  targetAudience: "Nuestro público principal son niños de 7 a 9 años, en compañía de sus padres, profesores o persona encargada del menor.",
  conclusion: "El uso de un aplicativo web con recursos didácticos y dinámicos, constituye una herramienta innovadora, que no solo favorece el aprendizaje práctico y motivador para los estudiantes, sino que también brinda a los docentes la posibilidad de monitorear y ajustar sus metodologías en función del progreso y las necesidades individuales de cada alumno.",
});
</script>

<style>
body {
  background-color: #f9fafb;
}
</style>
