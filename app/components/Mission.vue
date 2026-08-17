<template>
  <section id="mission" class="mission-section">

    <!-- Background Grid -->
    <div class="mission-grid"></div>

    <div class="mission-container">

      <!-- Section Label -->
      <div class="section-label">
        <!-- <span class="label-number">03</span> -->
        <span class="label-line"></span>
        <span>OUR MISSION</span>
      </div>

      <!-- Mission Intro -->
      <div class="mission-intro">

        <!-- <div class="intro-index">
          <span>03</span>
          <span>MISSION</span>
        </div> -->

        <div class="intro-content">

          <p class="eyebrow">WHAT WE ARE BUILDING</p>

          <h2>
            START.
            <span>BUILD.</span>
            <em>GROW.</em>
          </h2>

        </div>

      </div>

      <!-- Main Mission Statement -->
      <div class="mission-statement">

        <div class="statement-label">
          <span>MAIN MISSION STATEMENT</span>
        </div>

        <div class="statement-content">
          <p>
            To empower individuals to start, build, and grow their own
            real estate business through professional training, proven
            systems, technology, marketing support, and a strong network.
          </p>
        </div>

      </div>

      <!-- Mission Points -->
      <div class="mission-points">

        <div class="points-header">
          <span>HOW WE DO IT</span>

          <span class="points-count">
            09 <small>MISSION POINTS</small>
          </span>
        </div>

        <div class="mission-list">

          <!-- 01 -->
          <article class="mission-item">
            <div class="item-number">01</div>

            <div class="item-content">
              <h3>
                START WITH THE
                <span>RIGHT FOUNDATION.</span>
              </h3>

              <p>
                Help aspiring individuals <strong>start their real estate
                business</strong> with the right foundation.
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 02 -->
          <article class="mission-item">
            <div class="item-number">02</div>

            <div class="item-content">
              <h3>
                TRAIN FOR
                <span>REAL-WORLD SUCCESS.</span>
              </h3>

              <p>
                Train Associate Partners in <strong>real estate knowledge,
                sales, negotiation, investment, communication, and business
                development.</strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 03 -->
          <article class="mission-item">
            <div class="item-number">03</div>

            <div class="item-content">
              <h3>
                KNOW THE
                <span>LOCAL MARKET.</span>
              </h3>

              <p>
                Provide practical knowledge about the
                <strong>Ahmedabad and Gandhinagar real estate markets.</strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 04 -->
          <article class="mission-item">
            <div class="item-number">04</div>

            <div class="item-content">
              <h3>
                ACCESS THE
                <span>AWGRO ECOSYSTEM.</span>
              </h3>

              <p>
                Give Associates access to a professional ecosystem of
                <strong>
                  projects, developers, clients, investors, and business
                  opportunities.
                </strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 05 -->
          <article class="mission-item">
            <div class="item-number">05</div>

            <div class="item-content">
              <h3>
                BUILD YOUR
                <span>OWN NETWORK.</span>
              </h3>

              <p>
                Help every Associate Partner build their
                <strong>
                  own network and long-term client relationships.
                </strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 06 -->
          <article class="mission-item">
            <div class="item-number">06</div>

            <div class="item-content">
              <h3>
                BUILD YOUR
                <span>PERSONAL BRAND.</span>
              </h3>

              <p>
                Support them in creating their
                <strong>
                  personal brand and professional identity
                </strong>
                in the real estate industry.
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 07 -->
          <article class="mission-item">
            <div class="item-number">07</div>

            <div class="item-content">
              <h3>
                USE SYSTEMS &
                <span>TECHNOLOGY.</span>
              </h3>

              <p>
                Introduce systems and technology that make real estate
                business <strong>more organised, transparent, and scalable.</strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 08 -->
          <article class="mission-item">
            <div class="item-number">08</div>

            <div class="item-content">
              <h3>
                GROW INTO
                <span>LEADERSHIP.</span>
              </h3>

              <p>
                Create opportunities for successful Associates to grow into
                <strong>team leaders and real estate business builders.</strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

          <!-- 09 -->
          <article class="mission-item mission-item-last">
            <div class="item-number">09</div>

            <div class="item-content">
              <h3>
                GROW
                <span>TOGETHER.</span>
              </h3>

              <p>
                Build a culture where
                <strong>
                  individual success and team success grow together.
                </strong>
              </p>
            </div>

            <div class="item-arrow">↗</div>
          </article>

        </div>
      </div>

      <!-- Mission Closing -->
      <div class="mission-closing">

        <!-- <div class="closing-number">
          09
        </div> -->

        <div class="closing-content">

          <p class="closing-eyebrow">
            OUR COMMITMENT
          </p>

          <h3>
            BUILD THE
            <span>FOUNDATION.</span>
          </h3>

          <h3>
            BUILD THE
            <span>BUSINESS.</span>
          </h3>

          <h3>
            BUILD THE
            <span>FUTURE.</span>
          </h3>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   MISSION SECTION
