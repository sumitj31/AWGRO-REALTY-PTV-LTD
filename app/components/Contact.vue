<template>
  <section id="contact" class="contact-section">
    <div class="contact-background-mark">
      CONNECT
    </div>

    <div class="contact-container">
      <div class="contact-info">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>CONTACT US</span>
        </div>

        <div class="contact-heading">
          <span class="heading-small">READY TO BUILD</span>

          <h2>
            START YOUR
            <span>JOURNEY.</span>
          </h2>

          <div class="heading-accent">
            <span></span>
            <p>
              Become a real estate entrepreneur
              with AWGRO Realty.
            </p>
          </div>
        </div>

        <p class="contact-copy">
          Tell us a little about yourself. Our team will walk you
          through the Associate Partner program, training,
          support, and next steps.
        </p>

        <div class="contact-image">
          <img
            src="/public/images/about.jpg"
            alt="Awgro Realty associate partner meeting a client"
          />

          <div class="image-overlay"></div>

          <div class="image-caption">
            <span>AWGRO REALTY</span>
            <strong>Build Your Own Future.</strong>
          </div>
        </div>

        <div class="contact-details">
          <div class="detail-row">
            <span class="detail-label">OFFICE</span>
            <span class="detail-value">
              Ahmedabad, Gujarat, India
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">EMAIL</span>
            <span class="detail-value">
              partners@awgrorealty.com
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">PHONE</span>
            <span class="detail-value">
              +91 00000 00000
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">MARKETS</span>
            <span class="detail-value">
              Ahmedabad &amp; Gandhinagar
            </span>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap">
        <div class="form-header">
          <div>
            <span class="form-number">04</span>

            <h3>
              Let's start
              <em>something.</em>
            </h3>
          </div>

          <span class="form-label">
            ASSOCIATE PARTNER
          </span>
        </div>

        <div class="form-line"></div>

        <form
          class="contact-form"
          @submit.prevent="handleSubmit"
        >
          <div class="form-row">
            <div class="field">
              <label for="fname">
                Full Name
              </label>

              <input
                id="fname"
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            <div class="field">
              <label for="fphone">
                Phone
              </label>

              <input
                id="fphone"
                v-model="form.phone"
                type="tel"
                required
                placeholder="+91"
              />
            </div>
          </div>

          <div class="field">
            <label for="femail">
              Email
            </label>

            <input
              id="femail"
              v-model="form.email"
              type="email"
              required
              placeholder="you@email.com"
            />
          </div>

          <div class="field">
            <label for="fmsg">
              Message
            </label>

            <textarea
              id="fmsg"
              v-model="form.message"
              placeholder="Tell us why you'd like to join AWGRO Realty..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="submit-button"
            :disabled="submitted"
          >
            <span>
              {{
                submitted
                  ? 'Request Sent ✓'
                  : 'Request a Callback'
              }}
            </span>

            <strong v-if="!submitted">
              ↗
            </strong>
          </button>

          <p class="form-note">
            We'll get back to you within 24 hours.
          </p>
        </form>

        <div class="form-footer">
          <span>AWGRO REALTY</span>
          <span>AHMEDABAD · GANDHINAGAR</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Contact form submitted:', {
    ...form
  })

  submitted.value = true

  setTimeout(() => {
    submitted.value = false

    form.name = ''
    form.phone = ''
    form.email = ''
    form.message = ''
  }, 2600)
}
</script>

<style scoped>
.contact-section {
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

  padding:
    95px
    0
    80px;

  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f5f8f9 100%
    );

  color: var(--dark);
}

.contact-background-mark {
  position: absolute;

  right: -40px;
  bottom: -60px;

  color:
    rgba(
      39,
      136,
      169,
      0.035
    );

  font-family: var(--display);

  font-size: 230px;

  font-weight: 500;

  line-height: 0.8;

  letter-spacing:
    -0.08em;

  pointer-events: none;

  user-select: none;
}

.contact-container {
  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 100px),
      1440px
    );

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(500px, 1.1fr);

  gap:
    clamp(
      60px,
      8vw,
      120px
    );

  align-items: start;
}

.contact-info {
  max-width: 620px;
}

