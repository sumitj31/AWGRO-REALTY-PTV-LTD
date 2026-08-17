<template>
  <header class="navbar">
    <div class="navbar-container">

      <!-- Logo -->
      <a href="#home" class="logo">
        <div class="logo-mark">
          A
        </div>

        <div class="logo-text">
          <span class="logo-name">AWGRO</span>
          <span class="logo-subtitle">REALTY PVT. LTD.</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
  <a
    href="#home"
    @click.prevent="scrollToSection('home')"
  >
    Home
  </a>

  <a
    href="#about"
    @click.prevent="scrollToSection('about')"
  >
    About
  </a>

  <a
    href="#vision"
    @click.prevent="scrollToSection('vision')"
  >
    Vision
  </a>

  <a
    href="#mission"
    @click.prevent="scrollToSection('mission')"
  >
    Mission
  </a>

  <a
    href="#partners"
    @click.prevent="scrollToSection('partners')"
  >
    100 Partners
  </a>

  <a
    href="#values"
    @click.prevent="scrollToSection('values')"
  >
    Values
  </a>
</nav>

      <!-- CTA -->
      <a
  href="#promise"
  class="nav-cta"
  @click.prevent="scrollToSection('promise')"
>
  Become an Associate Partner
  <span class="arrow">↗</span>
</a>

      <!-- Mobile Menu Button -->
      <button
        class="menu-button"
        type="button"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- Mobile Navigation -->
    <Transition name="mobile-menu">
      <nav v-if="isMenuOpen" class="mobile-nav">

  <a
    href="#home"
    @click.prevent="scrollToSection('home')"
  >
    Home
  </a>

  <a
    href="#about"
    @click.prevent="scrollToSection('about')"
  >
    About
  </a>

  <a
    href="#vision"
    @click.prevent="scrollToSection('vision')"
  >
    Vision
  </a>

  <a
    href="#mission"
    @click.prevent="scrollToSection('mission')"
  >
    Mission
  </a>

  <a
    href="#partners"
    @click.prevent="scrollToSection('partners')"
  >
    100 Partners
  </a>

  <a
    href="#values"
    @click.prevent="scrollToSection('values')"
  >
    Values
  </a>

  <a
    href="#promise"
    class="mobile-cta"
    @click.prevent="scrollToSection('promise')"
  >
    Become an Associate Partner
    <span>↗</span>
  </a>

</nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)

  if (!section) {
    console.warn(`Section #${id} not found`)
    return
  }

  const navbar = document.querySelector('.navbar') as HTMLElement | null

  const navbarHeight = navbar?.offsetHeight ?? 82

  const sectionPosition =
    section.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: sectionPosition - navbarHeight,
    behavior: 'smooth'
  })

  isMenuOpen.value = false
}
</script>

<style scoped>
/* =========================================
   NAVBAR
========================================= */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

/* =========================================
   CONTAINER
========================================= */

.navbar-container {
  width: min(1400px, calc(100% - 80px));
  height: 82px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 40px;
}

/* =========================================
   LOGO
========================================= */

.logo {
  display: flex;
  align-items: center;
  gap: 11px;

  text-decoration: none;
  color: #111;

  flex-shrink: 0;
}

.logo-mark {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #111;
  color: #fff;

  font-size: 21px;
  font-weight: 700;

  border-radius: 50%;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-name {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.logo-subtitle {
  margin-top: 5px;

  font-size: 7px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #777;
}

/* =========================================
   DESKTOP NAVIGATION
========================================= */

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;

  margin-left: auto;
}

.nav-links a {
  position: relative;

  color: #333;
  text-decoration: none;

  font-size: 14px;
  font-weight: 500;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.nav-links a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -7px;

  width: 0;
  height: 1px;

  background: #111;

  transition: width 0.25s ease;
}

.nav-links a:hover {
  color: #000;
}

.nav-links a:hover::after {
  width: 100%;
}

/* =========================================
   CTA
========================================= */

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 13px 20px;

  background: #111;
  color: #fff;

  border: 1px solid #111;
  border-radius: 4px;

  text-decoration: none;

  font-size: 13px;
  font-weight: 600;

  white-space: nowrap;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.nav-cta:hover {
  background: transparent;
  color: #111;

  transform: translateY(-1px);
}

.arrow {
  font-size: 16px;
  line-height: 1;
}

/* =========================================
   MOBILE MENU BUTTON
========================================= */

.menu-button {
  display: none;

  width: 42px;
  height: 42px;

  padding: 9px;

  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  cursor: pointer;

  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.menu-button span {
  display: block;

  width: 100%;
  height: 1.5px;

  background: #111;
}

/* =========================================
   MOBILE NAVIGATION
========================================= */

.mobile-nav {
  display: none;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1100px) {

  .navbar-container {
    width: min(100% - 40px, 1400px);
  }

  .nav-links {
    gap: 20px;
  }

  .nav-links a {
    font-size: 13px;
  }

  .nav-cta {
    padding: 12px 15px;
    font-size: 12px;
  }
}

@media (max-width: 900px) {

  .navbar-container {
    height: 72px;
  }

  .nav-links,
  .nav-cta {
    display: none;
  }

  .menu-button {
    display: flex;
  }

  .mobile-nav {
    display: flex;

    flex-direction: column;

    padding: 10px 20px 25px;

    background: rgba(255, 255, 255, 0.98);

    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  .mobile-nav a {
    padding: 15px 0;

    color: #222;

    text-decoration: none;

    font-size: 15px;
    font-weight: 500;

    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  .mobile-nav a:last-child {
    border-bottom: none;
  }

  .mobile-cta {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 12px;
    padding: 15px 18px !important;

    background: #111;
    color: #fff !important;

    border-radius: 4px;
  }
}

/* =========================================
   MOBILE MENU ANIMATION
========================================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>