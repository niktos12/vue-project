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
import OverlayEffect from './components/OverlayEffect.vue';
import Header from './components/Header.vue';
import Presentation from './components/Presentation.vue';
import Advantages from './components/Advantages.vue';
import WhyTG from './components/WhyTG.vue';
import Experts from './components/Experts.vue';
import HowItWorks from './components/HowItWorks.vue';
import Footer from './components/Footer.vue';
export default (await import('vue')).defineComponent({
    components: {
        Header: Header,
        OverlayEffect: OverlayEffect,
        Presentation: Presentation,
        Advantages: Advantages,
        WhyTG: WhyTG,
        Experts: Experts,
        HowItWorks: HowItWorks,
        Footer: Footer,
    },
    setup: function () {
        var isMenuOpen = ref(false);
        var toggleMenu = function () {
            isMenuOpen.value = !isMenuOpen.value;
        };
        return {
            isMenuOpen: isMenuOpen,
            toggleMenu: toggleMenu,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_componentsOption = {
        Header: Header,
        OverlayEffect: OverlayEffect,
        Presentation: Presentation,
        Advantages: Advantages,
        WhyTG: WhyTG,
        Experts: Experts,
        HowItWorks: HowItWorks,
        Footer: Footer,
    };
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_0 = {}.OverlayEffect;
    /** @type { [typeof __VLS_components.OverlayEffect, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        isMenuOpen: ((__VLS_ctx.isMenuOpen)),
        toggleMenu: ((__VLS_ctx.toggleMenu)),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            isMenuOpen: ((__VLS_ctx.isMenuOpen)),
            toggleMenu: ((__VLS_ctx.toggleMenu)),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    var __VLS_6 = {}.Header;
    /** @type { [typeof __VLS_components.Header, ] } */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ 'onToggleMenu': {} }, { isMenuOpen: ((__VLS_ctx.isMenuOpen)) })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ 'onToggleMenu': {} }, { isMenuOpen: ((__VLS_ctx.isMenuOpen)) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12;
    var __VLS_13 = {
        onToggleMenu: (__VLS_ctx.toggleMenu)
    };
    var __VLS_9;
    var __VLS_10;
    var __VLS_11;
    var __VLS_14 = {}.Presentation;
    /** @type { [typeof __VLS_components.Presentation, ] } */ ;
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_15), false));
    var __VLS_20 = {}.Advantages;
    /** @type { [typeof __VLS_components.Advantages, ] } */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_21), false));
    var __VLS_26 = {}.WhyTG;
    /** @type { [typeof __VLS_components.WhyTG, ] } */ ;
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_27), false));
    var __VLS_32 = {}.Experts;
    /** @type { [typeof __VLS_components.Experts, ] } */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_33), false));
    var __VLS_38 = {}.HowItWorks;
    /** @type { [typeof __VLS_components.HowItWorks, ] } */ ;
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_39), false));
    var __VLS_44 = {}.Footer;
    /** @type { [typeof __VLS_components.Footer, ] } */ ;
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_45), false));
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
