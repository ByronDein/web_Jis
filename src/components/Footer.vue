<template>
    <footer class=" bg-blue-600 w-full">
  <div class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        <router-link class="flex-none text-xl font-semibold text-white" to="/" aria-label="Brand"><img src="../assets/logo.png" class="w-20" alt=""></router-link>
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Menú</h4>

        <div class="mt-3 grid space-y-3">
            <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/">Inicio</router-link></p>
            <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/frecuent_questions">Preguntas Frecuentes</router-link></p>
            <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="https://jisparking.com/login">Intranet</router-link></p>
        </div>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
            <h4 class="font-semibold text-gray-100">Compañia</h4>

            <div class="mt-3 grid space-y-3">
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/about_us">Nosotros</router-link></p>
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/services">Servicios</router-link></p>
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/blog">Blog</router-link></p>
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/possible_employees">Trabaja con nosotros</router-link></p>
            </div>
        </div>
        <!-- End Col -->
      <div class="col-span-1 hidden md:block ">
        <a  href="#"><i class="fa-brands fa-facebook"></i></a>
        &nbsp;
        &nbsp;
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        &nbsp;
        &nbsp;
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
        
       
        </div>
  
    </div>
    <!-- End Grid -->

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-400">© JisParking 2024 . Todos los derechos reservados.</p>
      </div>
      <!-- End Col -->

      <!-- Social Brands -->
  
      <!-- End Social Brands -->
    </div>
  </div>
</footer>
</template>

<style>
i {
  font-size: 3rem/* 48px */;
  line-height: 1;
  color: white;
  cursor: pointer;
}
</style>