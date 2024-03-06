<template>
    <Header />
    <router-view></router-view>
    <Footer />          
</template>

<script>
import { ref, watch } from 'vue'
import Header from './components/Header.vue'
// import Home from './pages/Home.vue'
import Footer from './components/Footer.vue'


export default {
    name: 'App',
    components: {
        Header,
        // Home,
        Footer
    },
}
</script>

<style>
</style>
