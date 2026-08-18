<template>
  <section id="contact" class="contact-section">

    <div class="contact-container">

      <!-- Left: Info -->
      <div class="contact-info">

        <div class="section-label">
          <span>CONTACT US</span>
        </div>

        <h2>
          START YOUR JOURNEY AS A
          <span>REAL ESTATE ENTREPRENEUR.</span>
        </h2>

        <p class="contact-copy">
          Tell us a little about yourself — our team will walk you through
          the Associate Partner program, training, and next steps.
        </p>

        <div class="contact-image">
          <img src="/public/images/about.jpg" alt="Awgro Realty associate partner meeting a client" />
        </div>

        <div class="contact-details">

          <div class="detail-row">
            <span class="detail-label">OFFICE</span>
            <span class="detail-value">Ahmedabad, Gujarat, India</span>
          </div>

          <div class="detail-row">
            <span class="detail-label">EMAIL</span>
            <span class="detail-value">partners@awgrorealty.com</span>
          </div>

          <div class="detail-row">
            <span class="detail-label">PHONE</span>
            <span class="detail-value">+91 00000 00000</span>
          </div>

          <div class="detail-row">
            <span class="detail-label">MARKETS</span>
            <span class="detail-value">Ahmedabad &amp; Gandhinagar</span>
          </div>

        </div>

      </div>

      <!-- Right: Form -->
      <div class="contact-form-wrap">
        <form class="contact-form" @submit.prevent="handleSubmit">

          <div class="form-row">
            <div class="field">
              <label for="fname">Full Name</label>
              <input id="fname" v-model="form.name" type="text" required placeholder="Your name" />
            </div>

            <div class="field">
              <label for="fphone">Phone</label>
              <input id="fphone" v-model="form.phone" type="tel" required placeholder="+91" />
            </div>
          </div>

          <div class="field">
            <label for="femail">Email</label>
            <input id="femail" v-model="form.email" type="email" required placeholder="you@email.com" />
          </div>

          <div class="field">
            <label for="fmsg">Message</label>
            <textarea
              id="fmsg"
              v-model="form.message"
              placeholder="Tell us why you'd like to join Awgro Realty..."
            ></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="submitted">
            {{ submitted ? 'Request Sent ✓' : 'Request a Callback' }}
          </button>

          <p class="form-note">We'll get back to you within 24 hours.</p>

        </form>
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
  // TODO: wire this up to your backend / API endpoint
  console.log('Contact form submitted:', { ...form })

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
/* =========================================
   CONTACT SECTION
========================================= */

.contact-section {
  position: relative;

  width: 100%;

  padding: 50px 0;

  background: #f4f1e9;

  color: #090909;
}

.contact-container {
  width: min(100% - 40px, 1440px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* =========================================
   LEFT: INFO
========================================= */

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 28px;

  font-family: Inter, Arial, sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #090909;
}

.label-line {
  width: 40px;
  height: 1px;

  background: #b68500;
}

.contact-info h2 {
  font-family: "DM Serif Display", Georgia, serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;

  margin-bottom: 24px;
}

.contact-info h2 span {
  display: block;
  color: #b68500;
}

.contact-copy {
  font-family: Inter, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.75;
  color: rgba(9, 9, 9, 0.62);

  max-width: 440px;
  margin-bottom: 40px;
}

.contact-image {
  width: 100%;
  height: 270px;

  overflow: hidden;

  margin-bottom: 40px;
}

.contact-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-details {
  display: flex;
  flex-direction: column;

  border-top: 1px solid rgba(9, 9, 9, 0.12);
}

.detail-row {
  display: flex;
  align-items: baseline;
  gap: 20px;

  padding: 18px 0;

  border-bottom: 1px solid rgba(9, 9, 9, 0.12);
}

.detail-label {
  flex-shrink: 0;
  width: 80px;

  font-family: Inter, Arial, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #b68500;
}

.detail-value {
  font-family: Inter, Arial, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #090909;
}

/* =========================================
   RIGHT: FORM
========================================= */

.contact-form-wrap {
  background: #fff;

  padding: 48px;

  border: 1px solid rgba(9, 9, 9, 0.08);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-family: Inter, Arial, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(9, 9, 9, 0.5);
}

.field input,
.field textarea {
  padding: 14px 16px;

  background: #f4f1e9;
  border: 1px solid rgba(9, 9, 9, 0.1);
  border-radius: 2px;

  font-family: Inter, Arial, sans-serif;
  font-size: 14px;
  color: #090909;

  outline: none;

  transition: border-color 0.25s ease;
}

.field input:focus,
.field textarea:focus {
  border-color: #b68500;
}

.field textarea {
  min-height: 110px;
  resize: vertical;
}

.submit-button {
  width: 100%;

  padding: 17px;
  margin-top: 6px;

  background: #090909;
  color: #f4f1e9;

  border: none;
  border-radius: 2px;

  font-family: Inter, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: background 0.25s ease, color 0.25s ease;
}

.submit-button:hover:not(:disabled) {
  background: #b68500;
  color: #090909;
}

.submit-button:disabled {
  background: #3f7a4e;
  color: #fff;
  cursor: default;
}

.form-note {
  text-align: center;

  font-family: Inter, Arial, sans-serif;
  font-size: 12px;
  color: rgba(9, 9, 9, 0.45);
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 900px) {

  .contact-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .contact-form-wrap {
    padding: 32px;
  }
}

@media (max-width: 560px) {

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
