<template>
  <section id="home" class="hero">
    <div class="hero-container">

      <div class="hero-content">
        <div class="hero-kicker">
          <span class="kicker-line"></span>
          <span>AWGRO REALTY</span>
        </div>

        <h1 class="hero-title">
          Build Your
          <span>Real Estate</span>
          <em>Business.</em>
        </h1>

        <p class="hero-description">
          Turn your ambition into opportunity. Build your own
          real estate business with the support, network and
          ecosystem designed to help you grow.
        </p>

        <div class="hero-actions">
          <a
            href="#contact"
            class="primary-button"
            @click.prevent="scrollToSection('contact')"
          >
            <span>Become an Associate Partner</span>
            <span class="button-arrow">↗</span>
          </a>

          <a
            href="#vision"
            class="text-button"
            @click.prevent="scrollToSection('vision')"
          >
            <span>Discover AWGRO</span>
            <span class="text-arrow">→</span>
          </a>
        </div>

        <div class="hero-trust">
          <div class="trust-item">
            <strong>100+</strong>
            <span>Associate<br />Partners</span>
          </div>

          <div class="trust-divider"></div>

          <div class="trust-item">
            <strong>01</strong>
            <span>Growing<br />Ecosystem</span>
          </div>

          <div class="trust-divider"></div>

          <div class="trust-item">
            <strong>∞</strong>
            <span>Growth<br />Potential</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">

        <div class="visual-top">
          <span>REAL ESTATE</span>
          <span>01 / 01</span>
        </div>

        <div class="image-frame">
          <img
            src="/public/images/hero.jpg"
            alt="Modern real estate property"
            class="hero-image"
          />

          <div class="image-overlay"></div>

          <div class="image-caption">
            <div>
              <span class="caption-label">THE AWGRO WAY</span>
              <span class="caption-title">Think Beyond Property</span>
            </div>

            <span class="caption-arrow">↗</span>
          </div>
        </div>

        <div class="visual-bottom">
          <span>PROPERTY</span>

          <div class="visual-line"></div>

          <span>PEOPLE</span>

          <div class="visual-line"></div>

          <span>OPPORTUNITY</span>
        </div>

        <!-- <div class="visual-accent"></div> -->
      </div>

    </div>

    <div class="hero-background-mark">
      AWGRO
    </div>
  </section>
</template>

<script setup lang="ts">
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
}
</script>

<style scoped>
.hero {
  --blue: #2788a9;
  --blue-dark: #1f718d;
  --blue-light: #5aaec7;
  --gray: #50575b;
  --gray-dark: #303538;
  --gray-soft: #697176;
  --white: #ffffff;
  --surface: #f6f9fa;
  --border: #dfe7ea;

  --display:
    "Playfair Display",
    Georgia,
    serif;

  --body:
    "Manrope",
    "Inter",
    Arial,
    sans-serif;

  position: relative;

  width: 100%;

  min-height:
    calc(100svh - 82px);

  overflow: hidden;

  display: flex;
  align-items: center;

  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f7fafb 65%,
      #edf5f7 100%
    );

  color: var(--gray-dark);
}

.hero-container {
  position: relative;

  z-index: 5;

  width:
    min(
      calc(100% - 100px),
      1440px
    );

  margin: 0 auto;

  padding:
    70px
    0
    60px;

  display: grid;

  grid-template-columns:
    minmax(0, 0.88fr)
    minmax(500px, 1.12fr);

  align-items: center;

  gap: clamp(60px, 7vw, 120px);
}

.hero-content {
  position: relative;

  max-width: 650px;

  padding:
    25px
    0
    25px
    5px;
}

.hero-kicker {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-bottom: 25px;

  color: var(--blue);

  font-family: var(--body);

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 0.25em;

  text-transform: uppercase;

  animation:
    fadeUp 0.7s
    ease-out
    both;
}

.kicker-line {
  width: 38px;
  height: 2px;

  background: var(--blue);
}

.hero-title {
  margin: 0;

  max-width: 680px;

  color: var(--gray-dark);

  font-family: var(--display);

  font-size:
    clamp(
      60px,
      6.5vw,
      102px
    );

  font-weight: 500;

  line-height: 0.91;

  letter-spacing:
    -0.055em;

  animation:
    titleReveal 0.95s
    0.1s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    )
    both;
}

.hero-title span {
  display: block;

  color: var(--gray-dark);
}

.hero-title em {
  display: block;

  margin-left:
    clamp(
      30px,
      4vw,
      70px
    );

  color: var(--blue);

  font-style: normal;

  font-weight: 500;
}

