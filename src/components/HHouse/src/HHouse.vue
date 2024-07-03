<template>
    <div class="flex">
        <div class="flex items-center justify-center">
              <div class="flex" style="max-height: 160px">
                <a-image
                  style="height: 100%"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
            </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue"
  const props = defineProps({
    // qrcode.js配置项
    options: {
      type: Object,
      default: () => ({}),
    }
  })
  
  onMounted(() => {
    console.log(props.options);
  });
  </script>
  
  <style lang="scss" scoped></style>
  