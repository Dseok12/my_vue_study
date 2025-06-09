# Vue 복습
- 이곳은 배운 내용을 혼자 연습 하는 곳입니다.

---
## Props 및 Components 복습
``` javascript

/* App.vue (부모 컴포넌트) */
<template>
  <div class="MasterAppWrapper">
    <Header :메뉴들="부모메뉴들" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  data() {
      return {
          부모메뉴들: [
              { name: 'Home', link: 'javascript:;' },
              { name: 'About', link: 'javascript:;' },
              { name: 'Random', link: 'javascript:;' },
          ]
      }
  },
  components: {
    Header
  }
}

</script>

```
여기서 "메뉴들"은 작명이 가능하다. 이 작명된 "메뉴들"은 자식 컴포넌트에게 넘어가는 변수가 된다.

data()에 있는 "부모메뉴들"은 자식 컴포넌트에 넘겨줘야할 값이다. 

이것을 내가 이해한 내용으로 설명을 하면, <b><u><i>자바스트립트의 변수 만들기</i></u></b>와 같다고 보면 된다.

```javascript
let 메뉴들 = 부모메뉴들
```

위와 같은 방식으로 변수를 설정을 한다면 변수인 "메뉴들"을 사용하여 "부모메뉴들"을 불러오는 것과 같다고 보면된다.

그러면 자식 컴포넌트에서 아래와 같이 사용하면 된다.

```javascript
/* Header.vue 자식 컴포넌트 */
<template>
    <div class="MainMenu--wrapper">
        <header>
            <nav class="MainMenu--wrap">
                <ul class="MainMenu--box">
                    <li v-for="(메뉴, idx) in 메뉴들" :key="idx" class="MainMenu--item">
                        <a :href="메뉴.link">
                            {{ 메뉴.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import '../css/components/Header.css';
export default {
    name: 'Header',
    props: {
        메뉴들: {type: Array}
    }
}
</script>
```

그러면 data()의 props객체를 만들어 사용하면 된다. 

부모컴포넌트에서 받은 변수인 "메뉴들"을 props객체에 등록을 한다.

그리고 위의 <b><i>&lt;li v-for="(메뉴, idx) in 메뉴들" :key="idx" class="MainMenu--item"&gt;</i></b>와 같이 사용하면 된다.