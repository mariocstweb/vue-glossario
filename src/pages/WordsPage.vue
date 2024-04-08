<script>
import axios from 'axios';
import { store } from '../data/store';
import WordCard from '../components/WordCard.vue';
import AppPagination from '../components/AppPagination.vue';

const endpoint = `http://localhost:8000/api/words/`;

export default {
  name: 'WordsPage',
  components: { WordCard, AppPagination },
  props: {
    endcall: Boolean
  },
  data: () => ({
    words: [],
    links: [],
    store,
  }),
  methods: {
    fetchWords() {
      store.isLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.words = res.data.data;
          this.links = res.data['links'];
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
  <div v-if="!store.isLoading">
    <h1 class="text-center" v-if="!endcall">Glossario: Tutti i termini</h1>
    <WordCard v-for="word in words" :key="word.id" :word="word" />
    <div class="d-flex justify-content-center">
      <AppPagination :links="links" @fetchPage="fetchWords" class="pagination" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
  margin: 50px 0;
  padding-top: 30px;
}
</style>