<template>
    <div class="main-div" id="howIt">
        <h1 class="h1-how-works">Как это работает?</h1>
        <div class="desc-div">
            <div class="card-div">
                <h1 class="h1-card">Анализируем</h1>
                <p class="p-card">Исследуем ваш бизнес и подбираем решение</p>
            </div>
            <div class="card-div">
                <h1 class="h1-card">Создаем</h1>
                <p class="p-card">Настраиваем системы для сбора клиентской информации</p>
            </div>
            <div class="card-div">
                <h1 class="h1-card">Контролируем</h1>
                <p class="p-card">А вы получаете управление каждым этапом — от первого интереса клиента до покупки</p>
            </div>
        </div>
        <p class="p-process">Вы видите все процессы в реальном времени и получаете полное понимание, как клиенты
            взаимодействуют с вашим продуктом</p>
        <img :src="processImageSrc" class="process-img" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    computed: {
        processImageSrc() {
            return this.isMobile ? 'src/assets/Frame 830.svg' : 'src/assets/plan.svg';
        },
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

<style scoped>
.main-div {
    background-color: #2121210A;
    border-radius: 32px;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.p-process {
    font-size: 1.75rem;
    letter-spacing: -0.6px;
    color: #212121A3;
    text-align: center;
    align-self: center;
    margin-bottom: 2rem;
    max-width: 920px;
}

.desc-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.card-div {
    background-color: #FFFFFF;
    border-radius: 16px;
    width: 100%;
    max-width: 464px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.p-card {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #212121;
    width: 100%;
    word-break: normal;
    letter-spacing: -0.6px;
}

.h1-card {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #212121;
}

.h1-how-works {
    font-weight: 500;
    font-size: 4rem;
    line-height: 4.4rem;
    color: #212121;
    text-align: center;
}

.process-img {
    width: 100%;
    height: auto;
    align-self: center;
}

@media (max-width: 1024px) {
    .main-div {
        padding: 1.5rem 2rem;
        gap: 1.5rem;
    }

    .h1-how-works {
        font-size: 3rem;
        line-height: 3.5rem;
    }

    .p-process {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .h1-card {
        font-size: 1.75rem;
        line-height: 2.2rem;
    }

    .p-card {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }
}

@media (max-width: 768px) {
    .main-div {
        padding: 1rem 1.5rem;
        gap: 1rem;
    }

    .h1-how-works {
        font-size: 2.5rem;
        line-height: 3rem;
    }

    .p-process {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    .desc-div {
        flex-direction: column;
        align-items: center;
    }

    .card-div {
        width: 100%;
        max-width: 400px;
    }

    .h1-card {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .p-card {
        font-size: 1rem;
        line-height: 1.25rem;
    }

    .process-img {
        width: 100%;
        height: auto;
        max-width: 400px;
    }
}

@media (max-width: 480px) {
    .h1-how-works {
        font-size: 2rem;
        line-height: 2.2rem;
    }

    .p-process {
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: left;
        margin-bottom: 4.5rem;
        margin-top: 1rem;
    }

    .h1-card {
        font-size: 1.5rem;
        line-height: 1.65rem;
    }

    .p-card {
        font-size: 1rem;
        line-height: 1.4rem;
    }

    .process-img {
        width: 100%;
        height: auto;
        max-width: 300px;
        margin-bottom: 2rem;
    }
}
</style>