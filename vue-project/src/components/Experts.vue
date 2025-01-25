<template>
    <div class="exp-main" id="experts">
        <div class="left-block">
            <div class="exp-div">
                <h1 class="exp-h1">30+ экспертов с опытом работы в ИИ, машинном обучении и дизайне</h1>
                <p class="exp-p">
                    Полный цикл разработки: от анализа до запуска, а также гарантия качественного пользовательского
                    опыта
                </p>
            </div>
            <img src="../assets/Member.webp" class="exp-member" />
        </div>
        <div class="swiper-container">
            <swiper :modules="modules" :loop="swiperOptions.loop" :slides-per-view="swiperOptions.slidesPerView"
                :space-between="swiperOptions.spaceBetween" :initial-slide="swiperOptions.initialSlide"
                :centered-slides="swiperOptions.centeredSlides" :grab-cursor="true" :autoplay="swiperOptions.autoplay"
                :navigation="swiperOptions.navigation" :breakpoints="swiperOptions.breakpoints">
                <swiper-slide>
                    <img src="../assets/Slide1.webp" class="slide-picture" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/Slide2.webp" class="slide-picture" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/Slide3.webp" class="slide-picture" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/Slide1.webp" class="slide-picture" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/Slide2.webp" class="slide-picture" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/Slide3.webp" class="slide-picture" />
                </swiper-slide>
                <div class="swiper-button-next"><img src="../assets/Vector.svg" /></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const modules = ref([Autoplay, Navigation]);
        const swiperOptions = ref({
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
            initialSlide: 1,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    centeredSlides: false,
                    navigation: {
                        enabled: true,
                    },
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        enabled: true,
                    },
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    navigation: {
                        enabled: false,
                    },
                },
                1024: {
                    slidesPerView: 'auto',
                    spaceBetween: 40,
                    navigation: {
                        enabled: false,
                    }
                },
            },
        });
        return {
            modules,
            swiperOptions,
        };
    }
}
</script>

<style scoped>
.exp-main {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.swiper-container {
    padding: 64px 108px;
    background-color: red;
    border-radius: 32px;
    margin: 0 auto;
}

.swiper-slide {
    width: fit-content !important;
}

.slide-picture {
    height: 684px;
    width: 100%;
    object-fit: contain;
}

.exp-div {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.swiper-button-next {
    display: none;
    background-color: #FFFFFF;
    width: 52px;
    height: 52px;
    border-radius: 999px;
    border: 1px solid #21212114;
    align-items: center;
    justify-content: center;
    color: #21212152;
    right: 20px;
}

.swiper-button-next::after {
    display: none;
}

.exp-p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: left;
    color: #2121217A;
    max-width: 362px;
    word-break: normal;
}

.exp-member {
    width: 220px;
    height: 64px;
}

.exp-h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 44.8px;
    text-align: left;
    color: #212121;
    max-width: 362px;
    word-break: normal;
}

.left-block {
    padding: 64px;
    padding-right: 166px;
    background-color: #2121210A;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 812px;
    border-radius: 32px;
    max-width: 592px;
    width: 100%;
}

@media (max-width: 480px) {
    .exp-main {
        padding: 0.5rem;
        flex-direction: column;
    }

    .swiper-button-next {
        display: flex;
    }

    .right-block {
        width: 100%;
        padding: 2rem;
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
        font-size: 1.5rem;
        line-height: 2.1rem;
    }

    .exp-p {
        font-size: 1rem;
        line-height: 1.4rem;
        margin-bottom: 72px;
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
        padding: 1.5rem;
    }

    .swiper-slide {
        width: 18.75rem !important;
        border-radius: 1.5rem;
        background-color: red;
    }

    .slide-picture {
        box-sizing: border-box;
        padding: 2.625rem;
        height: auto;
        width: 18.75rem;

    }
}
</style>