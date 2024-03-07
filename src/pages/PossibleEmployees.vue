<template>
    <!-- Contact Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-24">
  <div class="max-w-2xl lg:max-w-5xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl white:text-black">
        Trabaja con nosotros
      </h1>
      <p class="mt-1 text-gray-600 white:text-black">    
    Nos encantaria que formaras parte de la familia JisParking.
      </p>
    </div>
    <div v-if="validate_possible_employee == 1" class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10" role="alert">
                    Formulario Enviado con <span class="font-bold">éxito</span> 
    </div>
    <div class="mt-12 grid items-center lg:grid-cols-1  gap-6 lg:gap-16  ">
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
                <label for="hs-lastname-contacts-1" class="sr-only">Rut</label>
                <input  required v-model="rut_input" v-mask="['########-X']" type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Rut">
              </div>

              <div>
                <label for="hs-firstname-contacts-1 " class="sr-only  text-black">Nombres</label>
                <input required v-model="names_input" type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Nombres">
              </div>
            </div>
            <!-- End Grid -->

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label for="hs-email-contacts-1" class="sr-only">Apellido Paterno</label>
              <input required v-model="father_lastname" type="text" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Apellido Paterno">
            
              
              <label for="hs-phone-number-1" class="sr-only">Apellido Materno</label>
              <input required v-model="mother_lastname" type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Apellido Materno">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
             
              <input required v-model="cellphone_input" type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Telefono">
              <input  required  @change="handleFileChange" type="file" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" >
            </div>

            <div >        
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-4 grid">
            <button @click="sendPossibleEmployee" type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Enviar</button>
          </div>

          <!-- <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div> -->
        </form>
      </div>
      <!-- End Card -->


    </div>
  </div>
</div>
<!-- End Contact Us -->
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask' 

export default {
  directives: { mask },
  data() {
    return {
      validate_possible_employee :0,
      rut_input: '',
      names_input: '',
      father_lastname: '',
      mother_lastname: '',
      cellphone_input: '',
      support: '',
      loading: false,
      loading_1: true,
      loading_2: true,
      loading_3: true,
      loading_4: true,
    }
  },
  methods: {
    handleFileChange(event) {
            const selectedFile = event.target.files[0]

            this.support = selectedFile
      },
    async sendPossibleEmployee() {
      this.loading = true;
      try {
        const formData = new FormData()
        formData.append('rut', this.rut_input)
        formData.append('names', this.names_input)
        formData.append('father_lastname', this.father_lastname)
        formData.append('mother_lastname', this.mother_lastname)
        formData.append('cellphone', this.cellphone_input)
        formData.append('support', this.support)
        const response = await axios.post('http://localhost:8000/possible_employees/store', formData)
        console.log(response)
        this.loading = false;
        this.validate_possible_employee = 1
      } catch (e){
        console.log(e);
        this.loading = false;
      }
    }
    
  },
  mounted() {
  }

}
</script>

<style >
input, textarea {
  border: 1px solid #e2e8f0;
}
</style>