<template>
  <section id="vision" class="vision">
    <div class="vision-bg-text">VISION</div>

    <div class="vision-container">
      <div class="vision-header">
        <div class="vision-index">
          <span>01</span>
          <div></div>
          <span>VISION</span>
        </div>

        <p class="vision-kicker">
          WHERE WE ARE HEADED
        </p>
      </div>

      <div class="vision-layout">
        <div class="vision-content">
          <div class="vision-tag">
            <span></span>
            OUR VISION
          </div>

          <h2 class="vision-title">
            Building a
            <span>community</span>
            of real estate
            <em>entrepreneurs.</em>
          </h2>

          <p class="vision-lead">
            To create India's most trusted community of real estate
            entrepreneurs, starting with a network of 100+ successful
            Associate Partners across Ahmedabad and Gandhinagar.
          </p>

          <div class="vision-divider"></div>

          <p class="vision-description">
            We envision a future where real estate professionals are not
            dependent only on a job or a single company.
          </p>

          <p class="vision-description">
            Instead, they build their own client relationships, their own
            network, their own reputation, and their own real estate business
            while being supported by the collective strength, systems, and
            resources of AWGRO Realty.
          </p>

          <a
            href="#contact"
            class="vision-action"
            @click.prevent="scrollToSection('contact')"
          >
            <span>Become Part of the Vision</span>
            <span>↗</span>
          </a>
        </div>

        <div class="vision-visual">
          <div class="visual-label">
            <span>AWGRO REALTY</span>
            <span>01 / 02</span>
          </div>

          <div class="image-wrapper">
            <img
              src="/public/images/vision.jpg"
              alt="Awgro Realty Associate Partner reviewing a property"
              class="vision-image"
            />

            <div class="image-shade"></div>

            <div class="image-message">
              <span>THE FUTURE</span>
              <strong>Starts With You.</strong>
            </div>

            <div class="image-corner"></div>
          </div>

          <div class="visual-footer">
            <span>AHMEDABAD</span>
            <div></div>
            <span>GANDHINAGAR</span>
          </div>
        </div>
      </div>

      <div class="vision-bottom">
        <div class="bottom-number">100<span>+</span></div>

        <div class="bottom-copy">
          <span>THE FIRST MILESTONE</span>
          <p>
            A growing community of successful Associate Partners
            building their own future in real estate.
          </p>
        </div>

        <div class="bottom-mark">
          <span></span>
          BUILD YOUR OWN
        </div>
      </div>
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
.vision {
  --blue: #2788a9;
  --blue-dark: #1f718d;
  --blue-light: #55abc6;
  --dark: #303538;
  --gray: #50575b;
  --gray-light: #737b80;
  --surface: #f5f8f9;
  --white: #ffffff;
  --border: #dce5e8;

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

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f5f8f9 100%
    );

  color: var(--dark);
}

.vision-container {
  position: relative;

  z-index: 2;

  width: min(
    calc(100% - 100px),
    1440px
  );

  margin: 0 auto;

  padding:
    100px
    0
    85px;
}

.vision-bg-text {
  position: absolute;

  right: -35px;
  top: 80px;

  color:
    rgba(39, 136, 169, 0.035);

  font-family: var(--display);

  font-size: 240px;

  line-height: 0.8;

  letter-spacing: -0.08em;

  pointer-events: none;
}

.vision-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 60px;
}

.vision-index {
  display: flex;

  align-items: center;

  gap: 12px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 8px;
  font-weight: 800;

  letter-spacing: 0.2em;
}

.vision-index span:first-child {
  color: var(--blue);

  font-family: var(--display);

  font-size: 25px;

  font-weight: 500;

  letter-spacing: -0.02em;
}

.vision-index div {
  width: 35px;
  height: 1px;

  background: var(--blue);
}

.vision-kicker {
  margin: 0;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 8px;
  font-weight: 700;

  letter-spacing: 0.22em;

  text-transform: uppercase;
}

.vision-layout {
  display: grid;

  grid-template-columns:
    minmax(0, 0.88fr)
    minmax(500px, 1.12fr);

  gap:
    clamp(
      60px,
      8vw,
      130px
    );

  align-items: center;
}

.vision-content {
  max-width: 620px;
}

.vision-tag {
  display: flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 22px;

  color: var(--blue);

  font-family: var(--body);

  font-size: 9px;
  font-weight: 800;

  letter-spacing: 0.22em;

  text-transform: uppercase;
}

.vision-tag span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--blue);
}

.vision-title {
  margin: 0;

  font-family: var(--display);

  font-size:
    clamp(
      52px,
      5.5vw,
      82px
    );

  font-weight: 500;

  line-height: 0.94;

  letter-spacing: -0.055em;

  color: var(--dark);
}

.vision-title span {
  color: var(--blue);
}

.vision-title em {
  display: block;

  margin-left:
    clamp(
      25px,
      3vw,
      60px
    );

  color: var(--gray);

  font-style: italic;

  font-weight: 500;
}

.vision-lead {
  max-width: 560px;

  margin:
    30px
    0
    25px;

  color: var(--gray);

  font-family: var(--body);

  font-size: 14px;

  font-weight: 500;

  line-height: 1.8;
}

.vision-divider {
  width: 55px;
  height: 2px;

  margin:
    0
    0
    22px;

  background: var(--blue);
}

.vision-description {
  max-width: 520px;

  margin:
    0
    0
    14px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 12px;

  line-height: 1.8;
}

