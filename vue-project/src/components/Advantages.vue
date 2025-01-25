<template>
    <div class="adv-main" id="adv">
        <div class="adv-scroll-container">
            <div class="adv-div">
                <img src="../assets/img/Frame 782.svg" class="adv-img" />
                <p class="adv-p">
                    <span class="adv-span">Подходит для любой ниши: </span>
                    магазины, доставка, образование, недвижимость и др.
                </p>
            </div>
            <div class="adv-div">
                <img src="../assets/img/Frame 783.svg" class="adv-img" />
                <p class="adv-p">
                    <span class="adv-span">Уведомления нового поколения: </span>
                    замените устаревшие SMS на интерактивные сообщения.
                </p>
            </div>
            <div class="adv-div">
                <img src="../assets/img/Frame 785.svg" class="adv-img" />
                <p class="adv-p">
                    <span class="adv-span">Цифровизация и автоматизация: </span>
                    управляйте продажами и коммуникацией.
                </p>
            </div>
            <div class="adv-div">
                <img src="../assets/img/Frame 784.svg" class="adv-img" />
                <p class="adv-p">
                    <span class="adv-span">Геймификация: </span>
                    вовлекайте клиентов через акции и розыгрыши.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.adv-main {
    background-color: #2121210A;
    padding: 2rem;
    border-radius: 2rem;
    position: relative;
}

.adv-scroll-container {
    position: relative;
    gap: 2rem;
    display: flex;
    padding-bottom: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    overflow-x: hidden;
}

.adv-p {
    font-size: 1.5rem;
    text-align: center;
    color: #2121217A;
    margin: 0;
}

.adv-img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
}

.adv-span {
    font-size: 1.5rem;
    text-align: center;
    color: #212121;
}

.adv-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    width: 24rem;
    gap: 1rem;
}

@media (max-width: 480px) {
    .adv-main {
        padding: 1rem;
        gap: 1rem;
    }

    .adv-scroll-container {
        overflow-x: auto;
        justify-content: normal;
        scrollbar-width: thin;
        gap: 1rem;
    }

    .adv-p {
        font-size: 1rem;
    }

    .adv-img {
        width: 7.5rem;
        height: 7.5rem;
    }

    .adv-span {
        font-size: 1rem;
    }

    .adv-div {
        width: 12.5rem;
    }
}
</style>