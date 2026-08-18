<template>
  <section id="home" class="hero">
    <!-- Background Image -->
    <div class="hero-image">
      <img
        src="/public/images/hero.jpg"
        alt="Modern architecture representing Awgro Realty"
      />
    </div>

    <!-- Dark Overlay -->
    <div class="hero-overlay"></div>


    <!-- Hero Content -->
    <div class="hero-container">

      <!-- Top Label -->
      <div class="hero-label">
        <span class="label-line"></span>
        <span>AWGRO REALTY PVT. LTD</span>
        <span class="label-line"></span>
      </div>

      <!-- Main Content -->
      <div class="hero-main">

        <div class="hero-heading">
          <p class="eyebrow">A NEW GENERATION OF</p>

          <h1>
            REAL ESTATE
            <span>ENTREPRENEURS.</span>
          </h1>
        </div>

        <div class="hero-side">
          <p class="hero-description">
            We help ambitious individuals build their own real estate
            business through knowledge, systems, technology and a powerful
            professional network.
          </p>

          <div class="hero-actions">
            <a href="#contact" class="primary-button">
              <span>Become an Associate Partner</span>
              <span class="button-arrow">↗</span>
            </a>

            <a href="#vision" class="secondary-button">
              Explore Our Vision
              <span>↓</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Information -->
      <div class="hero-bottom">

        <div class="hero-stat">
          <span class="stat-number">100<span>+</span></span>

          <div class="stat-text">
            <span>ASSOCIATE</span>
            <span>PARTNERS</span>
          </div>
        </div>

        <div class="hero-location">
          <span class="location-label">BUILDING ACROSS</span>

          <div class="locations">
            <span>AHMEDABAD</span>
            <span class="location-divider">/</span>
            <span>GANDHINAGAR</span>
          </div>
        </div>

        <div class="hero-scroll">
          <span>SCROLL TO EXPLORE</span>

          <span class="scroll-line"></span>

          <span class="scroll-arrow">↓</span>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   HERO
========================================= */

.hero {
  position: relative;

  min-height: 100svh;
  width: 100%;

  overflow: hidden;

  background: #090909;
  color: #f4f1e9;

  display: flex;
  align-items: center;
}

/* =========================================
   BACKGROUND IMAGE
========================================= */

.hero-image {
  position: absolute;
  inset: 0;

  z-index: 0;
}

.hero-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  object-position: center;

  filter: grayscale(15%) contrast(1.08);

  transform: scale(1.03);

  animation: heroImageReveal 1.8s ease-out forwards;
}

/* =========================================
   OVERLAY
========================================= */

.hero-overlay {
  position: absolute;
  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      90deg,
      rgba(9, 9, 9, 0.88) 0%,
      rgba(9, 9, 9, 0.62) 42%,
      rgba(9, 9, 9, 0.34) 75%,
      rgba(9, 9, 9, 0.55) 100%
    ),
    linear-gradient(
      180deg,
      rgba(9, 9, 9, 0.48) 0%,
      rgba(9, 9, 9, 0.05) 45%,
      rgba(9, 9, 9, 0.72) 100%
    );
}

/* =========================================
   CONTAINER
========================================= */

.hero-container {
  position: relative;

  z-index: 5;

  width: min(1440px, calc(100% - 100px));

  min-height: 100svh;

  margin: 0 auto;

  padding: 130px 0 45px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* =========================================
   TOP LABEL
========================================= */

.hero-label {
  display: flex;
  align-items: center;
  gap: 14px;

  width: fit-content;

  font-family: Inter, Arial, sans-serif;

  font-size: 16px;
  font-weight: 600;

  letter-spacing: 2.8px;

  color: #f1f1f1;

  opacity: 0;

  animation: fadeUp 0.8s 0.2s ease-out forwards;
}

.label-line {
  width: 38px;
  height: 1px;

  background: #f1f1f1;
}

/* =========================================
   MAIN CONTENT
========================================= */

.hero-main {
  display: grid;

  /* grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.45fr); */

  align-items: end;

  gap: 18px;

  /* margin-top: auto; */
  margin-bottom: 80px;
}

/* =========================================
   HEADING
========================================= */

.hero-heading {
  max-width: 1000px;
}

.eyebrow {
  margin: 0 0 18px;

  font-family: Inter, Arial, sans-serif;

  font-size: 18px;
  font-weight: 400;

  letter-spacing: 4px;

  color: #f1f1f1;

  opacity: 0;

  animation: fadeUp 0.9s 0.35s ease-out forwards;
}

.hero-heading h1 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(70px, 8.5vw, 100px);

  font-weight: 100;

  line-height: 0.84;

  /* letter-spacing: 2px; */

  text-transform: uppercase;

  color: #f1f1f1;

  opacity: 0;

  animation: headingReveal 1.1s 0.45s ease-out forwards;
}

