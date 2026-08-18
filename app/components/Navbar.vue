<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">

      <!-- Logo -->
      <a href="#home" class="logo" @click.prevent="scrollToSection('home')">
        <div class="logo-text">
          <span class="logo-name">AWGRO</span>
          <span class="logo-subtitle">REALTY PVT. LTD.</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        <a href="#home" @click.prevent="scrollToSection('home')">Home</a>
        <a href="#vision" @click.prevent="scrollToSection('vision')">Vision</a>
        <a href="#mission" @click.prevent="scrollToSection('mission')">Mission</a>
        <a href="#faq" @click.prevent="scrollToSection('faq')">FAQ</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
      </nav>

      <!-- CTA -->
      <a href="#contact" class="nav-cta" @click.prevent="scrollToSection('contact')">
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
        <a href="#home" @click.prevent="scrollToSection('home')">Home</a>
        <a href="#vision" @click.prevent="scrollToSection('vision')">Vision</a>
        <a href="#mission" @click.prevent="scrollToSection('mission')">Mission</a>
        <a href="#faq" @click.prevent="scrollToSection('faq')">FAQ</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>

        <a href="#contact" class="mobile-cta" @click.prevent="scrollToSection('contact')">
          Become an Associate Partner
          <span>↗</span>
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

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
   NAVBAR — transparent over hero, solid on scroll
========================================= */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: transparent;
  border-bottom: 1px solid transparent;

  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.navbar.scrolled {
  background: rgba(9, 9, 9, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid rgba(181, 154, 103, 0.25);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

/* =========================================
   CONTAINER
========================================= */

.navbar-container {
  width: min(100% - 40px, 1400px);
  height: 82px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 40px;
}

.navbar.scrolled .navbar-container {
  height: 72px;
}

/* =========================================
   LOGO
========================================= */

.logo {
  display: flex;
  align-items: center;
  gap: 11px;

  text-decoration: none;

  flex-shrink: 0;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-name {
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #f4f1e9;
}

.logo-subtitle {
  margin-top: 5px;

  font-family: Inter, Arial, sans-serif;
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #b59a67;
}

/* =========================================
   DESKTOP NAVIGATION
========================================= */

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  position: relative;

  color: rgba(244, 241, 233, 0.85);
  text-decoration: none;
  font-family: Inter, Arial, sans-serif;

  font-size: 14px;
  font-weight: 500;

  transition: color 0.25s ease;
}

.nav-links a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -7px;

  width: 0;
  height: 1px;

  background: #b68500;

  transition: width 0.25s ease;
}

.nav-links a:hover {
  color: #f4f1e9;
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

  background: #b68500;
  color: #090909;

  border-radius: 4px;
  /* border: 1px solid #b68500; */

  text-decoration: none;
  font-family: Inter, Arial, sans-serif;

  font-size: 13px;
  font-weight: 600;

  white-space: nowrap;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.nav-cta:hover {
  background: #ffffff86;
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
  border: 1px solid rgba(244, 241, 233, 0.3);
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

  background: #f4f1e9;
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

    background: rgba(9, 9, 9, 0.97);
    backdrop-filter: blur(14px);

    border-top: 1px solid rgba(181, 154, 103, 0.2);
  }

  .mobile-nav a {
    padding: 15px 0;

    color: #f4f1e9;

    text-decoration: none;
    font-family: Inter, Arial, sans-serif;

    font-size: 15px;
    font-weight: 500;

    border-bottom: 1px solid rgba(244, 241, 233, 0.1);
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

    background: #b68500;
    color: #090909 !important;

    border-radius: 4px;
    border-bottom: none;
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
