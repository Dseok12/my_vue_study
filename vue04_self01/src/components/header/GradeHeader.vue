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
            <a
              href="#"
              class="header-grade__link"
              @click.prevent="selectGrade(index)"
            >
              {{ grade }}
            </a>
          </li>
        </ul>

        <!-- 배너 리스트 -->
        <div class="header-grade__banner">
          <ul class="header-grade__banner-list">
            <li
              v-for="(gradeBanner, index) in gradeBanners"
              :key="`banner-${index}`"
              class="header-grade__banner-item"
            >
              <a href="#" class="header-grade__banner-link" @click.prevent>
                {{ gradeBanner }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
import { gradeList, bannerList } from '../../textdata/headerGradeData.js'

const STORAGE_KEY = 'selectedGradeIndex'

export default {
  name: 'GradeHeader',
  emits: ['change-grade'],

  data() {
    return {
      grades: gradeList,
      gradeBanners: bannerList,
      selectedGradeIndex: 0, // 기본값
    }
  },

  mounted() {
    // ✅ 새로고침/재접속 시 선택 유지
    this.loadSelectedGrade()
    // ✅ 부모에게 최초 상태도 전달
    this.emitSelectedGrade()
  },

  methods: {
    selectGrade(index) {
      if (!this.isValidIndex(index)) return

      this.selectedGradeIndex = index
      this.saveSelectedGrade()
      this.emitSelectedGrade()
    },

    emitSelectedGrade() {
      const index = this.selectedGradeIndex
      const label = this.grades[index]

      this.$emit('change-grade', {
        index,
        label,
      })
    },

    saveSelectedGrade() {
      try {
        localStorage.setItem(STORAGE_KEY, String(this.selectedGradeIndex))
      } catch (e) {
        // localStorage 막힌 환경(사파리 프라이빗 등) 대비
        // 저장 실패해도 UI 동작은 유지
      }
    },

    loadSelectedGrade() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw === null) return

        const parsed = Number(raw)
        if (!Number.isInteger(parsed)) return
        if (!this.isValidIndex(parsed)) return

        this.selectedGradeIndex = parsed
      } catch (e) {
        // 읽기 실패해도 기본값으로 진행
      }
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
