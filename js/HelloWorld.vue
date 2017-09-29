<template>
  <div class="flex">
    {{welcome}}
  </div>
</template>

<script>
import '../css/index.css';
export default {
  name: 'HelloWorld',
  data() {
    return {
      welcome: 'Hello Lucky!'
    }
  }
}
</script>
<style scoped>
.flex{
  display: flex;
}
</style>