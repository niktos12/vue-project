<template>
  <div class="adv-main" id="adv">
    <div class="adv-scroll-container">
      <div class="adv-div">
        <img src="../assets/img/Frame 782.svg" class="adv-img" />
        <p class="adv-p">
          <span class="adv-span">Подходит для любой ниши: </span>
          магазины, доставка, образование, недвижимость и др.
        </p>
      </div>
      <div class="adv-div">
        <img src="../assets/img/Frame 783.svg" class="adv-img" />
        <p class="adv-p">
          <span class="adv-span">Уведомления нового поколения: </span>
          замените устаревшие SMS на интерактивные сообщения.
        </p>
      </div>
      <div class="adv-div">
        <img src="../assets/img/Frame 785.svg" class="adv-img" />
        <p class="adv-p">
          <span class="adv-span">Цифровизация и автоматизация: </span>
          управляйте продажами и коммуникацией.
        </p>
      </div>
      <div class="adv-div">
        <img src="../assets/img/Frame 784.svg" class="adv-img" />
        <p class="adv-p">
          <span class="adv-span">Геймификация: </span>
          вовлекайте клиентов через акции и розыгрыши.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 480;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.adv-main {
  @include flex-column;
  background-color: $background-color;
  padding: $padding-large;
  border-radius: $border-radius;
  position: relative;
}

.adv-scroll-container {
  @include flex-row;
  gap: $padding-large;
  padding-bottom: 10px;
  justify-content: center;
  align-items: start;
  overflow-x: hidden;
}

.adv-p {
  @include flex-column;
  font-size: $font-size-xm;
  text-align: center;
  color: $text-color-light;
  margin: 0;
}

.adv-img {
  width: 10rem;
  height: 10rem;
  object-fit: contain;
}

.adv-span {
  font-size: $font-size-xm;
  text-align: center;
  color: $text-color;
}

.adv-div {
  @include flex-column;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  width: 24rem;
  gap: 2rem;
}

@media (max-width: 480px) {
  .adv-main {
    padding: $padding-medium;
    gap: $padding-small;
  }

  .adv-scroll-container {
    overflow-x: auto;
    justify-content: normal;
    scrollbar-width: thin;
    gap: $padding-small;
  }

  .adv-p {
    font-size: $font-size-small;
  }

  .adv-img {
    width: 7.5rem;
    height: 7.5rem;
  }

  .adv-span {
    font-size: $font-size-small;
  }

  .adv-div {
    width: 12.5rem;
  }
}
</style>
