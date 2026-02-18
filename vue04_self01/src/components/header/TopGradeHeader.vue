<template>
  <div>
    <header class="header-grade">
      <div class="header-grade__inner">

        <!-- 학년 리스트 (탭) -->
        <ul class="header-grade__list" role="tablist" aria-label="학년 선택">
          <li
            v-for="(grade, index) in grades"
            :key="`grade-${index}`"
            class="header-grade__item"
            :class="{ on: selectedGradeIndex === index }"
            role="tab"
            :aria-selected="selectedGradeIndex === index"
          >
            <router-link
              :to="grade.path"
              class="header-grade__link"
              @click="selectGrade(index)"
            >
              {{ grade.label }}
            </router-link>
          </li>
        </ul>

        <!-- 배너 리스트 -->
        <div class="header-grade__banner">
          <Swiper
            direction="vertical"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false
            }"
            :speed="600"
            :modules="modules"
            class="header-grade__banner-swiper"
          >
            <SwiperSlide
              v-for="(banner, index) in gradeBanners"
              :key="`banner-${index}`"
              class="header-grade__banner-slide"
            >
              <router-link
                :to="banner.path"
                class="header-grade__banner-link"
              >
                <span
                  class="header-grade__banner-label"
                  :class="`header-grade__banner-label--${banner.type}`"
                >
                  {{ banner.label }}
                </span>
                <span class="header-grade__banner-infotext">{{ banner.infoText }}</span>
              </router-link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { topGradeList, topLeftBannerList } from '../../textdata/headerGradeData.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const STORAGE_KEY = 'selectedGradeIndex'

export default {
  name: 'TopGradeHeader',
  emits: ['change-grade'],

  data() {
    return {
      grades: topGradeList,
      gradeBanners: topLeftBannerList,
      selectedGradeIndex: 0,
      modules: [Autoplay],
    }
  },

  mounted() {
    this.loadSelectedGrade()
    this.emitSelectedGrade()
  },

  methods: {
    // ✅ 탭 클릭 → index 저장 → emit
    selectGrade(index) {
      if (!this.isValidIndex(index)) return

      this.selectedGradeIndex = index
      this.saveSelectedGrade()
      this.emitSelectedGrade()
    },

    emitSelectedGrade() {
      const index = this.selectedGradeIndex
      const grade = this.grades[index]

      if (!grade || !grade.label) {
        this.$emit('change-grade', { index: 0, label: '' })
        return
      }

      this.$emit('change-grade', { index, label: grade.label })
    },

    saveSelectedGrade() {
      try {
        localStorage.setItem(STORAGE_KEY, String(this.selectedGradeIndex))
      } catch (e) {}
    },

    loadSelectedGrade() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw === null) return

        const parsed = Number(raw)
        if (!Number.isInteger(parsed)) return
        if (!this.isValidIndex(parsed)) return

        this.selectedGradeIndex = parsed
      } catch (e) {}
    },

    isValidIndex(index) {
      return Number.isInteger(index) && index >= 0 && index < this.grades.length
    },
  },

  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>


<style>
@import "../../css/layouts/header.css";
</style>
