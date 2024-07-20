<template>
  <div>
    <NavBar />
    <Acc style="margin-top: 80px;" />
    <About />
    <SubLog />
    <Foot />
  </div>
</template>

<script>
import NavBar from '../components/NavbarView.vue';
import Acc from '../components/AcceuilView.vue';
import About from '../components/AboutView.vue';
import SubLog from '../components/SubLogView.vue';
import Foot from '../components/FooterView.vue';

export default {
  components: {
    NavBar,Acc, About, SubLog, Foot
  }
}
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés */
</style>
