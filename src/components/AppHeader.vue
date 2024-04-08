<script>
export default {
  name: 'AppHeader'
}
</script>



<template>

  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <RouterLink class="navbar-brand" aria-current="page" :to="'/'">WikiGlossario</RouterLink>

      <ul class="d-flex me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" :to="'/'">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'ContactUsPage' }">ContactUs
          </RouterLink>
        </li>

      </ul>

    </div>
  </nav>
</template>



<style lang="scss" scoped>
nav {
  background-color: lightgray;
  border-bottom: 2px solid rgba(255, 217, 0, 0.5)enrod;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 3;

  box-shadow: 0px 0px 8px 1px goldenrod;

  ul {
    list-style: none;

    li {
      margin-right: 20px;
    }
  }
}
</style>
