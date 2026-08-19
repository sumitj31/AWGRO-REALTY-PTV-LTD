<template>
  <section id="faq" class="faq-section">
    <div class="faq-background-mark">
      FAQ
    </div>

    <div class="faq-container">
      <div class="faq-header">
        <div class="faq-index">
          <span>03</span>
          <div></div>
          <span>FAQ</span>
        </div>

        <span class="faq-header-label">
          QUESTIONS, ANSWERED
        </span>
      </div>

      <div class="faq-intro">
        <div class="faq-intro-left">
          <span class="faq-kicker">
            <i></i>
            GENERAL FAQS
          </span>

          <h2>
            Everything you
            <span>need to know.</span>
          </h2>
        </div>

        <p class="faq-intro-text">
          From becoming an Associate Partner to understanding
          the AWGRO ecosystem, find answers to the questions
          that matter before you begin.
        </p>
      </div>

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
            <span class="question-index">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="question-text">
              {{ item.question }}
            </span>

            <span class="question-icon">
              {{ openIndex === index ? '−' : '+' }}
            </span>
          </button>

          <div
            class="faq-answer"
            :style="{
              maxHeight:
                openIndex === index
                  ? '300px'
                  : '0px'
            }"
          >
            <p>
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>

      <div class="faq-footer">
        <div class="footer-line"></div>

        <p>
          STILL HAVE QUESTIONS?
        </p>

        <a
          href="#contact"
          @click.prevent="scrollToSection('contact')"
        >
          <span>Talk to us</span>
          <strong>↗</strong>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number>(-1)

const toggle = (index: number) => {
  openIndex.value =
    openIndex.value === index
      ? -1
      : index
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)

  if (!section) {
    console.warn(`Section #${id} not found`)
    return
  }

  const navbar =
    document.querySelector('.navbar') as HTMLElement | null

  const navbarHeight =
    navbar?.offsetHeight ?? 82

  const sectionTop =
    section.getBoundingClientRect().top +
    window.scrollY

  window.scrollTo({
    top:
      sectionTop -
      navbarHeight,
    behavior: 'smooth'
  })
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
      'Anyone with the right attitude, discipline, and a learning mindset. You don’t need a real estate background — we train you from the ground up in market knowledge, sales, negotiation, and business development.'
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
      'It’s our founding goal — helping 100 individuals each build their own real estate business under one strong, connected network, rather than simply hiring 100 salespeople.'
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
.faq-section {
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

.faq-container {
  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 100px),
      1440px
    );

  margin: 0 auto;

  padding:
    95px
    0
    80px;
}

.faq-background-mark {
  position: absolute;

  right: -25px;
  top: 55px;

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

  line-height: 0.8;

  letter-spacing:
    -0.08em;

  pointer-events: none;

  user-select: none;
}

.faq-header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 65px;
}

