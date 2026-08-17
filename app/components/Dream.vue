<template>
  <section id="dream" class="dream-section">

    <!-- Background -->
    <div class="dream-grid"></div>
    <div class="dream-glow"></div>

    <div class="dream-container">

      <!-- Section Label -->
      <div class="section-label">
        <span class="label-number">08</span>
        <span class="label-line"></span>
        <span>OUR BIGGER DREAM</span>
      </div>

      <!-- Intro -->
      <div class="dream-intro">

        <p class="eyebrow">
          THE BIGGER PICTURE
        </p>

        <h2>
          THINK
          <span>BIGGER.</span>
        </h2>

      </div>

      <!-- Dream Progression -->
      <div class="dream-journey">

        <!-- 01 -->
        <div class="dream-step">

          <div class="step-number">
            01
          </div>

          <div class="step-content">

            <span class="step-label">
              THE BEGINNING
            </span>

            <h3>
              FROM <strong>1</strong> ASSOCIATE PARTNER
            </h3>

            <p>
              TO 100 REAL ESTATE ENTREPRENEURS.
            </p>

          </div>

          <div class="step-marker">
            <span></span>
          </div>

        </div>

        <!-- Connector -->
        <div class="journey-connector">
          <span></span>
        </div>

        <!-- 02 -->
        <div class="dream-step">

          <div class="step-number">
            02
          </div>

          <div class="step-content">

            <span class="step-label">
              THE COMMUNITY
            </span>

            <h3>
              FROM <strong>100</strong> ENTREPRENEURS
            </h3>

            <p>
              TO 1 POWERFUL REAL ESTATE COMMUNITY.
            </p>

          </div>

          <div class="step-marker">
            <span></span>
          </div>

        </div>

        <!-- Connector -->
        <div class="journey-connector">
          <span></span>
        </div>

        <!-- 03 -->
        <div class="dream-step dream-step-final">

          <div class="step-number">
            03
          </div>

          <div class="step-content">

            <span class="step-label">
              THE FUTURE
            </span>

            <h3>
              FROM AHMEDABAD
              <strong>& GANDHINAGAR</strong>
            </h3>

            <p>
              TO A LARGER REAL ESTATE NETWORK.
            </p>

          </div>

          <div class="step-marker">
            <span></span>
          </div>

        </div>

      </div>

      <!-- Scale Visualization -->
      <div class="dream-scale">

        <div class="scale-line">
          <div class="scale-progress"></div>
        </div>

        <div class="scale-label scale-start">
          <span>01</span>
          <p>INDIVIDUAL</p>
        </div>

        <div class="scale-label scale-middle">
          <span>100</span>
          <p>ENTREPRENEURS</p>
        </div>

        <div class="scale-label scale-end">
          <span>∞</span>
          <p>NETWORK</p>
        </div>

      </div>

      <!-- Closing -->
      <div class="dream-closing">

        <div class="closing-line"></div>

        <p class="closing-label">
          AWGRO REALTY PVT. LTD.
        </p>

        <h3>
          START YOUR
          <span>REAL ESTATE BUSINESS.</span>
        </h3>

        <h4>
          BUILD YOUR NETWORK.
        </h4>

        <h5>
          CREATE YOUR FUTURE.
        </h5>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   DREAM SECTION
========================================= */

