<template>
  <div class="page-component">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/component/install">安装</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/component/quickstart">快速上手</router-link>
      </li>
    </ul>
    <div class="right">
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
