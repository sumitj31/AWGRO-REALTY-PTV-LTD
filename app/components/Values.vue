<template>
  <section id="values" class="values-section">

    <!-- Background -->
    <div class="values-grid"></div>
    <div class="values-watermark">07</div>

    <div class="values-container">

      <!-- Section Label -->
      <div class="section-label">
        <span class="label-number">06</span>
        <span class="label-line"></span>
        <span>CORE VALUES</span>
      </div>

      <!-- Header -->
      <div class="values-header">

        <div class="header-meta">
          <span>WHAT</span>
          <span>WE</span>
          <span>STAND</span>
          <span>FOR</span>
        </div>

        <div class="header-content">

          <p class="eyebrow">
            THE PRINCIPLES BEHIND THE ECOSYSTEM
          </p>

          <h2>
            BUILT ON
            <span>WHAT MATTERS.</span>
          </h2>

        </div>

      </div>

      <!-- Values List -->
      <div class="values-list">

        <!-- 01 Entrepreneurship -->
        <article class="value-item">

          <div class="value-number">
            01
          </div>

          <div class="value-title">
            <span>01 / MINDSET</span>

            <h3>
              ENTREPRENEURSHIP
            </h3>
          </div>

          <div class="value-description">
            <p>
              We encourage every Associate Partner to think and act like a
              business owner.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

        <!-- 02 Learning -->
        <article class="value-item">

          <div class="value-number">
            02
          </div>

          <div class="value-title">
            <span>02 / DEVELOPMENT</span>

            <h3>
              LEARNING
            </h3>
          </div>

          <div class="value-description">
            <p>
              The real estate industry is constantly changing. Continuous
              learning is the foundation of long-term success.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

        <!-- 03 Trust -->
        <article class="value-item">

          <div class="value-number">
            03
          </div>

          <div class="value-title">
            <span>03 / RELATIONSHIPS</span>

            <h3>
              TRUST
            </h3>
          </div>

          <div class="value-description">
            <p>
              We build businesses through relationships, and relationships
              are built through trust.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

        <!-- 04 Teamwork -->
        <article class="value-item">

          <div class="value-number">
            04
          </div>

          <div class="value-title">
            <span>04 / COLLABORATION</span>

            <h3>
              TEAMWORK
            </h3>
          </div>

          <div class="value-description">
            <p>
              Your business may be your own, but your growth becomes stronger
              when you have the right team and ecosystem around you.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

        <!-- 05 Professionalism -->
        <article class="value-item">

          <div class="value-number">
            05
          </div>

          <div class="value-title">
            <span>05 / STANDARD</span>

            <h3>
              PROFESSIONALISM
            </h3>
          </div>

          <div class="value-description">
            <p>
              We believe real estate should be treated as a serious profession
              and a long-term business.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

        <!-- 06 Transparency -->
        <article class="value-item">

          <div class="value-number">
            06
          </div>

          <div class="value-title">
            <span>06 / INTEGRITY</span>

            <h3>
              TRANSPARENCY
            </h3>
          </div>

          <div class="value-description">
            <p>
              We believe in honest communication with clients, developers,
              investors, and our Associate Partners.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

        <!-- 07 Growth -->
        <article class="value-item value-item-final">

          <div class="value-number">
            07
          </div>

          <div class="value-title">
            <span>07 / PROGRESS</span>

            <h3>
              GROWTH
            </h3>
          </div>

          <div class="value-description">
            <p>
              We want our Associate Partners to grow financially,
              professionally, and personally.
            </p>
          </div>

          <div class="value-arrow">
            ↗
          </div>

        </article>

      </div>

      <!-- Closing -->
      <div class="values-closing">

        <div class="closing-line"></div>

        <p class="closing-label">
          SEVEN PRINCIPLES. ONE CULTURE.
        </p>

        <h3>
          THE VALUES THAT
          <span>MOVE US FORWARD.</span>
        </h3>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   VALUES SECTION
========================================= */

.values-section {
  position: relative;

  width: 100%;

  background: #090909;

  color: #f4f1e9;

  overflow: hidden;
}

/* =========================================
   BACKGROUND GRID
========================================= */

