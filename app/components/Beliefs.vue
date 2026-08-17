<template>
  <section id="beliefs" class="beliefs-section">

    <!-- Background -->
    <div class="beliefs-grid"></div>

    <div class="beliefs-container">

      <!-- Section Label -->
      <div class="section-label">
        <span class="label-number">05</span>
        <span class="label-line"></span>
        <span>WHAT WE BELIEVE</span>
      </div>

      <!-- Intro -->
      <div class="beliefs-intro">

        <p class="eyebrow">
          OUR PHILOSOPHY
        </p>

        <h2>
          THINK
          <span>BEYOND</span>
          <em>THE JOB.</em>
        </h2>

      </div>

      <!-- Three Beliefs -->
      <div class="beliefs-list">

        <!-- 01 -->
        <article class="belief-item">

          <div class="belief-number">
            01
          </div>

          <div class="belief-content">

            <span class="belief-label">
              ROLE
            </span>

            <h3>
              A JOB GIVES
              <span>YOU A ROLE.</span>
            </h3>

          </div>

          <div class="belief-mark">
            —
          </div>

        </article>

        <!-- 02 -->
        <article class="belief-item">

          <div class="belief-number">
            02
          </div>

          <div class="belief-content">

            <span class="belief-label">
              OWNERSHIP
            </span>

            <h3>
              A BUSINESS GIVES
              <span>YOU OWNERSHIP.</span>
            </h3>

          </div>

          <div class="belief-mark">
            +
          </div>

        </article>

        <!-- 03 -->
        <article class="belief-item belief-item-final">

          <div class="belief-number">
            03
          </div>

          <div class="belief-content">

            <span class="belief-label">
              SCALE
            </span>

            <h3>
              A NETWORK GIVES
              <span>YOU SCALE.</span>
            </h3>

          </div>

          <div class="belief-mark">
            ×
          </div>

        </article>

      </div>

      <!-- Combine All Three -->
      <div class="belief-combination">

        <div class="combination-number">
          01
        </div>

        <div class="combination-content">

          <p class="combination-label">
            AT AWGRO REALTY
          </p>

          <h3>
            WE WANT TO
            <span>COMBINE ALL THREE.</span>
          </h3>

          <div class="combination-symbols">

            <div class="symbol-item">
              <span>ROLE</span>
            </div>

            <div class="symbol-plus">+</div>

            <div class="symbol-item">
              <span>OWNERSHIP</span>
            </div>

            <div class="symbol-plus">+</div>

            <div class="symbol-item">
              <span>SCALE</span>
            </div>

            <div class="symbol-equals">=</div>

            <div class="symbol-result">
              <span>REAL ESTATE BUSINESS</span>
            </div>

          </div>

        </div>

      </div>

      <!-- Supporting Content -->
      <div class="belief-support">

        <div class="support-label">
          <span>THE AWGRO ECOSYSTEM</span>
        </div>

        <div class="support-content">

          <p>
            Our Associate Partners get the opportunity to build their own
            <strong>professional identity and real estate business</strong>
            while benefiting from the collective ecosystem of Awgro Realty.
          </p>

        </div>

      </div>

      <!-- Core Belief -->
      <div class="core-belief">

        <div class="core-line"></div>

        <p class="core-label">
          CORE BELIEF
        </p>

        <blockquote>
          "Compete with yourself,
          <span>collaborate with your team,</span>
          and grow together."
        </blockquote>

        <div class="core-line"></div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   BELIEFS SECTION
========================================= */

.beliefs-section {
  position: relative;

  width: 100%;

  background: #f4f1e9;

  color: #090909;

  overflow: hidden;
}

/* =========================================
   BACKGROUND GRID
========================================= */