.dream-section {
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

.dream-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.5;

  background-image:
    linear-gradient(
      90deg,
      transparent calc(25% - 1px),
      rgba(244, 241, 233, 0.035) 25%,
      transparent calc(25% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(50% - 1px),
      rgba(244, 241, 233, 0.035) 50%,
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(75% - 1px),
      rgba(244, 241, 233, 0.035) 75%,
      transparent calc(75% + 1px)
    );
}

/* =========================================
   GLOW
========================================= */

.dream-glow {
  position: absolute;

  width: 750px;
  height: 750px;

  right: -300px;
  bottom: -300px;

  border-radius: 50%;

  background: rgba(181, 154, 103, 0.055);

  filter: blur(100px);

  pointer-events: none;
}

/* =========================================
   CONTAINER
========================================= */

.dream-container {
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

  margin-bottom: 110px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2.8px;

  color: rgba(244, 241, 233, 0.45);
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

.dream-intro {
  margin-bottom: 150px;
}

.eyebrow {
  margin: 0 0 30px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3.5px;

  color: #b59a67;
}

.dream-intro h2 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(90px, 14vw, 220px);

  font-weight: 300;

  line-height: 0.68;

  letter-spacing: -12px;

  text-transform: uppercase;
}

.dream-intro h2 span {
  display: block;

  margin-left: clamp(40px, 10vw, 180px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  letter-spacing: -8px;
}

/* =========================================
   DREAM JOURNEY
========================================= */

.dream-journey {
  margin-bottom: 170px;
}

/* =========================================
   DREAM STEP
========================================= */

.dream-step {
  display: grid;

  grid-template-columns: 100px 1fr 80px;

  gap: 45px;

  align-items: center;

  min-height: 230px;

  padding: 40px 0;

  border-top: 1px solid rgba(244, 241, 233, 0.14);

  transition:
    padding-left 0.4s ease,
    background 0.4s ease;
}

.dream-step:hover {
  padding-left: 25px;

  background: rgba(244, 241, 233, 0.025);
}

.dream-step-final {
  border-bottom: 1px solid rgba(244, 241, 233, 0.14);
}

.step-number {
  align-self: start;

  padding-top: 8px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.step-content {
  max-width: 900px;
}

.step-label {
  display: block;

  margin-bottom: 18px;

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 3px;

  color: rgba(244, 241, 233, 0.35);
}

.step-content h3 {
  margin: 0 0 13px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(32px, 4.5vw, 68px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.step-content h3 strong {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 1.1em;

  font-weight: 400;

  color: #b59a67;
}

.step-content p {
  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(20px, 2.2vw, 31px);

  font-style: italic;

  color: rgba(244, 241, 233, 0.5);
}

.step-marker {
  justify-self: end;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 48px;
  height: 48px;

  border: 1px solid rgba(181, 154, 103, 0.4);

  border-radius: 50%;
}

.step-marker span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #b59a67;

  box-shadow: 0 0 18px rgba(181, 154, 103, 0.4);
}

/* =========================================
   CONNECTOR
========================================= */

.journey-connector {
  position: relative;

  height: 65px;

  margin-left: 49px;
}

.journey-connector::before {
  content: "";

  position: absolute;

  top: 0;
  bottom: 0;

  left: 0;

  width: 1px;

  background: linear-gradient(
    to bottom,
    rgba(181, 154, 103, 0.5),
    rgba(181, 154, 103, 0.08)
  );
}

.journey-connector span {
  position: absolute;

  left: -3px;

  bottom: -1px;

  width: 7px;
  height: 7px;

  border-right: 1px solid #b59a67;
  border-bottom: 1px solid #b59a67;

  transform: rotate(45deg);
}

/* =========================================
   SCALE
========================================= */

.dream-scale {
  position: relative;

  display: flex;

  justify-content: space-between;

  margin-bottom: 180px;

  padding-top: 45px;
}

.scale-line {
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  height: 1px;

  background: rgba(244, 241, 233, 0.15);
}

.scale-progress {
  width: 100%;

  height: 100%;

  background: linear-gradient(
    90deg,
    #b59a67,
    rgba(181, 154, 103, 0.15),
    #b59a67
  );
}

.scale-label {
  display: flex;

  flex-direction: column;

  gap: 10px;
}

.scale-label span {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: 45px;

  line-height: 0.8;

  color: #f4f1e9;
}

.scale-label p {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 2px;

  color: rgba(244, 241, 233, 0.35);
}

.scale-middle {
  text-align: center;
}

.scale-end {
  align-items: flex-end;

  text-align: right;
}

.scale-end span {
  color: #b59a67;
}

/* =========================================
   CLOSING
========================================= */

.dream-closing {
  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;
}

.closing-line {
  width: 1px;
  height: 75px;

  margin-bottom: 35px;

  background: #b59a67;
}

.closing-label {
  margin: 0 0 35px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 4px;

  color: rgba(244, 241, 233, 0.4);
}

.dream-closing h3 {
  max-width: 1000px;

  margin: 0 0 18px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(40px, 5.5vw, 85px);

  font-weight: 300;

  line-height: 0.88;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.dream-closing h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #b59a67;

  text-transform: none;

  letter-spacing: -2px;
}

.dream-closing h4,
.dream-closing h5 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(25px, 3vw, 45px);

  font-weight: 300;

  line-height: 1;

  letter-spacing: -1.5px;

  text-transform: uppercase;

  color: rgba(244, 241, 233, 0.65);
}

.dream-closing h5 {
  margin-top: 8px;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-size: clamp(27px, 3.3vw, 50px);

  color: #f4f1e9;

  text-transform: none;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .dream-container {
    width: calc(100% - 70px);
  }

  .dream-step {
    grid-template-columns: 65px 1fr 60px;

    gap: 30px;
  }

  .step-content h3 {
    font-size: 45px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .dream-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .dream-intro {
    margin-bottom: 100px;
  }

  .dream-intro h2 {
    font-size: clamp(75px, 20vw, 110px);

    line-height: 0.7;

    letter-spacing: -7px;
  }

  .dream-intro h2 span {
    margin-left: 30px;

    letter-spacing: -5px;
  }

  .dream-step {
    grid-template-columns: 35px 1fr 40px;

    gap: 15px;

    min-height: auto;

    padding: 35px 0;
  }

  .dream-step:hover {
    padding-left: 8px;
  }

  .step-number {
    font-size: 8px;
  }

  .step-content h3 {
    font-size: 29px;

    line-height: 0.95;

    letter-spacing: -1px;
  }

  .step-content p {
    font-size: 19px;

    line-height: 1.1;
  }

  .step-marker {
    width: 36px;
    height: 36px;
  }

  .journey-connector {
    height: 45px;

    margin-left: 17px;
  }

  .dream-journey {
    margin-bottom: 110px;
  }

  .dream-scale {
    margin-bottom: 110px;

    padding-top: 35px;
  }

  .scale-label span {
    font-size: 32px;
  }

  .scale-label p {
    font-size: 6px;

    letter-spacing: 1px;
  }

  .dream-closing h3 {
    font-size: 42px;

    letter-spacing: -1.5px;
  }

  .dream-closing h4 {
    font-size: 23px;
  }

  .dream-closing h5 {
    font-size: 28px;
  }

  .dream-grid {
    opacity: 0.2;
  }

  .dream-glow {
    width: 400px;
    height: 400px;

    right: -250px;
    bottom: -150px;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .dream-container {
    width: calc(100% - 30px);
  }

  .dream-intro h2 {
    font-size: 69px;
  }

  .step-content h3 {
    font-size: 25px;
  }

  .step-content p {
    font-size: 17px;
  }

  .dream-closing h3 {
    font-size: 36px;
  }

  .dream-closing h4 {
    font-size: 21px;
  }

  .dream-closing h5 {
    font-size: 25px;
  }
}
</style>