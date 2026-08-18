<template>
  <footer class="footer" id="contact">

    <div class="footer-container">

      <!-- =========================
           MAIN FOOTER GRID
      ========================== -->

      <div class="footer-grid">

        <!-- BRAND -->
        <div class="footer-brand">

          <span class="brand-label">
            AWGRO REALTY PVT. LTD.
          </span>

          <h2>
            BUILD YOUR
            REAL ESTATE
            FUTURE.
          </h2>

        </div>


        <!-- CTA -->
        <div class="footer-cta">

          <span class="footer-label">
            START YOUR JOURNEY
          </span>

          <p>
            Join a growing network of real estate
            entrepreneurs across Ahmedabad
            & Gandhinagar.
          </p>

          <a href="#contact" class="footer-button">
            <span>Become An Associate Partner</span>
            <span class="footer-arrow">↗</span>
          </a>

        </div>


        <!-- COMPANY -->
        <div class="footer-column">

          <span class="column-title">
            COMPANY
          </span>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#vision">Vision</a>
          <a href="#mission">Mission</a>

        </div>


        <!-- GET STARTED -->
        <div class="footer-column">

          <span class="column-title">
            GET STARTED
          </span>

          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
          <a href="#contact">
            Become An Associate Partner
          </a>

        </div>


        <!-- QUOTE -->
        <div class="footer-quote">

          <p>
            You build your real estate business.
            We build the system that helps you grow.
            Together, we build a stronger real estate community.
          </p>

        </div>

      </div>


      <!-- =========================
           DIVIDER
      ========================== -->

      <div class="footer-divider"></div>


      <!-- =========================
           BOTTOM
      ========================== -->

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

/* =========================================
   FOOTER
========================================= */

.footer {
  width: 100%;

  background: #050505;

  color: #f4f1e9;

  border-top: 1px solid rgba(244, 241, 233, 0.1);

  overflow: hidden;
}


/* =========================================
   CONTAINER
========================================= */

.footer-container {
  width: min(1920px, calc(100% - 100px));
  margin: 0 20px;

  padding: 85px 0 30px;
}


/* =========================================
   MAIN GRID
========================================= */

.footer-grid {
  display: grid;

  grid-template-columns:
    1.4fr
    0.9fr
    0.6fr
    0.75fr
    1.8fr;

  gap: 55px;

  align-items: start;
}


/* =========================================
   BRAND
========================================= */

.footer-brand {
  min-width: 0;
}

.brand-label {
  display: block;

  margin-bottom: 24px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3px;

  line-height: 1.2;

  color: #b59a67;
}

.footer-brand h2 {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(52px, 5vw, 46px);

  font-weight: 400;

  line-height: 0.86;

  letter-spacing: -4px;

  text-transform: uppercase;
}

.footer-brand h2 span {
  display: block;
}

.footer-brand h2 span:nth-child(2),
.footer-brand h2 span:nth-child(3) {
  color: #b59a67;

  font-style: italic;
}


/* =========================================
   CTA
========================================= */

.footer-cta {
  padding-top: 3px;
}

.footer-label {
  display: block;

  margin-bottom: 22px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.footer-cta p {
  margin: 0 0 28px;

  max-width: 280px;

  font-family: Inter, Arial, sans-serif;

  font-size: 14px;

  line-height: 1.7;

  color: rgba(244, 241, 233, 0.62);
}


/* =========================================
   BUTTON
========================================= */

.footer-button {
  display: inline-flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  width: 100%;

  max-width: 245px;

  box-sizing: border-box;

  padding: 15px 17px;

  border: 1px solid rgba(181, 154, 103, 0.85);

  color: #f4f1e9;

  text-decoration: none;

  font-family: Inter, Arial, sans-serif;

  font-size: 12px;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.footer-button:hover {
  background: #b59a67;

  border-color: #b59a67;

  color: #050505;
}

.footer-arrow {
  font-size: 18px;

  line-height: 1;

  transition: transform 0.3s ease;
}

.footer-button:hover .footer-arrow {
  transform: translate(3px, -3px);
}


/* =========================================
   NAVIGATION
========================================= */

.footer-column {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 15px;

  padding-top: 3px;
}

.column-title {
  margin-bottom: 10px;

  font-family: Inter, Arial, sans-serif;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 3px;

  color: #b59a67;
}

.footer-column a {
  display: block;

  color: rgba(244, 241, 233, 0.65);

  text-decoration: none;

  font-family: Inter, Arial, sans-serif;

  font-size: 13px;

  line-height: 1.4;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.footer-column a:hover {
  color: #f4f1e9;

  transform: translateX(4px);
}


/* =========================================
   QUOTE
========================================= */

.footer-quote {
  position: relative;

  padding-top: 3px;

  padding-left: 25px;

  border-left: 1px solid rgba(181, 154, 103, 0.5);
}

.quote-mark {
  display: block;

  margin-bottom: 8px;

  font-family: Georgia, serif;

  font-size: 40px;

  line-height: 0.5;

  color: #b59a67;
}

.footer-quote p {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: clamp(18px, 1.7vw, 27px);

  font-weight: 400;

  line-height: 1.35;

  letter-spacing: -0.7px;

  color: rgba(244, 241, 233, 0.9);
}


/* =========================================
   DIVIDER
========================================= */

.footer-divider {
  width: 100%;

  height: 1px;

  margin-top: 85px;

  background: rgba(244, 241, 233, 0.12);
}


/* =========================================
   BOTTOM
========================================= */

.footer-bottom {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  padding-top: 24px;
}

.footer-bottom p {
  margin: 0;

  font-family: Inter, Arial, sans-serif;

  font-size: 11px;

  color: rgba(244, 241, 233, 0.4);
}

.footer-tagline {
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 12px;

  flex-wrap: wrap;

  font-family: Inter, Arial, sans-serif;

  font-size: 9px;

  letter-spacing: 1.7px;

  text-transform: uppercase;

  color: rgba(244, 241, 233, 0.4);
}

.dot {
  width: 3px;

  height: 3px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #b59a67;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1150px) {

  .footer-container {
    width: calc(100% - 70px);
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
    grid-column: 1 / -1;

    max-width: 800px;

    margin-top: 30px;
  }

  .footer-divider {
    margin-top: 65px;
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 750px) {

  .footer-container {
    width: calc(100% - 40px);

    padding: 65px 0 25px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;

    gap: 45px 30px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-brand h2 {
    font-size: clamp(52px, 15vw, 82px);

    letter-spacing: -3px;
  }

  .footer-cta {
    grid-column: 1 / -1;
  }

  .footer-cta p {
    max-width: 350px;
  }

  .footer-column {
    padding-top: 0;
  }

  .footer-quote {
    grid-column: 1 / -1;

    margin-top: 10px;

    padding-left: 20px;
  }

  .footer-quote p {
    font-size: 21px;

    line-height: 1.4;
  }

  .footer-divider {
    margin-top: 55px;
  }

  .footer-bottom {
    flex-direction: column;

    align-items: flex-start;

    gap: 20px;
  }

  .footer-tagline {
    justify-content: flex-start;

    line-height: 1.8;
  }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 430px) {

  .footer-container {
    width: calc(100% - 30px);
  }

  .footer-grid {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-cta {
    grid-column: auto;
  }

  .footer-column {
    grid-column: auto;
  }

  .footer-quote {
    grid-column: auto;

    margin-top: 0;
  }

  .footer-tagline {
    flex-direction: column;

    align-items: flex-start;

    gap: 5px;
  }

  .dot {
    display: none;
  }

}
</style>