.hero-heading h1 span {
  display: block;

  /* margin-left: clamp(25px, 5vw, 90px); */

  font-family: Inter, Arial, sans-serif;

  font-size: 0.58em;

  font-weight: 300;

  line-height: 0.95;

  letter-spacing: -3px;

  color: #b68500;
}

/* =========================================
   SIDE CONTENT
========================================= */

.hero-side {
  max-width: 680px;

  padding-bottom: 4px;

  opacity: 0;

  animation: fadeUp 1s 0.75s ease-out forwards;
}

.hero-description {
  margin: 0 0 32px;

  font-family: Inter, Arial, sans-serif;

  font-size: 16px;

  line-height: 1.75;

  font-weight: 400;

  color: #f1f1f1;
}

/* =========================================
   BUTTONS
========================================= */

.hero-actions {
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 18px;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  gap: 32px;

  min-width: 245px;

  padding: 15px 18px;

  background: #ffffff;
  color: #b68500;

  text-decoration: none;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;
  font-weight: 700;

  letter-spacing: 0.8px;
  text-transform: uppercase;

  transition:
    background 0.35s ease,
    color 0.35s ease,
    transform 0.35s ease;
}

.primary-button:hover {
  background: #b68500;
  color: #090909;

  transform: translateX(5px);
}

.button-arrow {
  font-size: 18px;

  transition: transform 0.35s ease;
}

.primary-button:hover .button-arrow {
  transform: translate(3px, -3px);
}

.secondary-button {
  display: inline-flex;
  align-items: center;

  gap: 12px;

  color: #b68500;

  text-decoration: none;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;
  font-weight: 600;

  letter-spacing: 2px;
  text-transform: uppercase;

  transition: color 0.3s ease;
}

.secondary-button span {
  color: #b68500;

  font-size: 15px;

  transition: transform 0.3s ease;
}

.secondary-button:hover {
  color: #f4f1e9;
}

.secondary-button:hover span {
  transform: translateY(4px);
}

/* =========================================
   BOTTOM INFORMATION
========================================= */

.hero-bottom {
  display: grid;

  width: 1000px ;

  grid-template-columns: 1fr 1fr 1fr;

  align-items: end;

  padding-top: 24px;

  opacity: 0;

  animation: fadeUp 1s 1s ease-out forwards;
}

/* =========================================
   STAT
========================================= */

.hero-stat {
  display: flex;
  align-items: flex-end;

  gap: 15px;
}

.stat-number {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 58px;

  line-height: 0.8;

  color: #b68500;
}

.stat-number span {
  color: #b68500;
}

.stat-text {
  display: flex;
  flex-direction: column;

  padding-bottom: 4px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 2px;

  color: #b68500;
}

/* =========================================
   LOCATION
========================================= */

.hero-location {
  justify-self: center;

  display: flex;
  flex-direction: column;

  gap: 8px;
}

.location-label {
  font-family: Inter, Arial, sans-serif;

  font-size: 14px;
  font-weight: 600;

  letter-spacing: 2px;

  color: #b68500;
}

.locations {
  display: flex;
  align-items: center;

  gap: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;
  font-weight: 600;

  letter-spacing: 1.8px;

  color: #b68500;
}

.location-divider {
  color: #b68500;
}

/* =========================================
   SCROLL
========================================= */

.hero-scroll {
  justify-self: end;

  display: flex;
  align-items: center;

  gap: 12px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 2px;

  color: #b68500;
}

.scroll-line {
  width: 40px;
  height: 1px;

  background: #b68500;
}

