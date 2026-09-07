<!-- src/views/RegisterView.vue -->
<template>
  <div class="page-container">
    <header class="header-area">
      <h1>회원 등록 및 플랜 안내</h1>
      <p>
        아래 버튼을 누르면 router.push를 통해 쿼리가 변경되고 해당 앵커로 자동
        스크롤됩니다.
      </p>

      <!-- 테스트용 버튼 -->
      <div class="nav-buttons">
        <button type="button" @click="changeAnchor('planTabArea')">
          플랜 탭으로 이동
        </button>
        <button type="button" @click="changeAnchor('eventArea01')">
          이벤트 영역으로 이동
        </button>
        <button type="button" @click="changeAnchor('defaultArea')">
          기본 안내 영역으로 이동
        </button>
      </div>
    </header>

    <div class="dummy-space">스크롤 테스트를 위한 여백 영역</div>

    <!-- 앵커 대상 1: planTabArea (변수명과 ref 이름 일치) -->
    <section ref="planTabArea" class="section-box plan-tab-area">
      <h2>Plan Tab Area (플랜 탭 영역)</h2>
      <p>기존 ASP의 'planTabArea' 매핑 대상입니다.</p>
    </section>

    <div class="dummy-space">스크롤 테스트를 위한 여백 영역</div>

    <!-- 앵커 대상 2: eventArea01 (변수명과 ref 이름 일치) -->
    <section ref="eventArea01" class="section-box event-area">
      <h2>Event Area 01 (이벤트 영역)</h2>
      <p>기존 ASP의 'eventArea01' 매핑 대상입니다.</p>
    </section>

    <div class="dummy-space">스크롤 테스트를 위한 여백 영역</div>

    <!-- 앵커 대상 3: defaultArea (변수명과 ref 이름 일치) -->
    <section ref="defaultArea" class="section-box default-area">
      <h2>Default Anchor Area (기본 영역)</h2>
      <p>기본 앵커 영역입니다.</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAnchor } from "@/composables/useAnchor";

const router = useRouter();
const route = useRoute();

// 1. 이동할 대상 DOM 참조 선언 (template의 ref="..."와 정확히 일치)
const planTabArea = ref(null);
const eventArea01 = ref(null);
const defaultArea = ref(null);

// 2. 공통 스크롤 훅에 등록 끝!
useAnchor({ planTabArea, eventArea01, defaultArea });

// 3. 버튼 클릭 시 URL 쿼리를 변경하는 함수
const changeAnchor = (targetKey) => {
  router.push({
    path: route.path,
    query: { ...route.query, anchor: targetKey },
  });
};
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.header-area {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 15px 0;
  border-bottom: 2px solid #333;
  z-index: 10;
}

.nav-buttons button {
  margin-right: 8px;
  padding: 8px 14px;
  background-color: #2b6cb0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.nav-buttons button:hover {
  background-color: #2c5282;
}

.dummy-space {
  height: 500px;
  background-color: #f7fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
  border-left: 2px dashed #cbd5e0;
  border-right: 2px dashed #cbd5e0;
  margin: 10px 0;
}

.section-box {
  padding: 40px 20px;
  border-radius: 8px;
  color: #fff;
  /* 상단 고정 헤더가 있을 때 가려지지 않게 여백 확보 */
  scroll-margin-top: 90px;
}

.plan-tab-area {
  background-color: #319795;
}

.event-area {
  background-color: #dd6b20;
}

.default-area {
  background-color: #4a5568;
}
</style>
