<template>
  <div class="flex flex-col mt-3" style="width: 1190px">
    <div class="text-16px font-medium">这是店铺的名称</div>
    <div class="flex flex-wrap mt-2 w-[50%]">
      <div class="mt-2" v-for="(item, index) in 10" :key="index">
        <a-tag
          class="flex items-center"
          color="blue"
          style="border-color: transparent; height: 26px"
          :style="{
            'background-color': index < 2 ? '' : '#f9f9f9',
            color: index < 2 ? '#23c993' : '#999',
          }"
          >这是标签{{ item }}</a-tag
        >
      </div>
      <div class="text-12px text-[#999] self-center mt-2 ml-3">
        <div>更新时间：2024-07-25</div>
      </div>
    </div>
    <!-- 展示头部信息 -->
    <div class="flex mt-3">
      <div class="flex w-[40%]">
        <div class="flex w-[100%] h-[75px]">
          <a-carousel
            style="width: 100%"
            arrows
            dots-class="slick-dots slick-thumb"
          >
            <template #customPaging="props">
              <div class="flex">
                <img
                  class="flex w-[40%] h-[380px]"
                  style="width: 100%; height: 100%; object-fit: cover"
                  :src="getImgUrl(props.i)"
                />
              </div>
            </template>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div v-for="item in 4" :key="item">
              <img :src="getImgUrl(item - 1)" />
            </div>
          </a-carousel>
        </div>
      </div>
      <div class="flex-col w-[60%] mt-2 pl-[20px]">
        <a-divider style="margin: 0px" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";
const getImgUrl = (i: number) => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};
</script>
<style scoped lang="less">
/* For demo */
:deep(.slick-dots) {
  position: relative;
  height: auto;
}
:deep(.slick-slide img) {
  border: 5px solid #fff;
  margin: auto;
  width: 100%;
  height: 100%;
}
:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0px;
}
:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
:deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
