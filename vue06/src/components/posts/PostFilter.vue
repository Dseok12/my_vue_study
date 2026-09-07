<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="제목 검색"
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        />
      </div>
      <div class="col-2">
        <select
          class="form-select"
          :value="limit"
          @input="$emit('update:limit', Number($event.target.value))"
        >
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
      <div class="col-2">
        <select
          class="form-select"
          :value="_sort"
          @input="$emit('update:_sort', $event.target.value)"
        >
          <option value="createdAt">최신순</option>
          <option value="title">제목순</option>
        </select>
      </div>
      <div class="col-2">
        <select
          class="form-select"
          :value="_order"
          @input="$emit('update:_order', $event.target.value)"
        >
          <option value="desc">내림차순</option>
          <option value="asc">오름차순</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  limit: Number,
  _sort: String,
  _order: String,
});
defineEmits(["update:title", "update:limit", "update:_sort", "update:_order"]);
</script>

<style lang="scss" scoped></style>
