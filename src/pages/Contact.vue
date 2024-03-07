<template>
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
            <!-- You can use a spinner or any other loading animation here -->
        </div>
     
    </div>
    <!-- Contact Us -->
<div v-else class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl lg:max-w-5xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl white:text-black">
        Contactanos
      </h1>
      <p class="mt-1 text-gray-600 white:text-black">    
    Nos encantaría hablar sobre cómo podemos ayudarle.
      </p>
    </div>

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <!-- Card -->
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h2 class="mb-8 text-xl font-semibold text-gray-800 white:text-black">
          Rellene Los campos
        </h2>

        <form>
          <div class="grid gap-4">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="hs-firstname-contacts-1 " class="sr-only  text-black">Nombre</label>
                <input required type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Nombre">
              </div>

              <div>
                <label for="hs-lastname-contacts-1" class="sr-only">Apellido</label>
                <input required type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Apellido">
              </div>
            </div>
            <!-- End Grid -->

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label for="hs-email-contacts-1" class="sr-only">Correo</label>
              <input required type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Correo">
            
              
              <label for="hs-phone-number-1" class="sr-only">Telefono</label>
              <input required type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Telefono">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <label for="hs-email-contacts-1" class="sr-only">Asunto</label>
              <input required type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Asunto">
            
           </div>

            <div>
              <label for="hs-about-contacts-1" class="sr-only">Mensaje</label>
              <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Mensaje"></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-4 grid">
            <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Enviar</button>
          </div>

          <!-- <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div> -->
        </form>
      </div>
      <!-- End Card -->

      <div class="divide-y divide-gray-200 dark:divide-gray-800">
        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <i class="fa-solid fa-location-dot"></i>
            <div class="grow">
            <h3 class="font-semibold text-gray-800 white:text-black">Dirección </h3>
            <p class="mt-1 text-sm white:text-black">{{contact_data.address}}</p>
            
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <i class="fa-solid fa-mobile"></i>
            <div class="grow">
              <h3 class="font-semibold text-gray-800 white:text-black">Telefono de contacto</h3>
              <p class="mt-1 text-sm white:text-black">{{contact_data.cellphone}}</p>
          
          </div>
        </div>
        <!-- End Icon Block -->

       

        <!-- Icon Block -->
        <div class=" flex gap-x-7 py-6">
          <i class="fa-solid fa-envelope"></i>
          <div class="grow">
            <h3 class="font-semibold text-gray-800 white:text-black">Contactanos por Correo</h3>
            <p class="mt-1 text-sm white:text-black">Si deseas escribirnos un correo por favor usar el siguiente</p>
            <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 white:text-black dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              {{contact_data.email}}
            </p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
    </div>
  </div>
</div>
<!-- End Contact Us -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      contact_data: [],
      loading: false,
      loading_1: true,
      loading_2: true,
      loading_3: true,
      loading_4: true,
    }
  },
  methods: {
    
    async getContact() {
      this.loading = true;
      try {
        const response = await axios.get('https://apijis.com/contact/get_contact/')
        this.contact_data = response.data.message
        console.log(this.contact_data)
        this.loading = false;
      } catch (e){
        console.log(e);
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getContact()
  }

}
</script>