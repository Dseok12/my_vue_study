// src/composables/useAnchor.js
import { watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export function useAnchor(targetRefs = {}) {
  const route = useRoute()

  const runScroll = async (key) => {
    await nextTick() // DOM 렌더링 대기
    const target = targetRefs[key]?.value
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  onMounted(() => {
    if (route.query.anchor) runScroll(route.query.anchor)
  })

  watch(() => route.query.anchor, (newVal) => {
    if (newVal) runScroll(newVal)
  })
}

// ?anchor=eventArea01 여기서 "anchor"는 어떻게 바꾸는거야?