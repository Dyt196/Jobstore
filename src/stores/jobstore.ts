import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useJobStore = defineStore('jobstore', () => {
  const jobList = ref([])
  const blogList = ref([])

  return { jobList, blogList }
})
