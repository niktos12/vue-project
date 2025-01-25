<template>
  <div>

    <OverlayEffect :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
    <main>
      <Header :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
      <Presentation />
      <Advantages />
      <WhyTG />
      <Experts />
      <HowItWorks />
      <Footer />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import OverlayEffect from './components/OverlayEffect.vue';
import Header from './components/Header.vue';
import Presentation from './components/Presentation.vue';
import Advantages from './components/Advantages.vue';
import WhyTG from './components/WhyTG.vue';
import Experts from './components/Experts.vue';
import HowItWorks from './components/HowItWorks.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    OverlayEffect,
    Presentation,
    Advantages,
    WhyTG,
    Experts,
    HowItWorks,
    Footer,
  },
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

html {
  scroll-behavior: smooth;
}

@media (max-width: 480px) {
  #app {
    padding: 0.5rem;
  }
}
</style>