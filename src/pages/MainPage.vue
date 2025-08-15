<script setup lang="ts">
import jobCard from '@/components/main/jobCard.vue'
import blogCard from '@/components/main/blogCard.vue'
import { ref } from 'vue'

const firstHalf = ref([
  {
    jobLocation: {
      name: 'Federal Territory of Kuala Lumpur',
      color: '#144268',
    },
    title: 'Account & Finance Manager',
    employer: {
      name: 'Syarikat Lian Ping Enterprise Sdn Bhd',
      logo: 'https://assets.jobstore.com/uploads/image/131647/9BHB56oyNW/LOGO.jpg',
    },
  },
  {
    jobLocation: {
      name: 'Selangor',
      color: '#fe7341',
    },
    title: 'Automotive Software Engineer',
    employer: {
      name: 'Wrightbus (Malaysia) Sdn Bhd',
      logo: 'https://assets.jobstore.com/uploads/image/0/2W8KaR1KCz/WRIGHT-L.png',
    },
  },
  {
    jobLocation: {
      name: 'Selangor',
      color: '#fe7341',
    },
    title: 'Business Executives / Business Development Executive / Marketing Executive',
    employer: {
      name: 'Hunter Douglas (M) Sdn Bhd',
      logo: 'https://assets.jobstore.com/uploads/image/448909/atf5bX7Zmt/HD.png',
    },
  },
  {
    jobLocation: {
      name: 'Johor',
      color: '#3286bf',
    },
    title: 'Contract Executive',
    employer: {
      name: 'Noah Arks Builders Sdn Bhd',
      logo: 'https://assets.jobstore.com/uploads/image/518607/wr4NcYlZaF/NABSBLogo.jpg',
    },
  },
])

const secondHalf = ref([
  {
    jobLocation: {
      name: 'Selangor',
      color: '#fe7341',
    },
    title: 'Service Engineer',
    employer: {
      name: 'Firmtec Engineering (M) Sdn Bhd',
      logo: 'https://assets.jobstore.com/uploads/image/630678/sJjLjfcbVV/fir.jpg',
    },
  },
  {
    jobLocation: {
      name: 'Selangor',
      color: '#fe7341',
    },
    title: 'Driver cum storekeeper',
    employer: {
      name: 'PENTA ENGINEERING SERVICES SDN BHD',
      logo: 'https://assets.jobstore.com/uploads/image/5/0ZJR14ekaN/logo_penta.png',
    },
  },
  {
    jobLocation: {
      name: 'Federal Territory of Kuala Lumpur',
      color: '#144268',
    },
    title: 'Associate',
    employer: {
      name: 'IMEJ JIWA COMMUNICATIONS SDN BHD',
      logo: 'https://assets.jobstore.com/uploads/image/783462/Uh2ZRqdXXn/12227843_10154361975302738_8086011421040459171_n.jpg',
    },
  },
  {
    jobLocation: {
      name: 'Perak',
      color: '#feb41f',
    },
    title: 'Sales Executive',
    employer: {
      name: 'Auto-Mech Industires Resources Sdn Bhd',
      logo: 'https://assets.jobstore.com/uploads/image/630678/HEDy5mMDjn/uto.png',
    },
  },
])

const listBlog = ref([
  {
    type: 'Article',
    title: 'Pekerja PETRONAS Dibuang Kerja Disebabkan Faktor AI & Teknologi Baharu',
    date: '15.08.2025',
    image:
      'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/2025/08/15141658/HQ090924GG00-18_4_1749195913.png',
  },
  {
    type: 'Article',
    title: 'CEO ChatGPT Ingatkan Bahaya Ketergantungan Terhadap AI',
    date: '14.08.2025',
    image:
      'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/2025/08/14145515/openai-gpt-5-logo-on-smartphone-screen.jpg',
  },
  {
    type: 'Article',
    title: 'Doktor Ini Dedah Risiko Terhadap Kesihatan Wanita Jika Minum Kopi Secara Kerap',
    date: '13.08.2025',
    image:
      'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/2025/08/13145416/2149045774.jpg',
  },
  {
    type: 'Article',
    title: 'Ini Sebab Kenapa Wanita Tidak Digalakkan Untuk Minum Matcha Secara Kerap',
    date: '13.08.2025',
    image:
      'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/2025/08/13142112/2150215063.jpg',
  },
  {
    type: 'Article',
    title: 'NurAI Rasmi Dilancarkan, Inovasi Digital Jawab Soalan Agama Islam',
    date: '12.08.2025',
    image:
      'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/2025/08/12150408/250811-nurAI-AI-deepseek-2-1024x724-1.jpg',
  },
])
</script>

<template>
  <div class="main-page">
    <section>
      <div class="top-container">
        <div class="tag-container">
          <a class="tag-text">#Trending Jobs</a>
          <a class="tag-text">#Highest Paying Jobs</a>
          <a class="tag-text">#Internship</a>
          <a class="tag-text">#Recruiter</a>
        </div>
        <div class="pagination-container">
          <div class="pagination-button">❮</div>
          <div class="pagination-button">❯</div>
        </div>
      </div>
      <div class="flex gap-4" style="margin-top: 25px">
        <div class="flex-1 grid grid-cols-2 gap-4">
          <job-card
            v-for="(job, j) in firstHalf"
            :key="j"
            :state-color="job.jobLocation.color"
            :state-name="job.jobLocation.name"
            :company-logo="job.employer.logo"
            :company-name="job.employer.name"
            :job-title="job.title"
          />
        </div>
        <div class="advert-card">
          <img
            class="size-full"
            src="https://assets.jobstore.my/images/layouts/featured/banner_lotus.webp"
          />
        </div>
        <div class="flex-1 grid grid-cols-2 gap-4">
          <job-card
            v-for="(job, j) in secondHalf"
            :key="j"
            :state-color="job.jobLocation.color"
            :state-name="job.jobLocation.name"
            :company-logo="job.employer.logo"
            :company-name="job.employer.name"
            :job-title="job.title"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="flex items-center">
        <div class="section-title flex-1">BLOG POSTS</div>
        <a class="view-more">VIEW ALL&nbsp;&nbsp;&nbsp;❯</a>
      </div>
      <div class="grid grid-cols-5 gap-4" style="margin-top: 25px">
        <blog-card
          v-for="(blog, b) in listBlog"
          :key="b"
          :blog-category="blog.type"
          :blog-title="blog.title"
          :blog-image="blog.image"
          :blog-date="blog.date"
        />
      </div>
    </section>
  </div>
</template>