.vision-action {
  display: inline-flex;

  align-items: center;
  justify-content: space-between;

  gap: 30px;

  min-width: 235px;
  min-height: 48px;

  margin-top: 15px;

  padding:
    0
    16px;

  background: var(--blue);

  color: var(--white);

  border-radius: 3px;

  text-decoration: none;

  font-family: var(--body);

  font-size: 9px;
  font-weight: 800;

  letter-spacing: 0.045em;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.vision-action:hover {
  background: var(--blue-dark);

  transform:
    translateY(-2px);

  box-shadow:
    0 12px 25px
    rgba(39, 136, 169, 0.2);
}

.vision-action span:last-child {
  font-size: 17px;

  transition:
    transform 0.25s ease;
}

.vision-action:hover span:last-child {
  transform:
    translate(
      3px,
      -3px
    );
}

.vision-visual {
  width: 100%;
}

.visual-label,
.visual-footer {
  display: flex;

  align-items: center;
  justify-content: space-between;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 7px;
  font-weight: 800;

  letter-spacing: 0.18em;
}

.visual-label {
  margin-bottom: 12px;
}

.visual-label span:last-child {
  color: var(--blue);
}

.image-wrapper {
  position: relative;

  width: 100%;

  height:
    clamp(
      320px,
      35vw,
      470px
    );

  overflow: hidden;

  border-radius: 2px;

  background: var(--dark);

  box-shadow:
    0 25px 55px
    rgba(
      48,
      53,
      56,
      0.14
    );
}

.vision-image {
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

.image-wrapper:hover .vision-image {
  transform: scale(1.035);
}

.image-shade {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      transparent 35%,
      rgba(
        20,
        27,
        30,
        0.7
      ) 100%
    );
}

.image-message {
  position: absolute;

  left: 24px;
  bottom: 22px;

  display: flex;
  flex-direction: column;

  gap: 3px;
}

.image-message span {
  color:
    rgba(
      255,
      255,
      255,
      0.62
    );

  font-family: var(--body);

  font-size: 7px;
  font-weight: 800;

  letter-spacing: 0.2em;
}

.image-message strong {
  color: var(--white);

  font-family: var(--display);

  font-size: 29px;

  font-weight: 500;
}

.image-corner {
  position: absolute;

  right: 0;
  bottom: 0;

  width: 45px;
  height: 45px;

  border-top:
    2px solid
    var(--blue);

  border-left:
    2px solid
    var(--blue);
}

.visual-footer {
  justify-content: flex-start;

  gap: 12px;

  margin-top: 12px;
}

.visual-footer span:first-child,
.visual-footer span:last-child {
  color: var(--blue);
}

.visual-footer div {
  width: 25px;
  height: 1px;

  background: var(--border);
}

.vision-bottom {
  display: grid;

  grid-template-columns:
    auto
    minmax(250px, 420px)
    1fr;

  align-items: center;

  gap: 35px;

  margin-top: 75px;

  padding-top: 25px;

  border-top:
    1px solid
    var(--border);
}

.bottom-number {
  color: var(--blue);

  font-family: var(--display);

  font-size: 55px;

  font-weight: 500;

  line-height: 0.8;

  letter-spacing: -0.04em;
}

.bottom-number span {
  font-family: var(--body);

  font-size: 0.42em;
}

.bottom-copy span {
  display: block;

  margin-bottom: 6px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 7px;
  font-weight: 800;

  letter-spacing: 0.18em;
}

.bottom-copy p {
  margin: 0;

  color: var(--gray);

  font-family: var(--body);

  font-size: 10px;

  line-height: 1.6;
}

.bottom-mark {
  justify-self: end;

  display: flex;

  align-items: center;

  gap: 9px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 7px;
  font-weight: 800;

  letter-spacing: 0.18em;
}

.bottom-mark span {
  width: 25px;
  height: 2px;

  background: var(--blue);
}

@media (max-width: 1050px) {
  .vision-container {
    width: calc(100% - 70px);
  }

  .vision-layout {
    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(400px, 1.1fr);

    gap: 50px;
  }

  .vision-title {
    font-size:
      clamp(
        48px,
        5.5vw,
        68px
      );
  }

  .image-wrapper {
    height: 350px;
  }
}

@media (max-width: 800px) {
  .vision-container {
    width: calc(100% - 40px);

    padding:
      75px
      0
      65px;
  }

  .vision-layout {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .vision-content {
    max-width: 700px;
  }

  .vision-title {
    font-size:
      clamp(
        52px,
        10vw,
        76px
      );
  }

  .image-wrapper {
    height:
      clamp(
        280px,
        48vw,
        380px
      );
  }

  .vision-bottom {
    grid-template-columns:
      auto
      1fr;
  }

  .bottom-mark {
    display: none;
  }
}

@media (max-width: 520px) {
  .vision-container {
    width: calc(100% - 30px);

    padding:
      60px
      0
      55px;
  }

  .vision-header {
    margin-bottom: 40px;
  }

  .vision-kicker {
    display: none;
  }

  .vision-title {
    font-size: 49px;
  }

  .vision-title em {
    margin-left: 18px;
  }

  .vision-lead {
    font-size: 11px;

    line-height: 1.75;
  }

  .vision-description {
    font-size: 10px;
  }

  .image-wrapper {
    height: 240px;
  }

  .image-message strong {
    font-size: 23px;
  }

  .vision-bottom {
    gap: 18px;

    margin-top: 55px;
  }

  .bottom-number {
    font-size: 43px;
  }

  .bottom-copy p {
    font-size: 8px;
  }
}
</style>