var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
export default (await import('vue')).defineComponent({
    components: {
        Swiper: Swiper,
        SwiperSlide: SwiperSlide,
    },
    setup: function () {
        var modules = ref([Autoplay, Navigation]);
        var swiperOptions = ref({
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
            modules: modules,
            swiperOptions: swiperOptions,
        };
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_componentsOption = {
        Swiper: Swiper,
        SwiperSlide: SwiperSlide,
    };
    var __VLS_components;
    var __VLS_directives;
    ['swiper-button-next', 'exp-main', 'swiper-button-next', 'swiper-container', 'swiper-slide', 'exp-h1', 'exp-p', 'exp-div', 'exp-member', 'left-block', 'swiper-slide', 'slide-picture',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("exp-main") }, { id: ("experts") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("left-block") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("exp-div") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("exp-h1") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("exp-p") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Member.webp") }, { class: ("exp-member") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("swiper-container") }));
    var __VLS_0 = {}.swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.swiper, typeof __VLS_components.Swiper, typeof __VLS_components.swiper, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        modules: ((__VLS_ctx.modules)),
        loop: ((__VLS_ctx.swiperOptions.loop)),
        slidesPerView: ((__VLS_ctx.swiperOptions.slidesPerView)),
        spaceBetween: ((__VLS_ctx.swiperOptions.spaceBetween)),
        initialSlide: ((__VLS_ctx.swiperOptions.initialSlide)),
        centeredSlides: ((__VLS_ctx.swiperOptions.centeredSlides)),
        grabCursor: ((true)),
        autoplay: ((__VLS_ctx.swiperOptions.autoplay)),
        navigation: ((__VLS_ctx.swiperOptions.navigation)),
        breakpoints: ((__VLS_ctx.swiperOptions.breakpoints)),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            modules: ((__VLS_ctx.modules)),
            loop: ((__VLS_ctx.swiperOptions.loop)),
            slidesPerView: ((__VLS_ctx.swiperOptions.slidesPerView)),
            spaceBetween: ((__VLS_ctx.swiperOptions.spaceBetween)),
            initialSlide: ((__VLS_ctx.swiperOptions.initialSlide)),
            centeredSlides: ((__VLS_ctx.swiperOptions.centeredSlides)),
            grabCursor: ((true)),
            autoplay: ((__VLS_ctx.swiperOptions.autoplay)),
            navigation: ((__VLS_ctx.swiperOptions.navigation)),
            breakpoints: ((__VLS_ctx.swiperOptions.breakpoints)),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = {}.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Slide1.webp") }, { class: ("slide-picture") }));
    __VLS_11.slots.default;
    var __VLS_11;
    var __VLS_12 = {}.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Slide2.webp") }, { class: ("slide-picture") }));
    __VLS_17.slots.default;
    var __VLS_17;
    var __VLS_18 = {}.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */ ;
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_19), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Slide3.webp") }, { class: ("slide-picture") }));
    __VLS_23.slots.default;
    var __VLS_23;
    var __VLS_24 = {}.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Slide1.webp") }, { class: ("slide-picture") }));
    __VLS_29.slots.default;
    var __VLS_29;
    var __VLS_30 = {}.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */ ;
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_31), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Slide2.webp") }, { class: ("slide-picture") }));
    __VLS_35.slots.default;
    var __VLS_35;
    var __VLS_36 = {}.SwiperSlide;
    /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ] } */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_37), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/img/Slide3.webp") }, { class: ("slide-picture") }));
    __VLS_41.slots.default;
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("swiper-button-next") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("../assets/img/Vector.svg"),
    });
    __VLS_5.slots.default;
    var __VLS_5;
    ['exp-main', 'left-block', 'exp-div', 'exp-h1', 'exp-p', 'exp-member', 'swiper-container', 'slide-picture', 'slide-picture', 'slide-picture', 'slide-picture', 'slide-picture', 'slide-picture', 'swiper-button-next',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self;