.beliefs-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.7;

  background-image:
    linear-gradient(
      90deg,
      transparent calc(20% - 1px),
      rgba(9, 9, 9, 0.035) 20%,
      transparent calc(20% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(40% - 1px),
      rgba(9, 9, 9, 0.035) 40%,
      transparent calc(40% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(60% - 1px),
      rgba(9, 9, 9, 0.035) 60%,
      transparent calc(60% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(80% - 1px),
      rgba(9, 9, 9, 0.035) 80%,
      transparent calc(80% + 1px)
    );
}

/* =========================================
   CONTAINER
========================================= */

.beliefs-container {
  position: relative;

  z-index: 2;

  width: min(1440px, calc(100% - 100px));

  margin: 0 auto;

  padding: 150px 0 170px;
}

/* =========================================
   SECTION LABEL
========================================= */

.section-label {
  display: flex;
  align-items: center;

  gap: 14px;

  margin-bottom: 105px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2.8px;

  color: #77736b;
}

.label-number {
  color: #b59a67;
}

.label-line {
  width: 42px;
  height: 1px;

  background: #b59a67;
}

/* =========================================
   INTRO
========================================= */

.beliefs-intro {
  margin-bottom: 120px;
}

.eyebrow {
  margin: 0 0 28px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3.5px;

  color: #b59a67;
}

.beliefs-intro h2 {
  max-width: 1000px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(75px, 10vw, 160px);

  font-weight: 300;

  line-height: 0.76;

  letter-spacing: -8px;

  text-transform: uppercase;
}

.beliefs-intro h2 span {
  display: block;

  margin-left: clamp(35px, 7vw, 120px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  letter-spacing: -5px;

  color: #4b4841;
}

.beliefs-intro h2 em {
  display: block;

  margin-left: clamp(70px, 14vw, 230px);

  font-family: Inter, Arial, sans-serif;

  font-size: 0.78em;

  font-style: normal;

  font-weight: 300;

  letter-spacing: -5px;

  color: #b59a67;
}

/* =========================================
   THREE BELIEFS
========================================= */

.beliefs-list {
  border-top: 1px solid rgba(9, 9, 9, 0.18);

  margin-bottom: 150px;
}

.belief-item {
  display: grid;

  grid-template-columns: 90px 1fr 80px;

  gap: 40px;

  align-items: center;

  min-height: 190px;

  padding: 35px 0;

  border-bottom: 1px solid rgba(9, 9, 9, 0.13);

  transition:
    padding-left 0.4s ease,
    background 0.4s ease;
}

.belief-item:hover {
  padding-left: 25px;

  background: rgba(216, 211, 200, 0.22);
}

.belief-number {
  align-self: start;

  padding-top: 9px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.belief-content {
  display: flex;
  flex-direction: column;

  gap: 15px;
}

.belief-label {
  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #858179;
}

.belief-content h3 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(35px, 4.5vw, 70px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -3px;

  text-transform: uppercase;

  color: #171717;
}

.belief-content h3 span {
  display: inline;

  margin-left: 12px;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #4b4841;

  text-transform: none;

  letter-spacing: -1.5px;
}

.belief-mark {
  justify-self: end;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: 60px;

  font-weight: 400;

  color: #b59a67;
}

/* =========================================
   COMBINATION
========================================= */

.belief-combination {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  margin-bottom: 150px;

  padding: 75px 0;

  border-top: 1px solid rgba(9, 9, 9, 0.18);

  border-bottom: 1px solid rgba(9, 9, 9, 0.18);
}

.combination-number {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 150px;

  line-height: 0.65;

  letter-spacing: -8px;

  color: #171717;
}

.combination-label {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.combination-content h3 {
  margin: 0 0 60px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(38px, 5vw, 75px);

  font-weight: 300;

  line-height: 0.88;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.combination-content h3 span {
  display: block;

  margin-left: clamp(25px, 5vw, 80px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -2px;
}

/* =========================================
   SYMBOL ROW
========================================= */

.combination-symbols {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 18px;
}

.symbol-item {
  padding: 14px 19px;

  border: 1px solid rgba(9, 9, 9, 0.18);

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 1.8px;

  color: #4d4a44;
}

.symbol-plus,
.symbol-equals {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 25px;

  color: #b59a67;
}

.symbol-result {
  padding: 15px 20px;

  background: #171717;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 1.8px;

  color: #f4f1e9;
}

/* =========================================
   SUPPORT
========================================= */

.belief-support {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  max-width: 1150px;

  margin-left: auto;

  margin-bottom: 170px;
}

.support-label {
  padding-top: 8px;

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: #858179;
}

.support-content p {
  max-width: 850px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(27px, 3.2vw, 48px);

  line-height: 1.2;

  letter-spacing: -1.2px;

  color: #25231f;
}

.support-content strong {
  color: #b59a67;

  font-weight: 400;
}

/* =========================================
   CORE BELIEF
========================================= */

.core-belief {
  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;
}

.core-line {
  width: 1px;
  height: 65px;

  background: #b59a67;
}

.core-label {
  margin: 28px 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3.5px;

  color: #858179;
}

.core-belief blockquote {
  max-width: 1000px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(38px, 5.2vw, 78px);

  font-weight: 400;

  line-height: 1;

  letter-spacing: -2.5px;

  color: #171717;
}

.core-belief blockquote span {
  color: #b59a67;

  font-style: italic;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .beliefs-container {
    width: calc(100% - 70px);
  }

  .belief-item {
    grid-template-columns: 60px 1fr 55px;

    gap: 25px;
  }

  .belief-combination {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }

  .combination-number {
    font-size: 110px;
  }

  .belief-support {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .beliefs-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .beliefs-intro {
    margin-bottom: 80px;
  }

  .beliefs-intro h2 {
    font-size: clamp(57px, 15vw, 85px);

    line-height: 0.8;

    letter-spacing: -4px;
  }

  .beliefs-intro h2 span {
    margin-left: 20px;

    letter-spacing: -2.5px;
  }

  .beliefs-intro h2 em {
    margin-left: 35px;

    letter-spacing: -2.5px;
  }

  .beliefs-list {
    margin-bottom: 100px;
  }

  .belief-item {
    grid-template-columns: 32px 1fr 35px;

    gap: 12px;

    min-height: 150px;

    padding: 28px 0;
  }

  .belief-item:hover {
    padding-left: 8px;
  }

  .belief-content {
    gap: 12px;
  }

  .belief-content h3 {
    font-size: 28px;

    line-height: 0.95;

    letter-spacing: -1.3px;
  }

  .belief-content h3 span {
    display: block;

    margin-left: 0;

    margin-top: 4px;
  }

  .belief-mark {
    font-size: 40px;
  }

  .belief-combination {
    display: block;

    margin-bottom: 100px;

    padding: 55px 0;
  }

  .combination-number {
    margin-bottom: 50px;

    font-size: 100px;
  }

  .combination-content h3 {
    margin-bottom: 45px;

    font-size: 42px;

    letter-spacing: -1.5px;
  }

  .combination-symbols {
    gap: 9px;
  }

  .symbol-item {
    padding: 11px 12px;

    font-size: 7px;

    letter-spacing: 1.2px;
  }

  .symbol-plus,
  .symbol-equals {
    font-size: 19px;
  }

  .symbol-result {
    padding: 12px;

    font-size: 7px;

    letter-spacing: 1px;
  }

  .belief-support {
    display: block;

    margin-bottom: 110px;
  }

  .support-label {
    margin-bottom: 30px;
  }

  .support-content p {
    font-size: 27px;

    line-height: 1.25;
  }

  .core-line {
    height: 50px;
  }

  .core-belief blockquote {
    font-size: 39px;

    line-height: 1;

    letter-spacing: -1.2px;
  }

  .core-label {
    margin: 22px 0;
  }

  .beliefs-grid {
    opacity: 0.25;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .beliefs-container {
    width: calc(100% - 30px);
  }

  .beliefs-intro h2 {
    font-size: 53px;
  }

  .belief-content h3 {
    font-size: 24px;
  }

  .belief-mark {
    font-size: 34px;
  }

  .combination-content h3 {
    font-size: 37px;
  }

  .support-content p {
    font-size: 24px;
  }

  .core-belief blockquote {
    font-size: 34px;
  }
}
</style>