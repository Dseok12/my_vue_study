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
