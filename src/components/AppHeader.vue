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
        </ul>
      </div>
      
      <a class="navbar-brand" href="#">WikiGlossario</a>

    </div>
      
  </nav>

  
</template>



<style scoped></style>
