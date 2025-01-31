<template>
  <div class="exp-main" id="experts">
    <div class="left-block">
      <div class="exp-div">
        <h1 class="exp-h1">
          30+ экспертов с опытом работы в ИИ, машинном обучении и дизайне
        </h1>
        <p class="exp-p">
          Полный цикл разработки: от анализа до запуска, а также гарантия
          качественного пользовательского опыта
        </p>
      </div>
      <img src="../assets/img/Member.webp" class="exp-member" />
    </div>
    <div class="swiper-container">
      <swiper
        :modules="modules"
        :loop="swiperOptions.loop"
        :slides-per-view="swiperOptions.slidesPerView"
        :space-between="swiperOptions.spaceBetween"
        :initial-slide="swiperOptions.initialSlide"
        :centered-slides="swiperOptions.centeredSlides"
        :grab-cursor="true"
        :autoplay="swiperOptions.autoplay"
        :navigation="swiperOptions.navigation"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide>
          <img src="../assets/img/Slide1.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide2.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide3.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide1.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide2.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide3.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide1.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide2.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide3.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide1.webp" class="slide-picture" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/Slide2.webp" class="slide-picture" />
        </swiper-slide>
        <div class="swiper-button-next">
          <img src="../assets/img/Vector.svg" />
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = ref([Autoplay, Navigation]);
    const swiperOptions = ref({
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      centeredSlides: true,
      initialSlide: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 10,
          centeredSlides: false,
          navigation: {
            enabled: true,
          },
        },
        480: {
          slidesPerView: "auto",
          spaceBetween: 10,
          navigation: {
            enabled: true,
          },
        },
        // 768: {
        //   slidesPerView: "auto",
        //   spaceBetween: 20,
        //   navigation: {
        //     enabled: false,
        //   },
        // },
        1140: {
          slidesPerView: "auto",
          spaceBetween: 40,
          navigation: {
            enabled: false,
          },
        },
      },
    });
    return {
      modules,
      swiperOptions,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.exp-main {
  @include flex-row;
  gap: $padding-medium;
}

.swiper-container {
  padding: $padding-y-swiper $padding-x-swiper;
  background-color: #ce343b;
  border-radius: $border-radius;
  margin: 0 auto;
}

.swiper-slide {
  width: fit-content !important;
}

.slide-picture {
  height: 42.75rem; 
  width: 100%;
  object-fit: contain;
}

.exp-div {
  @include flex-column;
  gap: $padding-large;
}

.exp-p {
  font-weight: 400;
  font-size: $font-size-medium;
  line-height: 1.75rem;
  text-align: left;
  color: $text-color-light;
  max-width: 362px;
  word-break: normal;
}
.swiper-button-next {
    display: none;
    background-color: #FFFFFF;
    width: 52px;
    height: 52px;
    // padding: $padding-large;
    border-radius: 999px;
    border: 1px solid #21212114;
    color: #21212152;
    right: 9%;
}
.swiper-button-next::after {
    display: none;
}

.exp-member {
  width: 13.75rem; // 220px -> 13.75rem
  height: 4rem; // 64px -> 4rem
}

.exp-h1 {
  font-weight: 500;
  font-size: $font-size-xxlarge;
  line-height: 2.8rem; // 44.8px -> 2.8rem
  text-align: left;
  color: $text-color;
  max-width: 362px;
  word-break: normal;
}

.left-block {
  padding: $padding-xlarge;
  padding-right: 10.375rem; // 166px -> 10.375rem
  background-color: $background-color;
  @include flex-column;
  justify-content: space-between;
  height: 50.75rem; // 812px -> 50.75rem
  border-radius: $border-radius;
  max-width: 37rem; // 592px -> 37rem
  width: 100%;
}
@include screen-between(300px,1080px){
  .exp-main {
    padding: $padding-small / 2;
    @include flex-column;
  }

  .swiper-button-next {
    display: flex;
  }

  .right-block {
    width: 100%;
    padding: $padding-large;
  }

  .swiper-container {
    background-color: transparent;
    margin: 0;
    padding: 0;
  }

  .swiper-slide {
    width: fit-content;
  }

  .exp-h1 {
    // font-size: $font-size-xm;
    font-size: $font-size-xlarge;
    line-height: 2.1rem;
    max-width: 100%;
  }

  .exp-p {
    // font-size: $font-size-base;
    line-height: 1.4rem;
    max-width: 100%;
    margin-bottom: 4.5rem; 
  }

  .exp-div {
    gap: 0.875rem;
  }

  .exp-member {
    width: 12rem;
    height: auto;
  }

  .left-block {
    width: 100%;
    height: auto;
    max-width: none;
    padding: $padding-medium;
  }

  .swiper-slide {
    width: 18.75rem !important;
    padding: $padding-megalarge;
    border-radius: $border-radius;
    background-color: #ce343b;
  }

  .slide-picture {
    box-sizing: border-box;
    padding: none;
    height: auto;
    // width: 18.75rem;
  }
}
</style>
