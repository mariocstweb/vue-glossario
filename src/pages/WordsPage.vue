<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import WordCard from '../components/WordCard.vue';


const endpoint = 'http://localhost:8000/api/words';

export default {
  name: 'WordsPage',
  components: { AppLoader, WordCard },
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
    <AppLoader v-if="isLoading" />

    <WordCard v-for="word in words" :key="word.id" :word="word" />
</template>

<style></style>