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

  const showPausedFrame = () => {
    // Show the video element at its current position (paused) as a static background
    video.style.opacity = '0.3'
    isLoading.value = false
  }

  const startPlayback = () => {
    // Seek to beginning and start normal playback
    video.currentTime = 0
    video.play().catch(() => {})
  }

  video.addEventListener('loadeddata', () => {
    // Seek to 1s to show a representative paused frame
    video.currentTime = 1
    showPausedFrame()
    // If fully buffered already, start playing immediately
    if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      startPlayback()
    }
  }, { once: true })

  // Fires when the browser has buffered enough data to play through the entire video
  video.addEventListener('canplaythrough', startPlayback, { once: true })

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
    video.currentTime = 1
    showPausedFrame()
  }
  if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
    startPlayback()
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
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid rgba(255, 0, 128, 0.15);
  height: 24px;
  transition: border-color 0.3s;
}

.video-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 3px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-1);
  border-radius: 6px;
  transition: all 0.25s ease;
  position: relative;
}

.video-toggle:hover:not(:disabled) {
  background-color: rgba(255, 0, 128, 0.08);
  color: #ff0080;
  transform: scale(1.15);
  text-shadow: 0 0 6px rgba(255, 0, 128, 0.3);
}

.dark .video-toggle:hover:not(:disabled) {
  background-color: rgba(255, 0, 128, 0.12);
}

.video-toggle:disabled {
  cursor: wait;
  opacity: 0.6;
}

.icon-container {
  font-size: 17px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 加载中的沙漏动画 */
.video-toggle:disabled .icon-container {
  animation: hourglassSpin 1.2s ease-in-out infinite;
}

@keyframes hourglassSpin {
  0%, 100% { transform: rotate(0deg); opacity: 0.6; }
  25% { transform: rotate(90deg); opacity: 1; }
  50% { transform: rotate(180deg); opacity: 0.6; }
  75% { transform: rotate(270deg); opacity: 1; }
}

.muted {
  opacity: 0.4;
  filter: grayscale(100%);
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .video-bg-control {
    display: none;
  }
}
</style>
