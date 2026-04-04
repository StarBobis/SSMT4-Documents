<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const audioEl = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const blockedByPolicy = ref(false)
const volume = ref(0.3)

const musicSrc = withBase('/Background.ogg')

const buttonTitle = computed(() => {
  if (blockedByPolicy.value) return '浏览器限制自动播放，点击后开始播放'
  return isPlaying.value ? '暂停背景音乐' : '播放背景音乐'
})

const playNow = async () => {
  const el = audioEl.value
  if (!el) return
  try {
    await el.play()
    isPlaying.value = true
    blockedByPolicy.value = false
  } catch {
    isPlaying.value = false
    blockedByPolicy.value = true
  }
}

const pauseNow = () => {
  const el = audioEl.value
  if (!el) return
  el.pause()
  isPlaying.value = false
}

const setVolume = (value: number) => {
  const normalized = Math.min(1, Math.max(0, value))
  volume.value = normalized
  const el = audioEl.value
  if (el) {
    el.volume = normalized
  }
  localStorage.setItem('bgm-volume', String(normalized))
}

const onVolumeInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  setVolume(Number(target.value))
}

const togglePlay = () => {
  if (isPlaying.value) {
    pauseNow()
  } else {
    void playNow()
  }
}

const resumeOnGesture = () => {
  void playNow()
}

onMounted(() => {
  const saved = Number(localStorage.getItem('bgm-volume'))
  if (!Number.isNaN(saved)) {
    setVolume(saved)
  }

  if (audioEl.value) {
    audioEl.value.volume = volume.value
  }

  // Direct src playback uses browser progressive loading (play while buffering).
  void playNow()
  window.addEventListener('pointerdown', resumeOnGesture, { once: true })
  window.addEventListener('keydown', resumeOnGesture, { once: true })
  window.addEventListener('touchstart', resumeOnGesture, { once: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', resumeOnGesture)
  window.removeEventListener('keydown', resumeOnGesture)
  window.removeEventListener('touchstart', resumeOnGesture)
})
</script>

<template>
  <div class="music-control" :class="{ blocked: blockedByPolicy }">
    <button class="music-toggle" :title="buttonTitle" @click="togglePlay">
      <span class="icon" aria-hidden="true">{{ isPlaying ? '||' : '>' }}</span>
      <span class="label">BGM</span>
    </button>

    <input
      class="volume-slider"
      type="range"
      min="0"
      max="1"
      step="0.01"
      :value="volume"
      @input="onVolumeInput"
      aria-label="背景音乐音量"
      title="背景音乐音量"
    />

    <audio
      ref="audioEl"
      :src="musicSrc"
      preload="none"
      loop
      @play="isPlaying = true"
      @pause="isPlaying = false"
    />
  </div>
</template>

<style scoped>
.music-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--vp-c-divider);
  height: 28px;
}

.music-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 80%, transparent);
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 75%, transparent);
  border-radius: 999px;
  cursor: pointer;
  color: var(--vp-c-text-1);
  padding: 4px 10px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.2px;
  transition: transform 0.2s, border-color 0.2s, background-color 0.2s;
}

.music-toggle:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-brand-1) 12%, var(--vp-c-bg-elv));
}

.label {
  display: inline-block;
  font-weight: 600;
}

.icon {
  width: 10px;
  text-align: center;
  font-size: 11px;
}

.volume-slider {
  width: 92px;
  accent-color: var(--vp-c-brand-1);
  cursor: pointer;
}

.music-control.blocked .music-toggle {
  border-color: color-mix(in srgb, #f59e0b 45%, var(--vp-c-divider));
}

audio {
  display: none;
}

@media (max-width: 768px) {
  .music-control {
    display: none;
  }
}
</style>