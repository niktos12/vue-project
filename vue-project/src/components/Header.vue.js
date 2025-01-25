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
import { ref, onMounted, onUnmounted } from 'vue';
export default (await import('vue')).defineComponent({
    props: {
        isMenuOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup: function () {
        var isScrolled = ref(false);
        var handleScroll = function () {
            isScrolled.value = window.scrollY > 0;
        };
        onMounted(function () {
            window.addEventListener('scroll', handleScroll);
        });
        onUnmounted(function () {
            window.removeEventListener('scroll', handleScroll);
        });
        return {
            isScrolled: isScrolled,
        };
    },
    methods: {
        toggleMenu: function () {
            this.$emit('toggle-menu');
        },
        closeMenu: function () {
            this.$emit('toggle-menu', false);
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    ['header-nav', 'header-btn', 'div-nav', 'div-nav', 'adaptive-nav', 'header-nav', 'header-nav', 'header-btn-adaptive', 'header-btn', 'burger', 'burger-line', 'burger-active', 'burger-line', 'burger-active', 'burger-line', 'burger-active', 'burger-line',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: (({ 'scrolled-header': __VLS_ctx.isScrolled })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("logo") }, { href: ("#") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("div-nav") }, { class: (({ 'nav-active': __VLS_ctx.isMenuOpen })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: (__VLS_ctx.closeMenu) }, { href: ("#whyTG") }), { class: ("header-nav") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: (__VLS_ctx.closeMenu) }, { href: ("#experts") }), { class: ("header-nav") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: (__VLS_ctx.closeMenu) }, { href: ("#adv") }), { class: ("header-nav") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: (__VLS_ctx.closeMenu) }, { href: ("#howIt") }), { class: ("header-nav") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("header-btn") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("adaptive-nav") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.toggleMenu) }, { class: ("burger") }), { class: (({ 'burger-active': __VLS_ctx.isMenuOpen })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("burger-line") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("burger-line") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("burger-line") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("header-btn-adaptive") }, { href: ("#form") }));
    ['scrolled-header', 'logo', 'div-nav', 'nav-active', 'header-nav', 'header-nav', 'header-nav', 'header-nav', 'header-btn', 'adaptive-nav', 'burger', 'burger-active', 'burger-line', 'burger-line', 'burger-line', 'header-btn-adaptive',];
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
