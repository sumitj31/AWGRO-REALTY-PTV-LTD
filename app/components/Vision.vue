<template>
  <section id="vision" class="vision-section">

    <!-- Background Grid -->
    <div class="vision-grid"></div>

    <!-- Decorative Line -->
    <div class="vision-line"></div>

    <div class="vision-container">

      <!-- Section Label -->
      <div class="section-label">
        <!-- <span class="label-number">02</span> -->
        <span class="label-line"></span>
        <span>OUR VISION</span>
      </div>

      <!-- Main Vision Statement -->
      <div class="vision-intro">

        <div class="vision-number">
          100<span>+</span>
        </div>

        <div class="vision-heading">
          <p class="eyebrow">MAIN VISION STATEMENT</p>

          <h2>
            TO CREATE INDIA'S
            <span>MOST TRUSTED COMMUNITY</span>
            OF REAL ESTATE
            <em>ENTREPRENEURS.</em>
          </h2>
        </div>

      </div>

      <!-- Vision Statement -->
      <div class="vision-statement">

        <div class="statement-label">
          <span>OUR VISION</span>
        </div>

        <div class="statement-content">
          <p>
            To create India's most trusted community of real estate
            entrepreneurs, starting with a network of 100+ successful
            Associate Partners across Ahmedabad and Gandhinagar.
          </p>
        </div>

      </div>

      <!-- Supporting Content -->
      <div class="vision-support">

        <div class="support-left">
          <!-- <span class="support-number">01</span> -->

          <h3>
            A FUTURE WHERE
            <span>PROFESSIONALS BUILD THEIR OWN BUSINESS.</span>
          </h3>
        </div>

        <div class="support-right">

          <p>
            We envision a future where real estate professionals are not
            dependent only on a job or a single company.
          </p>

          <p>
            Instead, they build their <strong>own client relationships,
            their own network, their own reputation, and their own real
            estate business</strong>—while being supported by the
            collective strength, systems, and resources of Awgro Realty.
          </p>

          <p>
            Our vision is to make <strong>real estate entrepreneurship
            accessible, professional, and scalable</strong> for the
            right individuals.
          </p>

        </div>

      </div>

      <!-- Ecosystem Journey -->
      <!-- Ecosystem Journey -->
<div class="vision-journey">

  <div class="journey-header">
    <span>THE FUTURE WE ARE BUILDING</span>
  </div>

  <!-- Journey Timeline -->
  <div class="journey">

    <template
      v-for="(item, index) in journeyItems"
      :key="item.title"
    >

      <!-- Journey Item -->
      <button
        class="journey-item"
        :class="{ active: activeJourney === index }"
        type="button"
        @click="activeJourney = index"
      >

        <span class="journey-dot"></span>

        <span class="journey-text">
          {{ item.title }}
        </span>

      </button>

      <!-- Connector -->
      <div
        v-if="index < journeyItems.length - 1"
        class="journey-connector"
      ></div>

    </template>

  </div>

  <!-- Selected Journey Content -->
<div class="journey-detail">

  <Transition name="journey-fade" mode="out-in">

    <div
      :key="activeJourney"
      class="journey-detail-inner"
    >

      <!-- Number -->
      <div class="journey-detail-number">
        0{{ activeJourney + 1 }}
      </div>

      <!-- Content -->
      <div class="journey-detail-content">

        <span class="journey-detail-label">
          {{ journeyItems[activeJourney].label }}
        </span>

        <h3>
          {{ journeyItems[activeJourney].heading }}
        </h3>

        <p>
          {{ journeyItems[activeJourney].description }}
        </p>

      </div>

      <!-- Arrow -->
      <div class="journey-detail-arrow">
        ↗
      </div>

    </div>

  </Transition>

</div>

</div>

      <!-- Closing -->
      <div class="vision-closing">

        <span class="closing-line"></span>

        <p>
          ACCESSIBLE.
          PROFESSIONAL.
          SCALABLE.
        </p>

        <h3>
          THE FUTURE OF
          <span>REAL ESTATE ENTREPRENEURSHIP.</span>
        </h3>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface JourneyItem {
  title: string
  label: string
  heading: string
  description: string
}

const activeJourney = ref(0)

