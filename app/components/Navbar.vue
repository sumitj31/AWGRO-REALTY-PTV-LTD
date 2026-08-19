<template>
  <header class="navbar">
    <div class="navbar-inner">

      <a
        href="#home"
        class="brand"
        aria-label="AWGRO Realty - Home"
        @click.prevent="scrollToSection('home')"
      >
        <img
          src="/public/images/awgro logo.png"
          alt="AWGRO Realty"
          class="brand-logo"
        />
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a
          href="#home"
          class="nav-link"
          @click.prevent="scrollToSection('home')"
        >
          Home
        </a>

        <a
          href="#vision"
          class="nav-link"
          @click.prevent="scrollToSection('vision')"
        >
          Vision
        </a>

        <a
          href="#mission"
          class="nav-link"
          @click.prevent="scrollToSection('mission')"
        >
          Mission
        </a>

        <a
          href="#faq"
          class="nav-link"
          @click.prevent="scrollToSection('faq')"
        >
          FAQ
        </a>

        <a
          href="#contact"
          class="nav-link"
          @click.prevent="scrollToSection('contact')"
        >
          Contact
        </a>
      </nav>

      <a
        href="#contact"
        class="desktop-cta"
        @click.prevent="scrollToSection('contact')"
      >
        <span>Become an Associate Partner</span>
        <span class="cta-arrow">↗</span>
      </a>

      <button
        type="button"
        class="menu-toggle"
        :class="{ 'menu-toggle--active': isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-menu">
        <nav class="mobile-nav" aria-label="Mobile navigation">

          <a
            href="#home"
            class="mobile-nav-link"
            @click.prevent="scrollToSection('home')"
          >
            <span>Home</span>
            <small>01</small>
          </a>

          <a
            href="#vision"
            class="mobile-nav-link"
            @click.prevent="scrollToSection('vision')"
          >
            <span>Vision</span>
            <small>02</small>
          </a>

          <a
            href="#mission"
            class="mobile-nav-link"
            @click.prevent="scrollToSection('mission')"
          >
            <span>Mission</span>
            <small>03</small>
          </a>

          <a
            href="#faq"
            class="mobile-nav-link"
            @click.prevent="scrollToSection('faq')"
          >
            <span>FAQ</span>
            <small>04</small>
          </a>

          <a
            href="#contact"
            class="mobile-nav-link"
            @click.prevent="scrollToSection('contact')"
          >
            <span>Contact</span>
            <small>05</small>
          </a>

          <a
            href="#contact"
            class="mobile-cta"
            @click.prevent="scrollToSection('contact')"
          >
            <span>Become an Associate Partner</span>
            <span>↗</span>
          </a>

        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)

  if (!section) {
    console.warn(`Section #${id} not found`)
    return
  }

  const navbar = document.querySelector('.navbar') as HTMLElement | null
  const navbarHeight = navbar?.offsetHeight ?? 82

  const sectionTop =
    section.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: sectionTop - navbarHeight,
    behavior: 'smooth'
  })

  isMenuOpen.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.navbar {
  --blue: #2788a9;
  --blue-dark: #1f718e;
  --blue-light: #4ca5c2;
  --dark: #50575b;
  --dark-deep: #303538;
  --white: #ffffff;
  --ivory: #f8faf9;
  --border: rgba(80, 87, 91, 0.13);
  --shadow: rgba(35, 48, 54, 0.1);

  --font-primary:
    "Manrope",
    "Inter",
    Arial,
    sans-serif;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 1000;

  width: 100%;
  height: 82px;

  background: rgba(255, 255, 255, 0.97);

  border-bottom: 1px solid var(--border);

  box-shadow:
    0 6px 24px var(--shadow);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.navbar-inner {
  width: min(calc(100% - 64px), 1440px);
  height: 100%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;

  align-items: center;

  column-gap: 45px;
}

.brand {
  display: inline-flex;
  align-items: center;

  justify-self: start;

  width: fit-content;

  text-decoration: none;
}

.brand-logo {
  display: block;

  width: auto;
  height: 52px;

  object-fit: contain;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.brand:hover .brand-logo {
  opacity: 0.9;
  transform: translateY(-1px);
}

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(26px, 3vw, 46px);

  height: 100%;
}

.nav-link {
  position: relative;

  display: inline-flex;
  align-items: center;

  height: 100%;

  padding: 2px 0 0;

  color: var(--dark-deep);

  text-decoration: none;

  font-family: var(--font-primary);

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 0.055em;

  transition:
    color 0.25s ease;
}

.nav-link::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: 21px;

  width: 0;
  height: 2px;

  background: var(--blue);

  border-radius: 10px;

  transition:
    width 0.3s ease;
}