.section-label {
  display: flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 30px;

  color: var(--blue);

  font-family: var(--body);

  font-size: 9px;

  font-weight: 800;

  letter-spacing:
    0.22em;

  text-transform:
    uppercase;
}

.label-dot {
  width: 7px;
  height: 7px;

  background:
    var(--blue);

  border-radius: 50%;
}

.contact-heading {
  margin-bottom: 25px;
}

.heading-small {
  display: block;

  margin-bottom: 10px;

  color: var(--gray-light);

  font-family: var(--body);

  font-size: 8px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.contact-info h2 {
  margin: 0;

  color: var(--dark);

  font-family: var(--display);

  font-size:
    clamp(
      55px,
      6vw,
      86px
    );

  font-weight: 500;

  line-height:
    0.88;

  letter-spacing:
    -0.055em;
}

.contact-info h2 span {
  display: block;

  margin-left:
    clamp(
      30px,
      4vw,
      75px
    );

  color:
    var(--blue);

  font-style:
    italic;
}

.heading-accent {
  display: flex;

  align-items: center;

  gap: 14px;

  margin-top: 27px;
}

.heading-accent span {
  width: 48px;
  height: 2px;

  flex-shrink: 0;

  background:
    var(--blue);
}

.heading-accent p {
  max-width: 270px;

  margin: 0;

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 9px;

  line-height: 1.6;

  letter-spacing:
    0.02em;
}

.contact-copy {
  max-width: 500px;

  margin:
    0
    0
    30px;

  color:
    var(--gray);

  font-family:
    var(--body);

  font-size: 12px;

  line-height: 1.8;
}

.contact-image {
  position: relative;

  width: 100%;

  height:
    clamp(
      230px,
      24vw,
      320px
    );

  overflow: hidden;

  margin-bottom: 35px;

  background:
    var(--dark);

  border-radius: 2px;
}

.contact-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  filter:
    saturate(0.82)
    contrast(1.04);

  transition:
    transform 0.8s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.contact-image:hover img {
  transform:
    scale(1.035);
}

.image-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      transparent 30%,
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

  left: 22px;
  bottom: 19px;

  display: flex;

  flex-direction: column;

  gap: 3px;
}

.image-caption span {
  color:
    rgba(
      255,
      255,
      255,
      0.6
    );

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.2em;
}

.image-caption strong {
  color:
    var(--white);

  font-family:
    var(--display);

  font-size: 25px;

  font-weight: 500;
}

.contact-details {
  display: flex;

  flex-direction: column;

  border-top:
    1px solid
    var(--border);
}

.detail-row {
  display: flex;

  align-items: baseline;

  gap: 20px;

  padding:
    15px
    0;

  border-bottom:
    1px solid
    var(--border);
}

.detail-label {
  flex-shrink: 0;

  width: 65px;

  color:
    var(--blue);

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.15em;
}

.detail-value {
  color:
    var(--gray);

  font-family:
    var(--body);

  font-size: 10px;

  font-weight: 500;
}

.contact-form-wrap {
  position: relative;

  padding:
    40px;

  background:
    var(--white);

  border:
    1px solid
    var(--border);

  box-shadow:
    0 20px 55px
    rgba(
      48,
      53,
      56,
      0.07
    );
}

.form-header {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 20px;
}

.form-number {
  display: block;

  margin-bottom: 8px;

  color:
    var(--blue);

  font-family:
    var(--display);

  font-size: 25px;

  font-weight: 500;

  line-height: 1;
}

.form-header h3 {
  margin: 0;

  color:
    var(--dark);

  font-family:
    var(--display);

  font-size:
    clamp(
      34px,
      3.5vw,
      52px
    );

  font-weight: 500;

  line-height:
    0.95;

  letter-spacing:
    -0.045em;
}

.form-header h3 em {
  display: block;

  color:
    var(--blue);

  font-style:
    italic;
}

.form-label {
  padding-top: 8px;

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.18em;

  white-space:
    nowrap;
}

.form-line {
  width: 100%;
  height: 1px;

  margin:
    30px
    0
    28px;

  background:
    var(--border);
}

.contact-form {
  display: flex;

  flex-direction: column;

  gap: 20px;
}

