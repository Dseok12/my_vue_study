<template>
  <div>
    <!--<button class="btn btn-primary" @click="$emit('createPost',1,2,3,'김길동')">button</button>-->
    <input v-model="title" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    <button class="btn btn-primary" @click="createPost">button</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  // emits: ['createPost'],
  emtis : {
    /*
    유효성 체크가 없으면 null이 넘어가서 콘솔창에 경고가 뜬다. (vue warn) 이벤트가 발생이 되긴 된다.
    createPost: null,
    */
    createPost: (newTitle) => {
      console.log('validator : ', newTitle);
      if (!newTitle){
        return false;
        // 콘솔창에 경고가 뜬다. (vue warn) 이벤트가 발생이 되긴 된다.
      }
      return true;
    }
  },
  setup (props, {emit}) {
    // context.emit()
    const title = ref('');

    const createPost = () => {
      emit('createPost', title.value);
    }

    return { createPost,title }
  }
}
</script>

<style lang="scss" scoped>

</style>