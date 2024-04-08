<script>
import WordsPage from '../pages/WordsPage.vue';
import WordCard from '../components/WordCard.vue';

import axios from 'axios';
import { store } from '../data/store';

export default {
  name: 'HomePage',
  components: { WordsPage, WordCard },
  data: () => ({
    searchText: '',
    endcall: false,
    words: [],
    links: [],
    store,
  }),
  methods: {
    fetchWords() {
      const endpoint = `http://localhost:8000/api/words/?filter=${this.searchText}`;
      store.isLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.words = res.data.data;
          this.links = res.data['links'];
          console.log(this.searchText)
        })
        .catch(err => {
          console.error(err.message);
        }).then(() => {
          this.endcall = true;
          store.isLoading = false;
        });
    }
  }

}
</script>

<template>
  <h1 class="text-center">Glossario</h1>
  <!--Filtro per titolo della Word-->
  <form @submit.prevent="fetchWords()" class="d-flex justify-content-center flex-wrap my-5 align-items-center"
    role="search" method="GET">
    <input class="form-control me-2 w-50" type="text" placeholder="Cerca nel glossario..." v-model.trim="searchText">

    <button class="btn my-3" type="submit">Invia ricerca</button>
  </form>
  <div class="mb-5">
    <ul>
      <WordCard v-for="word in words" :key="word.id" :word="word" />
    </ul>
  </div>
  <div class="separator"></div>
  <div class="spacing">
    <div v-if="endcall" class="">
      <h5 class="text-center text-white">Fine ricerca... continua con tutti i termini</h5>
    </div>
    <WordsPage :endcall="endcall" />
  </div>
</template>

<style lang="scss" scoped>

.text-white {
  color: white;
}

ul {
  margin: 0;
  padding: 0;
}

h1 {
  color: white;
  padding-top: 30px;
}

.separator {
  border: 1px solid lightgrey;
  position: absolute;
  left: 0;
  right: 0;

  box-shadow: 0px 0px 8px 1px goldenrod;
}

.spacing {
  margin: 100px 0;
}

input {
  height: 50px;
}

button {
  width: 150px;
  background-color: goldenrod;
  border: 2px solid white;
}
</style>