.scroll-arrow {
  color: #b68500;

  font-size: 16px;

  animation: scrollBounce 1.8s infinite;
}

/* =========================================
   ARCHITECTURAL LINES
========================================= */

.architecture-lines {
  position: absolute;
  inset: 0;

  z-index: 3;

  pointer-events: none;

  overflow: hidden;
}

.line {
  position: absolute;

  display: block;

  width: 1px;

  height: 140%;

  top: -20%;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(181, 154, 103, 0.28),
    transparent
  );

  transform: rotate(18deg);

  transform-origin: center;
}

.line-one {
  left: 62%;
}

.line-two {
  left: 70%;

  opacity: 0.45;
}

.line-three {
  left: 78%;

  opacity: 0.25;
}

/* =========================================
   VERTICAL TEXT
========================================= */

.vertical-text {
  position: absolute;

  z-index: 6;

  right: 24px;
  top: 50%;

  transform:
    translateY(-50%)
    rotate(90deg);

  transform-origin: center;

  white-space: nowrap;

  font-family: Inter, Arial, sans-serif;

  font-size: 7px;
  font-weight: 600;

  letter-spacing: 3px;

  color: rgba(244, 241, 233, 0.32);
}

/* =========================================
   ANIMATIONS
========================================= */

@keyframes heroImageReveal {
  from {
    opacity: 0;
    transform: scale(1.08);
  }

  to {
    opacity: 1;
    transform: scale(1.03);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes headingReveal {
  from {
    opacity: 0;
    transform: translateY(45px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1100px) {
  .hero-container {
    width: min(100% - 60px, 1440px);
  }

  .hero-main {
    grid-template-columns: 1fr 0.55fr;

    gap: 45px;
  }

  .hero-heading h1 {
    font-size: clamp(60px, 9vw, 105px);

    letter-spacing: -4px;
  }

  .hero-side {
    max-width: 310px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {
  .hero {
    min-height: 100svh;
  }

  .hero-container {
    width: calc(100% - 40px);

    padding: 105px 0 30px;
  }

  .hero-overlay {
    background:
      linear-gradient(
        90deg,
        rgba(9, 9, 9, 0.9) 0%,
        rgba(9, 9, 9, 0.65) 100%
      ),
      linear-gradient(
        180deg,
        rgba(9, 9, 9, 0.5) 0%,
        rgba(9, 9, 9, 0.15) 40%,
        rgba(9, 9, 9, 0.85) 100%
      );
  }

  .hero-main {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 32px;

    margin-bottom: 45px;
  }

  .hero-heading h1 {
    font-size: clamp(52px, 15vw, 82px);

    line-height: 0.88;

    letter-spacing: -3px;
  }

  .hero-heading h1 span {
    margin-left: 20px;

    font-size: 0.55em;

    letter-spacing: -1.5px;
  }

  .eyebrow {
    font-size: 9px;

    letter-spacing: 3px;
  }

  .hero-side {
    max-width: 340px;
  }

  .hero-description {
    font-size: 13px;

    line-height: 1.65;

    margin-bottom: 25px;
  }

  .hero-actions {
    gap: 16px;
  }

  .hero-bottom {
    grid-template-columns: 1fr 1fr;

    gap: 20px;
  }

  .hero-stat {
    justify-self: start;
  }

  .stat-number {
    font-size: 45px;
  }

  .hero-location {
    justify-self: end;
  }

  .hero-scroll {
    display: none;
  }

  .vertical-text {
    display: none;
  }

  .architecture-lines .line-one {
    left: 80%;
  }

  .architecture-lines .line-two {
    left: 100%;
  }

  .architecture-lines .line-three {
    display: none;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .hero-container {
    width: calc(100% - 30px);

    padding-top: 95px;
  }

  .hero-heading h1 {
    font-size: 48px;

    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 12px;
  }

  .primary-button {
    min-width: 225px;

    font-size: 9px;
  }

  .hero-bottom {
    padding-top: 18px;
  }

  .stat-number {
    font-size: 38px;
  }

  .stat-text {
    font-size: 7px;
  }

  .locations {
    flex-direction: column;
    align-items: flex-end;

    gap: 3px;

    font-size: 8px;
  }

  .location-divider {
    display: none;
  }
}
</style>