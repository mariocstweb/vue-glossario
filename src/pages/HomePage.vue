<script>
import WordsPage from '../pages/WordsPage.vue';

export default {
  name: 'HomePage',
  components: { WordsPage },

}
</script>

<template>
  <h1 class="text-center">Home Page</h1>

  <form class="d-flex justify-content-center flex-wrap my-5 align-items-center" role="search" method="GET">
    <input class="form-control me-2 w-50" type="search" placeholder="Cerca nel glossario...">
    <!--Filtro per Tag-->
    <!-- <div class="input-group">
      <select class="form-select" name="type_filter">
        <option value="">Tutti</option>
        <option value="{{$type->id}}" @if($type->id == $type_filter) selected @endif>{{ $type -> label }}</option>
      </select>
    </div> -->
    <button class="btn my-3" type="submit">Invia ricerca</button>
  </form>
  <div class="separator"></div>
  <div class="spacing">
    <WordsPage />
  </div>
</template>

<style lang="scss" scoped>
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
  margin: 75px 0;
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