.hero-description {
  max-width: 520px;

  margin:
    30px
    0
    32px;

  color: var(--gray-soft);

  font-family: var(--body);

  font-size: 14px;

  font-weight: 400;

  line-height: 1.85;

  letter-spacing: 0.005em;

  animation:
    fadeUp 0.8s
    0.3s
    ease-out
    both;
}

.hero-actions {
  display: flex;

  align-items: center;

  gap: 25px;

  animation:
    fadeUp 0.8s
    0.45s
    ease-out
    both;
}

.primary-button {
  display: inline-flex;

  align-items: center;
  justify-content: space-between;

  gap: 30px;

  min-width: 270px;

  min-height: 54px;

  padding:
    0 18px;

  background: var(--blue);

  color: #ffffff;

  border:
    1px solid
    var(--blue);

  border-radius: 3px;

  text-decoration: none;

  font-family: var(--body);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.04em;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.primary-button:hover {
  background: var(--blue-dark);

  transform:
    translateY(-2px);

  box-shadow:
    0 14px 30px
    rgba(
      39,
      136,
      169,
      0.22
    );
}

.button-arrow {
  font-size: 18px;

  transition:
    transform 0.25s ease;
}

.primary-button:hover .button-arrow {
  transform:
    translate(
      3px,
      -3px
    );
}

.text-button {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  color: var(--gray);

  text-decoration: none;

  font-family: var(--body);

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  transition:
    color 0.25s ease;
}

.text-arrow {
  color: var(--blue);

  font-size: 16px;

  transition:
    transform 0.25s ease;
}

.text-button:hover {
  color: var(--blue);
}

.text-button:hover .text-arrow {
  transform:
    translateX(5px);
}

.hero-trust {
  display: flex;

  align-items: center;

  gap: 22px;

  margin-top: 55px;

  padding-top: 22px;

  border-top:
    1px solid
    var(--border);

  animation:
    fadeUp 0.8s
    0.6s
    ease-out
    both;
}

.trust-item {
  display: flex;

  align-items: center;

  gap: 9px;
}

.trust-item strong {
  color: var(--blue);

  font-family: var(--display);

  font-size: 29px;

  font-weight: 500;

  line-height: 0.8;
}

.trust-item span {
  color: var(--gray-soft);

  font-family: var(--body);

  font-size: 7px;

  font-weight: 700;

  line-height: 1.45;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.trust-divider {
  width: 1px;
  height: 30px;

  background:
    var(--border);
}

.hero-visual {
  position: relative;

  width: 100%;

  max-width: 780px;

  justify-self: end;

  animation:
    visualReveal 1s
    0.25s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    )
    both;
}

.visual-top {
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 13px;

  color:
    var(--gray-soft);

  font-family: var(--body);

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.2em;
}

.visual-top span:last-child {
  color: var(--blue);
}

.image-frame {
  position: relative;

  width: 100%;

  height:
    clamp(
      330px,
      38vw,
      500px
    );

  overflow: hidden;

  background:
    var(--gray-dark);

  border-radius: 2px;

  box-shadow:
    0 25px 60px
    rgba(
      48,
      53,
      56,
      0.17
    );
}

.hero-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  filter:
    saturate(0.82)
    contrast(1.04);

  transition:
    transform 0.8s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.image-frame:hover .hero-image {
  transform: scale(1.035);
}

.image-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(
        30,
        40,
        44,
        0.02
      ) 25%,
      rgba(
        30,
        40,
        44,
        0.72
      ) 100%
    );
}

.image-caption {
  position: absolute;

  left: 25px;
  right: 25px;
  bottom: 23px;

  display: flex;

  align-items: flex-end;
  justify-content: space-between;
}

.caption-label {
  display: block;

  margin-bottom: 6px;

  color:
    rgba(
      255,
      255,
      255,
      0.65
    );

  font-family: var(--body);

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 0.22em;
}

.caption-title {
  display: block;

  color: #ffffff;

  font-family: var(--display);

  font-size: 27px;

  font-weight: 500;

  letter-spacing: -0.025em;
}

.caption-arrow {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 43px;
  height: 43px;

  background:
    var(--blue);

  color: #ffffff;

  font-size: 18px;

  border-radius: 50%;

  transition:
    transform 0.25s ease,
    background 0.25s ease;
}

.image-frame:hover .caption-arrow {
  transform:
    translate(
      2px,
      -2px
    );

  background:
    var(--blue-light);
}

.visual-bottom {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 13px;

  color:
    var(--gray-soft);

  font-family: var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing: 0.18em;
}

.visual-bottom span:first-child,
.visual-bottom span:last-child {
  color: var(--blue);
}

