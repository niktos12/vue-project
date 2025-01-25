<template>
    <div class="why-tg-main" id="whyTG">
        <div class="left-block">
            <img src="../assets/tg.webp" class="tg-webp" />
        </div>
        <div class="right-block">
            <h2 class="section-title">Почему Telegram?</h2>
            <div class="benefits">
                <div class="benefit-item">
                    <span class="benefit-number">1</span>
                    <p class="benefit-text">Клиенту удобнее покупать в мессенджере</p>
                </div>
                <div class="benefit-item">
                    <span class="benefit-number">2</span>
                    <p class="benefit-text">Будьте ближе к клиентам — становитесь частью их повседневной жизни</p>
                </div>
                <div class="benefit-item">
                    <span class="benefit-number">3</span>
                    <p class="benefit-text">Вы рядом, как часть семьи</p>
                </div>
                <div class="benefit-item">
                    <span class="benefit-number">4</span>
                    <p class="benefit-text">Новый рынок и глобальный рост</p>
                </div>
            </div>
            <div class="line"></div>
            <div class="global-div">
                <p class="global-text">
                    Telegram открывает доступ не только к российской аудитории, но и к международному рынку.
                </p>
                <p class="global-text">
                    Используйте глобальный тренд, чтобы развивать свой бизнес и быть впереди конкурентов.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.why-tg-main {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    background-color: #2121210A;
    border-radius: 2rem;
    padding: 0 2rem;
    align-items: center;
    flex-wrap: wrap;
}

.tg-webp {
    width: 100%;
    height: auto;
    max-width: 48rem;
    flex: 1;
}

.right-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    flex: 1;
}

.section-title {
    font-size: 3rem;
    font-weight: 500;
}

.benefits {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.benefit-number {
    flex-shrink: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #2196F3;
    background-color: #2196F314;
    width: 2.625rem;
    height: 2.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
}

.benefit-text {
    font-size: 1.5rem;
    color: #212121;
    word-break: break-word;
    word-wrap: break-word;
}

.line {
    height: 1px;
    width: 100%;
    border: 1px solid #21212114;
}

.global-div {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
}

.global-text {
    font-size: 1.25rem;
    color: #2121217A;
    text-align: left;
    line-height: 1.75rem;
    word-break: normal;
}

@media (max-width: 480px) {
    .section-title {
        font-size: 2rem;
    }

    .tg-webp {
        max-width: 100%;
    }

    .why-tg-main {
        flex-direction: column;
        padding: 1.5rem;
        gap: 1rem;
    }

    .benefit-item {
        flex-direction: row;
        align-items: center;
    }

    .benefits {
        margin-bottom: 0rem;
    }

    .benefit-number {
        font-size: 1rem;
        width: 1.875rem;
        height: 1.875rem;
    }

    .benefit-text {
        font-size: 1rem;
    }

    .global-div {
        flex-direction: column;
    }

    .global-text {
        font-size: 0.875rem;
        line-height: 1.225rem;
    }
}
</style>