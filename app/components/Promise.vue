<template>
  <section id="promise" class="promise-section">

    <!-- Decorative Background -->
    <div class="promise-grid"></div>
    <div class="promise-mark">A</div>

    <div class="promise-container">

      <!-- Section Label -->
      <div class="section-label">
        <span class="label-number">07</span>
        <span class="label-line"></span>
        <span>OUR PROMISE</span>
      </div>

      <!-- Hero Statement -->
      <div class="promise-intro">

        <div class="intro-meta">
          <span>OUR PROMISE</span>
          <span>TO ASSOCIATE</span>
          <span>PARTNERS</span>
        </div>

        <div class="intro-content">

          <p class="eyebrow">
            YOU DON'T HAVE TO START ALONE.
          </p>

          <h2>
            YOU DON'T HAVE
            <span>TO START</span>
            <em>ALONE.</em>
          </h2>

        </div>

      </div>

      <!-- Supporting Introduction -->
      <div class="promise-introduction">

        <div class="introduction-label">
          <span>THE FIRST STEP</span>
        </div>

        <div class="introduction-content">

          <p>
            Starting a real estate business can be challenging when you
            don't know where to begin.
          </p>

          <p>
            Awgro Realty aims to provide the
            <strong>
              training, knowledge, systems, support, and ecosystem
            </strong>
            that can help you take your first step and build your journey
            as a real estate entrepreneur.
          </p>

        </div>

      </div>

      <!-- Two Sides -->
      <div class="promise-exchange">

        <!-- You Bring -->
        <div class="promise-side promise-bring">

          <div class="side-header">

            <span class="side-number">01</span>

            <div>
              <span class="side-label">YOU BRING</span>

              <h3>
                WHAT
                <span>YOU BRING.</span>
              </h3>
            </div>

          </div>

          <div class="side-list">

            <div class="side-item">
              <span class="item-number">01</span>
              <h4>YOUR AMBITION.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">02</span>
              <h4>YOUR HARD WORK.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">03</span>
              <h4>YOUR NETWORK.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">04</span>
              <h4>YOUR COMMITMENT.</h4>
            </div>

          </div>

        </div>

        <!-- Divider -->
        <div class="exchange-divider">
          <span>+</span>
        </div>

        <!-- We Provide -->
        <div class="promise-side promise-provide">

          <div class="side-header">

            <span class="side-number">02</span>

            <div>
              <span class="side-label">WE PROVIDE</span>

              <h3>
                WHAT
                <span>WE PROVIDE.</span>
              </h3>
            </div>

          </div>

          <div class="side-list">

            <div class="side-item">
              <span class="item-number">01</span>
              <h4>TRAINING.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">02</span>
              <h4>KNOWLEDGE.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">03</span>
              <h4>SYSTEMS.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">04</span>
              <h4>TECHNOLOGY.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">05</span>
              <h4>MARKETING SUPPORT.</h4>
            </div>

            <div class="side-item">
              <span class="item-number">06</span>
              <h4>BUSINESS ECOSYSTEM.</h4>
            </div>

          </div>

        </div>

      </div>

      <!-- Promise Equation -->
      <div class="promise-equation">

        <div class="equation-item">
          <span>YOUR</span>
          <strong>AMBITION</strong>
        </div>

        <div class="equation-symbol">+</div>

        <div class="equation-item">
          <span>OUR</span>
          <strong>ECOSYSTEM</strong>
        </div>

        <div class="equation-symbol">=</div>

        <div class="equation-result">
          <span>TOGETHER</span>
          <strong>WE BUILD.</strong>
        </div>

      </div>

      <!-- Closing Statement -->
      <div class="promise-closing">

        <div class="closing-line"></div>

        <p class="closing-label">
          OUR COMMITMENT TO YOU
        </p>

        <h3>
          TOGETHER, WE BUILD
          <span>YOUR REAL ESTATE BUSINESS.</span>
        </h3>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   PROMISE SECTION
========================================= */

.promise-section {
  position: relative;

  width: 100%;

  background: #f4f1e9;

  color: #090909;

  overflow: hidden;
}

/* =========================================
   BACKGROUND GRID
========================================= */

