<template>
  <div class="CommonGnbSection">
    <div class="CommonGnbSection__inner">
      <div class="CommonGnbSection--login__section">
        <div class="CommonGnbSection--sat-dday">
          {{ satDday }} 수능
          <span class="CommonGnbSection--sat-dday__value">D-{{ dDay }}</span>
        </div>

        <ul class="CommonGnbSection--login__box">
          <li><router-link to="/login">로그인</router-link></li>
          <li><router-link to="/signup">회원가입</router-link></li>
          <li><router-link to="/getpsw">ID·PW찾기</router-link></li>
        </ul>

        <ul class="CommonGnbSection--info__section">
          <li><router-link to="/help">학습지원센터</router-link></li>
          <li><a href="https://mcc.megastudy.net/" target="_blank" rel="noopener noreferrer">대입컨설팅센터</a></li>
          <li><a href="javascript:void(0)">학원 바로가기</a></li>
        </ul>
      </div>

      <div class="CommonGnbSection--evt__section">
        <div class="CommonGnbSection--evt__box">이벤트 슬라이드 부분</div>

        <!-- ✅ 로고 클릭: 마지막으로 선택한 학년 path로 이동 -->
        <div class="CommonGnbSection--logo">
          <h1>
            <router-link :to="logoTo">
              <img src="../../assets/images/logo.jpg" alt="로고" />
            </router-link>
          </h1>
        </div>

        <div class="CommonGnbSection--etc__section">기타 영역</div>
      </div>
    </div>
  </div>
</template>

<script>
import { topGradeList } from '../../textdata/headerGradeData.js'

const STORAGE_KEY = 'selectedGradeIndex'

export default {
  name: 'CommonGnbSection',

  data() {
    const now = new Date()
    const year = now.getFullYear()
    const examDate = new Date(year, 10, 13)
    const diffDays = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24))

    return {
      satDday: year,
      dDay: diffDays > 0 ? diffDays : 0,
    }
  },

  computed: {
    // ✅ 로고가 항상 "마지막 클릭 학년"의 path를 바라보게 함
    logoTo() {
      const idx = this.getStoredGradeIndex()
      const target = topGradeList[idx]
      return target && target.path ? target.path : '/'
    },
  },

  methods: {
    getStoredGradeIndex() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw === null) return 0

        const parsed = Number(raw)
        if (!Number.isInteger(parsed)) return 0
        if (parsed < 0 || parsed >= topGradeList.length) return 0

        return parsed
      } catch (e) {
        return 0
      }
    },
  },
}
</script>
