<template>
  <div class="ui-specs">
    <img class="ui-specs-img" src="../assets/images/ui-specs.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
