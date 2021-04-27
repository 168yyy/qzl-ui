<template>
  <div id="app">
    <qzl-header/>
    <div class="min-con">
      <router-view/>
    </div>
  </div>
</template>
<script>
import QzlHeader from './views/components/QzlHeader';
export default {
  name: 'App',
  components: {QzlHeader},
}
</script>
<style lang="scss">
</style>