const journeyItems: JourneyItem[] = [
  {
    title: 'INDIVIDUAL',
    label: 'THE STARTING POINT',
    heading: 'START WITH YOUR OWN AMBITION.',
    description:
      'Every real estate business begins with an individual who has the right attitude, discipline, learning mindset, and commitment to build something of their own.'
  },
  {
    title: 'ENTREPRENEUR',
    label: 'OWNERSHIP',
    heading: 'BUILD YOUR OWN BUSINESS.',
    description:
      'Associate Partners are encouraged to think and act like business owners, building their own professional identity, client relationships, reputation, and real estate business.'
  },
  {
    title: 'NETWORK',
    label: 'CONNECTION',
    heading: 'BUILD RELATIONSHIPS THAT CREATE OPPORTUNITY.',
    description:
      'Build your own client relationships and professional network while gaining access to projects, developers, clients, investors, and business opportunities.'
  },
  {
    title: 'COMMUNITY',
    label: 'COLLECTIVE STRENGTH',
    heading: 'GROW WITH THE RIGHT PEOPLE AROUND YOU.',
    description:
      'Your business may be your own, but your growth becomes stronger when you are connected to a professional ecosystem where individual success and team success grow together.'
  },
  {
    title: 'REAL ESTATE ECOSYSTEM',
    label: 'THE BIGGER PICTURE',
    heading: 'A SYSTEM BUILT TO HELP YOU GROW.',
    description:
      'Awgro Realty brings together knowledge, training, technology, marketing support, systems, and a professional network to make real estate entrepreneurship more accessible, professional, and scalable.'
  }
]

let journeyTimer: ReturnType<typeof setInterval> | null = null

const startJourneyAutoPlay = () => {
  journeyTimer = setInterval(() => {
    activeJourney.value =
      (activeJourney.value + 1) % journeyItems.length
  }, 2000)
}

const stopJourneyAutoPlay = () => {
  if (journeyTimer) {
    clearInterval(journeyTimer)
    journeyTimer = null
  }
}

onMounted(() => {
  startJourneyAutoPlay()
})

onBeforeUnmount(() => {
  stopJourneyAutoPlay()
})

</script>

<style scoped>
/* =========================================
   VISION SECTION
========================================= */

.vision-section {
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

.vision-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.45;

  background-image:
    linear-gradient(
      90deg,
      transparent 0,
      transparent calc(25% - 1px),
      rgba(244, 241, 233, 0.045) 25%,
      transparent calc(25% + 1px),
      transparent calc(50% - 1px),
      rgba(244, 241, 233, 0.045) 50%,
      transparent calc(50% + 1px),
      transparent calc(75% - 1px),
      rgba(244, 241, 233, 0.045) 75%,
      transparent calc(75% + 1px)
    );
}

/* =========================================
   DECORATIVE LINE
========================================= */

.vision-line {
  position: absolute;

  top: -10%;
  right: 19%;

  width: 1px;
  height: 120%;

  /* background: linear-gradient(
    to bottom,
    transparent,
    rgba(181, 154, 103, 0.45),
    transparent
  );

  transform: rotate(18deg); */

  pointer-events: none;
}

/* =========================================
   CONTAINER
========================================= */

