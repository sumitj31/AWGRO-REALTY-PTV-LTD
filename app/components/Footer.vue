<template>
  <footer id="footer" class="footer">

    <div class="footer-container">

      <div class="footer-brand-row">
        <a
          href="#home"
          class="footer-logo"
          aria-label="AWGRO Realty"
        >
          <img
            src="/public/images/awgro logo2.png"
            alt="AWGRO Realty"
            class="footer-logo-img"
          />
        </a>

        <span class="footer-brand-meta">
          REAL ESTATE · ENTREPRENEURSHIP
        </span>
      </div>

      <div class="footer-grid">

        <div class="footer-brand">

          <span class="brand-label">
            AWGRO REALTY PVT. LTD.
          </span>

          <h2>
            BUILD YOUR
            <span>REAL ESTATE</span>
            <em>FUTURE.</em>
          </h2>

          <div class="brand-line">
            <span></span>
            <p>
              Building a stronger community
              of real estate entrepreneurs.
            </p>
          </div>

        </div>

        <div class="footer-cta">

          <span class="footer-label">
            START YOUR JOURNEY
          </span>

          <p>
            Join a growing network of real estate
            entrepreneurs across Ahmedabad
            and Gandhinagar.
          </p>

          <a
            href="#contact"
            class="footer-button"
          >
            <span>
              Become An Associate Partner
            </span>

            <span class="footer-arrow">
              ↗
            </span>
          </a>

        </div>

        <div class="footer-column">

          <span class="column-title">
            COMPANY
          </span>

          <a href="#home">
            Home
          </a>

          <a href="#vision">
            Vision
          </a>

          <a href="#mission">
            Mission
          </a>

          <a href="#faq">
            FAQ
          </a>

        </div>

        <div class="footer-column">

          <span class="column-title">
            GET STARTED
          </span>

          <a href="#contact">
            Contact Us
          </a>

          <a href="#contact">
            Become An Associate Partner
          </a>

          <a href="#contact">
            Talk To Our Team
          </a>

        </div>

        <div class="footer-quote">

          <span class="quote-number">
            01
          </span>

          <p>
            You build your real estate business.
            We build the system that helps you grow.
          </p>

          <span class="quote-accent">
            TOGETHER, WE BUILD THE FUTURE.
          </span>

        </div>

      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">

        <p>
          © 2026 Awgro Realty Pvt. Ltd.
        </p>

        <div class="footer-tagline">

          <span>
            Start Your Real Estate Business
          </span>

          <span class="dot"></span>

          <span>
            Build Your Network
          </span>

          <span class="dot"></span>

          <span>
            Create Your Future
          </span>

        </div>

      </div>

    </div>

  </footer>
</template>

<style scoped>
.footer {
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
    var(--dark);

  color:
    var(--white);

  border-top:
    1px solid
    rgba(
      255,
      255,
      255,
      0.08
    );
}

.footer-container {
  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 100px),
      1440px
    );

  margin: 0 auto;

  padding:
    48px
    0
    30px;
}

.footer-brand-row {
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding-bottom: 32px;

  border-bottom:
    1px solid
    rgba(
      255,
      255,
      255,
      0.1
    );
}

.footer-logo {
  display: inline-flex;

  align-items: center;

  text-decoration: none;
}

.footer-logo-img {
  display: block;

  width: auto;

  height: 44px;

  object-fit: contain;
}