========================================= */

.mission-section {
  position: relative;

  width: 100%;

  background: #f4f1e9;

  color: #090909;

  overflow: hidden;
}

/* =========================================
   BACKGROUND GRID
========================================= */

.mission-grid {
  position: absolute;

  top: 0;
  left: 12%;

  width: 1px;
  height: 100%;

  /* background: rgba(9, 9, 9, 0.07); */

  pointer-events: none;
}

.mission-grid::before,
.mission-grid::after {
  content: "";

  position: absolute;

  top: 0;

  width: 1px;
  height: 100%;

  /* background: rgba(9, 9, 9, 0.045); */
}

.mission-grid::before {
  left: 180px;
}

.mission-grid::after {
  left: 360px;
}

/* =========================================
   CONTAINER
========================================= */

.mission-container {
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

.mission-intro {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 70px;

  margin-bottom: 115px;
}

.intro-index {
  display: flex;
  flex-direction: column;

  gap: 10px;

  padding-top: 12px;

  font-family: Inter, Arial, sans-serif;
}

.intro-index span:first-child {
  font-size: 72px;

  font-weight: 300;

  line-height: 0.8;

  letter-spacing: -4px;

  color: #171717;
}

.intro-index span:last-child {
  font-size: 8px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: #8a877f;
}

.intro-content {
  max-width: 1100px;
}

.eyebrow {
  margin: 0 0 25px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 3.5px;

  color: #b59a67;
}

.intro-content h2 {
 margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(52px, 6vw, 100px);

  font-weight: 400;

  line-height: 0.94;

  text-transform: uppercase;
}

.intro-content h2 span {
  display: block;

  margin-left: clamp(25px, 5vw, 90px);

  font-family: "DM Serif Display", Georgia, serif;

  font-weight: 400;

  font-style: italic;

  letter-spacing: -4px;

  color: #4a4741;
}

.intro-content h2 em {
  display: block;

  margin-left: clamp(60px, 11vw, 190px);

  font-family: Inter, Arial, sans-serif;

  font-style: normal;

  color: #b59a67;
}

/* =========================================
   MAIN STATEMENT
========================================= */

.mission-statement {
  display: grid;

  grid-template-columns: 190px 1fr;

  gap: 150px;

  max-width: 1440px;

  /* margin-left: auto; */

  margin-bottom: 150px;

  padding-top: 55px;

  border-top: 1px solid rgba(9, 9, 9, 0.18);
}

.statement-label {
  padding-top: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  width: 400px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: #8a877f;
}

.statement-content p {
  max-width: 930px;

  margin: 0;

  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(30px, 3.5vw, 54px);

  line-height: 1.2;

  letter-spacing: -1.5px;

  color: #171717;
}

/* =========================================
   MISSION POINTS
========================================= */

.mission-points {
  margin-bottom: 150px;

  border-top: 1px solid rgba(9, 9, 9, 0.18);
}

.points-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 25px 0;

  border-bottom: 1px solid rgba(9, 9, 9, 0.18);

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2.5px;

  color: #7e7b73;
}

.points-count {
  color: #b59a67;
}

.points-count small {
  margin-left: 8px;

  font-size: 7px;

  letter-spacing: 1.5px;

  color: #8a877f;
}

/* =========================================
   MISSION ITEM
========================================= */

.mission-item {
  display: grid;

  grid-template-columns: 80px 1fr 50px;

  gap: 30px;

  align-items: start;

  padding: 38px 0;

  border-bottom: 1px solid rgba(9, 9, 9, 0.12);

  transition:
    padding-left 0.4s ease,
    padding-right 0.4s ease,
    background 0.4s ease;
}

.mission-item:hover {
  padding-left: 22px;
  padding-right: 22px;

  background: rgba(216, 211, 200, 0.22);
}

.item-number {
  padding-top: 8px;

  font-family: Inter, Arial, sans-serif;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: 2px;

  color: #b59a67;
}

.item-content h3 {
  margin: 0 0 17px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(24px, 2.7vw, 26px);

  font-weight: 300;

  line-height: 0.98;

  letter-spacing: -1.8px;

  text-transform: uppercase;

  color: #171717;
}