.values-grid {
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
   WATERMARK
========================================= */

.values-watermark {
  position: absolute;

  top: 10%;

  right: -2%;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(350px, 55vw, 850px);

  line-height: 0.7;

  letter-spacing: -45px;

  color: rgba(244, 241, 233, 0.018);

  pointer-events: none;

  user-select: none;
}

/* =========================================
   CONTAINER
========================================= */

.values-container {
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
   HEADER
========================================= */

.values-header {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  margin-bottom: 125px;
}

.header-meta {
  display: flex;
  flex-direction: column;

  gap: 5px;

  padding-top: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 8px;

  font-weight: 600;

  letter-spacing: 2.5px;

  color: rgba(244, 241, 233, 0.3);
}

.header-meta span:first-child {
  color: #b59a67;
}

.header-content {
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

.header-content h2 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(65px, 9vw, 140px);

  font-weight: 300;

  line-height: 0.78;

  letter-spacing: -7px;

  text-transform: uppercase;
}

.header-content h2 span {
  display: block;

  margin-left: clamp(30px, 6vw, 100px);

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  letter-spacing: -4px;

  color: #b59a67;
}

/* =========================================
   VALUES LIST
========================================= */

.values-list {
  border-top: 1px solid rgba(244, 241, 233, 0.17);

  margin-bottom: 170px;
}

/* =========================================
   VALUE ITEM
========================================= */

.value-item {
  display: grid;

  grid-template-columns: 80px minmax(300px, 1.1fr) minmax(300px, 0.9fr) 45px;

  gap: 35px;

  align-items: center;

  min-height: 185px;

  padding: 32px 0;

  border-bottom: 1px solid rgba(244, 241, 233, 0.1);

  transition:
    padding-left 0.45s ease,
    padding-right 0.45s ease,
    background 0.45s ease;
}

.value-item:hover {
  padding-left: 25px;
  padding-right: 25px;

  background: rgba(244, 241, 233, 0.035);
}

.value-number {
  align-self: start;

  padding-top: 9px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.value-title {
  display: flex;
  flex-direction: column;

  gap: 14px;
}

.value-title > span {
  font-family: Inter, Arial, sans-serif;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: rgba(244, 241, 233, 0.35);
}

.value-title h3 {
  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(40px, 4.3vw, 67px);

  font-weight: 400;

  line-height: 0.9;

  letter-spacing: -2.5px;

  color: #f4f1e9;
}

/* =========================================
   DESCRIPTION
========================================= */

.value-description {
  max-width: 430px;
}

.value-description p {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 13px;

  line-height: 1.8;

  color: rgba(244, 241, 233, 0.52);
}

/* =========================================
   ARROW
========================================= */

.value-arrow {
  justify-self: end;

  font-family: Inter, Arial, sans-serif;

  font-size: 19px;

  color: #b59a67;

  opacity: 0;

  transform: translate(-8px, 8px);

  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.value-item:hover .value-arrow {
  opacity: 1;

  transform: translate(0, 0);
}

/* =========================================
   CLOSING
========================================= */

.values-closing {
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

  color: rgba(244, 241, 233, 0.4);
}

.values-closing h3 {
  max-width: 950px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(38px, 5vw, 75px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.values-closing h3 span {
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
  .values-container {
    width: calc(100% - 70px);
  }

  .values-header {
    grid-template-columns: 130px 1fr;

    gap: 45px;
  }

  .value-item {
    grid-template-columns: 55px 1fr 0.8fr 35px;

    gap: 22px;
  }

  .value-title h3 {
    font-size: 43px;
  }

  .value-description p {
    font-size: 12px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .values-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .values-header {
    display: block;

    margin-bottom: 80px;
  }

  .header-meta {
    flex-direction: row;

    margin-bottom: 40px;

    padding: 0;
  }

  .header-meta span:not(:last-child)::after {
    content: "/";

    margin-left: 9px;

    color: rgba(244, 241, 233, 0.18);
  }

  .header-content h2 {
    font-size: clamp(55px, 15vw, 82px);

    line-height: 0.8;

    letter-spacing: -4px;
  }

  .header-content h2 span {
    margin-left: 25px;

    letter-spacing: -2px;
  }

  .values-list {
    margin-bottom: 110px;
  }

  .value-item {
    grid-template-columns: 32px 1fr 30px;

    gap: 14px;

    min-height: auto;

    padding: 32px 0;
  }

  .value-item:hover {
    padding-left: 8px;
    padding-right: 8px;
  }

  .value-number {
    font-size: 9px;
  }

  .value-title {
    gap: 12px;
  }

  .value-title > span {
    font-size: 6px;

    letter-spacing: 2px;
  }

  .value-title h3 {
    font-size: 31px;

    line-height: 0.95;

    letter-spacing: -1.2px;
  }

  .value-description {
    grid-column: 2 / -1;

    max-width: none;

    padding-top: 3px;
  }

  .value-description p {
    font-size: 12px;

    line-height: 1.75;
  }

  .value-arrow {
    grid-column: 3;

    grid-row: 1;

    align-self: center;
  }

  .values-closing h3 {
    font-size: 41px;

    letter-spacing: -1.5px;
  }

  .values-watermark {
    top: 20%;

    right: -20%;

    font-size: 450px;
  }

  .values-grid {
    opacity: 0.2;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .values-container {
    width: calc(100% - 30px);
  }

  .header-content h2 {
    font-size: 51px;
  }

  .value-title h3 {
    font-size: 27px;
  }

  .value-description p {
    font-size: 11px;
  }

  .values-closing h3 {
    font-size: 35px;
  }
}
</style>