<template>
  <section id="mission" class="mission">
    <div class="mission-container">

      <div class="mission-top">
        <div class="mission-index">
          <span>02</span>
          <div></div>
          <span>MISSION</span>
        </div>

        <p>
          WHAT WE DO
        </p>
      </div>

      <div class="mission-intro">
        <div class="intro-label">
          <span></span>
          OUR MISSION
        </div>

        <h2>
          Empowering people
          to become
          <span>real estate entrepreneurs.</span>
        </h2>

        <p>
          To empower individuals to start, build, and grow their own
          real estate business through professional training, proven
          systems, technology, marketing support, and a strong network.
        </p>
      </div>

      <div class="mission-visual">
        <div class="mission-image">
          <img
            src="/public/images/mission.jpg"
            alt="Awgro Realty Associate Partner planning a real estate business"
          />

          <div class="image-overlay"></div>

          <div class="image-caption">
            <span>THE AWGRO ECOSYSTEM</span>
            <strong>Knowledge. Systems. Growth.</strong>
          </div>
        </div>

        <div class="visual-side">
          <span class="side-number">02</span>
          <p>
            Everything you need to move from
            opportunity to ownership.
          </p>
        </div>
      </div>

      <div class="mission-features">

        <article class="feature">
          <div class="feature-number">01</div>

          <div class="feature-content">
            <span>KNOWLEDGE</span>

            <h3>
              Learn the
              <em>business.</em>
            </h3>

            <p>
              Train Associate Partners in real estate knowledge,
              sales, negotiation, investment, communication,
              and business development.
            </p>
          </div>

          <span class="feature-arrow">↗</span>
        </article>

        <article class="feature">
          <div class="feature-number">02</div>

          <div class="feature-content">
            <span>MARKET</span>

            <h3>
              Understand
              <em>your market.</em>
            </h3>

            <p>
              Provide practical knowledge about the Ahmedabad
              and Gandhinagar real estate markets.
            </p>
          </div>

          <span class="feature-arrow">↗</span>
        </article>

        <article class="feature">
          <div class="feature-number">03</div>

          <div class="feature-content">
            <span>ECOSYSTEM</span>

            <h3>
              Grow with
              <em>the right support.</em>
            </h3>

            <p>
              Build your business with systems, technology,
              marketing support, and a strong professional network.
            </p>
          </div>

          <span class="feature-arrow">↗</span>
        </article>

      </div>

      <div class="mission-bottom">
        <div class="bottom-line"></div>

        <p>
          YOUR BUSINESS.
          YOUR NETWORK.
          YOUR FUTURE.
        </p>

        <a
          href="#contact"
          @click.prevent="scrollToSection('contact')"
        >
          <span>Start Your Journey</span>
          <strong>↗</strong>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToSection = (id: string) => {
  const section = document.getElementById(id)

  if (!section) {
    console.warn(`Section #${id} not found`)
    return
  }

  const navbar = document.querySelector('.navbar') as HTMLElement | null
  const navbarHeight = navbar?.offsetHeight ?? 82

  const sectionTop =
    section.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: sectionTop - navbarHeight,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.mission {
  --blue: #2788a9;
  --blue-dark: #1f718d;
  --blue-light: #55abc6;
  --dark: #303538;
  --gray: #50575b;
  --gray-light: #747c80;
  --surface: #eef4f6;
  --white: #ffffff;
  --border: #d7e1e5;

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
    var(--surface);

  color: var(--dark);
}

.mission-container {
  position: relative;

  z-index: 2;

  width: min(
    calc(100% - 100px),
    1440px
  );

  margin: 0 auto;

  padding:
    100px
    0
    90px;
}

.mission-top {
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 70px;
}

.mission-index {
  display: flex;

  align-items: center;

  gap: 12px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 8px;
  font-weight: 800;

  letter-spacing: 0.2em;
}

.mission-index span:first-child {
  color: var(--blue);

  font-family: var(--display);

  font-size: 25px;

  font-weight: 500;

  letter-spacing: -0.02em;
}

.mission-index div {
  width: 35px;
  height: 1px;

  background: var(--blue);
}

.mission-top > p {
  margin: 0;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 8px;
  font-weight: 800;

  letter-spacing: 0.22em;
}

.mission-intro {
  max-width: 1050px;

  margin-bottom: 60px;
}

.intro-label {
  display: flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 22px;

  color: var(--blue);

  font-family: var(--body);

  font-size: 9px;
  font-weight: 800;

  letter-spacing: 0.22em;
}

.intro-label span {
  width: 7px;
  height: 7px;

  background: var(--blue);

  border-radius: 50%;
}

.mission-intro h2 {
  max-width: 900px;

  margin: 0;

  font-family: var(--display);

  font-size:
    clamp(
      58px,
      7vw,
      105px
    );

  font-weight: 500;

  line-height: 0.9;

  letter-spacing: -0.06em;
}

.mission-intro h2 span {
  display: block;

  margin-left:
    clamp(
      35px,
      7vw,
      130px
    );

  color: var(--blue);

  font-style: italic;
}

.mission-intro > p {
  max-width: 650px;

  margin:
    30px
    0
    0;

  color: var(--gray);

  font-family: var(--body);

  font-size: 13px;

  line-height: 1.8;
}

.mission-visual {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    180px;

  gap: 25px;

  align-items: stretch;

  margin-bottom: 65px;
}

.mission-image {
  position: relative;

  width: 100%;

  height:
    clamp(
      300px,
      34vw,
      440px
    );

  overflow: hidden;

  background: var(--dark);

  border-radius: 2px;
}

.mission-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  filter:
    saturate(0.8)
    contrast(1.05);

  transition:
    transform 0.8s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.mission-image:hover img {
  transform: scale(1.035);
}

.image-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      transparent 35%,
      rgba(
        20,
        27,
        30,
        0.78
      ) 100%
    );
}