.item-content h3 span {
  display: block;

  font-family: "DM Serif Display", Georgia, serif;

  font-style: italic;

  font-weight: 400;

  color: #4a4741;

  text-transform: none;

  letter-spacing: -1px;
}

.item-content p {
  max-width: 650px;

  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 16px;

  line-height: 1.75;

  color: #77736b;
}

.item-content strong {
  color: #25231f;

  font-weight: 600;
}

.item-arrow {
  justify-self: end;

  padding-top: 4px;

  font-family: Inter, Arial, sans-serif;

  font-size: 19px;

  color: #b59a67;

  opacity: 0;

  transform: translate(-8px, 8px);

  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.mission-item:hover .item-arrow {
  opacity: 1;

  transform: translate(0, 0);
}

/* =========================================
   CLOSING
========================================= */

.mission-closing {
  display: flex;

  grid-template-columns: 250px 1fr;

  gap: 80px;

  padding-top: 20px;
}

.closing-number {
  font-family: "DM Serif Display", Georgia, serif;

  font-size: clamp(110px, 15vw, 220px);

  line-height: 0.65;

  letter-spacing: -10px;

  color: #171717;
}

.closing-content {
  padding-top: 5px;
}

.closing-eyebrow {
  margin: 0 0 35px;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.closing-content h3 {
  margin: 0 0 8px;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(38px, 5vw, 75px);

  font-weight: 300;

  line-height: 0.9;

  letter-spacing: -3px;

  text-transform: uppercase;
}

.closing-content h3 span {
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
  .mission-container {
    width: calc(100% - 70px);
  }

  .mission-intro {
    grid-template-columns: 120px 1fr;

    gap: 40px;
  }

  .intro-index span:first-child {
    font-size: 55px;
  }

  .mission-statement {
    grid-template-columns: 130px 1fr;

    gap: 150px;
  }

  .mission-item {
    grid-template-columns: 55px 1fr 35px;

    gap: 20px;
  }

  .mission-closing {
    grid-template-columns: 170px 1fr;

    gap: 50px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .mission-container {
    width: calc(100% - 40px);

    padding: 100px 0 110px;
  }

  .section-label {
    margin-bottom: 70px;
  }

  .mission-intro {
    display: block;

    margin-bottom: 80px;
  }

  .intro-index {
    flex-direction: row;

    align-items: center;

    gap: 15px;

    margin-bottom: 40px;

    padding: 0;
  }

  .intro-index span:first-child {
    font-size: 48px;
  }

  .intro-content h2 {
    font-size: clamp(60px, 16vw, 92px);

    line-height: 0.82;

    letter-spacing: -4px;
  }

  .intro-content h2 span {
    margin-left: 15px;

    letter-spacing: -2px;
  }

  .intro-content h2 em {
    margin-left: 30px;
  }

  .mission-statement {
    display: block;

    margin-bottom: 100px;

    padding-top: 40px;
  }

  .statement-label {
    margin-bottom: 30px;
  }

  .statement-content p {
    font-size: 27px;

    line-height: 1.25;
  }

  .mission-points {
    margin-bottom: 100px;
  }

  .points-header {
    font-size: 8px;
  }

  .mission-item {
    grid-template-columns: 32px 1fr;

    gap: 14px;

    padding: 30px 0;
  }

  .mission-item:hover {
    padding-left: 8px;
    padding-right: 8px;
  }

  .item-number {
    font-size: 9px;
  }

  .item-content h3 {
    font-size: 25px;

    line-height: 1;

    letter-spacing: -1px;
  }

  .item-content p {
    font-size: 12px;

    line-height: 1.75;
  }

  .item-arrow {
    display: none;
  }

  .mission-closing {
    display: block;
  }

  .closing-number {
    margin-bottom: 50px;

    font-size: 110px;

    letter-spacing: -6px;
  }

  .closing-content h3 {
    font-size: 43px;

    letter-spacing: -1.5px;
  }

  .closing-eyebrow {
    margin-bottom: 25px;
  }

  .mission-grid {
    display: none;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .mission-container {
    width: calc(100% - 30px);
  }

  .intro-content h2 {
    font-size: 56px;
  }

  .statement-content p {
    font-size: 24px;
  }

  .item-content h3 {
    font-size: 22px;
  }

  .closing-number {
    font-size: 95px;
  }

  .closing-content h3 {
    font-size: 37px;
  }
}
</style>