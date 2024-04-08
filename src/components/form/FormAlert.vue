<script>
export default {
  name: 'FormAlert'
  props: {
    isOpen: Boolean,
    type: String | null,
    dismissible: Boolean
  }
};
</script>

<template>
  <div v-if="isOpen" class="alert fade show" :class="[]">


  </div>
</template>