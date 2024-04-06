<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import WordCard from '../components/WordCard.vue';
import AppPagination from '../components/AppPagination.vue';


const endpoint = 'http://localhost:8000/api/words';

export default {
  name: 'WordsPage',
  components: { AppLoader, WordCard, AppPagination },
  data: () => ({ 
    words: [],
    links:[],
    isLoading: false,
  }),
  methods: {
    fetchWords(local_url) {
      this.isLoading = true;
      axios.get(local_url ?? endpoint)
        .then(res => {
          this.words = res.data.data;
          this.links = res.data['links'];
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

    <WordCard v-for="word in words" :key="word.id" :word="word"/>

    <AppPagination :links="links" @fetchPage="fetchWords" />
</template>

<style></style>