.form-row {
  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 18px;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.field label {
  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 7px;

  font-weight: 800;

  letter-spacing:
    0.16em;

  text-transform:
    uppercase;
}

.field input,
.field textarea {
  width: 100%;

  box-sizing: border-box;

  padding:
    13px
    14px;

  background:
    var(--surface);

  border:
    1px solid
    var(--border);

  border-radius:
    2px;

  color:
    var(--dark);

  font-family:
    var(--body);

  font-size: 11px;

  outline: none;

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.field input {
  height: 47px;
}

.field input::placeholder,
.field textarea::placeholder {
  color:
    rgba(
      80,
      87,
      91,
      0.4
    );
}

.field input:focus,
.field textarea:focus {
  background:
    var(--white);

  border-color:
    var(--blue);

  box-shadow:
    0 0 0 3px
    rgba(
      39,
      136,
      169,
      0.07
    );
}

.field textarea {
  min-height: 125px;

  resize: vertical;
}

.submit-button {
  width: 100%;

  min-height: 52px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding:
    0
    17px;

  margin-top: 3px;

  background:
    var(--blue);

  color:
    var(--white);

  border:
    1px solid
    var(--blue);

  border-radius:
    2px;

  font-family:
    var(--body);

  font-size: 9px;

  font-weight: 800;

  letter-spacing:
    0.08em;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.submit-button:hover:not(:disabled) {
  background:
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

.submit-button strong {
  font-size: 18px;

  font-weight: 400;

  transition:
    transform 0.25s ease;
}

.submit-button:hover:not(:disabled) strong {
  transform:
    translate(
      3px,
      -3px
    );
}

.submit-button:disabled {
  background:
    var(--gray);

  border-color:
    var(--gray);

  cursor:
    default;
}

.form-note {
  margin: 0;

  text-align: center;

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 8px;

  line-height: 1.5;
}

.form-footer {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 28px;

  padding-top: 18px;

  border-top:
    1px solid
    var(--border);

  color:
    var(--gray-light);

  font-family:
    var(--body);

  font-size: 6px;

  font-weight: 800;

  letter-spacing:
    0.16em;
}

.form-footer span:first-child {
  color:
    var(--blue);
}

@media (max-width: 1050px) {
  .contact-container {
    width:
      calc(100% - 70px);

    gap: 55px;
  }

  .contact-form-wrap {
    padding: 32px;
  }

  .contact-info h2 {
    font-size:
      clamp(
        48px,
        6vw,
        70px
      );
  }
}

@media (max-width: 800px) {
  .contact-section {
    padding:
      75px
      0
      65px;
  }

  .contact-container {
    width:
      calc(100% - 40px);

    grid-template-columns:
      1fr;

    gap: 55px;
  }

  .contact-info {
    max-width: 700px;
  }

  .contact-image {
    height:
      clamp(
        260px,
        45vw,
        350px
      );
  }

  .contact-form-wrap {
    max-width: 700px;
  }
}

@media (max-width: 520px) {
  .contact-section {
    padding:
      60px
      0
      55px;
  }

  .contact-container {
    width:
      calc(100% - 30px);

    gap: 45px;
  }

  .section-label {
    margin-bottom: 22px;

    font-size: 8px;
  }

  .contact-info h2 {
    font-size: 49px;
  }

  .contact-info h2 span {
    margin-left: 20px;
  }

  .contact-copy {
    font-size: 10px;

    line-height: 1.75;
  }

  .contact-image {
    height: 220px;

    margin-bottom: 25px;
  }

  .image-caption strong {
    font-size: 22px;
  }

  .detail-row {
    gap: 12px;

    padding:
      13px
      0;
  }

  .detail-label {
    width: 55px;

    font-size: 6px;
  }

  .detail-value {
    font-size: 8px;
  }

  .contact-form-wrap {
    padding:
      25px
      18px;
  }

  .form-header h3 {
    font-size: 35px;
  }

  .form-label {
    display: none;
  }

  .form-row {
    grid-template-columns:
      1fr;

    gap: 20px;
  }

  .form-footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 6px;
  }

  .contact-background-mark {
    font-size: 150px;

    right: -20px;

    bottom: -25px;
  }
}
</style>