.image-caption {
  position: absolute;

  left: 25px;
  bottom: 24px;

  display: flex;

  flex-direction: column;

  gap: 4px;
}

.image-caption span {
  color:
    rgba(
      255,
      255,
      255,
      0.62
    );

  font-family: var(--body);

  font-size: 7px;
  font-weight: 800;

  letter-spacing: 0.2em;
}

.image-caption strong {
  color: var(--white);

  font-family: var(--display);

  font-size: 30px;

  font-weight: 500;
}

.visual-side {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding:
    20px
    0
    20px
    22px;

  border-left:
    1px solid
    var(--border);
}

.side-number {
  color: var(--blue);

  font-family: var(--display);

  font-size: 50px;

  font-weight: 500;

  line-height: 0.8;
}

.visual-side p {
  margin: 0;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 10px;

  line-height: 1.7;
}

.mission-features {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  border-top:
    1px solid
    var(--border);

  border-bottom:
    1px solid
    var(--border);
}

.feature {
  position: relative;

  min-height: 310px;

  padding:
    28px
    28px
    30px;

  border-right:
    1px solid
    var(--border);

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  transition:
    background 0.3s ease;
}

.feature:last-child {
  border-right: none;
}

.feature:hover {
  background: var(--white);
}

.feature-number {
  color: var(--blue);

  font-family: var(--display);

  font-size: 32px;

  font-weight: 500;

  line-height: 1;
}

.feature-content > span {
  display: block;

  margin-bottom: 12px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing: 0.2em;
}

.feature-content h3 {
  margin: 0 0 18px;

  color: var(--dark);

  font-family: var(--display);

  font-size:
    clamp(
      29px,
      3vw,
      42px
    );

  font-weight: 500;

  line-height: 0.95;

  letter-spacing: -0.04em;
}

.feature-content h3 em {
  display: block;

  color: var(--blue);

  font-style: italic;
}

.feature-content p {
  max-width: 300px;

  margin: 0;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 10px;

  line-height: 1.75;
}

.feature-arrow {
  position: absolute;

  right: 25px;
  top: 27px;

  color: var(--blue);

  font-size: 18px;

  opacity: 0;

  transform:
    translate(
      -4px,
      4px
    );

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.feature:hover .feature-arrow {
  opacity: 1;

  transform:
    translate(
      0,
      0
    );
}

.mission-bottom {
  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  gap: 30px;

  margin-top: 65px;
}

.bottom-line {
  width: 100%;
  height: 1px;

  background: var(--border);
}

.mission-bottom p {
  margin: 0;

  color: var(--gray);

  font-family: var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 0.18em;

  white-space: nowrap;
}

.mission-bottom a {
  justify-self: end;

  display: inline-flex;

  align-items: center;

  gap: 12px;

  color: var(--blue);

  text-decoration: none;

  font-family: var(--body);

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.mission-bottom a strong {
  font-size: 17px;

  transition:
    transform 0.25s ease;
}

.mission-bottom a:hover strong {
  transform:
    translate(
      3px,
      -3px
    );
}

@media (max-width: 1050px) {
  .mission-container {
    width: calc(100% - 70px);
  }

  .mission-visual {
    grid-template-columns:
      minmax(0, 1fr)
      140px;
  }

  .feature {
    padding:
      24px
      20px;
  }
}

@media (max-width: 800px) {
  .mission-container {
    width: calc(100% - 40px);

    padding:
      75px
      0
      65px;
  }

  .mission-top {
    margin-bottom: 50px;
  }

  .mission-intro {
    margin-bottom: 45px;
  }

  .mission-intro h2 {
    font-size:
      clamp(
        52px,
        10vw,
        78px
      );
  }

  .mission-visual {
    grid-template-columns: 1fr;
  }

  .mission-image {
    height:
      clamp(
        280px,
        48vw,
        390px
      );
  }

  .visual-side {
    min-height: 90px;

    padding:
      15px
      0
      0;

    border-left: none;

    border-top:
      1px solid
      var(--border);

    flex-direction: row;

    align-items: center;
  }

  .mission-features {
    grid-template-columns: 1fr;
  }

  .feature {
    min-height: 250px;

    border-right: none;

    border-bottom:
      1px solid
      var(--border);
  }

  .feature:last-child {
    border-bottom: none;
  }

  .mission-bottom {
    grid-template-columns:
      1fr;

    gap: 20px;
  }

  .bottom-line {
    display: none;
  }

  .mission-bottom a {
    justify-self: start;
  }
}

@media (max-width: 520px) {
  .mission-container {
    width: calc(100% - 30px);

    padding:
      60px
      0
      55px;
  }

  .mission-top > p {
    display: none;
  }

  .mission-intro h2 {
    font-size: 49px;

    line-height: 0.94;
  }

  .mission-intro h2 span {
    margin-left: 20px;
  }

  .mission-intro > p {
    font-size: 10px;

    line-height: 1.75;
  }

  .mission-image {
    height: 230px;
  }

  .image-caption {
    left: 16px;
    bottom: 17px;
  }

  .image-caption strong {
    font-size: 23px;
  }

  .feature {
    min-height: 230px;

    padding:
      22px
      20px;
  }

  .feature-content h3 {
    font-size: 31px;
  }

  .feature-content p {
    font-size: 9px;
  }

  .mission-bottom p {
    font-size: 7px;

    white-space: normal;

    line-height: 1.7;
  }
}
</style>