<template>
  <footer class="footer">

    <div class="footer-container">

      <!-- Top -->
      <div class="footer-top">

        <div class="footer-brand">

          <span class="brand-label">
            AWGRO REALTY PVT. LTD.
          </span>

          <h2>
            BUILD YOUR
            <span>REAL ESTATE FUTURE.</span>
          </h2>

        </div>

        <div class="footer-cta">

          <p>
            Join a growing network of real estate entrepreneurs across
            Ahmedabad & Gandhinagar.
          </p>

          <a href="#contact" class="footer-button">
            Become An Associate Partner
          </a>

        </div>

      </div>

      <!-- Middle -->
      <div class="footer-middle">

        <div class="footer-column">

          <span class="column-title">
            COMPANY
          </span>

          <a href="#home">Home</a>
          <a href="#vision">Vision</a>
          <a href="#mission">Mission</a>

        </div>

        <div class="footer-column">

          <span class="column-title">
            GET STARTED
          </span>

          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Become an Associate Partner</a>

        </div>

      </div>

      <!-- Quote -->
      <div class="footer-quote">

        <p>
          “You build your real estate business.
          We build the system that helps you grow.
          Together, we build a stronger real estate community.”
        </p>

      </div>

      <!-- Bottom -->
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
  position: relative;

  background: #050505;

  color: #f4f1e9;

  overflow: hidden;

  border-top: 1px solid rgba(244,241,233,0.08);
}

.footer-container {
  width: min(1440px, calc(100% - 100px));

  margin: 0 auto;

  padding: 120px 0 50px;
}

/* =========================
   TOP
========================= */

.footer-top {
  display: flex;

  justify-content: space-between;

  gap: 80px;

  margin-bottom: 100px;
}

.brand-label {
  display: block;

  margin-bottom: 18px;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.footer-brand h2 {
  margin: 0;

  font-size: clamp(55px, 8vw, 110px);

  font-weight: 300;

  line-height: 0.85;

  letter-spacing: -5px;

  text-transform: uppercase;
}

.footer-brand h2 span {
  display: block;

  font-family: "DM Serif Display", serif;

  font-style: italic;

  color: #b59a67;

  text-transform: none;
}

.footer-cta {
  max-width: 360px;
}

.footer-cta p {
  margin: 0 0 30px;

  font-size: 15px;

  line-height: 1.8;

  color: rgba(244,241,233,0.65);
}

.footer-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding: 14px 26px;

  text-decoration: none;

  border: 1px solid #b59a67;

  color: #f4f1e9;

  transition: 0.3s;
}

.footer-button:hover {
  background: #b59a67;

  color: #050505;
}

/* =========================
   MIDDLE
========================= */

.footer-middle {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  max-width: 480px;
  margin-left: auto;

  gap: 60px;

  padding: 60px 0;

  border-top: 1px solid rgba(244,241,233,0.08);

  border-bottom: 1px solid rgba(244,241,233,0.08);
}

.footer-column {
  display: flex;

  flex-direction: column;

  gap: 16px;
}

.column-title {
  margin-bottom: 10px;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.footer-column a {
  text-decoration: none;

  color: rgba(244,241,233,0.7);

  transition: 0.3s;
}

.footer-column a:hover {
  color: #fff;
}

/* =========================
   QUOTE
========================= */

.footer-quote {
  max-width: 900px;

  margin: 90px auto;

  text-align: center;
}

.footer-quote p {
  margin: 0;

  font-family: "DM Serif Display", serif;

  font-size: clamp(24px, 3vw, 42px);

  line-height: 1.4;

  color: rgba(244,241,233,0.85);
}

/* =========================
   BOTTOM
========================= */

.footer-bottom {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  padding-top: 30px;

  border-top: 1px solid rgba(244,241,233,0.08);
}

.footer-bottom p {
  margin: 0;

  font-size: 13px;

  color: rgba(244,241,233,0.45);
}

.footer-tagline {
  display: flex;

  align-items: center;

  gap: 14px;

  flex-wrap: wrap;

  font-size: 11px;

  letter-spacing: 2px;

  text-transform: uppercase;

  color: rgba(244,241,233,0.55);
}

.dot {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: #b59a67;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 900px) {

  .footer-container {
    width: calc(100% - 40px);
  }

  .footer-top {
    flex-direction: column;
  }

  .footer-middle {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;

    text-align: center;
  }

  .footer-brand h2 {
    font-size: 58px;

    letter-spacing: -2px;
  }
}
</style>