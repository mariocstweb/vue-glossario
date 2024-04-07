<script>
import axios from 'axios';
import { store } from '../data/store';
const baseUri = 'http://localhost:8000/api/words/';

export default {
  name: 'ShowPage',
  data: () => ({
    word: '',
    store,
  }),
  computed: {
    pubblicationDate() {
      const date = new Date(this.word.created_at);

      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;

      return `${day}/${month}/${year} alle ${hours}:${minutes}`
    }
  },
  methods: {
    fetchWords() {
      store.isLoading = true;
      // chiamo l'endpoint dello SHOW dettaglio
      const slug = this.$route.params.slug;
      const endpoint = baseUri + slug;
      axios.get(endpoint)
        .then(res => {
          this.word = res.data[0];
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
  <!-- Se non sto caricando ed ho dei risultati mostro la WORD -->
  <div v-if="!store.isLoading && word" class="container">
    <div class="card p-5 my-4">

      <h3 class="text-center" v-text="word.title"></h3>
      <p class="text-center my-3 mt-5">{{ word.description }}</p>
      <div>
        Links:
        <ul>
          <li v-for="link in word.links" :style="{ 'background-color': link.color }">
            {{ link.title }}
          </li>
        </ul>
      </div>
      <div v-if="word.tags">
        Tags:
        <ul>
          <li v-for="tag in word.tags" :style="{ color: tag.color }">
            {{ tag.title }}
          </li>
        </ul>
      </div>

      <div class="d-flex justify-content-between">
        <div>
          <RouterLink :to="{ name: 'WordsPage' }" class="nav-link">Torna Indietro</RouterLink>
        </div>
        <div class="text-end">
          Creato il: {{ pubblicationDate }}
        </div>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.nav-link {
  color: dodgerblue;
  text-decoration: underline;
}
</style>