.faq-index {
  display: flex;

  align-items: center;

  gap: 12px;

  color:
    var(--gray-light);

  font-family: var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.faq-index span:first-child {
  color: var(--blue);

  font-family: var(--display);

  font-size: 25px;

  font-weight: 500;

  letter-spacing:
    -0.02em;
}

.faq-index div {
  width: 35px;
  height: 1px;

  background:
    var(--blue);
}

.faq-header-label {
  color:
    var(--gray-light);

  font-family: var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.22em;
}

.faq-intro {
  display: grid;

  grid-template-columns:
    minmax(0, 1.25fr)
    minmax(280px, 0.75fr);

  align-items: end;

  gap:
    80px;

  margin-bottom: 60px;
}

.faq-intro-left {
  max-width: 750px;
}

.faq-kicker {
  display: flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 20px;

  color:
    var(--blue);

  font-family: var(--body);

  font-size: 9px;

  font-weight: 800;

  letter-spacing:
    0.22em;

  text-transform:
    uppercase;
}

.faq-kicker i {
  width: 7px;
  height: 7px;

  display: block;

  background:
    var(--blue);

  border-radius: 50%;
}

.faq-intro h2 {
  margin: 0;

  color:
    var(--dark);

  font-family:
    var(--display);

  font-size:
    clamp(
      55px,
      6.5vw,
      92px
    );

  font-weight: 500;

  line-height:
    0.9;

  letter-spacing:
    -0.055em;
}

.faq-intro h2 span {
  display: block;

  margin-left:
    clamp(
      30px,
      5vw,
      90px
    );

  color:
    var(--blue);

  font-style:
    italic;
}

.faq-intro-text {
  max-width: 400px;

  margin: 0;

  padding-left: 22px;

  border-left:
    1px solid
    var(--blue);

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 12px;

  line-height: 1.85;
}

.faq-list {
  width: 100%;

  border-top:
    1px solid
    var(--border);
}

.faq-item {
  position: relative;

  border-bottom:
    1px solid
    var(--border);

  transition:
    background 0.3s ease;
}

.faq-item.open {
  background:
    rgba(
      255,
      255,
      255,
      0.7
    );
}

.faq-question {
  position: relative;

  display: grid;

  grid-template-columns:
    55px
    1fr
    46px;

  align-items: center;

  gap: 18px;

  width: 100%;

  min-height: 76px;

  padding:
    0
    20px;

  background: transparent;

  border: none;

  text-align: left;

  cursor: pointer;

  font-family:
    var(--body);
}

.question-index {
  color:
    var(--blue);

  font-family:
    var(--body);

  font-size: 9px;

  font-weight: 800;

  letter-spacing:
    0.12em;
}

.question-text {
  color:
    var(--dark);

  font-family:
    var(--display);

  font-size:
    clamp(
      18px,
      2vw,
      25px
    );

  font-weight: 500;

  line-height:
    1.2;

  letter-spacing:
    -0.015em;

  transition:
    color 0.25s ease;
}

.faq-item:hover
.question-text,
.faq-item.open
.question-text {
  color:
    var(--blue);
}

.question-icon {
  width: 36px;
  height: 36px;

  display: flex;

  align-items: center;
  justify-content: center;

  color:
    var(--blue);

  border:
    1px solid
    var(--border);

  border-radius: 50%;

  font-family:
    var(--body);

  font-size: 17px;

  font-weight: 400;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.faq-item:hover
.question-icon {
  border-color:
    var(--blue);
}

.faq-item.open
.question-icon {
  background:
    var(--blue);

  border-color:
    var(--blue);

  color:
    var(--white);

  transform:
    rotate(180deg);
}

.faq-answer {
  overflow: hidden;

  max-height: 0;

  transition:
    max-height
    0.4s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.faq-answer p {
  max-width: 850px;

  margin: 0;

  padding:
    0
    90px
    30px
    93px;

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 11px;

  line-height: 1.85;
}

.faq-footer {
  display: grid;

  grid-template-columns:
    1fr
    auto
    auto;

  align-items: center;

  gap: 25px;

  margin-top: 55px;
}

.footer-line {
  height: 1px;

  background:
    var(--border);
}

.faq-footer p {
  margin: 0;

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.18em;
}

.faq-footer a {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  color:
    var(--blue);

  text-decoration: none;

  font-family:
    var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.12em;

  text-transform:
    uppercase;
}

.faq-footer a strong {
  font-size: 17px;

  font-weight: 400;

  transition:
    transform 0.25s ease;
}

.faq-footer a:hover strong {
  transform:
    translate(
      3px,
      -3px
    );
}

@media (max-width: 1050px) {
  .faq-container {
    width:
      calc(100% - 70px);
  }

  .faq-intro {
    gap: 45px;
  }

  .faq-intro h2 {
    font-size:
      clamp(
        50px,
        6vw,
        75px
      );
  }
}

@media (max-width: 800px) {
  .faq-container {
    width:
      calc(100% - 40px);

    padding:
      75px
      0
      65px;
  }

  .faq-header {
    margin-bottom: 50px;
  }

  .faq-intro {
    grid-template-columns:
      1fr;

    gap: 30px;

    margin-bottom: 45px;
  }

  .faq-intro h2 {
    font-size:
      clamp(
        52px,
        10vw,
        78px
      );
  }

  .faq-intro-text {
    max-width: 550px;
  }

  .faq-question {
    grid-template-columns:
      40px
      1fr
      40px;

    min-height: 70px;

    padding:
      0
      12px;

    gap: 12px;
  }

  .faq-answer p {
    padding:
      0
      55px
      25px
      64px;
  }
}

@media (max-width: 520px) {
  .faq-container {
    width:
      calc(100% - 30px);

    padding:
      60px
      0
      55px;
  }

  .faq-header {
    margin-bottom: 40px;
  }

  .faq-header-label {
    display: none;
  }

  .faq-intro h2 {
    font-size: 49px;
  }

  .faq-intro h2 span {
    margin-left: 18px;
  }

  .faq-intro-text {
    padding-left: 16px;

    font-size: 10px;

    line-height: 1.75;
  }

  .faq-question {
    grid-template-columns:
      28px
      1fr
      34px;

    min-height: 68px;

    padding:
      0
      5px;

    gap: 9px;
  }

  .question-index {
    font-size: 8px;
  }

  .question-text {
    font-size: 16px;
  }

  .question-icon {
    width: 30px;
    height: 30px;

    font-size: 14px;
  }

  .faq-answer p {
    padding:
      0
      35px
      22px
      42px;

    font-size: 9px;

    line-height: 1.75;
  }

  .faq-footer {
    grid-template-columns:
      1fr
      auto;

    gap: 15px;
  }

  .faq-footer .footer-line {
    display: none;
  }

  .faq-footer p {
    font-size: 6px;
  }

  .faq-background-mark {
    right: -20px;
    top: 40px;

    font-size: 160px;
  }
}
</style>