<template>
  <div>
    <nav class="tab-row">
      <ul class="tab-list">
        <!--
        TODO 1) tabs 배열을 돌려서 li 를 그린다.
          - v-for="(tab, index) in tabs" / :key 는 무엇으로 잡을까?
          - 지금 열린 탭이면 active 클래스가 붙어야 한다  ->  :class="{ active: ??? }"
          - 클릭하면 열린 탭이 바뀌어야 한다             ->  @click="???"
        -->
        <li>
          <a href="javascript:;">tab1</a>
        </li>
      </ul>
    </nav>

    <div class="content-box">
      <div class="content">
        <!--
        TODO 2) 내용도 같은 tabs 를 돌린다.
          - 지금 열린 탭 "하나만" 보이게 한다
          - v-if 와 v-show 중 무엇을 쓸까? (둘의 차이를 떠올려보기)
        -->
        <div class="content-item">
          <h3>tab1</h3>
          <p>tab1 내용</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import '../css/components/TheTabRow.css';

export default {
  props: {
    // TODO 3) tabs prop 정의하기
    //   - ['tab1', 'tab2', 'tab3'] 형태로 받을 예정이다. type 은?
    //   - required 로 할지, default 를 줄지 정하기 (배열의 default 는 어떻게 쓰더라?)
  },
  setup(props) {
    // 지금 열려 있는 탭의 순번(0부터 시작)
    const activeTab = ref(0);

    // TODO 4) 탭을 바꾸는 함수 만들기 (index 를 받아서 activeTab 에 넣는다)

    // TODO 5) template 에서 쓰려면 여기서 return 해야 한다. 지금은 비어 있어서 아무것도 못 쓴다.
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
