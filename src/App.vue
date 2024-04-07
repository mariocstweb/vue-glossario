<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store';

const endpoint = 'http://localhost:8000/api/words';

export default {
  name: 'Glossario',
  components: { AppHeader },
  data: () => ({ words: [], store }),
  methods: {
    fetchWords() {
      store.isLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.words = res.words.data;
        })
        .catch(err => {
          console.error(err.message);
        }).then(() => {
          store.isLoading = false;
        });
    }
  },
  created() {
    this.fetchWords();
  }
}
</script>

<template>
  <AppHeader class="nav-margin" />
  <AppLoader v-if="store.isLoading" />
  <main class="container">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 75px;
}
</style>
