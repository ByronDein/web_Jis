<template>
  <div class="">
    <!-- Show loading message if data is not ready -->
    <div v-if="loading" class="flex justify-center items-center h-screen">
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
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in sliders" :key="slide">
          <div class="carousel__item"><img :src="slide" alt="" ></div>
        </Slide>

        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>

        <!-- Clients -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Title -->
          <div class="w-2/3 sm:w-1/2 lg:w-3/3 mx-auto text-center mb-10">
            <h2 class="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight white:text-black ">Nuestro <span class="text-orange-600">Servicio</span>, un  <span class="text-orange-600">Compromiso</span></h2>
            <p class="mt-3 text-xl sm:text-2xl text-gray-800 dark:text-gray-400  font-bold">Ellos Ya Confian en Nosotros</p>

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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from 'axios'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
    data() {
        return {
            sliders: [],
            loading: false,
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
        }
    },
    methods: {
      async getSliders() {
        this.loading = true;
        try {
          const response = await axios.get('https://apijis.com/slider/get_slider_for_website/')
          console.log(response);
          this.sliders = response.data
          console.log(this.sliders)
          this.loading = false
        } catch (error) {
          console.error(error)
        }
      }
    },
    mounted() {
      this.getSliders()
    },
    
}
</script>
<style>
.carousel__item {
  min-height: 200px;
  width: 100% !important;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding-top: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box
}
</style>