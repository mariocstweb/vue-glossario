<script>
export default {
  name: 'FormAlert',
  emit: ['close-button', 'retry'],
};
</script>

<template>
  <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
    Email inviata con successo
    <button type="button" @click="$emit('close-button')" class="btn-close" data-bs-dismiss="alert"
      aria-label="Close"></button>
  </div>
</template>

<style></style>