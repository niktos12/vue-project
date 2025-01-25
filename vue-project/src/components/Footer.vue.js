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
import { ref } from 'vue';
import { z } from 'zod';
export default (await import('vue')).defineComponent({
    setup: function () {
        var formData = ref({
            firstName: '',
            lastName: '',
            phone: '',
            business: '',
        });
        var errors = ref({});
        var schema = z.object({
            firstName: z.string().min(1, 'Имя обязательно'),
            lastName: z.string().min(1, 'Фамилия обязательна'),
            phone: z.string().min(1, 'Номер телефона обязателен').regex(/^\d+$/, 'Номер телефона должен содержать только цифры').max(11, 'Слишком длинный номер телефона'),
            business: z.string().optional(),
        });
        var submitForm = function () {
            try {
                schema.parse(formData.value);
                errors.value = {};
                alert('Форма успешно отправлена!');
            }
            catch (error) {
                if (error instanceof z.ZodError) {
                    errors.value = Object.fromEntries(Object.entries(error.formErrors.fieldErrors).map(function (_a) {
                        var key = _a[0], value = _a[1];
                        return [
                            key,
                            value ? value.join(", ") : "",
                        ];
                    }));
                }
                ;
            }
            ;
        };
        return {
            formData: formData,
            errors: errors,
            submitForm: submitForm,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    ['half-form-group', 'half-form-group', 'half-form-group', 'form-group', 'form-group', 'form-group', 'submit-button', 'h1-new-level', 'p-new-level', 'new-level', 'privacy', 'half-form-group', 'form-group', 'inputs-group', 'submit-button', 'form-notice',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("new-level") }, { id: ("form") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("h1-new-level") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("p-new-level") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("privacy") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.submitForm) }, { class: ("form") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("inputs-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("half-form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.formData.firstName)),
        type: ("text"),
        placeholder: ("Имя*"),
    });
    if (__VLS_ctx.errors.firstName) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("error") }));
        (__VLS_ctx.errors.firstName);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("half-form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.formData.lastName)),
        type: ("text"),
        placeholder: ("Фамилия*"),
    });
    if (__VLS_ctx.errors.lastName) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("error") }));
        (__VLS_ctx.errors.lastName);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("tel"),
        placeholder: ("Номер телефона*"),
    });
    (__VLS_ctx.formData.phone);
    if (__VLS_ctx.errors.phone) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("error") }));
        (__VLS_ctx.errors.phone);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.formData.business)),
        type: ("text"),
        placeholder: ("Сфера бизнеса"),
    });
    if (__VLS_ctx.errors.business) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("error") }));
        (__VLS_ctx.errors.business);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("submit") }, { class: ("submit-button") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("form-notice") }));
    ['new-level', 'h1-new-level', 'p-new-level', 'privacy', 'form', 'inputs-group', 'half-form-group', 'error', 'half-form-group', 'error', 'form-group', 'error', 'form-group', 'error', 'submit-button', 'form-notice',];
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