.visual-line {
  width: 24px;
  height: 1px;

  background:
    var(--border);
}

.visual-accent {
  position: absolute;

  right: -18px;
  bottom: 43px;

  width: 36px;
  height: 90px;

  border:
    1px solid
    var(--blue);

  border-left: none;

  opacity: 0.65;
}

.hero-background-mark {
  position: absolute;

  right: -35px;
  bottom: -75px;

  color:
    rgba(
      39,
      136,
      169,
      0.035
    );

  font-family: var(--display);

  font-size: 260px;

  font-weight: 500;

  line-height: 1;

  letter-spacing: -0.08em;

  pointer-events: none;

  user-select: none;
}

@keyframes fadeUp {
  from {
    opacity: 0;

    transform:
      translateY(25px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

@keyframes titleReveal {
  from {
    opacity: 0;

    transform:
      translateY(45px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

@keyframes visualReveal {
  from {
    opacity: 0;

    transform:
      translateX(35px);
  }

  to {
    opacity: 1;

    transform:
      translateX(0);
  }
}

@media (min-width: 1400px) {
  .hero-container {
    padding:
      75px
      0
      65px;
  }

  .image-frame {
    height: 510px;
  }

  .hero-title {
    font-size: 105px;
  }
}

@media (max-width: 1150px) {
  .hero-container {
    width:
      calc(100% - 70px);

    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(420px, 1.1fr);

    gap: 50px;
  }

  .hero-title {
    font-size:
      clamp(
        56px,
        6.5vw,
        82px
      );
  }

  .hero-description {
    font-size: 13px;
  }

  .image-frame {
    height:
      clamp(
        300px,
        35vw,
        410px
      );
  }

  .hero-trust {
    gap: 15px;
  }
}

@media (max-width: 900px) {
  .hero {
    min-height:
      auto;
  }

  .hero-container {
    width:
      calc(100% - 40px);

    padding:
      55px
      0
      50px;

    grid-template-columns: 1fr;

    gap: 55px;
  }

  .hero-content {
    max-width: 700px;
  }

  .hero-title {
    max-width: 650px;

    font-size:
      clamp(
        62px,
        11vw,
        90px
      );
  }

  .hero-description {
    max-width: 570px;
  }

  .hero-visual {
    max-width: 100%;

    justify-self: stretch;
  }

  .image-frame {
    height:
      clamp(
        280px,
        50vw,
        430px
      );
  }

  .hero-background-mark {
    font-size: 180px;

    bottom: -35px;
  }
}

@media (max-width: 600px) {
  .hero-container {
    width:
      calc(100% - 30px);

    padding:
      45px
      0
      40px;

    gap: 45px;
  }

  .hero-kicker {
    margin-bottom: 20px;

    font-size: 8px;
  }

  .hero-title {
    font-size:
      clamp(
        52px,
        15vw,
        76px
      );

    line-height: 0.92;
  }

  .hero-title em {
    margin-left: 25px;
  }

  .hero-description {
    margin:
      24px
      0
      26px;

    font-size: 11px;

    line-height: 1.75;
  }

  .hero-actions {
    align-items: flex-start;

    flex-direction: column;

    gap: 17px;
  }

  .primary-button {
    min-width: 245px;

    min-height: 50px;

    font-size: 9px;
  }

  .hero-trust {
    margin-top: 38px;

    gap: 10px;

    justify-content: space-between;
  }

  .trust-item {
    gap: 6px;
  }

  .trust-item strong {
    font-size: 23px;
  }

  .trust-item span {
    font-size: 6px;
  }

  .trust-divider {
    height: 24px;
  }

  .visual-top {
    font-size: 7px;
  }

  .image-frame {
    height:
      clamp(
        220px,
        52vw,
        310px
      );
  }

  .image-caption {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  .caption-title {
    font-size: 22px;
  }

  .caption-arrow {
    width: 37px;
    height: 37px;

    font-size: 15px;
  }

  .visual-bottom {
    gap: 7px;

    font-size: 6px;

    letter-spacing: 0.1em;
  }

  .visual-line {
    width: 12px;
  }

  .visual-accent {
    right: -8px;

    bottom: 30px;

    width: 22px;
    height: 60px;
  }

  .hero-background-mark {
    display: none;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 49px;
  }

  .hero-title em {
    margin-left: 18px;
  }

  .hero-trust {
    gap: 6px;
  }

  .trust-item strong {
    font-size: 20px;
  }

  .trust-item span {
    font-size: 5px;
  }

  .image-frame {
    height: 210px;
  }

  .caption-title {
    font-size: 19px;
  }
}
</style>