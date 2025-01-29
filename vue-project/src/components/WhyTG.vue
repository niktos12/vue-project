<template>
    <div class="why-tg-main" id="whyTG">
      <div class="left-block">
        <img src="../assets/img/tg.webp" class="tg-webp" />
      </div>
      <div class="right-block">
        <h2 class="section-title">Почему Telegram?</h2>
        <div class="benefits">
          <div class="benefit-item">
            <span class="benefit-number">1</span>
            <p class="benefit-text">Клиенту удобнее покупать в мессенджере</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-number">2</span>
            <p class="benefit-text">Будьте ближе к клиентам — становитесь частью их повседневной жизни</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-number">3</span>
            <p class="benefit-text">Вы рядом, как часть семьи</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-number">4</span>
            <p class="benefit-text">Новый рынок и глобальный рост</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="global-div">
          <p class="global-text">
            Telegram открывает доступ не только к российской аудитории, но и к международному рынку.
          </p>
          <p class="global-text">
            Используйте глобальный тренд, чтобы развивать свой бизнес и быть впереди конкурентов.
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
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.isMobile = window.innerWidth < 768;
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import "../assets/variables.scss";
  @import "../assets/mixins.scss";
  
  .why-tg-main {
    @include flex-row;
    gap: $padding-large;
    background-color: $background-color;
    border-radius: $border-radius;
    padding: 0 $padding-large;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .tg-webp {
    width: 100%;
    height: auto;
    max-width: 48rem;
    flex: 1;
  }
  
  .right-block {
    @include flex-column;
    justify-content: center;
    gap: $padding-large;
    flex: 1;
  }
  
  .section-title {
    font-size: $font-size-h2;
    font-weight: 500;
  }
  
  .benefits {
    @include flex-column;
    gap: $padding-medium;
    margin-bottom: $padding-large;
  }
  
  .benefit-item {
    @include flex-row;
    align-items: center;
    gap: $padding-small;
  }
  
  .benefit-number {
    flex-shrink: 0;
    font-size: $font-size-xm;
    font-weight: 500;
    color: $primary-color;
    background-color: $background-color;
    width: 2.625rem;
    height: 2.625rem;
    @include flex-center;
    border-radius: 999px;
  }
  
  .benefit-text {
    font-size: $font-size-xm;
    color: $text-color;
    word-break: break-word;
    word-wrap: break-word;
  }
  
  .line {
    height: 1px;
    width: 100%;
    border: 1px solid #21212114;
  }
  
  .global-div {
    @include flex-row;
    gap: $padding-medium;
  }
  
  .global-text {
    font-size: $font-size-medium;
    color: #2121217A;
    text-align: left;
    line-height: 1.75rem;
    word-break: normal;
  }
  
  @media (max-width: 480px) {
    .section-title {
      font-size: $font-size-xlarge;
    }
  
    .tg-webp {
      max-width: 100%;
    }
  
    .why-tg-main {
      @include flex-column;
      padding: $padding-medium;
      gap: $padding-medium;
    }
  
    .benefit-item {
      @include flex-row;
      align-items: center;
    }
  
    .benefits {
      margin-bottom: 0rem;
    }
  
    .benefit-number {
      font-size: $font-size-medium;
      width: 1.875rem;
      height: 1.875rem;
    }
  
    .benefit-text {
      font-size: $font-size-medium;
    }
  
    .global-div {
      @include flex-column;
    }
  
    .global-text {
      font-size: $font-size-small;
      line-height: 1.225rem;
    }
  }
  </style>