.promise-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.65;

  background-image:
    linear-gradient(
      90deg,
      transparent calc(25% - 1px),
      rgba(9, 9, 9, 0.035) 25%,
      transparent calc(25% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(50% - 1px),
      rgba(9, 9, 9, 0.035) 50%,
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(75% - 1px),
      rgba(9, 9, 9, 0.035) 75%,
      transparent calc(75% + 1px)
    );
}

/* =========================================
   WATERMARK
========================================= */

.promise-mark {
  position: absolute;

  right: -2%;

  top: 17%;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(400px, 50vw, 800px);

  line-height: 0.7;

  letter-spacing: -35px;

  color: rgba(9, 9, 9, 0.025);

  pointer-events: none;

  user-select: none;
}

/* =========================================
   CONTAINER
========================================= */

.promise-container {
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

.promise-intro {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  margin-bottom: 125px;
}

.intro-meta {
  display: flex;
  flex-direction: column;

  gap: 6px;

  padding-top: 12px;

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 600;

  letter-spacing: 2.5px;

  color: #858179;
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

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.intro-content h2 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(65px, 9vw, 140px);

  font-weight: 300;

  line-height: 0.78;

  letter-spacing: -7px;

  text-transform: uppercase;
}

.intro-content h2 span {
  display: block;

  margin-left: clamp(25px, 5vw, 80px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  letter-spacing: -4px;

  color: #4b4841;
}

.intro-content h2 em {
  display: block;

  margin-left: clamp(65px, 12vw, 210px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -4px;
}

/* =========================================
   INTRODUCTION
========================================= */

.promise-introduction {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  max-width: 1180px;

  margin-left: auto;

  margin-bottom: 150px;

  padding-top: 55px;

  border-top: 1px solid rgba(9, 9, 9, 0.18);
}

.introduction-label {
  padding-top: 8px;

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: #858179;
}

.introduction-content {
  max-width: 850px;
}

.introduction-content p {
  margin: 0 0 28px;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;

  line-height: 1.85;

  color: #68645c;
}

.introduction-content p:first-child {
  max-width: 700px;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(27px, 3vw, 43px);

  line-height: 1.25;

  letter-spacing: -1px;

  color: #171717;
}

.introduction-content p:last-child {
  margin-bottom: 0;
}

.introduction-content strong {
  color: #171717;

  font-weight: 600;
}

/* =========================================
   EXCHANGE
========================================= */

.promise-exchange {
  display: grid;

  grid-template-columns: 1fr 90px 1fr;

  gap: 55px;

  margin-bottom: 150px;

  padding: 75px 0;

  border-top: 1px solid rgba(9, 9, 9, 0.18);

  border-bottom: 1px solid rgba(9, 9, 9, 0.18);
}

/* =========================================
   SIDE
========================================= */

.promise-side {
  min-width: 0;
}

.side-header {
  display: grid;

  grid-template-columns: 50px 1fr;

  gap: 25px;

  margin-bottom: 55px;
}

.side-number {
  padding-top: 6px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.side-label {
  display: block;

  margin-bottom: 17px;

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: #858179;
}

.side-header h3 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(35px, 4vw, 58px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -2px;

  text-transform: uppercase;
}

.side-header h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -1px;
}

/* =========================================
   SIDE LIST
========================================= */

.side-list {
  border-top: 1px solid rgba(9, 9, 9, 0.13);
}

.side-item {
  display: grid;

  grid-template-columns: 35px 1fr;

  gap: 18px;

  align-items: center;

  min-height: 72px;

  border-bottom: 1px solid rgba(9, 9, 9, 0.1);

  transition:
    padding-left 0.35s ease,
    background 0.35s ease;
}

.side-item:hover {
  padding-left: 10px;

  background: rgba(216, 211, 200, 0.25);
}

.item-number {
  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 600;

  letter-spacing: 1.5px;

  color: #b59a67;
}

.side-item h4 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;

  font-weight: 500;

  letter-spacing: 0.2px;

  color: #292722;
}

/* =========================================
   DIVIDER
========================================= */

.exchange-divider {
  display: flex;

  justify-content: center;

  align-items: center;

  align-self: stretch;
}

.exchange-divider::before {
  content: "";

  position: absolute;

  width: 1px;

  height: 390px;

  background: rgba(9, 9, 9, 0.12);
}

.exchange-divider span {
  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 54px;
  height: 54px;

  border: 1px solid rgba(181, 154, 103, 0.6);

  border-radius: 50%;

  background: #f4f1e9;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: 25px;

  color: #b59a67;
}

/* =========================================
   EQUATION
========================================= */

.promise-equation {
  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 20px;

  margin-bottom: 170px;

  padding: 50px 30px;

  background: #171717;

  color: #f4f1e9;
}

.equation-item {
  display: flex;

  flex-direction: column;

  gap: 7px;

  padding: 0 20px;
}

.equation-item span,
.equation-result span {
  font-family: Inter, Arial, sans-serif;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: rgba(244, 241, 233, 0.4);
}

.equation-item strong {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(25px, 3vw, 40px);

  font-weight: 400;

  letter-spacing: -1px;
}

.equation-symbol {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 35px;

  color: #b59a67;
}

.equation-result {
  display: flex;

  flex-direction: column;

  gap: 7px;

  padding-left: 20px;
}

.equation-result strong {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(28px, 3.5vw, 48px);

  font-style: italic;

  font-weight: 400;

  color: #b59a67;
}

/* =========================================
   CLOSING
========================================= */

.promise-closing {
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

.closing-label {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3.5px;

  color: #858179;
}

.promise-closing h3 {
  max-width: 1000px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(38px, 5vw, 75px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.promise-closing h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -2px;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .promise-container {
    width: calc(100% - 70px);
  }

  .promise-intro {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }

  .promise-introduction {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }

  .promise-exchange {
    grid-template-columns: 1fr 60px 1fr;

    gap: 30px;
  }

  .side-header {
    grid-template-columns: 35px 1fr;

    gap: 15px;
  }

  .side-header h3 {
    font-size: 39px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .promise-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .promise-intro {
    display: block;

    margin-bottom: 80px;
  }

  .intro-meta {
    flex-direction: row;

    margin-bottom: 40px;

    padding: 0;
  }

  .intro-meta span:not(:last-child)::after {
    content: "/";

    margin-left: 9px;

    color: rgba(9, 9, 9, 0.2);
  }

  .intro-content h2 {
    font-size: clamp(55px, 15vw, 82px);

    line-height: 0.8;

    letter-spacing: -4px;
  }

  .intro-content h2 span {
    margin-left: 20px;

    letter-spacing: -2px;
  }

  .intro-content h2 em {
    margin-left: 35px;

    letter-spacing: -2px;
  }

  .promise-introduction {
    display: block;

    margin-bottom: 100px;

    padding-top: 40px;
  }

  .introduction-label {
    margin-bottom: 30px;
  }

  .introduction-content p:first-child {
    font-size: 27px;

    line-height: 1.25;
  }

  .introduction-content p:last-child {
    font-size: 13px;

    line-height: 1.8;
  }

  .promise-exchange {
    display: block;

    margin-bottom: 100px;

    padding: 55px 0;
  }

  .promise-side {
    margin-bottom: 60px;
  }

  .promise-side:last-child {
    margin-bottom: 0;
  }

  .side-header {
    grid-template-columns: 35px 1fr;

    gap: 15px;

    margin-bottom: 35px;
  }

  .side-header h3 {
    font-size: 39px;

    letter-spacing: -1.5px;
  }

  .side-item {
    min-height: 62px;
  }

  .side-item h4 {
    font-size: 13px;
  }

  .exchange-divider {
    height: 60px;

    margin: 0 0 60px;
  }

  .exchange-divider::before {
    width: 100%;

    height: 1px;
  }

  .exchange-divider span {
    width: 48px;
    height: 48px;
  }

  .promise-equation {
    flex-direction: column;

    gap: 15px;

    margin-bottom: 110px;

    padding: 45px 20px;
  }

  .equation-symbol {
    line-height: 1;
  }

  .equation-item,
  .equation-result {
    align-items: center;

    padding: 0;

    text-align: center;
  }

  .promise-closing h3 {
    font-size: 40px;

    letter-spacing: -1.5px;
  }

  .promise-mark {
    right: -20%;

    top: 20%;

    font-size: 450px;
  }

  .promise-grid {
    opacity: 0.25;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .promise-container {
    width: calc(100% - 30px);
  }

  .intro-content h2 {
    font-size: 51px;
  }

  .side-header h3 {
    font-size: 34px;
  }

  .introduction-content p:first-child {
    font-size: 24px;
  }

  .promise-closing h3 {
    font-size: 35px;
  }
}
</style>