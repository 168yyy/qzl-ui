<template>
  <header class="header">
    <div class="nav-box">
      <div class="logo">
        <img src="../../assets/images/logo_icon.png">
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/">设计规范</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/component" :class="{'router-link-exact-active':this.$route.path.indexOf('/component')==0}">前端组件</router-link>
          <span>|</span>
        </li>
        <li class="nav-item" style="margin-left:20px;">
          1.0.0
        </li>
      </ul>
      
    </div>
  </header>
</template>

<script>
export default {
  name: 'QzlHeader',
  data () {
    return {
    }
  },
  mounted(){
    
  },
  methods:{ 
    
  }
}
</script>

<style scoped>
</style>
