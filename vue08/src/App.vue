<template>
  <div>
    <TheNav />
    <TheView />
  </div>
</template>
<script>
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
export default {
  name: 'App',
  components: {
    TheNav,
    TheView,
  },
  setup() {
    return {};
  },
};
</script>