.vision-container {
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

  color: rgba(244, 241, 233, 0.55);
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

.vision-intro {
  display: grid;

  grid-template-columns: 280px minmax(0, 1fr);

  gap: 100px;

  align-items: start;

  margin-bottom: 115px;
}

.vision-number {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(120px, 10vw, 190px);

  line-height: 0.8;

  letter-spacing: -6px;

  color: #f4f1e9;

  white-space: nowrap;
}

.vision-number span {
  display: inline-block;

  margin-left: 12px;

  color: #b59a67;

  font-family: Inter, Arial, sans-serif;

  font-size: 0.42em;

  font-weight: 400;

  line-height: 1;

  letter-spacing: 0;

  vertical-align: top;

  position: relative;

  top: 0.08em;
}

.vision-number span {
  color: #b59a67;
}

.vision-heading {
  max-width: 1100px;
}

.eyebrow {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 3.5px;

  color: #b59a67;
}

.vision-heading h2 {
  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(52px, 6vw, 100px);

  font-weight: 400;

  line-height: 0.94;

  text-transform: uppercase;
}

.vision-heading h2 > span {
  display: block;
}

.vision-line-one {
  margin-left: 0;
}

.vision-line-two {
  margin-left: clamp(25px, 3vw, 65px);

  font-family: Inter, Arial, sans-serif;

  font-size: 0.62em;

  font-weight: 300;

  line-height: 1.05;

  letter-spacing: -3px;
}

.vision-line-three {
  margin-left: clamp(25px, 3vw, 65px);

  margin-top: 4px;
}

.vision-heading h2 em {
  display: block;

  margin-left: clamp(80px, 9vw, 170px);

  margin-top: 2px;

  font-style: italic;

  color: #b59a67;

  line-height: 0.95;
}

/* =========================================
   MAIN STATEMENT
========================================= */

.vision-statement {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 200px;

  max-width: 1440px;

  /* margin-left: auto; */
  margin-bottom: 150px;

  padding-top: 55px;

  border-top: 1px solid rgba(244, 241, 233, 0.18);
}

.statement-label {
  padding-top: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 2.5px;

  color: rgba(244, 241, 233, 0.4);
}

.statement-content p {
  max-width: 950px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(28px, 3.3vw, 45px);

  line-height: 1.2;

  letter-spacing: -1.3px;

  color: #f4f1e9;
}

/* =========================================
   SUPPORTING CONTENT
========================================= */

.vision-support {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: clamp(60px, 10vw, 170px);

  margin-bottom: 150px;

  padding-top: 75px;

  border-top: 1px solid rgba(244, 241, 233, 0.18);
}

.support-left {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
}

.support-number {
  margin-bottom: 35px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;
  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.support-left h3 {
  max-width: 650px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(30px, 4vw, 58px);

  font-weight: 300;

  line-height: 0.98;

  letter-spacing: -2.5px;

  text-transform: uppercase;
}

.support-left h3 span {
  display: block;

  margin-top: 8px;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -1px;
}

.support-right {
  max-width: 520px;

  padding-top: 5px;
}

.support-right p {
  margin: 0 0 30px;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;

  line-height: 1.9;

  color: rgba(244, 241, 233, 0.62);
}

.support-right p:last-child {
  margin-bottom: 0;
}

.support-right strong {
  color: #f4f1e9;

  font-weight: 500;
}

/* =========================================
   JOURNEY
========================================= */

.vision-journey {
  padding: 70px 0;

  border-top: 1px solid rgba(244, 241, 233, 0.18);

  border-bottom: 1px solid rgba(244, 241, 233, 0.18);

  margin-bottom: 150px;
}

.journey-header {
  margin-bottom: 65px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;
  font-weight: 700;

  letter-spacing: 3px;

  color: rgba(244, 241, 233, 0.4);
}

.journey {
  display: flex;

  align-items: center;

  width: 100%;
}

/* =========================================
   CLICKABLE JOURNEY ITEM
========================================= */

.journey-item {
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 16px;

  flex-shrink: 0;

  padding: 0;

  border: 0;

  background: transparent;

  color: inherit;

  font: inherit;

  text-align: left;

  cursor: pointer;

  transition: transform 0.3s ease;
}

.journey-item:hover {
  transform: translateY(-3px);
}

/* =========================================
   DOT
========================================= */

.journey-dot {
  width: 8px;
  height: 8px;

  flex-shrink: 0;

  border: 1px solid #b59a67;

  border-radius: 50%;

  background: #090909;

  box-shadow:
    0 0 0 4px rgba(181, 154, 103, 0.08);

  transform: scale(1);

  transition:
    transform 0.55s ease,
    background 0.55s ease,
    box-shadow 0.55s ease;
}


/* Active dot */

.journey-item.active .journey-dot {
  transform: scale(1.375);

  background: #b59a67;

  box-shadow:
    0 0 0 5px rgba(181, 154, 103, 0.1),
    0 0 25px rgba(181, 154, 103, 0.18);
}

/* =========================================
   TEXT
========================================= */

.journey-text {
  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 1.8px;

  white-space: nowrap;

  color: rgba(244, 241, 233, 0.45);

  transition:
    color 0.55s ease,
    transform 0.55s ease;
}

.journey-item:hover .journey-text,
.journey-item.active .journey-text {
  color: #f4f1e9;
}

.journey-item.active .journey-text {
  transform: translateX(2px);
}

/* =========================================
   CONNECTOR
========================================= */

.journey-connector {
  flex: 1;

  min-width: 25px;

  height: 1px;

  margin: 0 15px 24px;

  background: linear-gradient(
    270deg,
    rgba(181, 154, 103, 0.65),
    rgba(181, 154, 103, 0.15)
  );
}

/* =========================================
   JOURNEY DETAIL
========================================= */

/* =========================================
   JOURNEY DETAIL FRAME
   LINE STAYS STATIC
========================================= */

.journey-detail {
  margin-top: 65px;

  padding-top: 35px;

  border-top: 1px solid rgba(244, 241, 233, 0.12);
}


/* =========================================
   JOURNEY DETAIL INNER
   NUMBER + CONTENT + ARROW
========================================= */

.journey-detail-inner {
  display: grid;

  grid-template-columns: 80px minmax(0, 700px) 1fr;

  align-items: start;

  gap: 35px;

  min-height: 215px;
}


.journey-detail-number {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 42px;

  line-height: 1;

  color: #b59a67;
}

.journey-detail-content {
  max-width: 700px;
}

.journey-detail-label {
  display: block;

  margin-bottom: 15px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3px;

  color: rgba(244, 241, 233, 0.4);
}

.journey-detail-content h3 {
  margin: 0 0 18px;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(30px, 3.5vw, 52px);

  font-weight: 400;

  line-height: 0.98;

  letter-spacing: -1.5px;

  color: #f4f1e9;
}

.journey-detail-content p {
  max-width: 650px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;

  line-height: 1.8;

  color: rgba(244, 241, 233, 0.58);
}

.journey-detail-arrow {
  justify-self: end;

  font-size: 40px;

  font-family: Arial, sans-serif;

  font-weight: 200;

  color: #b59a67;
}

/* =========================================
   CONTENT ANIMATION
========================================= */

.journey-fade-enter-active,
.journey-fade-leave-active {
  transition: opacity 0.55s ease;
}

.journey-fade-enter-from,
.journey-fade-leave-to {
  opacity: 0;
}

/* =========================================
   CLOSING
========================================= */

.vision-closing {
  display: flex;
  flex-direction: column;

  align-items: center;

  text-align: center;

  padding-top: 10px;
}

.closing-line {
  width: 1px;
  height: 70px;

  margin-bottom: 35px;

  background: #b59a67;
}

.vision-closing p {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;
  font-weight: 600;

  letter-spacing: 4px;

  color: rgba(244, 241, 233, 0.45);
}

.vision-closing h3 {
  max-width: 900px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(40px, 5.2vw, 82px);

  font-weight: 400;

  line-height: 0.95;

  letter-spacing: -2.5px;

  text-transform: uppercase;
}

.vision-closing h3 span {
  display: block;

  font-family: Inter, Arial, sans-serif;

  font-size: 0.52em;

  font-weight: 300;

  letter-spacing: -1px;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .vision-container {
    width: calc(100% - 70px);
  }

  .vision-intro {
    grid-template-columns: 150px 1fr;

    gap: 35px;
  }

  .vision-number {
    font-size: 130px;

    letter-spacing: -6px;
  }

  .vision-support {
    gap: 60px;
  }

  .vision-statement {
    grid-template-columns: 130px 1fr;

    gap: 40px;
  }

  .journey-text {
    font-size: 8px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {

  .journey {
    display: flex;

    flex-direction: column;

    align-items: flex-start;
  }

  .journey-item {
    flex-direction: row;

    align-items: center;

    gap: 18px;

    width: 100%;
  }

  .journey-text {
    font-size: 9px;
  }

  .journey-connector {
    flex: none;

    width: 1px;

    height: 35px;

    margin: 0 0 0 3.5px;

    background: linear-gradient(
      to bottom,
      rgba(181, 154, 103, 0.65),
      rgba(181, 154, 103, 0.15)
    );
  }

  .journey-detail {
    grid-template-columns: 45px 1fr;

    gap: 20px;

    margin-top: 45px;

    padding-top: 30px;
  }

  .journey-detail-number {
    font-size: 32px;
  }

  .journey-detail-content h3 {
    font-size: 32px;

    line-height: 1;
  }

  .journey-detail-content p {
    font-size: 13px;

    line-height: 1.75;
  }

  .journey-detail-arrow {
    display: none;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .vision-container {
    width: calc(100% - 30px);
  }

  .vision-number {
    font-size: 95px;
  }

  .vision-heading h2 {
    font-size: 42px;
  }

  .statement-content p {
    font-size: 25px;
  }

  .support-left h3 {
    font-size: 31px;
  }

  .vision-closing h3 {
    font-size: 36px;
  }
}
</style>