.footer-brand-meta {
  color:
    rgba(
      255,
      255,
      255,
      0.38
    );

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.footer-grid {
  display: grid;

  grid-template-columns:
    1.45fr
    0.9fr
    0.65fr
    0.8fr
    1.35fr;

  gap: 50px;

  align-items: start;

  padding:
    55px
    0
    65px;
}

.footer-brand {
  min-width: 0;
}

.brand-label {
  display: block;

  margin-bottom: 20px;

  color:
    var(--blue-light);

  font-family:
    var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.footer-brand h2 {
  margin: 0;

  color:
    var(--white);

  font-family:
    var(--display);

  font-size:
    clamp(
      48px,
      4.8vw,
      76px
    );

  font-weight: 500;

  line-height:
    0.84;

  letter-spacing:
    -0.055em;
}

.footer-brand h2 span {
  display: block;

  color:
    rgba(
      255,
      255,
      255,
      0.78
    );
}

.footer-brand h2 em {
  display: block;

  margin-left:
    clamp(
      25px,
      3vw,
      60px
    );

  color:
    var(--blue);

  font-style:
    italic;

  font-weight: 500;
}

.brand-line {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 28px;
}

.brand-line span {
  width: 40px;
  height: 2px;

  flex-shrink: 0;

  background:
    var(--blue);
}

.brand-line p {
  max-width: 230px;

  margin: 0;

  color:
    rgba(
      255,
      255,
      255,
      0.45
    );

  font-family:
    var(--body);

  font-size: 9px;

  line-height:
    1.6;
}

.footer-cta {
  padding-top: 2px;
}

.footer-label {
  display: block;

  margin-bottom: 18px;

  color:
    var(--blue-light);

  font-family:
    var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.footer-cta p {
  max-width: 260px;

  margin:
    0
    0
    25px;

  color:
    rgba(
      255,
      255,
      255,
      0.55
    );

  font-family:
    var(--body);

  font-size: 11px;

  line-height:
    1.75;
}

.footer-button {
  display: inline-flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  width: 100%;

  max-width: 250px;

  min-height: 47px;

  box-sizing: border-box;

  padding:
    0
    15px;

  background:
    var(--blue);

  color:
    var(--white);

  border:
    1px solid
    var(--blue);

  border-radius:
    2px;

  text-decoration: none;

  font-family:
    var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.05em;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.footer-button:hover {
  background:
    var(--blue-dark);

  border-color:
    var(--blue-dark);

  transform:
    translateY(-2px);

  box-shadow:
    0 12px 25px
    rgba(
      39,
      136,
      169,
      0.2
    );
}

.footer-arrow {
  font-size: 17px;

  transition:
    transform 0.25s ease;
}

.footer-button:hover
.footer-arrow {
  transform:
    translate(
      3px,
      -3px
    );
}

.footer-column {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 13px;

  padding-top: 2px;
}

.column-title {
  margin-bottom: 7px;

  color:
    var(--blue-light);

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.footer-column a {
  color:
    rgba(
      255,
      255,
      255,
      0.52
    );

  text-decoration: none;

  font-family:
    var(--body);

  font-size: 9px;

  line-height:
    1.5;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.footer-column a:hover {
  color:
    var(--blue-light);

  transform:
    translateX(4px);
}

.footer-quote {
  position: relative;

  min-height: 190px;

  padding:
    5px
    0
    5px
    25px;

  border-left:
    1px solid
    rgba(
      39,
      136,
      169,
      0.55
    );

  display: flex;

  flex-direction: column;

  justify-content:
    space-between;
}

.quote-number {
  color:
    var(--blue);

  font-family:
    var(--display);

  font-size: 25px;

  font-weight: 500;

  line-height: 1;
}

.footer-quote p {
  max-width: 330px;

  margin: 20px 0;

  color:
    rgba(
      255,
      255,
      255,
      0.82
    );

  font-family:
    var(--display);

  font-size:
    clamp(
      21px,
      1.8vw,
      29px
    );

  font-weight: 500;

  line-height:
    1.2;

  letter-spacing:
    -0.025em;
}

.quote-accent {
  color:
    var(--blue-light);

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.18em;
}

.footer-divider {
  width: 100%;

  height: 1px;

  background:
    rgba(
      255,
      255,
      255,
      0.1
    );
}

.footer-bottom {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  padding-top: 22px;
}

.footer-bottom p {
  margin: 0;

  color:
    rgba(
      255,
      255,
      255,
      0.3
    );

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 500;
}

.footer-tagline {
  display: flex;

  align-items: center;

  justify-content: flex-end;

  flex-wrap: wrap;

  gap: 10px;

  color:
    rgba(
      255,
      255,
      255,
      0.3
    );

  font-family:
    var(--body);

  font-size: 6px;

  font-weight: 700;

  letter-spacing:
    0.13em;

  text-transform:
    uppercase;
}

.dot {
  width: 3px;
  height: 3px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    var(--blue);
}

@media (max-width: 1150px) {
  .footer-container {
    width:
      calc(100% - 70px);
  }

  .footer-grid {
    grid-template-columns:
      1.4fr
      1fr
      0.7fr
      0.8fr;

    gap: 45px;
  }

  .footer-quote {
    grid-column:
      1 / -1;

    min-height:
      auto;

    margin-top: 15px;
  }
}

@media (max-width: 750px) {
  .footer-container {
    width:
      calc(100% - 40px);

    padding:
      55px
      0
      25px;
  }

  .footer-brand-row {
    align-items:
      flex-start;

    gap: 20px;
  }

  .footer-brand-meta {
    max-width: 130px;

    text-align: right;

    line-height: 1.5;
  }

  .footer-grid {
    grid-template-columns:
      1fr
      1fr;

    gap:
      42px
      30px;

    padding:
      45px
      0
      50px;
  }

  .footer-brand,
  .footer-cta,
  .footer-quote {
    grid-column:
      1 / -1;
  }

  .footer-brand h2 {
    font-size:
      clamp(
        45px,
        12vw,
        70px
      );
  }

  .footer-cta p {
    max-width:
      350px;
  }

  .footer-quote {
    min-height:
      150px;

    padding-left:
      20px;
  }

  .footer-quote p {
    max-width:
      500px;

    font-size:
      23px;
  }

  .footer-bottom {
    flex-direction:
      column;

    align-items:
      flex-start;

    gap: 18px;
  }

  .footer-tagline {
    justify-content:
      flex-start;

    line-height:
      1.8;
  }
}

@media (max-width: 430px) {
  .footer-container {
    width:
      calc(100% - 30px);
  }

  .footer-logo-img {
    height:
      38px;
  }

  .footer-grid {
    grid-template-columns:
      1fr;

    gap:
      38px;
  }

  .footer-column {
    grid-column:
      auto;
  }

  .footer-brand h2 {
    font-size:
      48px;

    line-height:
      0.9;
  }

  .footer-brand h2 em {
    margin-left:
      20px;
  }

  .footer-quote {
    grid-column:
      auto;
  }

  .footer-quote p {
    font-size:
      21px;
  }

  .footer-tagline {
    flex-direction:
      column;

    align-items:
      flex-start;

    gap: 5px;
  }

  .dot {
    display:
      none;
  }
}
</style>