<script setup lang="ts">
defineProps({
  blogImage: {
    type: String,
  },
  blogCategory: {
    type: String,
  },
  blogTitle: {
    type: String,
  },
  blogDate: {
    type: String,
  },
})
</script>
<template>
  <div class="blog-card flex flex-col">
    <div
      class="flex-1"
      :style="`background: url(${blogImage})
          no-repeat center/cover;
        border-radius: 5px 5px 0 0;
        `"
    />
    <div class="flex-1 flex flex-col justify-between" style="padding: 15px 25px">
      <div>
        <div class="blog-tag">{{ blogCategory }}</div>
      </div>

      <div class="blog-title">
        {{ blogTitle }}
      </div>

      <div class="blog-date">{{ blogDate }}</div>
    </div>
  </div>
</template>
