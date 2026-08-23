### 데이터 흐름

App.vue (current = ref('go1'))
  │  :current  ↓            ↑ @change (emit)
  ├─ Header.vue  ── 메뉴 클릭 시 emit('change','go2')
  │  :current  ↓
  └─ Body.vue ──→ BodySlot.vue ──→ <slot :name="current">
### 바뀐 내용
App.vue — 상태(current)를 부모가 소유합니다. Header와 Body가 형제 관계라 서로 직접 못 주고받으니, 공통 부모가 들고 있어야 합니다.

`Header.vue` — menus 배열을 v-for로 돌리고, 클릭하면 emit('change', menu.id)로 부모에게 알립니다. @click.prevent는 href="#" 때문에 페이지가 맨 위로 튀는 걸 막아줍니다. 현재 메뉴엔 is-active 클래스가 붙습니다.

`Body.vue` — 받은 current를 BodySlot에 그대로 전달만 합니다. slot 템플릿(#go1~#go3)은 원래대로 유지.

`BodySlot.vue:4` — 핵심입니다. <slot :name="current"> 처럼 slot 이름을 동적으로 바인딩하면 current 값에 해당하는 slot 하나만 렌더됩니다. v-if를 세 번 쓰는 것보다 간결합니다.

### 참고
메뉴가 늘어나거나 주소(URL)도 같이 바뀌어야 하면 그때는 vue-router를 쓰는 게 맞습니다. 이미 package.json에 설치는 되어 있으니, props/emit 흐름이 익숙해지면 라우터 버전으로 바꿔보는 것도 좋은 다음 단계입니다.