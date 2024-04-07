<script>
export default {
  name: 'AppHeader'
}
</script>



<template>


  <nav class="navbar bg-body-tertiary justify-space-around">

    <div class="container">

      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="'/'">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="'/words'">Glossario</RouterLink>
          </li>

        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Cerca nel glossario...">
          <button class="btn btn-outline-success" type="submit">Cerca </button>
        </form>
      </div>

      <a class="navbar-brand" href="#">WikiGlossario</a>

    </div>

  </nav>


</template>



<style scoped>
nav {
  background-color: lightgray;
  border-bottom: 2px solid goldenrod;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;


}
</style>
