<template>
  <div class="main-div" id="howIt">
    <h1 class="h1-how-works">Как это работает?</h1>
    <div class="desc-div">
      <div class="card-div">
        <h1 class="h1-card">Анализируем</h1>
        <p class="p-card">Исследуем ваш бизнес и подбираем решение</p>
      </div>
      <div class="card-div">
        <h1 class="h1-card">Создаем</h1>
        <p class="p-card">
          Настраиваем системы для сбора клиентской информации
        </p>
      </div>
      <div class="card-div">
        <h1 class="h1-card">Контролируем</h1>
        <p class="p-card">
          А вы получаете управление каждым этапом — от первого интереса клиента
          до покупки
        </p>
      </div>
    </div>
    <p class="p-process">
      Вы видите все процессы в реальном времени и получаете полное понимание,
      как клиенты взаимодействуют с вашим продуктом
    </p>
    <img v-if="!small" src="../assets/img/plan.svg" class="process-img" />
    <img v-else src="../assets/img/Frame 830.svg" class="process-img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      small: false,
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.small = window.innerWidth < 769;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.main-div {
  @include flex-column;
  background-color: $background-color;
  border-radius: $border-radius;
  padding: $padding-large $padding-xlarge;
  gap: $padding-large;
}

.p-process {
  max-width: 960px;
  font-size: $font-size-large;
  letter-spacing: -0.6px;
  color: $text-color-light;
  text-align: center;
  line-height: 39.2px;
  align-self: center;
  margin-top: 2.5rem;
  margin-bottom: 4.5rem;
}

.desc-div {
  @include flex-row;
  justify-content: center;
  gap: $padding-medium;
  flex-wrap: wrap;
}

.card-div {
  @include card-style;
  width: 100%;
  max-width: 29rem;
  border-radius: $border-radius-base !important;
  padding: $padding-xlarge !important;
}

.p-card {
  font-size: $font-size-medium;
  line-height: 1.75rem;
  color: $text-color;
  width: 100%;
  word-break: normal;
  letter-spacing: -0.6px;
}

.h1-card {
  font-weight: 500;
  font-size: $font-size-xlarge;
  line-height: 2.8rem;
  color: $text-color;
}

.h1-how-works {
  font-weight: 500;
  font-size: $font-size-xxlarge;
  line-height: 4.4rem;
  color: $text-color;
  text-align: center;
}

.process-img {
  width: 100%;
  height: auto;
  align-self: center;
  margin-bottom: 6rem;
  padding: 0 6.375rem ;
}
@include screen-between(481px, 769px) {
  .process-img {
    width: 50vw;
  }
  .p-process {
    text-align: left;
  }
  .card-div {
    max-width: none;
  }
}
@include screen-between(300px, 1240px){
  .process-img{
    padding: 0px;
  }
}
@include screen-between(300px, 480px) {
  .h1-how-works {
    font-size: $font-size-xlarge;
    line-height: 2.2rem;
  }

  .main-div {
    padding: $padding-large;
    gap: $padding-medium;
  }

  .desc-div {
    @include flex-column;
    align-items: center;
  }

  .p-process {
    font-size: $font-size-medium;
    line-height: 1.75rem;
    text-align: left;
    margin-bottom: $padding-xlarge;
    margin-top: $padding-medium;
  }

  .h1-card {
    font-size: $font-size-large;
    line-height: 1.65rem;
  }

  .p-card {
    font-size: $font-size-medium;
    line-height: 1.4rem;
  }

  .process-img {
    height: auto;
    max-width: 18.75rem;
    margin-bottom: $padding-large;
  }
}
</style>
