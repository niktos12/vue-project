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

<script></script>

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
  justify-content: space-between;
  align-items: start;
  overflow-x: hidden;
  flex-wrap: wrap;
}

.adv-p {
  @include flex-column;
  font-size: $font-size-xm;
  text-align: center;
  color: $text-color-light;
  margin: 0;
  line-height: 33.6px;
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
@include screen-between(300px, 480px) {
  .adv-main {
    padding: $padding-medium;
    gap: $padding-small;
  }

  .adv-scroll-container {
    overflow-x: auto;
    justify-content: normal;
    scrollbar-width: thin;
    gap: 2rem;
    flex-wrap: nowrap;
  }

  .adv-p {
    font-size: $font-size-small;
    line-height: 22.4px;
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
@include screen-between(480px, 999px) {
  .adv-scroll-container {
    overflow-x: auto;
    justify-content: normal;
    scrollbar-width: thin;
    gap: 2.5rem;
    flex-wrap: nowrap;
  }
  .adv-div {
    width: 18rem;
  }
  .adv-span {
    font-size: $font-size-medium;
  }
  .adv-p {
    font-size: $font-size-medium;
  }
  .adv-img {
    width: 8.5rem;
    height: 8.5rem;
  }
}

@include screen-between(1000px, 1440px) {
  .adv-scroll-container {
    gap: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}
</style>
