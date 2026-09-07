<template>
  <h1>{{ name }}에서부터 다시 시작하는거야.</h1>
  <p>40번이상을 해야 너의 것이 된다는거 알고 있잖아.</p>
  <button @click="글자가바뀐다">이걸눌러봐</button>
</template>
<script>
export default {
  data() {
    return {
      name: "백지",
      글자가바뀌니: true,
    };
  },
  methods: {
    글자가바뀐다() {
      if (this.글자가바뀌니 === true) {
        this.name = "이걸 백지";
        this.글자가바뀌니 = false;
      } else {
        this.name = "백지";
        this.글자가바뀌니 = true;
      }
    },
  },
};
</script>
