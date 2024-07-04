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
      <div class="flex-col w-[60%] mt-2 pl-[40px]">
        <a-divider style="margin: 0px" />
        <div class="flex mt-5">
          <div class="text-24px font-medium text-[red]">280</div>
          <div class="ml-2 text-14px self-end">元/月</div>
          <div class="text-12px self-end ml-5">200元/㎡/天</div>
        </div>
        <div class="flex mt-5 w-[100%]">
          <div class="flex flex-col flex-1">
            <div class="flex font-medium text-20px">
              <div>48</div>
              <div>㎡</div>
            </div>
            <div class="text-12px text-[#999] mt-3">建筑面积</div>
          </div>
          <div class="flex flex-col flex-1">
            <div class="flex font-medium text-20px">
              <div>生活服务</div>
            </div>
            <div class="text-12px text-[#999] mt-3">经营行业</div>
          </div>
          <div class="flex flex-col flex-1">
            <div class="flex font-medium text-20px">
              <div>押一付三</div>
            </div>
            <div class="text-12px text-[#999] mt-3">付款方式</div>
          </div>
        </div>
        <a-divider />
        <div class="flex flex-col">
          <div class="flex text-14px">
            <div class="text-[#999]">区域:</div>
            <div class="ml-3">高新技术开发区</div>
          </div>
          <div class="flex text-14px mt-3">
            <div class="text-[#999]">地址:</div>
            <div class="ml-3">高新技术开发区长春路</div>
          </div>
        </div>
        <a-divider />
        <div class="flex w-[100%]" style="justify-content: space-between">
          <div class="flex">
            <a-image
              :width="80"
              :height="100"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div class="flex-col ml-4">
              <div class="flex  items-center">
                <div class="text-15px font-medium">名称</div>
                <a-rate class="ml-3" style="font-size: 15px;" value="5" :count="5" />
              </div>
              <div class="text-13px text-[#999] mt-3">类型: 经纪人</div>
              <div class="text-13px text-[#999] mt-3">所属公司: 中国移动</div>
            </div>
          </div>
          <div class="flex-col flex items-center">
            <a-image
              :width="100"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div class="text-12px text-[#1fb081] mt-2">微信扫码进详情</div>
          </div>
        </div>
        <div style="color: #fff;" class="flex font-medium text-24px w-100% h-[70px] bg-[#23c993] mt-5 color-[#fff] items-center justify-center">
          <Icon><svg t="1720084171240" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4298" width="38" height="38"><path d="M742.218667 526.666667c107.637333 0 194.848 87.573333 194.848 195.552V725.333333c0 103.168-93.578667 190.4-190.4 190.4h-45.44a30.4 30.4 0 0 1-2.517334-0.106666c-153.898667-12.778667-312.266667-80.128-411.914666-173.888C169.184 631.082667 86.933333 461.44 86.933333 303.818667c0-113.802667 84.405333-195.552 194.848-195.552 107.626667 0 194.837333 87.573333 194.837334 195.552 0 76.032-44.181333 138.773333-111.701334 169.12a507.658667 507.658667 0 0 0 81.6 100.266666c36.288 34.453333 76.544 62.336 118.752 81.813334 26.304-76.170667 94.186667-128.352 176.96-128.352z" fill="#ffffff" p-id="4299"></path></svg></Icon>
          <div class="ml-2">电话联系TA</div>
        </div>
      </div>
    </div>
    <div class="flex mt-3 justify-between w-[100%]">
      <div class="flex flex-col flex-1">
        <a-divider />
        <a-anchor :affix="true" direction="horizontal" :offsetTop="100" :items="anchor_list">
    </a-anchor>
    <div id="overview">
      <h2><a-anchor-link href="#overview" title="概述" /></h2>
      <p>这里是页面的概述部分...</p>
    </div>

    <!-- 锚点目标2 -->
    <div id="features">
      <h2><a-anchor-link href="#features" title="特性" /></h2>
      <p>这里是介绍产品特性的部分...</p>
    </div>

        
      </div>
      <div class="flex flex-col ml-10 mt-4">
        <div>相似房源</div>
        <div class="flex-col flex-wrap w-53">
          <div
            class="flex-1 border mt-4"
            v-for="(item, index) in 10"
            @click="clickDetailEvent(item)"
            :key="index"
          >
           <HHouse  :options="item" />
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HHouse } from "@/components/HHouse"
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { useRouter } from 'vue-router'
import { ref } from 'vue' 
const anchor_list = ref([ { key: 'overview', title: '概述' },
{ key: 'features', title: '特性' }])
const router = useRouter()
const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";
const getImgUrl = (i: number) => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};
// 点击 访问详情
const clickDetailEvent = (item: any) => {
  console.log(item)
  router.push('/detail')
} 
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
