<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/words';

export default {
  name: 'Glossario',
  components: {},
  data: () => ({ words: [] }),
  methods: {
    fetchWords() {
      axios.get(endpoint)
        .then(res => {
          this.words = res.data.data;
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  },
  created() {
    this.fetchWords();
  }
}
</script>

<template>
  <main class="container">
    <ul>
      <li v-for="word in words">{{ word.title }}</li>
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>
