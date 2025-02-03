<template>
  <header :class="{ 'scrolled-header': isScrolled }">
    <a class="logo" href="#">Mini Apps</a>
    <div class="div-nav" :class="{ 'nav-active': isMenuOpen }">
      <a href="#whyTG" class="header-nav" @click="closeMenu"
        >Почему Telegram?</a
      >
      <a href="#experts" class="header-nav" @click="closeMenu">Наши услуги</a>
      <a href="#adv" class="header-nav" @click="closeMenu">Преимущества</a>
      <a href="#howIt" class="header-nav" @click="closeMenu"
        >Как это работает</a
      >
    </div>
    <div class="adaptive-nav">
      <button
        class="burger"
        :class="{ 'burger-active': isMenuOpen }"
        @click="toggleMenu"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <a class="header-btn-adaptive" href="#form">+</a>
      <a class="header-btn" href="#form">Оставить заявку</a>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isScrolled,
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    },
    closeMenu() {
      this.$emit("toggle-menu", false);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

header {
  @include flex-row;
  align-items: center;
  justify-content: space-between;
  background-color: $secondary-color;
  padding-left: $padding-large !important;
  padding: 0rem;
  border-radius: $border-radius;
  position: absolute;
  width: 93.5%;
  align-self: center;
  top: 3rem;
  z-index: 3;
  transition: background-color 0.3s ease-in-out;
}

.logo {
  color: $text-color;
  font-size: $font-size-xm;
  font-weight: 600;
}

.div-nav {
  @include flex-row;
  gap: $padding-large;
}

.header-nav {
  color: $text-color-light;
  font-size: $font-size-medium;
  text-decoration: none;
  transition: color 0.3s;
}

.header-nav:hover {
  color: $primary-color;
}

.header-btn-adaptive {
  display: none;
}

.header-btn {
  @include button-style;
  display: block;
  border: 1px solid $primary-color;
  color: $primary-color;
  background-color: $secondary-color;
  &:hover {
    background-color: $primary-color;
    color: $secondary-color;
  }
}
.scrolled-header {
  background-color: #f0f0f0;
  position: fixed;
}
// .adaptive-nav {
//   display: none;
// }

.burger {
  display: none;
  // @include flex-column;
  gap: $padding-small / 2;
  background: none;
  border: none;
  cursor: pointer;
}

.burger-line {
  width: 1.125rem;
  height: 3px;
  background-color: $text-color-light;
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}
@include screen-between(300px, 480px) {
  header {
    padding: 0px;
    padding-left: $padding-medium;
    flex-direction: row;
    justify-content: space-between;
    top: 1rem;
  }

  .div-nav {
    @include flex-column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: $padding-large;
    gap: $padding-medium;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
    z-index: 4;
    border-radius: $border-radius;
  }

  .div-nav.nav-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .adaptive-nav {
    @include flex-row;
    align-items: center;
    gap: $padding-large;
  }

  .header-nav {
    @include button-style;
    background-color: $secondary-color;
    text-align: center;
    color: #212121a3;
    // &:hover {
    //   background-color: $primary-color;
    //   color: $secondary-color;
    // }
  }

  .header-btn-adaptive {
    display: block;
    @include button-style;
    border: 1px solid $primary-color;
    color: $primary-color;
    background-color: $secondary-color;
    &:hover {
      background-color: $primary-color;
      color: $secondary-color;
    }
  }

  .header-btn {
    display: none;
  }

  .burger {
    @include flex-column;
    right: $padding-large;
    top: $padding-large;
    z-index: 5;
  }

  .burger-active .burger-line {
    background-color: $text-color;
  }

  .burger-active .burger-line:nth-child(1) {
    width: 18px;
    transform: rotate(45deg) translate(0.25rem, 0.35rem);
  }

  .burger-active .burger-line:nth-child(2) {
    opacity: 0;
  }

  .burger-active .burger-line:nth-child(3) {
    width: 18px;
    transform: rotate(-45deg) translate(0.25rem, -0.36rem);
  }
}
@include screen-between(480px, 1280px) {
  .adaptive-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .div-nav.nav-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  .header-nav {
    @include button-style;
    background-color: $secondary-color;
    text-align: center;
    color: #212121a3;
    // &:hover {
    //   background-color: $primary-color;
    //   color: $secondary-color;
    // }
  }
  .div-nav {
    @include flex-column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: $padding-large;
    gap: $padding-medium;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
    z-index: 4;
    border-radius: $border-radius;
  }
  .burger {
    @include flex-column;
    right: $padding-large;
    top: $padding-large;
    z-index: 5;
  }

  .burger-active .burger-line {
    background-color: $text-color;
  }

  .burger-active .burger-line:nth-child(1) {
    width: 18px;
    transform: rotate(45deg) translate(0.25rem, 0.35rem);
  }

  .burger-active .burger-line:nth-child(2) {
    opacity: 0;
  }

  .burger-active .burger-line:nth-child(3) {
    width: 18px;
    transform: rotate(-45deg) translate(0.25rem, -0.36rem);
  }
  // .header-btn{
  //   display: block;
  // }
}
</style>
