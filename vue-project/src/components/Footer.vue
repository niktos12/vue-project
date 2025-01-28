<template>
  <footer>
    <div class="new-level" id="form">
      <h1 class="h1-new-level">
        Готовы выйти на новый уровень и захватить глобальный рынок?
      </h1>
      <p class="p-new-level">
        Мы поможем вам стать лидером мобильной коммерции в России и за её
        пределами!
      </p>
      <p class="privacy">©️ Студия Сайтов 2025. Все права защищены</p>
    </div>
    <form class="form" @submit.prevent="submitForm">
      <div class="inputs-group">
        <div class="half-form-group">
          <input v-model="formData.firstName" type="text" placeholder="Имя*" />
          <span v-if="errors.firstName" class="error">{{
            errors.firstName
          }}</span>
        </div>
        <div class="half-form-group">
          <input
            v-model="formData.lastName"
            type="text"
            placeholder="Фамилия*"
          />
          <span v-if="errors.lastName" class="error">{{
            errors.lastName
          }}</span>
        </div>
      </div>

      <div class="form-group">
        <input
          v-model="formData.phone"
          placeholder="Номер телефона*"
        />
        <span v-if="errors.phone" type="tel" class="error">{{
          errors.phone
        }}</span>
      </div>
      <div class="form-group">
        <input
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
import { InputFacade, facade, filter } from "vue-input-facade";

export default {
  components: { InputFacade },
  directives: {
    facade,
  },
  filters: { facade: filter },
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
      phone: z
        .string()
        .min(1, "Номер телефона обязателен")
        .regex(
          /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
          "Номер телефона должен соответствовать формату +7 (___) ___-__-__"
        )
        .max(11, "Слишком длинный номер телефона"),
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

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 8rem;
  background-color: #2196f3;
  border-radius: 2rem;
  align-items: start;
}

.h1-new-level {
  font-size: 4rem;
  font-weight: 500;
  line-height: 70.4px;
  color: #ffffff;
  text-align: left;
}

.p-new-level {
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.75rem;
  max-width: 420px;
  text-align: left;
}

.privacy {
  line-height: 1.4rem;
  color: #ffffff52;
  font-size: 0.875rem;
  margin-top: 80px;
  text-align: left;
}

.new-level {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.inputs-group {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
}

.half-form-group {
  flex: 1;
}

.half-form-group input {
  font-size: 1.75rem;
  line-height: 1.5rem;
  padding: 2rem 3rem;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 999px;
  box-sizing: border-box;
}

.half-form-group input::placeholder {
  color: #2121213d;
}

.half-form-group input:focus {
  outline-color: #2196f3;
}

.form-group {
  width: 100%;
}

.form-group input {
  width: 100%;
  font-size: 1.75rem;
  line-height: 2.45rem;
  padding: 2rem 3rem;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 999px;
  box-sizing: border-box;
}

.form-group input::placeholder {
  color: #2121213d;
}

.form-group input:focus {
  outline-color: #2196f3;
}

.submit-button {
  font-weight: 500;
  padding: 2rem 3rem;
  font-size: 1.75rem;
  color: #fff;
  background-color: #212121;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #1976d2;
}

.form-notice {
  align-self: center;
  max-width: 30rem;
  line-height: 1.75rem;
  font-size: 1rem;
  color: #ffffffa3;
  text-align: center;
  margin-top: 1rem;
}

.error {
  color: #ff0000;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
}

@media (max-width: 480px) {
  footer {
    padding: 1.5rem;
    flex-direction: column;
  }

  .h1-new-level {
    font-size: 2rem;
    line-height: 2.2rem;
  }

  .p-new-level {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .new-level {
    gap: 1.5rem;
  }

  .privacy {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .half-form-group input,
  .form-group input {
    padding: 1.5rem 2rem;
    width: 100%;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  .inputs-group {
    flex-direction: column;
  }

  .submit-button {
    padding: 1.5rem 2rem;
    font-size: 1rem;
  }

  .form-notice {
    font-size: 1rem;
    line-height: 1.4rem;
  }
}
</style>
