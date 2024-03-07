<template>
    <div class="">
        <!-- Show loading message if data is not ready -->
        <div v-if="1==2" class="flex justify-center items-center h-screen">
            <div role="status">
                <!-- SVG spinner -->
                <svg
                    aria-hidden="true"
                    class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>

            <!-- You can use a spinner or any other loading animation here -->
        </div>

        <!-- Show the content when data is ready -->
        <div v-else>
           <div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' class="relative">
  <div class="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
    <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      <div class="hs-carousel-slide">
        <div class="flex justify-center h-full bg-gray-100 p-6">
          <span class="self-center text-4xl transition duration-700">First slide</span>
        </div>
      </div>
      <div class="hs-carousel-slide">
        <div class="flex justify-center h-full bg-gray-200 p-6">
          <span class="self-center text-4xl transition duration-700">Second slide</span>
        </div>
      </div>
      <div class="hs-carousel-slide">
        <div class="flex justify-center h-full bg-gray-300 p-6">
          <span class="self-center text-4xl transition duration-700">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
    <span class="text-2xl" aria-hidden="true">
      <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </span>
    <span class="sr-only">Previous</span>
  </button>
  <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
    <span class="sr-only">Next</span>
    <span class="text-2xl" aria-hidden="true">
      <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </span>
  </button>

  <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
    <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
    <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
    <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
  </div>
</div>
<!-- Clients -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="w-2/3 sm:w-1/2 lg:w-3/3 mx-auto text-center mb-10">
    <h2 class="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight white:text-black ">Nuestro <span class="text-orange-600">Servicio</span>, un  <span class="text-orange-600">Compromiso</span></h2>
    <p class="mt-3 text-xl sm:text-2xl text-gray-800 dark:text-gray-400  font-bold">Estos Clientes Confian en Nosotros</p>

  </div>
  <!-- End Title -->

<!-- Grid -->
<div class="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-6 gap-x-6 sm:gap-x-6  sm:mt-16 sm:mb-10 justify-items-center  " >
    <img src="../assets/clients/partner_06_06_2019_05_46_19.png" class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_47_21.png" class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_48_08.png" class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_52_07.png" class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_55_05.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_56_36.png"  class=" w-72 sm:w-40  mt-5" alt="">


</div>
<!-- End Grid -->

<!-- Grid -->
<div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 sm:gap-x-6  sm:mt-10 sm:mb-10 justify-items-center ">
    <img src="../assets/clients/partner_06_06_2019_05_57_20.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_57_49.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_58_15.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_06_06_2019_05_52_34.png" class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_29_07_2019_09_14_00.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_29_07_2019_09_19_08.png"  class=" w-72 sm:w-40  mt-5" alt="">

</div>

<div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 sm:gap-x-6  sm:mt-10 sm:mb-10 justify-items-center ">
    
    <img src="../assets/clients/logo_jumbo.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/logo_ubo.png"  class=" w-72 sm:w-40  mt-5" alt="">
    <img src="../assets/clients/partner_14_06_2019_05_30_01.png"  class=" w-72 sm:w-40  mt-5" alt="">
</div>

  
</div>
<!-- End Clients --> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
        }
    },
    
}
</script>
