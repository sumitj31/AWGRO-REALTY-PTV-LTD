<script setup lang="ts">
import { ref } from 'vue'

const activeJourney = ref(0)

const selectJourney = (index: number) => {
  activeJourney.value = index
}
</script>

<template>
  <section id="partners" class="partners-section">

    <!-- Background -->
    <div class="partners-grid"></div>
    <div class="partners-glow"></div>

    <div class="partners-container">

      <!-- Section Label -->
      <div class="section-label">
        <!-- <span class="label-number">04</span> -->
        <span class="label-line"></span>
        <span>BEYOND PARTNERSHIP</span>
      </div>

      <!-- Main Heading -->
      <div class="partners-intro">

        <div class="intro-meta">
          <span>OUR 100</span>
          <span>ASSOCIATE PARTNER</span>
          <span>MISSION</span>
        </div>

        <div class="intro-content">

          <p class="eyebrow">
            100 ASSOCIATE PARTNERS. 100 REAL ESTATE BUSINESSES.
          </p>

          <h2>
            <span>100</span>
            ASSOCIATE
            <em>PARTNERS.</em>
          </h2>

        </div>

      </div>

      <!-- Big Statement -->
      <div class="partner-statement">

        <div class="statement-number">
          100
        </div>

        <div class="statement-copy">

          <p class="statement-label">
            ONE POWERFUL NETWORK
          </p>

          <h3>
            100 REAL ESTATE
            <span>BUSINESSES.</span>
          </h3>

          <p class="statement-description">
            Our goal is not simply to recruit 100 people.
          </p>

          <p class="statement-highlight">
            Our goal is to help
            <strong>100 individuals start their own real estate business.</strong>
          </p>

        </div>

      </div>

      <!-- Growth Journey -->
      <div class="growth-section">

        <div class="growth-header">

          <div>
            <span class="growth-label">THE GROWTH JOURNEY</span>
            <h3>
              FROM KNOWLEDGE
              <span>TO ENTERPRISE.</span>
            </h3>
          </div>

          <div class="growth-index">
            <span>01 — 07</span>
          </div>

        </div>

        <!-- Journey Line -->
        <div class="journey-wrapper">

          <div class="journey-line">
            <div class="journey-progress"></div>
          </div>

          <div class="journey-items">

            <!-- 01 -->
            <div
  class="journey-item"
  :class="{ active: activeJourney === 0 }"
  @click="selectJourney(0)"
>
              <div
  class="journey-item"
  :class="{ active: activeJourney === 0 }"
  @click="selectJourney(0)"
>
  <div class="journey-number">01</div>

  <div class="journey-dot"></div>

  <div class="journey-content">
    <span>FOUNDATION</span>
    <h4>
      REAL ESTATE
      <em>KNOWLEDGE</em>
    </h4>
  </div>
</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>FOUNDATION</span>
                <h4>
                  REAL ESTATE
                  <em>KNOWLEDGE</em>
                </h4>
              </div>
            </div>

            <!-- 02 -->
            <div class="journey-item">
              <div class="journey-number">02</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>CAPABILITY</span>
                <h4>
                  SALES &
                  <em>NEGOTIATION SKILLS</em>
                </h4>
              </div>
            </div>

            <!-- 03 -->
            <div class="journey-item">
              <div class="journey-number">03</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>RELATIONSHIPS</span>
                <h4>
                  CLIENT
                  <em>NETWORK</em>
                </h4>
              </div>
            </div>

            <!-- 04 -->
            <div class="journey-item">
              <div class="journey-number">04</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>IDENTITY</span>
                <h4>
                  PERSONAL
                  <em>BRAND</em>
                </h4>
              </div>
            </div>

            <!-- 05 -->
            <div class="journey-item">
              <div class="journey-number">05</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>CONSISTENCY</span>
                <h4>
                  CONSISTENT
                  <em>BUSINESS</em>
                </h4>
              </div>
            </div>

            <!-- 06 -->
            <div class="journey-item">
              <div class="journey-number">06</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>LEADERSHIP</span>
                <h4>
                  TEAM &
                  <em>LEADERSHIP</em>
                </h4>
              </div>
            </div>

            <!-- 07 -->
            <div class="journey-item journey-final">
              <div class="journey-number">07</div>

              <div class="journey-dot"></div>

              <div class="journey-content">
                <span>LONG-TERM VISION</span>
                <h4>
                  LONG-TERM REAL ESTATE
                  <em>ENTERPRISE</em>
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- Entrepreneur Positioning -->
      <div class="entrepreneur-section">

        <div class="entrepreneur-label">
          <span>THE DIFFERENCE</span>
        </div>

        <div class="entrepreneur-content">

          <div class="entrepreneur-row">

            <span class="entrepreneur-small">
              ASSOCIATE PARTNER
            </span>

            <span class="symbol">≠</span>

            <span class="employee">
              EMPLOYEE
            </span>

          </div>

          <div class="entrepreneur-divider"></div>

          <div class="entrepreneur-row entrepreneur-main">

            <span class="entrepreneur-small">
              ASSOCIATE PARTNER
            </span>

            <span class="symbol">=</span>

            <span class="entrepreneur-word">
              ENTREPRENEUR
            </span>

          </div>

        </div>

      </div>

      <!-- Closing Statement -->
      <div class="partners-closing">

        <div class="closing-line"></div>

        <p>
          OUR BELIEF
        </p>

        <h3>
          EVERY ASSOCIATE PARTNER
          <span>SHOULD HAVE THE OPPORTUNITY</span>
        </h3>

        <h4>
          TO BECOME A
          <em>SUCCESSFUL REAL ESTATE ENTREPRENEUR.</em>
        </h4>

      </div>

    </div>

  </section>
