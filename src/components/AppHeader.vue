<script>
export default {
  name: 'AppHeader'
}
</script>



<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">WikiGlossario</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="'/'">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'ContactUsPage' }">ContactUs
            </RouterLink>
          </li>

        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Cerca nel glossario...">
          <button class="btn btn-outline-success" type="submit">Cerca </button>
        </form>
      </div>

    </div>
  </nav>

</template>



<style scoped>
nav {
  background-color: lightgray;
  border-bottom: 2px solid rgba(255, 217, 0, 0.5)enrod;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 3;

  box-shadow: 0px 0px 8px 1px goldenrod;
}
</style>
