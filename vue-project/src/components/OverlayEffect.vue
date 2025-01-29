<template>
    <div class="overlay" v-if="isMenuOpen" @click="handleOverlayClick"></div>
  </template>
  
  <script>
  export default {
    props: {
      isMenuOpen: {
        type: Boolean,
        required: true,
      },
      toggleMenu: {
        type: Function,
        required: true,
      },
    },
    methods: {
      handleOverlayClick() {
        if (this.isMenuOpen) {
          this.toggleMenu();
        }
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import "../assets/variables.scss";
  @import "../assets/mixins.scss";
  
  @media (max-width: 768px) {
    .overlay {
      @include flex-center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $text-color-light;
      z-index: 2;
      pointer-events: auto;
    }
  }
  </style>