.nav-link:hover {
  color: var(--blue);
}

.nav-link:hover::after {
  width: 100%;
}

.desktop-cta {
  justify-self: end;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  min-height: 44px;

  padding: 0 19px;

  background: var(--blue);

  color: #ffffff;

  border: 1px solid var(--blue);

  border-radius: 3px;

  text-decoration: none;

  font-family: var(--font-primary);

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.035em;

  white-space: nowrap;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.desktop-cta:hover {
  background: var(--blue-dark);
  border-color: var(--blue-dark);

  transform: translateY(-1px);

  box-shadow:
    0 8px 20px rgba(39, 136, 169, 0.2);
}

.cta-arrow {
  font-size: 17px;
  line-height: 1;

  transition:
    transform 0.25s ease;
}

.desktop-cta:hover .cta-arrow {
  transform: translate(2px, -2px);
}

.menu-toggle {
  display: none;

  width: 42px;
  height: 42px;

  padding: 9px;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 5px;

  background: transparent;

  border: 1px solid rgba(80, 87, 91, 0.2);

  border-radius: 3px;

  cursor: pointer;
}

.menu-toggle span {
  display: block;

  width: 20px;
  height: 1.5px;

  background: var(--dark-deep);

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.menu-toggle--active span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.menu-toggle--active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle--active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mobile-menu {
  width: 100%;

  background: rgba(255, 255, 255, 0.99);

  border-top: 1px solid var(--border);

  box-shadow:
    0 15px 35px rgba(35, 48, 54, 0.1);
}

.mobile-nav {
  width: min(calc(100% - 40px), 600px);

  margin: 0 auto;

  padding: 8px 0 24px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 58px;

  color: var(--dark-deep);

  border-bottom: 1px solid var(--border);

  text-decoration: none;

  font-family: var(--font-primary);

  font-size: 14px;
  font-weight: 600;

  letter-spacing: 0.035em;

  transition:
    color 0.25s ease,
    padding 0.25s ease;
}

.mobile-nav-link small {
  color: var(--blue);

  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.12em;
}

.mobile-nav-link:hover {
  padding-left: 6px;
  color: var(--blue);
}

.mobile-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 54px;

  margin-top: 20px;

  padding: 0 18px;

  background: var(--blue);
  color: #ffffff;

  border-radius: 3px;

  text-decoration: none;

  font-family: var(--font-primary);

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.025em;

  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.mobile-cta:hover {
  background: var(--blue-dark);
  transform: translateY(-1px);
}

.mobile-cta span:last-child {
  font-size: 17px;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1050px) {
  .navbar-inner {
    width: calc(100% - 40px);
    column-gap: 25px;
  }

  .desktop-nav {
    gap: 22px;
  }

  .nav-link {
    font-size: 10px;
  }

  .desktop-cta {
    padding: 0 14px;
    font-size: 9px;
  }
}

@media (max-width: 900px) {
  .navbar {
    height: 76px;
  }

  .navbar-inner {
    width: calc(100% - 40px);

    display: flex;
    align-items: center;
    justify-content: space-between;

    column-gap: 0;
  }

  .brand-logo {
    height: 47px;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar {
    height: 70px;
  }

  .navbar-inner {
    width: calc(100% - 28px);
  }

  .brand-logo {
    height: 43px;
  }

  .menu-toggle {
    width: 40px;
    height: 40px;
  }

  .mobile-nav {
    width: calc(100% - 28px);
  }

  .mobile-nav-link {
    min-height: 54px;
  }
}
</style>