<template>
  <footer>
    <div class="new-level" id="form">
      <div class="new-level-div">
        <h1 class="h1-new-level">
          Готовы выйти на новый уровень и захватить глобальный рынок?
        </h1>
        <p class="p-new-level">
          Мы поможем вам стать лидером мобильной коммерции в России и за её
          пределами!
        </p>
      </div>

      <p class="privacy">©️ Студия Сайтов 2025. Все права защищены</p>
    </div>
    <form class="form" @submit.prevent="submitForm">
      <div class="inputs-group">
        <div class="half-form-group">
          <input
            v-model="formData.firstName"
            type="text"
            placeholder="Имя*"
            class="input-with-placeholder"
          />
          <span v-if="errors.firstName" class="error">{{
            errors.firstName
          }}</span>
        </div>
        <div class="half-form-group">
          <input
            v-model="formData.lastName"
            type="text"
            placeholder="Фамилия*"
            class="input-with-placeholder"
          />
          <span v-if="errors.lastName" class="error">{{
            errors.lastName
          }}</span>
        </div>
      </div>

      <div class="form-group">
        <input
          class="input-mask input-with-placeholder"
          v-model="formData.phone"
          v-maska="'+7(###) ### ##-##'"
          placeholder="Номер телефона*"
        />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <div class="form-group">
        <input
          class="input-with-placeholder"
          v-model="formData.business"
          type="text"
          placeholder="Сфера бизнеса"
        />
        <span v-if="errors.business" class="error">{{ errors.business }}</span>
      </div>
      <button type="submit" class="submit-button">Отправить</button>
      <p class="form-notice">
        Нажимая кнопку «Отправить», Вы даете согласие на обработку персональных
        данных.
      </p>
    </form>
  </footer>
</template>

<script>
import { ref } from "vue";
import { z } from "zod";
import { vMaska } from "maska/vue";
export default {
  directives: { maska: vMaska },
  setup() {
    const formData = ref({
      firstName: "",
      lastName: "",
      phone: "",
      business: "",
    });

    const errors = ref({});

    const schema = z.object({
      firstName: z.string().min(1, "Имя обязательно"),
      lastName: z.string().min(1, "Фамилия обязательна"),
      phone: z.string().min(17, "Номер телефона обязателен"),
      business: z.string().optional(),
    });

    const submitForm = () => {
      try {
        schema.parse(formData.value);
        errors.value = {};
        alert("Форма успешно отправлена!");
      } catch (error) {
        if (error instanceof z.ZodError) {
          errors.value = Object.fromEntries(
            Object.entries(error.formErrors.fieldErrors).map(([key, value]) => [
              key,
              value ? value.join(", ") : "",
            ])
          );
        }
      }
    };

    return {
      formData,
      errors,
      submitForm,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

footer {
  @include flex-row;
  gap: 8rem;
  padding: 8rem;
  background-color: $primary-color;
  border-radius: $border-radius;
  align-items: start;
}

.h1-new-level {
  font-size: $font-size-h2;
  font-weight: 500;
  line-height: 4.4rem;
  color: $secondary-color;
  text-align: left;
}

.p-new-level {
  color: $secondary-color;
  font-size: $font-size-xm;
  line-height: 1.75rem;
  max-width: 26.25rem;
  text-align: left;
}

.privacy {
  line-height: 1.4rem;
  color: #ffffff52;
  font-size: $font-size-small;
  margin-top: $padding-xlarge;
  text-align: left;
}
.new-level-div{
  @include flex-column;
  gap: 3rem;
}
.new-level {
  @include flex-column;
  gap: $padding-large;
  width: 100%;
}

.form {
  @include flex-column;
  gap: $padding-medium;
  width: 100%;
}

.inputs-group {
  @include flex-row;
  gap: $padding-medium;
  width: 100%;
}

.half-form-group {
  flex: 1;
}

.half-form-group input {
  @include input-style;
}

.half-form-group input::placeholder {
  color: $text-color-light;
}

.half-form-group input:focus {
  outline-color: $primary-color;
}
.input-with-placeholder {
  position: relative;
  &::placeholder {
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    color: $text-color-light;
    pointer-events: none;
    font-size: $font-size-xm;
  }

  &:focus::placeholder {
    top: 0.7rem;
    transform: translateY(0);
    font-size: $font-size-small;
  }
}
.form-group {
  width: 100%;
}

.form-group input,
.input-mask {
  @include input-style;
}
.input-mask {
  display: block;
}

.form-group input::placeholder {
  color: $text-color-light;
}

.form-group input:focus {
  outline-color: $primary-color;
}

.submit-button {
  @include button-style;
  font-size: $font-size-large !important;
  padding: $padding-large $padding-megalarge !important;
  border-radius: $border-radius-full !important;
  background-color: $text-color;
  color: $secondary-color;
}

.submit-button:hover {
  background-color: #1976d2;
}

.form-notice {
  align-self: center;
  max-width: 30rem;
  line-height: 1.75rem;
  font-size: $font-size-medium;
  color: #ffffffa3;
  text-align: center;
  margin-top: $padding-medium;
}

.error {
  color: #ff0000;
  font-size: $font-size-small;
  margin-top: $padding-small;
  display: block;
}
@include screen-between(300px, 767px) {
  footer {
    padding: $padding-medium;
    flex-direction: column;
    gap: 3rem;
  }

  .h1-new-level {
    font-size: $font-size-xlarge;
    line-height: 2.2rem;
  }

  .p-new-level {
    font-size: $font-size-medium;
    line-height: 1.5rem;
  }

  .new-level {
    gap: $padding-medium;
  }

  .privacy {
    font-size: $font-size-small;
    margin-top: $padding-small;
    margin-bottom: $padding-medium;
  }

  .half-form-group input,
  .form-group input {
    padding: $padding-large $padding-xlarge;
    font-size: $font-size-medium;
    line-height: 1.5rem;
  }

  .inputs-group {
    flex-direction: column;
  }

  .submit-button {
    padding: $padding-large $padding-xlarge !important;
    font-size: $font-size-medium;
  }

  .form-notice {
    font-size: $font-size-small;
    line-height: 1.4rem;
  }
}
@include screen-between(768px, 1440px) {
  footer {
    flex-direction: column;
    gap: 3rem;
    padding: 4rem;
  }
  .privacy {
    margin-top: 0;
  }
}
@include screen-between(1441px, 1750px) {
  footer {
    gap: 6rem;
  }
}
</style>
