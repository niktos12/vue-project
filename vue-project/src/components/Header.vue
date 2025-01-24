сделай так, чтобы когда у меня был статик позишион, то у меня нормально открывалось и отображалось бургер меню
<template>
    <header :class="{ 'scrolled-header': isScrolled }">
        <h1 class="logo">Mini Apps</h1>
        <div class="div-nav" :class="{ 'nav-active': isMenuOpen }">
            <a href="#whyTG" class="header-nav" @click="closeMenu">Почему Telegram?</a>
            <a href="#experts" class="header-nav" @click="closeMenu">Наши услуги</a>
            <a href="#adv" class="header-nav" @click="closeMenu">Преимущества</a>
            <a href="#howIt" class="header-nav" @click="closeMenu">Как это работает</a>
        </div>
        <button class="header-btn">Оставить заявку</button>
        <div class="adaptive-nav">
            <button class="burger" :class="{ 'burger-active': isMenuOpen }" @click="toggleMenu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </button>
            <a class="header-btn-adaptive" href="#form">+</a>
        </div>
    </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    props: {
        isMenuOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const isScrolled = ref(false);

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 0;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isScrolled,
        };
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
        closeMenu() {
            this.$emit('toggle-menu', false);
        },
    },
};
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 1rem 2rem;
    border-radius: 999px;
    position: sticky;
    top: 1rem;
    z-index: 3;
    transition: background-color 0.3s ease-in-out;
}

.logo {
    color: #212121;
    font-size: 1.5rem;
    font-weight: 600;
}

.div-nav {
    display: flex;
    gap: 3rem;
}

.header-nav {
    color: #212121A3;
    font-size: 1.25rem;
    text-decoration: none;
    transition: color 0.3s;
}

.header-nav:hover {
    color: #2196F3;
}

.header-btn-adaptive {
    display: none;
}

.header-btn {
    border: 1px solid #2196F3;
    color: #2196F3;
    padding: 1.25rem 2rem;
    background-color: #FFFFFF;
    border-radius: 999px;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.header-btn:hover {
    background-color: #2196F3;
    color: #FFFFFF;
}

.adaptive-nav {
    display: none;
}

.burger {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
}

.burger-line {
    width: 2rem;
    height: 0.25rem;
    background-color: #21212152;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}

@media (max-width: 768px) {
    header {
        padding: 1rem;
        flex-direction: row;
        justify-content: space-between;
    }

    .div-nav {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin-top: 14px;
        flex-direction: column;
        gap: 1rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        z-index: 4;
        border-radius: 1rem;
    }

    .scrolled-header {
        background-color: #f0f0f0;
    }

    .div-nav.nav-active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .adaptive-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;
    }

    .header-nav {
        padding: 14px 24px;
        background-color: #FFFFFF;
        font-size: 1rem;
        text-align: center;
        border-radius: 999px;
        transition: background-color 0.3s, color 0.3s;
    }

    .header-nav:hover {
        background-color: #2196F3;
        color: #FFFFFF;
    }

    .header-btn-adaptive {
        display: block;
        border: 1px solid #2196F3;
        color: #2196F3;
        padding: 1.25rem 2rem;
        background-color: #FFFFFF;
        border-radius: 999px;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    .header-btn {
        display: none;
    }

    .burger {
        display: flex;
        right: 1rem;
        top: 1rem;
        z-index: 5;
    }

    .burger-active .burger-line {
        background-color: #212121;
    }

    .burger-active .burger-line:nth-child(1) {
        transform: rotate(45deg) translate(0.5rem, 0.5rem);
    }

    .burger-active .burger-line:nth-child(2) {
        opacity: 0;
    }

    .burger-active .burger-line:nth-child(3) {
        transform: rotate(-45deg) translate(0.55rem, -0.5rem);
    }
}
</style>