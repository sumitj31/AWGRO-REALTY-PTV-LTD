<template>
  <section id="about" class="about-section">
    <!-- Background architectural detail -->
    <div class="about-grid"></div>

    <div class="about-container">

      <!-- Section Label -->
      <div class="section-label">
        <!-- <span class="label-number">01</span> -->
        <span class="label-line"></span>
        <span>ABOUT AWGRO REALTY</span>
      </div>

      <!-- Intro -->
      <div class="about-intro">

        <!-- <div class="intro-number">
          <span>01</span>
        </div> -->

        <div class="intro-heading">
          <p class="eyebrow">COMPANY INTRODUCTION</p>

          <h2>
            BUILDING A
            <span>NEW GENERATION</span>
            OF REAL ESTATE
            <em>ENTREPRENEURS.</em>
          </h2>
        </div>

      </div>

      <!-- Main Content -->
      <div class="about-content">

        <!-- Left Image -->
        <div class="about-image">
          <img
            src="/public/images/about.jpg"
            alt="Modern architecture representing Awgro Realty"
          />

          <div class="image-caption">
            <span>AHMEDABAD / GANDHINAGAR</span>
            <!-- <span>01 — 02</span> -->
          </div>
        </div>

        <!-- Right Content -->
        <div class="about-copy">

          <p class="lead">
            Awgro Realty Pvt. Ltd. is building a new generation of
            <strong>Real Estate Entrepreneurs</strong> across Ahmedabad
            and Gandhinagar.
          </p>

          <p>
            Our mission is to help individuals start their own journey
            in the real estate business by providing them with the
            <strong>
              knowledge, training, technology, marketing support,
              systems, and professional network
            </strong>
            required to build a successful real estate career.
          </p>

          <p>
            We are creating a community of
            <strong>100+ Associate Partners</strong> who are not simply property salespeople, but independent-minded real estate professionals with the ambition to build their own business and personal brand. Every Associate Partner becomes part of a connected ecosystem where experience, knowledge, opportunities, and relationships can be shared to create stronger outcomes for both professionals and their clients.
          </p>

          <p>
            We believe that real estate is not limited to transactions. It is built on
            <strong>
              trust, relationships, discipline, market understanding, and consistency
            </strong>
           with the right attitude, learning mindset, commitment, and support system, anyone with the ambition to grow can develop a successful career and create a meaningful presence in the real estate industry.
          </p>

        </div>

      </div>

      <!-- Philosophy -->
      <div class="about-philosophy">

        <div class="philosophy-label">
          <span>OUR APPROACH</span>
        </div>

        <div class="philosophy-content">

          <div class="philosophy-row">
            <span class="row-number">01</span>

            <h3>
              YOU BUILD
              <span>YOUR REAL ESTATE BUSINESS.</span>
            </h3>
          </div>

          <div class="philosophy-row">
            <span class="row-number">02</span>

            <h3>
              WE BUILD
              <span>THE SYSTEM THAT HELPS YOU GROW.</span>
            </h3>
          </div>

          <div class="philosophy-row philosophy-final">
            <span class="row-number">03</span>

            <h3>
              TOGETHER,
              <span>WE BUILD A STRONGER REAL ESTATE COMMUNITY.</span>
            </h3>
          </div>

        </div>

      </div>

      <!-- Closing Statement -->
      <div class="about-closing">

        <span class="closing-line"></span>

        <p>
          Real estate is more than a transaction.
        </p>

        <h3>
          IT IS AN OPPORTUNITY
          <span>TO BUILD SOMETHING OF YOUR OWN.</span>
        </h3>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   ABOUT SECTION
========================================= */

.about-section {
  position: relative;

  width: 100%;

  background: #f4f1e9;

  color: #090909;

  overflow: hidden;
}

/* =========================================
   GRID BACKGROUND
========================================= */

.about-grid {
  position: absolute;

  top: 0;
  right: 8%;

  width: 1px;
  height: 100%;

  /* background: rgba(9, 9, 9, 0.08); */

  pointer-events: none;
}

.about-grid::before,
.about-grid::after {
  content: "";

  position: absolute;

  top: 0;

  width: 1px;
  height: 100%;

  /* background: rgba(9, 9, 9, 0.05); */
}

.about-grid::before {
  right: 140px;
}

.about-grid::after {
  right: 280px;
}

/* =========================================
   CONTAINER
========================================= */

.about-container {
  position: relative;

  z-index: 2;

  width: min(1440px, calc(100% - 100px));

  margin: 0 auto;

  padding: 150px 0 70px;
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

  color: #6e6b64;
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

.about-intro {
  display: grid;

  /* grid-template-columns: 90px 1fr; */

  gap: 35px;

  margin-bottom: 120px;
}

/* .intro-number {
  padding-top: 12px;
}

.intro-number span {
  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  letter-spacing: 2px;

  color: #9a978f;
} */

.intro-heading {
  max-width: 1250px;
}

.eyebrow {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 3.5px;

  color: #b59a67;
}

.intro-heading h2 {
  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(58px, 7.2vw, 118px);

  font-weight: 400;

  line-height: 0.90;

  letter-spacing: 2px;

  text-transform: uppercase;
}

.intro-heading h2 span {
  display: block;

  margin-left: clamp(25px, 5vw, 90px);

  font-family: Inter, Arial, sans-serif;

  font-size: 0.67em;

  font-weight: 300;

  letter-spacing: -3px;
}

.intro-heading h2 em {
  display: block;

  margin-left: clamp(55px, 11vw, 190px);

  font-style: italic;

  font-weight: 400;

  color: #383631;
}

/* =========================================
   MAIN CONTENT
========================================= */

.about-content {
  display: grid;

  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);

  gap: clamp(60px, 9vw, 150px);

  align-items: start;

  margin-bottom: 160px;
}

