<template>
  <div class="pres-main" id="pres">
    <div class="pres">
      <div class="left-block">
        <h1 class="left-block-h1">Треть рынка в один клик!</h1>
        <p class="left-block-p">
          Разработайте Telegram Mini App — будущее мобильной коммерции уже
          здесь!
        </p>
        <a class="btn-pres" href="#form"> Хочу мини-приложение! </a>
      </div>
      <video class="pres-video" autoplay loop muted>
        <source src="../assets/img/IMG_7319.webm" type="video/webm" />
      </video>
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
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.pres-main {
  @include flex-column;
  background-color: $background-color;
  padding: $padding-medium;
  border-radius: $border-radius;
  gap: $padding-medium;
}

.pres {
  @include flex-row;
  padding-top: 5rem;
  gap: 7rem;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.btn-pres {
  @include button-style;
  padding: $padding-big $padding-xlarge;
  background-color: $primary-color;
  border-radius: $border-radius-full;
  color: $secondary-color;
  &:hover {
    background-color: $text-color;
  }
}

.pres-video {
  border-radius: $border-radius;
  max-width: 100%;
  width: auto;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  flex-shrink: 0;
}

.left-block {
  @include flex-column;
  justify-content: center;
  gap: $padding-large;
  align-items: center;
  flex: 1;
}

.left-block-p {
  font-size: $font-size-xlarge;
  text-align: center;
  word-break: normal;
  line-height: 2.8rem;
  color: $text-color;
}

.left-block-h1 {
  font-size: $font-h1;
  line-height: 6rem;
  text-align: center;
  font-weight: 500;
  word-break: normal;
  color: $text-color;
}
@include screen-between(300px, 480px) {
  .left-block-h1 {
    font-size: $font-size-h3;
    line-height: 3rem;
  }

  .pres-video {
    width: 100%;
    height: 47.8125rem;
  }

  .left-block-p {
    font-size: $font-size-xm;
    line-height: 2.1rem;
  }
  .pres {
    @include flex-column;
    gap: $padding-medium;
    padding-top: 6rem;
  }
  .pres-main {
    padding-top: $padding-xlarge;
    padding: $padding-small / 2;
  }

  .btn-pres {
    margin-top: $padding-small;
    line-height: 1.225rem;
    padding: 0.875rem $padding-large;
    font-size: $font-size-small;
  }
}
@include screen-between(1000px, 1440px) {
  .pres {
    flex-direction: column;
  }
  .left-block-h1 {
    font-size: $font-size-h2 + 1rem;
  }
  .pres-video {
    aspect-ratio: auto;
  }
}
</style>
