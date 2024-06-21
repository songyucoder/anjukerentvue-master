<template>
  <div class="g-flex-col mt-3" style="width: 1080px;">
    <div class="flex space-between" style="justify-content: space-between;width: 100%;">
      <div></div>
      <div class="text-gray-500" style="font-size: 12px;">登录/注册</div>
    </div>
    <div class="g-flex-row" style="justify-content: space-between;width: 100%;">
      <div class="g-flex-row">
        <img src="@/assets/vue.svg" style="width: 40px;height: 40px;" alt="" />
        <div><a class="logo-cate">演示demo</a></div>
      </div>
      <div class="g-flex-row">
        <div style="width: 500px;">
          <a-input-search size="default" style="background-color: #23c993;" v-model="valueSearch" placeholder="请输入房源相关信息" enter-button="搜房源" @search="onSearch">
            <template #prefix> <zoom-in-outlined /> </template
          ></a-input-search>
        </div>
        <div class="flex-row">
          <a-button class="ml-2 flex-row" style="border: 1px solid #1fb081;color: #1fb081;align-items: center;">
            <template #icon>
              <img style="width: 16px;height: 16px;" src="@/assets/home/map-filling.png" alt="" />
            </template>
            <div class="ml-1">地图找房</div>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ZoomInOutlined } from '@ant-design/icons-vue'

const valueSearch = ref('')
const onSearch = (e: any) => {
  console.log(e)
}
</script>

<style lang="less" scoped>
.logo-cate {
  float: left;
  padding: 0 10px 0 0;
  color: #0b0f12;
  font-size: 24px;
  height: 25px;
  margin-left: 24px;
  line-height: 25px;
  margin-top: 10px;
  position: relative;
}
.logo-cate:after {
  content: '';
  position: absolute;
  left: -12px;
  height: 16px;
  bottom: 0;
  width: 1px;
  background: #0b0f12;
}
</style>