/* =========================================
   IMAGE
========================================= */

.about-image {
  position: relative;

  width: 100%;

  aspect-ratio: 4 / 5;

  overflow: hidden;

  background: #d8d3c8;
}

.about-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  filter: grayscale(12%) contrast(1.04);

  transition:
    transform 0.8s ease,
    filter 0.8s ease;
}

.about-image:hover img {
  transform: scale(1.035);

  filter: grayscale(0%) contrast(1.06);
}

.image-caption {
  position: absolute;

  left: 22px;
  right: 22px;
  bottom: 20px;

  display: flex;
  justify-content: space-between;

  padding-top: 13px;

  border-top: 1px solid rgba(244, 241, 233, 0.35);

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;
  font-weight: 600;

  letter-spacing: 2px;

  color: #f4f1e9;
}

/* =========================================
   COPY
========================================= */

.about-copy {
  padding-top: 5px;

  max-width: 510px;
}

.about-copy p {
  margin: 0 0 30px;

  font-family: Inter, Arial, sans-serif;

  font-size: 16px;

  line-height: 1.9;

  color: #5d5a54;
}

.about-copy p.lead {
  margin-bottom: 55px;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(25px, 2.2vw, 34px);

  line-height: 1.25;

  color: #171717;
}

.about-copy strong {
  color: #171717;

  font-weight: 600;
}

/* =========================================
   PHILOSOPHY
========================================= */

.about-philosophy {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  padding: 85px 0;

  border-top: 1px solid rgba(9, 9, 9, 0.18);

  border-bottom: 1px solid rgba(9, 9, 9, 0.18);
}

.philosophy-label {
  padding-top: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 2.5px;

  color: #8b887f;
}

.philosophy-content {
  width: 100%;
}

.philosophy-row {
  display: grid;

  grid-template-columns: 55px 1fr;

  gap: 25px;

  padding: 30px 0;

  border-bottom: 1px solid rgba(9, 9, 9, 0.12);

  transition:
    padding-left 0.4s ease,
    border-color 0.4s ease;
}

.philosophy-row:first-child {
  padding-top: 0;
}

.philosophy-row:last-child {
  border-bottom: none;

  padding-bottom: 0;
}

.philosophy-row:hover {
  padding-left: 12px;

  border-color: #b59a67;
}

.row-number {
  padding-top: 7px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;
  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.philosophy-row h3 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(24px, 3vw, 26px);

  font-weight: 400;

  line-height: 1.05;

  letter-spacing: -1.8px;

  text-transform: uppercase;

  color: #171717;
}

.philosophy-row h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: 0.9em;

  font-style: italic;

  text-transform: none;

  letter-spacing: -1px;

  color: #4a4741;
}

/* =========================================
   CLOSING
========================================= */

.about-closing {
  display: flex;
  flex-direction: column;

  align-items: center;

  text-align: center;

  padding-top: 50px;
}

.closing-line {
  width: 1px;
  height: 65px;

  margin-bottom: 30px;

  background: #b59a67;
}

.about-closing p {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 3px;

  text-transform: uppercase;

  color: #858179;
}

.about-closing h3 {
  max-width: 900px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(38px, 5vw, 48px);

  font-weight: 400;

  line-height: 0.95;

  letter-spacing: -2px;

  text-transform: uppercase;
}

.about-closing h3 span {
  display: block;

  font-family: Inter, Arial, sans-serif;

  font-size: 0.52em;

  font-weight: 300;

  line-height: 1.1;

  letter-spacing: -1px;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .about-container {
    width: calc(100% - 70px);
  }

  .about-intro {
    grid-template-columns: 55px 1fr;

    gap: 25px;
  }

  .about-content {
    grid-template-columns: 1fr 0.8fr;

    gap: 55px;
  }

  .about-philosophy {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .about-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .about-intro {
    display: block;

    margin-bottom: 75px;
  }

  /* .intro-number {
    margin-bottom: 20px;
  } */

  .intro-heading h2 {
    font-size: clamp(46px, 13vw, 72px);

    line-height: 0.9;

    letter-spacing: -2.5px;
  }

  .intro-heading h2 span {
    margin-left: 15px;

    letter-spacing: -1.5px;
  }

  .intro-heading h2 em {
    margin-left: 30px;
  }

  .about-content {
    display: flex;
    flex-direction: column;

    gap: 55px;

    margin-bottom: 100px;
  }

  .about-image {
    aspect-ratio: 4 / 5;
  }

  .about-copy {
    max-width: none;
  }

  .about-copy p {
    font-size: 13px;

    line-height: 1.8;
  }

  .about-copy p.lead {
    font-size: 26px;

    margin-bottom: 35px;
  }

  .about-philosophy {
    display: block;

    padding: 60px 0;
  }

  .philosophy-label {
    margin-bottom: 35px;
  }

  .philosophy-row {
    grid-template-columns: 35px 1fr;

    gap: 15px;

    padding: 25px 0;
  }

  .philosophy-row h3 {
    font-size: 26px;

    letter-spacing: -1px;
  }

  .about-closing {
    padding-top: 100px;
  }

  .about-closing h3 {
    font-size: 42px;
  }

  .about-grid {
    display: none;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .about-container {
    width: calc(100% - 30px);
  }

  .intro-heading h2 {
    font-size: 43px;
  }

  .about-copy p.lead {
    font-size: 23px;
  }

  .philosophy-row h3 {
    font-size: 22px;
  }

  .about-closing h3 {
    font-size: 36px;
  }
}
</style>