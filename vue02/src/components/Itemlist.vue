<template>
    <li v-for="(원룸, idx) in 원룸들프롭스" :key="idx" class="room-card">
        <img :src="원룸.image" alt="">
        <h2>{{ 원룸.title }}</h2>
        <p class="desc">{{ 원룸.description }}</p>
        <p class="price">가격: <span>{{ 원룸.price }}</span>원</p>
        <p class="content">설명: {{ 원룸.content }}</p>
        <a href="javascript:;" class="detail-btn">자세히 보기</a>
    </li>
</template>
<script>
export default {
    name: 'Itemlist',
    props: {
        원룸들프롭스: { type: Array }
    }
}
</script>
<style>
    
</style>