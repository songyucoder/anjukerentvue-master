<template>
  <div class="app-layout">
    <div class="app-content">
      <app-header />
      <div id="nav">
        <router-link to="/">Home</router-link> 
        <!-- <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/tests">组件测试</router-link> -->
      </div>
      <router-view />
      <app-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppFooter from './Footer.vue'
import AppHeader from './Header.vue'

</script>

<style lang="less" scoped>
.app-layout {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-content {
  position: relative;
  padding: 0;
  margin: 0;
}
.router-view {
  margin: 0;
  padding: 0;
}
</style>