</template>

<style scoped>
/* =========================================
   PARTNERS SECTION
========================================= */

.partners-section {
  position: relative;

  width: 100%;

  min-height: 100vh;

  background: #090909;

  color: #f4f1e9;

  overflow: hidden;
}

/* =========================================
   BACKGROUND GRID
========================================= */

.partners-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.55;

  background-image:
    linear-gradient(
      90deg,
      transparent calc(16.66% - 1px),
      rgba(244, 241, 233, 0.035) 16.66%,
      transparent calc(16.66% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(33.33% - 1px),
      rgba(244, 241, 233, 0.035) 33.33%,
      transparent calc(33.33% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(50% - 1px),
      rgba(244, 241, 233, 0.035) 50%,
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(66.66% - 1px),
      rgba(244, 241, 233, 0.035) 66.66%,
      transparent calc(66.66% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(83.33% - 1px),
      rgba(244, 241, 233, 0.035) 83.33%,
      transparent calc(83.33% + 1px)
    );
}

/* =========================================
   BACKGROUND GLOW
========================================= */

.partners-glow {
  position: absolute;

  width: 650px;
  height: 650px;

  top: 10%;
  right: -250px;

  border-radius: 50%;

  background: rgba(181, 154, 103, 0.045);

  filter: blur(80px);

  pointer-events: none;
}

/* =========================================
   CONTAINER
========================================= */

.partners-container {
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

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 2.8px;

  color: rgba(244, 241, 233, 0.5);
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

.partners-intro {
  display: grid;

  grid-template-columns: 200px 1fr;

  gap: 70px;

  margin-bottom: 150px;
}

.intro-meta {
  display: flex;
  flex-direction: column;

  gap: 7px;

  padding-top: 12px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 2.5px;

  color: rgba(244, 241, 233, 0.4);
}

.intro-meta span:first-child {
  color: #b59a67;
}

.intro-content {
  max-width: 1100px;
}

.eyebrow {
  margin: 0 0 28px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.intro-content h2 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(70px, 9vw, 100px);

  font-weight: 300;

  line-height: 0.77;

  letter-spacing: -8px;

  text-transform: uppercase;
}

.intro-content h2 span {
  display: inline-block;

  margin-right: 20px;

  margin-bottom: 10px;

  font-family: "DM Serif Display", Georgia, serif;

  font-weight: 400;

  letter-spacing: -6px;

  color: #f4f1e9;
}

.intro-content h2 em {
  display: block;

  margin-left: clamp(30px, 5vw, 90px);

  font-family: "DM Serif Display", Georgia, serif;

  font-size: 0.72em;

  font-style: italic;

  font-weight: 400;

  letter-spacing: -4px;

  color: #b59a67;

  text-transform: none;
}

/* =========================================
   STATEMENT
========================================= */

.partner-statement {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: clamp(50px, 10vw, 160px);

  align-items: end;

  margin-bottom: 180px;

  padding: 70px 0;

  border-top: 1px solid rgba(244, 241, 233, 0.18);

  border-bottom: 1px solid rgba(244, 241, 233, 0.18);
}

.statement-number {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(180px, 25vw, 390px);

  line-height: 0.65;

  letter-spacing: -18px;

  color: #f4f1e9;
}

.statement-copy {
  padding-bottom: 8px;
}

.statement-label {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.statement-copy h3 {
  margin: 0 0 40px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(38px, 5vw, 75px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.statement-copy h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  color: #b59a67;

  letter-spacing: -2px;
}

.statement-description {
  margin: 0 0 13px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  line-height: 1.7;

  color: rgba(244, 241, 233, 0.52);
}

.statement-highlight {
  max-width: 510px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(23px, 2.3vw, 34px);

  line-height: 1.3;

  color: #f4f1e9;
}

.statement-highlight strong {
  color: #b59a67;

  font-weight: 400;
}

/* =========================================
   GROWTH SECTION
========================================= */

.growth-section {
  margin-bottom: 190px;
}

.growth-header {
  display: flex;

  justify-content: space-between;

  align-items: flex-end;

  margin-bottom: 100px;
}

.growth-label {
  display: block;

  margin-bottom: 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 3px;

  color: rgba(244, 241, 233, 0.4);
}

.growth-header h3 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(45px, 6vw, 100px);

  font-weight: 300;

  line-height: 0.82;

  letter-spacing: -4px;

  text-transform: uppercase;
}

.growth-header h3 span {
  display: block;

  margin-left: clamp(30px, 5vw, 90px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  color: #b59a67;

  letter-spacing: -2px;
}

.growth-index {
  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 2px;

  color: rgba(244, 241, 233, 0.35);
}

/* =========================================
   JOURNEY
========================================= */

.journey-wrapper {
  position: relative;

  overflow-x: auto;

  overflow-y: visible;

  padding: 30px 0 50px;

  scrollbar-width: thin;

  scrollbar-color: rgba(181, 154, 103, 0.5) transparent;
}

.journey-wrapper::-webkit-scrollbar {
  height: 2px;
}

.journey-wrapper::-webkit-scrollbar-track {
  background: rgba(244, 241, 233, 0.08);
}

.journey-wrapper::-webkit-scrollbar-thumb {
  background: #b59a67;
}

.journey-line {
  position: absolute;

  top: 52px;

  left: 0;

  width: calc(100% - 20px);

  height: 1px;

  background: rgba(244, 241, 233, 0.14);
}

.journey-progress {
  width: 100%;

  height: 100%;

  background: linear-gradient(
    90deg,
    #b59a67 0%,
    rgba(181, 154, 103, 0.35) 75%,
    rgba(181, 154, 103, 0.7) 100%
  );
}

.journey-items {
  position: relative;

  display: grid;

  grid-template-columns: repeat(7, minmax(170px, 1fr));

  min-width: 1250px;
}

.journey-item {
  position: relative;

  min-height: 250px;

  padding-right: 25px;
}

.journey-number {
  margin-bottom: 27px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.journey-dot {
  position: relative;

  z-index: 2;

  width: 9px;
  height: 9px;

  margin-bottom: 34px;

  border: 1px solid #b59a67;

  border-radius: 50%;

  background: #090909;

  box-shadow:
    0 0 0 5px rgba(181, 154, 103, 0.06);
}

.journey-final .journey-dot {
  width: 12px;
  height: 12px;

  background: #b59a67;

  box-shadow:
    0 0 0 6px rgba(181, 154, 103, 0.08),
    0 0 25px rgba(181, 154, 103, 0.18);
}

.journey-content > span {
  display: block;

  margin-bottom: 12px;

  font-family: Inter, Arial, sans-serif;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 2px;

  color: rgba(244, 241, 233, 0.35);
}

.journey-content h4 {
  max-width: 190px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 18px;

  font-weight: 400;

  line-height: 1.05;

  letter-spacing: -0.5px;

  text-transform: uppercase;

  color: rgba(244, 241, 233, 0.82);
}

.journey-content h4 em {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: 1.1em;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;
}

/* =========================================
   ENTREPRENEUR SECTION
========================================= */

.entrepreneur-section {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 80px;

  margin-bottom: 180px;

  padding-top: 80px;

  border-top: 1px solid rgba(244, 241, 233, 0.18);
}

.entrepreneur-label {
  padding-top: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: rgba(244, 241, 233, 0.4);
}

.entrepreneur-content {
  width: 100%;
}

.entrepreneur-row {
  display: grid;

  grid-template-columns: 260px 100px 1fr;

  align-items: center;

  min-height: 130px;
}

.entrepreneur-small {
  font-family: Inter, Arial, sans-serif;

  font-size: clamp(18px, 2vw, 28px);

  font-weight: 300;

  letter-spacing: -1px;

  color: rgba(244, 241, 233, 0.48);
}

.symbol {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(55px, 6vw, 90px);

  font-weight: 400;

  color: #b59a67;
}

.employee {
  font-family: Inter, Arial, sans-serif;

  font-size: clamp(40px, 5vw, 75px);

  font-weight: 300;

  letter-spacing: -3px;

  color: rgba(244, 241, 233, 0.35);

  text-decoration: line-through;

  text-decoration-color: rgba(181, 154, 103, 0.65);
}

.entrepreneur-divider {
  width: 100%;

  height: 1px;

  background: rgba(244, 241, 233, 0.12);
}

.entrepreneur-main {
  min-height: 170px;
}

.entrepreneur-main .entrepreneur-small {
  color: #f4f1e9;
}

.entrepreneur-word {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(55px, 7vw, 110px);

  font-style: italic;

  line-height: 0.8;

  letter-spacing: -4px;

  color: #f4f1e9;
}

/* =========================================
   CLOSING
========================================= */

.partners-closing {
  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;
}

.closing-line {
  width: 1px;
  height: 70px;

  margin-bottom: 35px;

  background: #b59a67;
}

.partners-closing > p {
  margin: 0 0 28px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 4px;

  color: rgba(244, 241, 233, 0.4);
}

.partners-closing h3 {
  max-width: 950px;

  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(32px, 4.5vw, 65px);

  font-weight: 300;

  line-height: 0.95;

  letter-spacing: -2.5px;

  text-transform: uppercase;
}

.partners-closing h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -1.5px;
}

.partners-closing h4 {
  max-width: 850px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(18px, 2.2vw, 30px);

  font-weight: 300;

  line-height: 1.2;

  color: rgba(244, 241, 233, 0.55);
}

.partners-closing h4 em {
  color: #f4f1e9;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: 1.15em;

  font-style: italic;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .partners-container {
    width: calc(100% - 70px);
  }

  .partners-intro {
    grid-template-columns: 130px 1fr;

    gap: 40px;
  }

  .partner-statement {
    gap: 60px;
  }

  .statement-number {
    font-size: 180px;
  }

  .entrepreneur-section {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }

  .entrepreneur-row {
    grid-template-columns: 200px 75px 1fr;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .partners-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .partners-intro {
    display: block;

    margin-bottom: 90px;
  }

  .intro-meta {
    flex-direction: row;

    margin-bottom: 40px;

    padding: 0;
  }

  .intro-meta span:not(:last-child)::after {
    content: "/";

    margin-left: 10px;

    color: rgba(244, 241, 233, 0.2);
  }

  .intro-content h2 {
    font-size: clamp(62px, 16vw, 92px);

    line-height: 0.8;

    letter-spacing: -5px;
  }

  .intro-content h2 span {
    margin-right: 10px;

    letter-spacing: -4px;
  }

  .intro-content h2 em {
    margin-left: 20px;

    letter-spacing: -2px;
  }

  .partner-statement {
    display: block;

    margin-bottom: 120px;

    padding: 55px 0;
  }

  .statement-number {
    margin-bottom: 65px;

    font-size: 145px;

    letter-spacing: -8px;
  }

  .statement-copy h3 {
    font-size: 43px;

    letter-spacing: -1.5px;
  }

  .statement-highlight {
    font-size: 24px;
  }

  .growth-section {
    margin-bottom: 120px;
  }

  .growth-header {
    display: block;

    margin-bottom: 60px;
  }

  .growth-index {
    margin-top: 25px;
  }

  .growth-header h3 {
    font-size: 47px;

    letter-spacing: -2px;
  }

  .journey-wrapper {
    overflow-x: auto;
  }

  .journey-items {
    min-width: 1180px;
  }

  .entrepreneur-section {
    display: block;

    margin-bottom: 120px;

    padding-top: 55px;
  }

  .entrepreneur-label {
    margin-bottom: 45px;
  }

  .entrepreneur-row {
    grid-template-columns: 1fr 55px;

    min-height: 100px;
  }

  .entrepreneur-small {
    font-size: 17px;
  }

  .symbol {
    justify-self: end;

    font-size: 55px;
  }

  .employee {
    grid-column: 1 / -1;

    margin-top: -25px;

    font-size: 42px;
  }

  .entrepreneur-main {
    min-height: 130px;
  }

  .entrepreneur-main .entrepreneur-small {
    grid-column: 1 / -1;
  }

  .entrepreneur-main .symbol {
    grid-column: 2;

    grid-row: 1;
  }

  .entrepreneur-word {
    grid-column: 1 / -1;

    font-size: 55px;
  }

  .partners-closing h3 {
    font-size: 39px;

    letter-spacing: -1.5px;
  }

  .partners-closing h4 {
    font-size: 20px;
  }

  .partners-grid {
    opacity: 0.2;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .partners-container {
    width: calc(100% - 30px);
  }

  .intro-content h2 {
    font-size: 57px;
  }

  .statement-number {
    font-size: 125px;
  }

  .statement-copy h3 {
    font-size: 38px;
  }

  .growth-header h3 {
    font-size: 42px;
  }

  .entrepreneur-word {
    font-size: 48px;
  }

  .partners-closing h3 {
    font-size: 34px;
  }
}
</style>