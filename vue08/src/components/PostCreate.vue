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
  emits: ['createPost'],
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