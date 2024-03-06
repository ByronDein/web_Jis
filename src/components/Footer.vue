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
            <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="#">Intranet</router-link></p>
        </div>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
            <h4 class="font-semibold text-gray-100">Compañia</h4>

            <div class="mt-3 grid space-y-3">
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/about_us">Nosotros</router-link></p>
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/about_us">Servicios</router-link></p>
                <p><router-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/blog">Blog</router-link></p>
            </div>
        </div>
        <!-- End Col -->

      <div class="col-span-2">
        <h4 class="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
            <div class="w-full">
              <label for="hero-input" class="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter your email">
            </div>
            <a class="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Subscribe
            </a>
          </div>
          <p class="mt-3 text-sm text-gray-400">
            New UI kits or big discounts. Never spam.
          </p>
        </form>
      </div>
      <!-- End Col -->
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