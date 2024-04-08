<script>
import axios from 'axios';
import { store } from '../data/store';
import WordCard from '../components/WordCard.vue';
import AppPagination from '../components/AppPagination.vue';


const endpoint = 'http://localhost:8000/api/words';

export default {
  name: 'WordsPage',
  components: { WordCard, AppPagination },
  props: { searchText: String },
  data: () => ({
    words: [],
    links: [],
    store,
  }),
  methods: {
    fetchWords(local_url) {
      store.isLoading = true;
      axios.get(local_url ?? endpoint)
        .then(res => {
          this.words = res.data.data;
          this.links = res.data['links'];
          console.log(this.searchText)
        })
        .catch(err => {
          console.error(err.message);
        }).then(() => {
          store.isLoading = false;
        });
    }
  },
  computed: {
    //Filtro per titolo delle Words
    filteredWords() {
      return this.words.filter(word => {
        return word.title.toLowerCase().includes(this.searchText?.toLowerCase());
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
    <h1 class="text-center">Glossario</h1>
    <h2>{{ searchText }}</h2>
    <ul>
      <li v-for="word in filteredWords" :key="word.id">{{ word.title }}</li>
    </ul>
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