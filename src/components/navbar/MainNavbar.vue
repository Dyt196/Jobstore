<script setup lang="ts"></script>

<template>
  <div class="main-nav-container">
    <div class="top-nav">
      <a class="main-logo">
        <img src="/image/jobstore_logo_blue.png" class="logo-nav" alt="Job Logo" />
      </a>
      <nav class="nav-group">
        <a class="nav-button">Browse Jobs</a>

        <a class="nav-button">Companies</a>

        <a class="nav-button">MyCareerFair</a>

        <a class="nav-button">Awards</a>

        <a class="nav-button">Campus Fair</a>

        <a class="nav-button">Training</a>

        <a class="nav-button">News</a>
      </nav>
      <div class="log-group">
        <a class="nav-button">Sign In</a>
        <a class="nav-button">Sign Up</a>
        <a class="employer-btn">EMPLOYERS</a>
      </div>
    </div>
    <div class="mid-nav">
      <div class="input-area">
        <div class="side-part">What?</div>
        <input class="input-part" placeholder="e.g. Product Manager" />
        <div class="side-part">
          <img
            src="https://assets.jobstore.my/images/icon/icon_searchglass_black.png"
            style="object-fit: contain; height: 25px"
          />
        </div>
      </div>
      <div class="input-area">
        <div class="side-part">Where?</div>
        <input class="input-part" placeholder="Kuala Lumpur" />
        <div class="side-part">
          <img
            src="https://assets.jobstore.my/images/icon/icon_searchglass_black.png"
            style="object-fit: contain; height: 25px"
          />
        </div>
      </div>
      <a class="search-btn">Search</a>
    </div>
    <div class="bot-nav">
      <div class="main-card">
        <div class="countdown">
          <div class="time-container">
            <div class="time-main">50</div>
            <div class="time-label">Days</div>
          </div>
          <div class="time-main">:</div>
          <div class="time-container">
            <div class="time-main">1</div>
            <div class="time-label">Hours</div>
          </div>
          <div class="time-main">:</div>
          <div class="time-container">
            <div class="time-main">29</div>
            <div class="time-label">Minutes</div>
          </div>
          <div class="time-main">:</div>
          <div class="time-container">
            <div class="time-main">50</div>
            <div class="time-label">Seconds</div>
          </div>
        </div>
        <div class="divider" />
        <div style="height: 10px; display: flex; align-items: center">
          <img
            src="https://assets.jobstore.my/mycareerfair/images/branding/mycareerfair_logo_heart_white.webp"
            style="object-fit: contain; width: 165px"
          />
        </div>
        <div class="divider" />
        <div style="color: white; width: 30%">
          <div style="font-size: 0.95rem; font-weight: 700">4 & 5 OCTOBER 2025</div>
          <div style="font-size: 0.85rem; font-weight: 300">
            SUNWAY PYRAMID CONVENTION CENTER (SPCC)
          </div>
        </div>
      </div>
      <div
        class="side-card"
        style="
          background: url('https://assets.jobstore.my/images/layouts/header_my_banner.webp') #fff
            no-repeat center/cover;
        "
      >
        Government Job Vacancy
      </div>
      <div class="side-card train">
        <img
          src="https://assets.jobstore.my/images/layouts/header_hrdcorp_claimable_training_programs_banner_april_1.webp"
        />
      </div>
    </div>
  </div>
</template>
