<script setup lang="ts">
defineProps({
  stateColor: {
    type: String,
  },
  stateName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companyLogo: {
    type: String,
  },
})
</script>

<template>
  <div class="job-card">
    <div>
      <div class="location-chip" :style="`color: ${stateColor}; border: 1px solid ${stateColor}`">
        {{ stateName }}
      </div>
    </div>
    <div class="job-title">{{ jobTitle }}</div>
    <div class="company-container">
      <div class="company-text">{{ companyName }}</div>
      <div class="company-logo">
        <img :src="companyLogo" />
      </div>
    </div>
  </div>
</template>
