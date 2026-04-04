<script setup>
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'
import { initMeteorEffect, stopMeteorEffect } from '../meteors'
import { isEffectsEnabled } from '../themeState'
// @ts-ignore
import customStyles from '../index.css?inline'

const isLoading = ref(false)
const videoElement = ref(null)

const toggleEffects = () => {
  if (isEffectsEnabled.value) {
    // Turn off
    isEffectsEnabled.value = false
    disableEffects()
    localStorage.setItem('visual-effects-enabled', 'false')
  } else {
    // Turn on
    isEffectsEnabled.value = true
    isLoading.value = true
    enableEffects()
    localStorage.setItem('visual-effects-enabled', 'true')
  }
}

const disableEffects = () => {
  // Remove video
  if (videoElement.value) {
    videoElement.value.pause()
    videoElement.value.removeAttribute('src')
    videoElement.value.load()
    videoElement.value.remove()
    videoElement.value = null
  } else {
    const el = document.querySelector('.bg-video')
    if (el) {
      // @ts-ignore
      el.pause()
      // @ts-ignore
      el.removeAttribute('src')
      // @ts-ignore
      el.load()
      el.remove()
    }
  }
  
  // Stop meteors
  stopMeteorEffect()

  // Remove custom CSS
  const styleTag = document.getElementById('custom-theme-styles')
  if (styleTag) {
    styleTag.remove()
  }
}

const enableEffects = () => {
  // Inject custom CSS
  if (!document.getElementById('custom-theme-styles')) {
    const style = document.createElement('style')
    style.id = 'custom-theme-styles'
    style.textContent = customStyles
    document.head.appendChild(style)
  }

  // Start meteors immediately
  initMeteorEffect()
  
  // Load video
  loadVideo()
}

const loadVideo = () => {
  const videoUrl = withBase('/background.webm')

  createVideoElement(videoUrl)
}

const createVideoElement = (src) => {
  // Avoid duplicates
  if (document.querySelector('.bg-video')) return

  const video = document.createElement('video')
  video.className = 'bg-video'
  video.autoplay = true
  video.muted = true
  video.loop = true
  video.preload = 'auto'
  video.playsInline = true
  
  video.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    will-change: transform;
    transform: translateZ(0);
    transition: opacity 1.5s ease-in-out;
  `

  document.body.appendChild(video)
  videoElement.value = video

  const tryPlay = () => {
    video.play().then(() => {
      video.style.opacity = '0.3'
      isLoading.value = false
    }).catch(() => {
      isLoading.value = false
    })
  }

  video.addEventListener('loadeddata', tryPlay, { once: true })
  video.addEventListener('canplay', tryPlay, { once: true })
  video.addEventListener('error', () => {
    if (src.endsWith('.webm')) {
      video.pause()
      video.removeAttribute('src')
      video.load()
      video.remove()
      if (videoElement.value === video) {
        videoElement.value = null
      }
      createVideoElement(withBase('/background.mp4'))
    } else {
      isLoading.value = false
    }
  }, { once: true })

  video.src = src
  video.load()

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    tryPlay()
  }
}

onMounted(() => {
  // Always enable effects
  isEffectsEnabled.value = true
  isLoading.value = true
  enableEffects()
})
</script>

<template>
  <div class="video-bg-control">
    <button 
      class="video-toggle" 
      @click="toggleEffects" 
      :title="isEffectsEnabled ? '关闭视觉特效 (节省性能)' : '开启视觉特效 (消耗性能)'"
      :disabled="isLoading"
    >
      <div class="icon-container">
        <span v-if="isLoading">⏳</span>
        <span v-else-if="isEffectsEnabled">✨</span>
        <span v-else class="muted">✨</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.video-bg-control {
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--vp-c-divider);
  height: 24px;
}

.video-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-1);
  transition: opacity 0.2s;
}

.video-toggle:hover {
  opacity: 0.7;
}

.video-toggle:disabled {
  cursor: wait;
  opacity: 0.5;
}

.icon-container {
  font-size: 18px;
  line-height: 1;
}

.muted {
  opacity: 0.5;
  filter: grayscale(100%);
}

@media (max-width: 768px) {
  .video-bg-control {
    display: none;
  }
}
</style>
