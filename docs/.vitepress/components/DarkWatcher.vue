<script setup>
import { ref, onBeforeUnmount } from 'vue'

const checkDark = () => document.documentElement.classList.contains('dark')
const isDark = ref(checkDark())
const observer = new MutationObserver(() => {
    isDark.value = checkDark()
})

observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
})

onBeforeUnmount(() => observer.disconnect())
</script>

<template>
    <slot :isDark="isDark" />
</template>
