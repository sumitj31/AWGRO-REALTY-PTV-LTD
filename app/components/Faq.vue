<template>
  <section id="faq" class="faq-section">

    <!-- Background Grid -->
    <div class="faq-grid"></div>

    <div class="faq-container">

      <!-- Section Label -->
      <div class="section-label">
        <span>GENERAL FAQS</span>
      </div>

      <!-- Heading -->
      <!-- <div class="faq-heading">
        <p class="eyebrow">BEFORE YOU BEGIN</p>
        <h2>
          ANSWERS FOR FUTURE
          <span>ASSOCIATE PARTNERS.</span>
        </h2>
      </div> -->

      <!-- Accordion -->
      <div class="faq-list">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ open: openIndex === index }"
        >
          <button
            class="faq-question"
            type="button"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="question-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="question-text">{{ item.question }}</span>
            <span class="question-icon">{{ openIndex === index ? '−' : '+' }}</span>
          </button>

          <div class="faq-answer" :style="{ maxHeight: openIndex === index ? '260px' : '0px' }">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number>(-1)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'What is Awgro Realty Pvt. Ltd.?',
    answer:
      'Awgro Realty is building a community of real estate entrepreneurs across Ahmedabad and Gandhinagar — we help individuals start and build their own real estate business, not work as property sales employees.'
  },
  {
    question: 'Who can become an Associate Partner?',
    answer:
      'Anyone with the right attitude, discipline, and a learning mindset. You don\u2019t need a real estate background — we train you from the ground up in market knowledge, sales, negotiation, and business development.'
  },
  {
    question: 'Do I need prior real estate experience?',
    answer:
      'No. Our training covers the real estate business from fundamentals — market understanding, projects, property investment, and customer management — up to advanced negotiation and digital marketing.'
  },
  {
    question: 'What training and support will I get?',
    answer:
      'Structured training, proven systems, technology, marketing support, and access to a professional ecosystem of projects, developers, clients, and investors — everything needed to build your own book of business.'
  },
  {
    question: 'What is the "100 Associate Partner Mission"?',
    answer:
      'It\u2019s our founding goal — helping 100 individuals each build their own real estate business under one strong, connected network, rather than simply hiring 100 salespeople.'
  },
  {
    question: 'Which cities do you currently operate in?',
    answer:
      'We currently focus on Ahmedabad and Gandhinagar, with a longer-term vision of extending the Awgro Realty network to a larger real estate community.'
  },
  {
    question: 'How is this different from a regular real estate job?',
    answer:
      'A job gives you a role. At Awgro Realty, you build your own client relationships, your own brand, and your own long-term business — with our systems, training, and network supporting you.'
  }
]
</script>

<style scoped>
/* =========================================
   FAQ SECTION
========================================= */

.faq-section {
  position: relative;

  width: 100%;

  padding: 0px 0;

  background: #f4f1e9;

  color: #090909;

  overflow: hidden;
}

/* =========================================
   BACKGROUND GRID
========================================= */

.faq-grid {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      to right,
      rgba(244, 241, 233, 0.045) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(244, 241, 233, 0.045) 1px,
      transparent 1px
    );

  background-size: 64px 64px;

  pointer-events: none;
}

/* =========================================
   CONTAINER
========================================= */

.faq-container {
  position: relative;
  z-index: 1;

  width: min(100% - 40px, 1440px);
  margin: 0 auto;
}

/* =========================================
   SECTION LABEL
========================================= */

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 12px;

  font-family: Inter, Arial, sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #090909;
}

.label-line {
  width: 40px;
  height: 1px;

  background: #b59a67;
}

/* =========================================
   HEADING
========================================= */


.eyebrow {
  margin-bottom: 14px;

  font-family: Inter, Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #b68500;
}

.faq-heading h2 {
  font-family: "DM Serif Display", Georgia, serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.15;
  letter-spacing: 0.5px;
}

.faq-heading h2 span {
  display: block;

  color: #b68500;
}

/* =========================================
   ACCORDION LIST
========================================= */

.faq-list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid rgba(9, 9, 9, 0.18);
}

.faq-item:first-child {
  border-top: 1px solid rgba(9, 9, 9, 0.18);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;

  padding: 16px 0;

  background: none;
  border: none;

  text-align: left;
  cursor: pointer;
}

.question-index {
  flex-shrink: 0;

  font-family: Inter, Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #b59a67;
}

.question-text {
  flex: 1;

  font-family: "DM Serif Display", Georgia, serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 400;
  color: #090909;
}

.question-icon {
  flex-shrink: 0;

  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(244, 241, 233, 0.25);
  border-radius: 50%;

  font-size: 16px;
  color: #b68500;

  transition:
    background 0.25s ease,
    border-color 0.25s ease;
}

.faq-item.open .question-icon {
  background: transparent;
  color: #090909;
}

.faq-answer {
  overflow: hidden;

  max-height: 0;

  transition: max-height 0.35s ease;
}

.faq-answer p {
  padding: 0 58px 30px 0;

  font-family: Inter, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color:#090909;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 640px) {

  .faq-section {
    padding: 100px 0;
  }

  .faq-question {
    gap: 16px;
    padding: 24px 0;
  }

  .faq-answer p {
    padding-right: 0;
  }
}
</style>
