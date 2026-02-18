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
        <div
          class="header-grade__banner"
          @mouseenter="fncSwiperAutoPlay(false)"
          @mouseleave="fncSwiperAutoPlay(true)"
        >
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
            @swiper="onSwiperReady"
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

const STORAGE_KEY = 'selectedGradeIndex'

export default {
  name: 'TopGradeHeader',
  emits: ['change-grade'],

  data() {
    return {
      grades: topGradeList,
      gradeBanners: topLeftBannerList,
      selectedGradeIndex: 0,

      // ✅ Swiper 모듈은 전역에서 가져오기 (plugins/swiper.js)
      modules: [this.$swiperModules.Autoplay],

      // ✅ 이 컴포넌트의 swiper를 전역 registry에 등록한 id
      bannerSwiperId: null,

      // ✅ scope 이름(페이지에 swiper가 많을 때 그룹 컨트롤도 가능)
      bannerScope: 'TopGradeHeader',
    }
  },

  mounted() {
    // 1) 탭 상태 복원
    this.loadSelectedGrade()

    // 2) 학년 라우트에서만 탭/라우트 동기화
    this.syncRouteToSelectedGradeIfNeeded()

    // 3) 부모에 최초 상태 전달
    this.emitSelectedGrade()
  },

  watch: {
    '$route.path'(newPath) {
      if (this.isGradeRoutePath(newPath)) {
        this.loadSelectedGrade()
        this.syncRouteToSelectedGradeIfNeeded()
        this.emitSelectedGrade()
      }
    },
  },

  beforeUnmount() {
    // ✅ 컴포넌트 제거 시 registry 정리(누수 방지)
    if (this.bannerSwiperId) {
      this.$swiper.fncSwiperUnregister(this.bannerSwiperId)
      this.bannerSwiperId = null
    }
  },

  methods: {
    // ✅ Swiper 인스턴스가 생성될 때 1회 호출됨
    onSwiperReady(swiper) {
      // 이미 등록되어 있으면 중복 등록 방지
      if (this.bannerSwiperId) return

      // 전역 registry에 등록하고 id 받기
      this.bannerSwiperId = this.$swiper.fncSwiperRegister(swiper, this.bannerScope)

      // 필요하면 최초에 확실히 시작 강제(원래 autoplay 옵션 있으면 자동 실행됨)
      // this.fncSwiperAutoPlay(true)
    },

    /**
     * ✅ 회장님 요청 함수
     * @param {boolean} isRun - true=자동실행 시작, false=멈춤
     * 이 컴포넌트의 배너 Swiper만 제어하도록 ids 방식 사용
     */
    fncSwiperAutoPlay(isRun) {
      if (!this.bannerSwiperId) return
      this.$swiper.fncSwiperAutoPlay(isRun === true, { ids: [this.bannerSwiperId] })
    },

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

      this.$emit('change-grade', {
        index,
        label: grade.label,
      })
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

    syncRouteToSelectedGradeIfNeeded() {
      const currentPath = this.$route && this.$route.path ? this.$route.path : ''
      if (!this.isGradeRoutePath(currentPath)) return

      const selected = this.grades[this.selectedGradeIndex]
      if (!selected || !selected.path) return
      if (currentPath === selected.path) return

      this.$router.replace(selected.path).catch(() => {})
    },

    isGradeRoutePath(path) {
      if (typeof path !== 'string') return false
      return this.grades.some((g) => g && g.path === path)
    },

    isValidIndex(index) {
      return Number.isInteger(index) && index >= 0 && index < this.grades.length
    },
  },
}
</script>

<style>
@import "../../css/layouts/header.css";
</style>
