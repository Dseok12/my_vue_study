<template>
  <div class="header--wrap">
    <header class="header">
      <div class="header--inner">
        <h1 class="header--logo">Logo</h1>
        <nav class="header--nav">
          <ul class="header--nav-list">
            <li
              class="header--nav-item"
              v-for="menu in menus"
              :key="menu.id"
            >
              <!-- 부모에게 "이걸 눌렀다"고 알려주기 (emit) -->
              <a
                href="#"
                :class="{ 'is-active': current === menu.id }"
                @click.prevent="emit('change', menu.id)"
              >{{ menu.label }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
// 부모에게서 받는 값
defineProps({
  current: { type: String, required: true }
});
// 부모에게 보내는 이벤트
const emit = defineEmits(['change']);

const menus = [
  { id: 'go1', label: 'Menu01' },
  { id: 'go2', label: 'Menu02' },
  { id: 'go3', label: 'Menu03' }
];
</script>

<style scoped>
.header--nav-list{display: flex; gap: 20px;}
.header--nav-item a{display: block; padding: 10px 4px; color: #666;}
.header--nav-item a.is-active{color: #111; font-weight: 700; border-bottom: 2px solid #111;}
</style>
