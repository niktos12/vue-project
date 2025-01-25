<template>
    <div class="pres-main">
        <div class="pres">
            <div class="left-block">
                <h1 class="left-block-h1">
                    Треть рынка в один клик!
                </h1>
                <p class="left-block-p">
                    Разработайте Telegram Mini App — будущее мобильной коммерции уже здесь!
                </p>
                <a class="btn-pres" href="#form">
                    Хочу мини-приложение!
                </a>
            </div>
            <video class="pres-video" autoplay loop muted>
                <source src="../assets/IMG_7319.webm" type="video/webm">
            </video>
        </div>
    </div>
</template>

<style scoped>
.pres-main {
    background-color: #2121210A;
    padding: 1rem 2rem;
    border-radius: 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.pres {
    display: flex;
    flex-direction: row;
    padding-top: 5rem !important;
    gap: 2rem;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
}

.btn-pres {
    padding: 1rem 1.5rem;
    border: 0;
    border-radius: 999px;
    background-color: #2196F3;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-pres:hover {
    background-color: #1976d2;
}

.pres-video {
    border-radius: 1rem;
    max-width: 100%;
    width: auto;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    flex-shrink: 0;
}

.left-block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    flex: 1;
}

.left-block-p {
    font-size: 2rem;
    text-align: center;
    word-break: normal;
    line-height: 2.8rem;
    color: #212121;
}

.left-block-h1 {
    font-size: 6rem;
    line-height: 6rem;
    text-align: center;
    font-weight: 500;
    word-break: normal;
    color: #212121;
}

@media (max-width: 1024px) {
    .pres {
        gap: 1.5rem;
    }

    .left-block-h1 {
        font-size: 3rem;
    }

    .left-block-p {
        font-size: 1.25rem;
    }

    .btn-pres {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
    }
}

@media (max-width: 768px) {
    .pres {
        flex-direction: column;
        gap: 1rem;
    }

    .pres-video {
        max-width: 100%;
        height: auto;
    }

    .left-block-h1 {
        font-size: 2.5rem;
    }

    .left-block-p {
        font-size: 2rem;
    }

    .btn-pres {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .left-block-h1 {
        font-size: 3rem;
        line-height: 3rem;
    }

    .pres-video {
        width: 100%;
        height: 765px;
    }

    .left-block-p {
        font-size: 1.5rem;
        line-height: 2.1rem;
    }
    .pres{
        padding-top: 0rem !important;
    }
    .pres-main {
        padding-top: 7rem !important;
        padding: 0.5rem;
    }

    .btn-pres {
        margin-top: 1rem;
        line-height: 1.225rem;
        padding: 0.875rem 1.625rem;
        font-size: 0.875rem;
    }
}
</style>