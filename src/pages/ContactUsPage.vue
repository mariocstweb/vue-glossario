<script>
import axios from 'axios';
import FormAlert from '../components/form/FormAlert.vue';
import { store } from '../data/store';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';
const defaultForm = { sender: '', subject: '', message: '' }
export default {
  name: 'ContactUsPage',
  components: { FormAlert },
  data: () => ({
    form: defaultForm,
    successMessage: null,
    errors: {},
    store,
    isAlertOpen: false,
  }),
  methods: {
    sendForm() {
      store.isLoading = true;
      axios.post(endpoint, this.form)
        .then(() => { this.form = { ...defaultForm } })
        .catch(err => { console.error(err) })
        .then(() => {
          store.isLoading = false;
          this.isAlertOpen = true;
        })
    },
    closeAlert() {
      const alert = document.querySelector('.alert')
      alert.classList.add('d-none')
    }
  }
}
</script>

<template>
  <h1 class="my-5 text-center">Contattaci</h1>
  <FormAlert v-if="isAlertOpen" @close-button="isAlertOpen = false" />
  <!-- Form Contatti -->
  <form @submit.prevent="sendForm" novalidate>

    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="form-label">La tua email <sup class="text-danger">*</sup></label>
      <input type="email" name="" class="form-control" id="email" placeholder="name@example.com"
        v-model.trim="form.sender" required>
      <small class="form-text text-muted">Ti ricontatteremo a questo indirizzo</small>
    </div>

    <!-- Oggetto Email -->
    <div class="mb-3">
      <label for="subject" class="form-label">Oggetto email <sup class="text-danger">*</sup></label>
      <input type="text" name="" class="form-control" id="subject" v-model.trim="form.subject" required>
      <small class="form-text text-muted">Ti ricontatteremo a questo indirizzo</small>
    </div>

    <!-- Messaggio -->
    <div class="mb-3">
      <label for="subject" class="form-label">Contenuto email <sup class="text-danger">*</sup></label>
      <textarea id="message" class="form-control" rows="5" v-model.trim="form.message"></textarea>
    </div>

    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary">Invia</button>
    </div>
  </form>
</template>