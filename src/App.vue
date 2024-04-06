<script>
import axios from 'axios';
import AppLoader from './components/AppLoader.vue';
import AppHeader from './components/AppHeader.vue';
const endpoint = 'http://localhost:8000/api/words';

export default {
  name: 'Glossario',
  components: { AppHeader, AppLoader },
  data: () => ({ words: [], isLoading: false }),
  methods: {
    fetchWords() {
      this.isLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.words = res.data.data;
        })
        .catch(err => {
          console.error(err.message);
        }).then(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.fetchWords();
  }
}
</script>

<template>
  <AppHeader class="nav-margin"/>
  <AppLoader v-if="isLoading" />
  <main class="container">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 75px;
}
</style>
