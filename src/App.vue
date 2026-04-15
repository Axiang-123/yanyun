<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { questions, personalities } from './data.js'

const STORAGE_KEY = 'yanyun-mbti-progress'
const QUICK_QUESTION_COUNT = 25
const currentPhase = ref('welcome')
const currentQuestionIndex = ref(0)
const answers = ref([])
const showContent = ref(false)
const optionVisible = ref([])
const canResume = ref(false)
const copied = ref(false)
const testMode = ref('full')
const posterDownloaded = ref(false)
const isPerformanceMode = ref(false)
const particleCount = computed(() => (isPerformanceMode.value ? 12 : 30))
let copiedTimer = null
let posterTimer = null

const activeQuestions = computed(() =>
  testMode.value === 'quick' ? questions.slice(0, QUICK_QUESTION_COUNT) : questions
)
const activeQuestionCount = computed(() => activeQuestions.value.length)
const currentQuestion = computed(() => activeQuestions.value[currentQuestionIndex.value])
const progress = computed(() => ((currentQuestionIndex.value + 1) / activeQuestionCount.value) * 100)
const totalProgress = computed(() => Math.round((currentQuestionIndex.value / activeQuestionCount.value) * 100))
const modeLabel = computed(() => (testMode.value === 'quick' ? '快速版（25题）' : '完整版（50题）'))

const personalityType = computed(() => {
  if (answers.value.length < activeQuestionCount.value) return null

  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

  answers.value.forEach((answer, index) => {
    const question = activeQuestions.value[index]
    const selectedOption = question.options.find(opt => opt.letter === answer)
    if (selectedOption) {
      Object.entries(selectedOption.types).forEach(([type, value]) => {
        scores[type] += value
      })
    }
  })

  let type = ''
  type += scores.E >= scores.I ? 'E' : 'I'
  type += scores.S >= scores.N ? 'S' : 'N'
  type += scores.T >= scores.F ? 'T' : 'F'
  type += scores.J >= scores.P ? 'J' : 'P'

  const personality = personalities[type] || personalities['INTJ']
  return {
    ...personality,
    type
  }
})
const saveProgress = () => {
  if (currentPhase.value !== 'test') return
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      answers: answers.value,
      currentQuestionIndex: currentQuestionIndex.value,
      mode: testMode.value
    })
  )
}

const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY)
}

const checkResumeState = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) {
    canResume.value = false
    return
  }
  try {
    const parsed = JSON.parse(saved)
    const hasProgress = Array.isArray(parsed.answers) && parsed.answers.length > 0 && ['quick', 'full'].includes(parsed.mode)
    canResume.value = hasProgress
  } catch {
    canResume.value = false
  }
}

const selectOption = (letter) => {
  if (optionVisible.value.includes(letter)) return

  optionVisible.value.push(letter)

  setTimeout(() => {
    answers.value.push(letter)

    if (currentQuestionIndex.value < activeQuestionCount.value - 1) {
      setTimeout(() => {
        currentQuestionIndex.value++
        optionVisible.value = []
        saveProgress()
      }, 200)
    } else {
      setTimeout(() => {
        currentPhase.value = 'result'
        clearProgress()
      }, 300)
    }
  }, 150)
}

const goToPreviousQuestion = () => {
  if (currentQuestionIndex.value === 0 || answers.value.length === 0) return
  answers.value.pop()
  currentQuestionIndex.value--
  optionVisible.value = []
  saveProgress()
}

const startTest = (mode = 'full') => {
  showContent.value = false
  clearProgress()
  canResume.value = false
  testMode.value = mode
  setTimeout(() => {
    currentPhase.value = 'test'
    currentQuestionIndex.value = 0
    answers.value = []
    optionVisible.value = []
    setTimeout(() => {
      showContent.value = true
    }, 50)
  }, 300)
}

const continueTest = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return
  try {
    const parsed = JSON.parse(saved)
    if (!Array.isArray(parsed.answers) || parsed.answers.length === 0 || !['quick', 'full'].includes(parsed.mode)) return
    testMode.value = parsed.mode
    const targetCount = parsed.mode === 'quick' ? QUICK_QUESTION_COUNT : questions.length
    const maxIndex = Math.max(0, Math.min(parsed.answers.length, targetCount - 1))
    currentPhase.value = 'test'
    currentQuestionIndex.value = maxIndex
    answers.value = parsed.answers.slice(0, maxIndex)
    optionVisible.value = []
    showContent.value = true
  } catch {
    clearProgress()
    canResume.value = false
  }
}

const restartTest = () => {
  showContent.value = false
  clearProgress()
  canResume.value = false
  setTimeout(() => {
    currentPhase.value = 'welcome'
    testMode.value = 'full'
    currentQuestionIndex.value = 0
    answers.value = []
    setTimeout(() => {
      showContent.value = true
    }, 50)
  }, 300)
}

const copyResult = async () => {
  if (!personalityType.value) return
  const resultText = [
    '我在燕云·十六声 江湖人格录测试中的结果：',
    `${personalityType.value.name}（${personalityType.value.type}）`,
    `测试模式：${modeLabel.value}`,
    personalityType.value.title,
    `特质：${personalityType.value.traits.join(' / ')}`,
    personalityType.value.match
  ].join('\n')
  try {
    await navigator.clipboard.writeText(resultText)
    copied.value = true
    if (copiedTimer) clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => {
      copied.value = false
    }, 1800)
  } catch (error) {
    console.error('复制失败', error)
  }
}

const downloadPoster = () => {
  if (!personalityType.value) return

  const width = 1080
  const height = 1920
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const theme = {
    bgStart: '#f6f0e4',
    bgMiddle: '#efe5d3',
    bgEnd: '#e5d8be',
    borderMain: 'rgba(125, 106, 58, 0.85)',
    borderSub: 'rgba(125, 106, 58, 0.5)',
    titleMain: '#7d6a3a',
    titleSub: '#8b7355',
    textPrimary: '#3d3225',
    textMuted: '#6b5a35',
    panel: 'rgba(245, 236, 218, 0.95)',
    qrBorder: 'rgba(125, 106, 58, 0.8)'
  }

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, width, height)
  bg.addColorStop(0, theme.bgStart)
  bg.addColorStop(0.55, theme.bgMiddle)
  bg.addColorStop(1, theme.bgEnd)
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, width, height)

  // Decorative frame
  ctx.strokeStyle = theme.borderMain
  ctx.lineWidth = 3
  ctx.strokeRect(56, 56, width - 112, height - 112)
  ctx.strokeStyle = theme.borderSub
  ctx.lineWidth = 1
  ctx.strokeRect(76, 76, width - 152, height - 152)

  // Header
  ctx.fillStyle = theme.titleMain
  ctx.textAlign = 'center'
  ctx.font = 'bold 64px "Noto Serif SC", serif'
  ctx.fillText('燕云·十六声', width / 2, 220)
  ctx.font = '42px "Noto Serif SC", serif'
  ctx.fillStyle = theme.titleSub
  ctx.fillText('江湖人格录', width / 2, 290)

  // Type block
  ctx.fillStyle = theme.textPrimary
  ctx.font = 'bold 118px "Noto Serif SC", serif'
  ctx.fillText(personalityType.value.type, width / 2, 530)
  ctx.fillStyle = theme.titleMain
  ctx.font = 'bold 72px "Noto Serif SC", serif'
  ctx.fillText(personalityType.value.name, width / 2, 635)
  ctx.fillStyle = theme.titleSub
  ctx.font = '42px "Noto Serif SC", serif'
  ctx.fillText(personalityType.value.title, width / 2, 700)

  // Meta lines
  ctx.fillStyle = theme.textMuted
  ctx.font = '32px "Noto Serif SC", serif'
  ctx.fillText(`测试模式：${modeLabel.value}`, width / 2, 800)
  ctx.fillText(`题量：${activeQuestionCount.value} 题`, width / 2, 850)

  // Information panel
  ctx.fillStyle = theme.panel
  ctx.fillRect(92, 910, width - 184, 390)
  ctx.strokeStyle = theme.borderSub
  ctx.strokeRect(92, 910, width - 184, 390)

  // Traits section
  ctx.textAlign = 'left'
  ctx.fillStyle = theme.titleMain
  ctx.font = 'bold 40px "Noto Serif SC", serif'
  ctx.fillText('核心特质', 120, 980)
  ctx.fillStyle = theme.textPrimary
  ctx.font = '34px "Noto Serif SC", serif'
  ctx.fillText(personalityType.value.traits.join(' / '), 120, 1040)

  // Match section
  ctx.fillStyle = theme.titleMain
  ctx.font = 'bold 40px "Noto Serif SC", serif'
  ctx.fillText('推荐方向', 120, 1140)
  ctx.fillStyle = theme.textPrimary
  ctx.font = '34px "Noto Serif SC", serif'
  ctx.fillText(personalityType.value.match, 120, 1200)

  // QR placeholder block
  const qrSize = 220
  const qrX = width / 2 - qrSize / 2
  const qrY = 1330
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
  ctx.fillRect(qrX, qrY, qrSize, qrSize)
  ctx.strokeStyle = theme.qrBorder
  ctx.lineWidth = 4
  ctx.strokeRect(qrX, qrY, qrSize, qrSize)
  ctx.strokeStyle = theme.qrBorder
  ctx.lineWidth = 2
  ctx.strokeRect(qrX + 12, qrY + 12, qrSize - 24, qrSize - 24)
  ctx.fillStyle = theme.textMuted
  ctx.textAlign = 'center'
  ctx.font = '28px "Noto Serif SC", serif'
  ctx.fillText('分享二维码', width / 2, qrY + qrSize / 2 + 10)
  ctx.font = '24px "Noto Serif SC", serif'
  ctx.fillText('（预留位）', width / 2, qrY + qrSize / 2 + 45)

  // Footer
  ctx.textAlign = 'center'
  ctx.fillStyle = theme.textMuted
  ctx.font = '30px "Noto Serif SC", serif'
  ctx.fillText('测字知江湖，论剑见人心', width / 2, 1690)

  const link = document.createElement('a')
  link.download = `燕云人格-${personalityType.value.type}-水墨海报.png`
  link.href = canvas.toDataURL('image/png')
  link.click()

  posterDownloaded.value = true
  if (posterTimer) clearTimeout(posterTimer)
  posterTimer = setTimeout(() => {
    posterDownloaded.value = false
  }, 1800)
}

onMounted(() => {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const lowCpu = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4
  const lowMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4
  isPerformanceMode.value = Boolean(reducedMotion || lowCpu || lowMemory)
  checkResumeState()
  setTimeout(() => {
    showContent.value = true
  }, 300)
})

onBeforeUnmount(() => {
  if (copiedTimer) clearTimeout(copiedTimer)
  if (posterTimer) clearTimeout(posterTimer)
})
</script>

<template>
  <div class="page-container" :class="{ 'performance-mode': isPerformanceMode }">
    <a
      href="https://axiang-123.github.io/"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-blog-btn"
    >
      <span class="btn-text">查看博客</span>
      <span class="btn-icon">→</span>
    </a>
    <div class="particles">
      <div 
        v-for="i in particleCount" 
        :key="i" 
        class="particle" 
        :class="['small', 'medium', 'large'][Math.floor(Math.random() * 3)]"
        :style="{
          '--delay': i * 0.3 + 's', 
          '--x': Math.random() * 100 + '%', 
          '--duration': 8 + Math.random() * 12 + 's',
          '--offset': (Math.random() - 0.5) * 200,
          '--particle-opacity': 0.3 + Math.random() * 0.5
        }"
      ></div>
    </div>

    <Transition name="phase" mode="out-in">
      <div class="content-wrapper" :key="currentPhase">

        <div v-if="currentPhase === 'welcome'" class="welcome-phase">
          <div class="title-decoration">
            <div class="title-bg">燕云·十六声</div>
            <h1 class="title-text">
              <span v-for="(char, i) in '燕云·十六声'" :key="i" :style="{ animationDelay: i * 0.1 + 's' }">{{ char }}</span>
            </h1>
            <div class="decoration-line">
              <div class="line-glow"></div>
            </div>
            <p class="subtitle">江 湖 人 格 录</p>
          </div>

          <Transition name="slide-up">
            <div v-if="showContent" class="welcome-content">
              <p class="intro-text">
                <span class="intro-line">江湖路远，山高水长</span>
                <span class="intro-line">踏入此间，你可曾问过自己——</span>
                <span class="intro-line highlight-line">我是何等样人？</span>
              </p>

              <div class="rules-section">
                <h3>测试须知</h3>
                <ul class="rules-list">
                  <li v-for="(rule, i) in ['可选快速版（25题）或完整版（50题）', '根据直觉选择最符合你的选项', '无标准答案，可中途退出并自动续测']" :key="i" :style="{ animationDelay: i * 0.2 + 's' }">
                    {{ rule }}
                  </li>
                </ul>
              </div>

              <p class="content-notice">
                本文为娱乐向游戏吐槽，不构成心理测评结论；请勿使用低俗辱骂或针对任何现实群体的人身攻击。
              </p>

              <div class="mode-actions">
                <button class="btn-primary" @click="startTest('quick')">
                  <span class="btn-text">快速入局（25题）</span>
                  <span class="btn-icon">⚡</span>
                </button>
                <button class="btn-primary" @click="startTest('full')">
                  <span class="btn-text">完整人格录（50题）</span>
                  <span class="btn-icon">→</span>
                </button>
                 <button v-if="canResume" class="btn-primary" @click="continueTest">
                  <span class="btn-text">继续测试</span>
                  <span class="btn-icon">→</span>
                </button>
              </div>
            </div>
          </Transition>

          <div class="footer-decoration">
            <span>◆</span>
            <span class="footer-text">测字知江湖，论剑见人心</span>
            <span>◆</span>
          </div>
        </div>

        <div v-else-if="currentPhase === 'test'" class="test-phase">
          <div class="test-actions">
            <button class="btn-secondary" :disabled="currentQuestionIndex === 0" @click="goToPreviousQuestion">
              上一题
            </button>
          </div>
          <div class="test-header">
            <div class="progress-info">
              <span class="question-count">
                <span class="label">第</span>
                <span class="value">{{ currentQuestionIndex + 1 }}</span>
                <span class="label">/ {{ activeQuestionCount }} 问</span>
              </span>
              <span class="total-progress">{{ totalProgress }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progress + '%' }">
                <div class="progress-glow"></div>
              </div>
            </div>
          </div>

          <div class="question-section">
            <h2 class="question-title">
              <span class="title-prefix">·</span>
              {{ currentQuestion.title }}
              <span class="title-suffix">·</span>
            </h2>
            <p class="question-text">{{ currentQuestion.question }}</p>
          </div>

          <div class="options-section">
            <div
              v-for="(option, index) in currentQuestion.options"
              :key="option.letter"
              class="option-card"
              :class="{ 'option-visible': showContent, 'option-selected': optionVisible.includes(option.letter) }"
              :style="{ animationDelay: index * 0.1 + 's' }"
              role="button"
              tabindex="0"
              @click="selectOption(option.letter)"
              @keydown.enter="selectOption(option.letter)"
              @keydown.space.prevent="selectOption(option.letter)"
            >
              <div class="option-inner">
                <span class="option-letter">{{ option.letter }}</span>
                <span class="option-text">{{ option.text }}</span>
              </div>
              <div class="option-shine"></div>
            </div>
          </div>
        </div>

        <div v-else-if="currentPhase === 'result'" class="result-phase">
          <div class="result-header">
            <div class="decoration-line">
              <div class="line-glow"></div>
            </div>
            <h2 class="result-label">你的江湖人格</h2>
            <div class="decoration-line">
              <div class="line-glow"></div>
            </div>
          </div>

          <div class="result-content">
            <div class="result-meta">
              <span class="meta-pill">{{ modeLabel }}</span>
              <span class="meta-pill">已答 {{ answers.length }}/{{ activeQuestionCount }}</span>
            </div>
            <div class="result-type-wrapper">
              <div class="result-glow"></div>
              <div class="result-type">
                <span class="type-chinese">{{ personalityType.name }}</span>
                <span class="type-english">{{ personalityType.type }}</span>
              </div>
            </div>
            <h3 class="result-title">{{ personalityType.title }}</h3>

            <div class="result-description">
              <p v-for="(paragraph, index) in personalityType.description.split('\n')" :key="index" :style="{ animationDelay: index * 0.3 + 's' }">
                {{ paragraph }}
              </p>
            </div>

            <div class="result-traits">
              <span
                v-for="(trait, index) in personalityType.traits"
                :key="trait"
                class="trait-tag"
                :style="{ animationDelay: index * 0.15 + 's' }"
              >
                {{ trait }}
              </span>
            </div>

            <div class="result-match">
              <span class="match-icon">⚔</span>
              <span>{{ personalityType.match }}</span>
            </div>

            <div class="profile-card">
              <h4 class="profile-card-title">江湖人格档案</h4>
              <div class="profile-card-grid">
                <div class="profile-card-item">
                  <span class="item-label">人格代号</span>
                  <span class="item-value">{{ personalityType.type }}</span>
                </div>
                <div class="profile-card-item">
                  <span class="item-label">江湖名号</span>
                  <span class="item-value">{{ personalityType.name }}</span>
                </div>
                <div class="profile-card-item full">
                  <span class="item-label">核心定位</span>
                  <span class="item-value">{{ personalityType.title }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="result-footer">
            <div class="decoration-line">
              <div class="line-glow"></div>
            </div>
            <button class="btn-secondary" @click="copyResult">
              {{ copied ? '已复制结果' : '复制结果文案' }}
            </button>
            <button class="btn-secondary" @click="downloadPoster">
              {{ posterDownloaded ? '海报已下载' : '下载分享海报' }}
            </button>
            <button class="btn-primary" @click="restartTest">
              <span class="btn-text">再次踏入江湖</span>
              <span class="btn-icon">↺</span>
            </button>
            <div style="margin-top: 22px; text-align:center;">
              <span style="font-size: 1.1em; font-weight: bold;">找侠缘游戏搜索：</span>
              <span style="margin-left: 8px; color: #7d6a3a;">游戏ID:从别</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* 悬浮博客按钮样式 - 古风 */
.floating-blog-btn {
  position: fixed;
  right: 20px;
  top: 18px;
  z-index: 1002;
  color: var(--gold);
  padding: 0.45rem 1rem;
  font-size: 0.82rem;
  letter-spacing: 0.25rem;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-normal);
  overflow: hidden;
}
.floating-blog-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(204, 202, 199, 0.25), transparent);
  transition: left var(--transition-slow);
}
.floating-blog-btn:hover::before {
  left: 100%;
}
.floating-blog-btn:hover {
  background: linear-gradient(135deg, #cfccca 0%, var(--dark) 100%);
  box-shadow:
    0 0 24px rgba(203, 202, 200, 0.35),
    inset 0 0 20px rgba(201, 168, 108, 0.08);
  transform: translateY(-2px);
  color: var(--gold);
}
.floating-blog-btn:active {
  transform: translateY(-1px);
  box-shadow:
    0 0 16px rgba(201, 168, 108, 0.25),
    inset 0 0 16px rgba(201, 168, 108, 0.05);
}
@media (max-width: 600px) {
  .floating-blog-btn {
    right: 10px;
    top: 10px;
    padding: 0.5rem 0.9rem;
    font-size: 0.78rem;
    letter-spacing: 0.2rem;
  }
}
.content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  left: var(--x);
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  box-shadow: 0 0 10px var(--gold-light);
}

.particle.small {
  width: 2px;
  height: 2px;
  background: var(--gold-light);
  opacity: 0.4;
}

.particle.medium {
  width: 4px;
  height: 4px;
  background: var(--gold);
  opacity: 0.6;
}

.particle.large {
  width: 6px;
  height: 6px;
  background: var(--gold-lightest);
  opacity: 0.8;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: var(--particle-opacity, 0.6);
  }
  50% {
    transform: translateY(50vh) scale(1) translateX(calc(var(--offset, 0) * 1px)) rotate(180deg);
  }
  90% {
    opacity: var(--particle-opacity, 0.6);
  }
  100% {
    transform: translateY(-100px) scale(1) translateX(0) rotate(360deg);
    opacity: 0;
  }
}

.welcome-phase {
  text-align: center;
}

.title-decoration {
  position: relative;
  margin-bottom: 3rem;
}

.title-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  font-weight: 900;
  color: rgba(201, 168, 108, 0.06);
  white-space: nowrap;
  pointer-events: none;
  letter-spacing: 1rem;
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.title-text {
  font-size: var(--text-5xl);
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0.1rem;
  font-family: 'Ma Shan Zheng', 'Noto Serif SC', 'SimSun', serif;
}

.title-text span {
  display: inline-block;
  text-shadow:
    0 0 10px rgba(201, 168, 108, 0.5),
    0 0 20px rgba(201, 168, 108, 0.3),
    0 0 30px rgba(201, 168, 108, 0.2),
    2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: char-appear 0.5s ease forwards;
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes char-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.decoration-line {
  width: 300px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
  margin: 1rem auto;
  position: relative;
  overflow: hidden;
}

.line-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  animation: line-shine 3s ease-in-out infinite;
}

@keyframes line-shine {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

.subtitle {
  font-size: 1.2rem;
  color: var(--secondary);
  letter-spacing: 1rem;
  margin-top: 0.5rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 0.8s;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

.welcome-content {
  opacity: 1;
  transform: translateY(20px);
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.intro-text {
  font-size: 1.1rem;
  line-height: 2.2;
  color: var(--secondary);
  margin-bottom: 2.5rem;
  text-shadow: 0 0 10px rgba(212, 196, 176, 0.2);
}

.intro-line {
  display: block;
  opacity: 0;
  animation: fade-in 0.5s ease forwards;
}

.intro-line:nth-child(1) { animation-delay: 0.2s; }
.intro-line:nth-child(2) { animation-delay: 0.4s; }
.intro-line:nth-child(3) { animation-delay: 0.6s; }

.highlight-line {
  color: var(--gold);
  font-weight: bold;
}

.rules-section {
  background: linear-gradient(135deg, rgba(44, 36, 22, 0.8) 0%, rgba(61, 50, 37, 0.8) 100%);
  border: 1px solid var(--border);
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;
  text-align: left;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 0.8s;
}

.rules-section h3 {
  color: var(--gold);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  letter-spacing: 0.2rem;
}

.rules-list {
  list-style: none;
  color: var(--secondary);
  font-size: 1rem;
  line-height: 2;
}

.rules-list li {
  opacity: 0;
  animation: fade-in 0.5s ease forwards;
}

.rules-list li:nth-child(1) { animation-delay: 1s; }
.rules-list li:nth-child(2) { animation-delay: 1.1s; }
.rules-list li:nth-child(3) { animation-delay: 1.2s; }

.rules-list li::before {
  content: '◇ ';
  color: var(--gold);
}

.content-notice {
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--secondary);
  opacity: 0.85;
  text-align: center;
  margin: 0 0 1.25rem;
  padding: 0 var(--space-xs);
}

.btn-primary {
  background: linear-gradient(135deg, var(--dark) 0%, #3d3225 100%);
  border: 2px solid var(--gold);
  color: var(--gold);
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-lg);
  font-family: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 1.3s;
  transition: all var(--transition-normal);
  border-radius: 2px;
  will-change: transform, box-shadow;
}

.btn-secondary {
  background: rgba(44, 36, 22, 0.8);
  border: 1px solid var(--gold);
  color: var(--gold-lightest);
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: var(--space-md);
}

.btn-secondary:hover {
  background: rgba(61, 50, 37, 0.9);
  border-color: var(--gold-lightest);
  color: var(--gold-lightest);
}

.btn-secondary:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(201, 168, 108, 0.3), transparent);
  transition: left var(--transition-slow);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #3d3225 0%, var(--dark) 100%);
  box-shadow:
    0 0 30px rgba(201, 168, 108, 0.4),
    inset 0 0 30px rgba(201, 168, 108, 0.1);
  transform: translateY(-3px);
}

.btn-primary:active {
  transform: translateY(-1px);
  box-shadow:
    0 0 20px rgba(201, 168, 108, 0.3),
    inset 0 0 20px rgba(201, 168, 108, 0.05);
}

.btn-text {
  position: relative;
  z-index: 1;
}

.btn-icon {
  position: relative;
  z-index: 1;
  margin-left: var(--space-sm);
  display: inline-block;
  transition: transform var(--transition-normal);
}

.btn-primary:hover .btn-icon {
  transform: translateX(5px);
}

.footer-decoration {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--border);
  font-size: 0.9rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 1.5s;
}

.resume-actions {
  margin-bottom: var(--space-md);
}

.mode-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-text {
  letter-spacing: 0.3rem;
}

.phase-enter-active,
.phase-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.phase-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.phase-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.test-phase {
  text-align: center;
}

.test-actions {
  display: flex;
  justify-content: flex-start;
  margin-bottom: var(--space-sm);
}

.test-header {
  margin-bottom: 2rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--secondary);
  font-size: 0.9rem;
}

.question-count .value {
  color: var(--gold);
  font-size: 1.2rem;
  font-weight: bold;
}

.total-progress {
  color: var(--gold);
  font-weight: bold;
}

.progress-bar {
  width: 100%;
  max-width: 500px;
  height: 6px;
  background: rgba(166, 149, 128, 0.3);
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--gold), #e0c88c);
  transition: width 0.4s ease;
  position: relative;
  overflow: hidden;
}

.progress-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6));
  animation: progress-shine 1.5s ease-in-out infinite;
}

@keyframes progress-shine {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

.question-section {
  margin-bottom: 2rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 0.1s;
}

.question-title {
  font-size: 1.5rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  letter-spacing: 0.3rem;
}

.title-prefix,
.title-suffix {
  opacity: 0.5;
}

.question-text {
  font-size: 1.2rem;
  color: var(--light);
  line-height: 1.6;
}

.options-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.option-card {
  background: linear-gradient(135deg, rgba(44, 36, 22, 0.9) 0%, rgba(61, 50, 37, 0.9) 100%);
  border: 1px solid var(--border);
  padding: 0;
  margin: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateX(-20px);
  transition: all var(--transition-normal);
  will-change: transform, box-shadow, border-color;
}

.option-card.option-visible {
  animation: option-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.option-card:nth-child(1) { animation-delay: 0.1s; }
.option-card:nth-child(2) { animation-delay: 0.2s; }
.option-card:nth-child(3) { animation-delay: 0.3s; }
.option-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes option-appear {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.option-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--gold);
  transform: scaleY(0);
  transition: transform var(--transition-normal);
}

.option-card:hover {
  border-color: var(--gold);
  transform: translateX(10px);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(201, 168, 108, 0.15);
}

.option-card:hover::before {
  transform: scaleY(1);
}

.option-card.option-selected {
  border-color: var(--gold);
  background: linear-gradient(135deg, rgba(61, 50, 37, 0.95) 0%, rgba(44, 36, 22, 0.95) 100%);
  pointer-events: none;
  animation: option-selected 0.3s ease forwards;
}

.option-card.option-selected::before {
  transform: scaleY(1);
}

@keyframes option-selected {
  0% {
    transform: translateX(10px) scale(1);
  }
  50% {
    transform: translateX(10px) scale(1.02);
  }
  100% {
    transform: translateX(10px) scale(1);
  }
}

.option-inner {
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.option-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--gold);
  color: var(--gold);
  margin-right: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.option-card:hover .option-letter {
  background: var(--gold);
  color: var(--dark);
}

.option-card.option-selected .option-letter {
  background: var(--gold);
  color: var(--dark);
}

.option-text {
  color: var(--light);
  transition: color 0.3s ease;
}

.option-card:hover .option-text {
  color: var(--gold);
}

.option-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(201, 168, 108, 0.1), transparent);
  transition: left 0.5s ease;
}

.option-card:hover .option-shine {
  left: 100%;
}

.result-phase {
  text-align: center;
}

.result-header {
  margin-bottom: 2rem;
}

.result-label {
  font-size: 1.2rem;
  color: var(--secondary);
  letter-spacing: 0.5rem;
  margin: 1rem 0;
}

.result-content {
  background: linear-gradient(135deg, rgba(44, 36, 22, 0.9) 0%, rgba(61, 50, 37, 0.9) 100%);
  border: 1px solid var(--gold);
  padding: 2.5rem 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.result-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(201, 168, 108, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.result-meta {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border: 1px solid var(--border);
  color: var(--secondary);
  font-size: 0.88rem;
  background: rgba(26, 21, 16, 0.6);
}

.result-type-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.result-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(ellipse, rgba(201, 168, 108, 0.3) 0%, transparent 70%);
  animation: result-pulse 2s ease-in-out infinite;
}

@keyframes result-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
}

.result-type {
  font-size: var(--text-5xl);
  color: var(--gold);
  font-weight: bold;
  letter-spacing: 0.5rem;
  position: relative;
  animation: result-appear 1s ease forwards;
  text-shadow:
    0 0 20px rgba(201, 168, 108, 0.8),
    0 0 40px rgba(201, 168, 108, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.type-chinese {
  font-family: 'Ma Shan Zheng', 'Noto Serif SC', 'SimSun', serif;
}

.type-english {
  font-size: var(--text-2xl);
  font-family: 'Noto Serif SC', serif;
  opacity: 0.9;
  letter-spacing: 0.3rem;
  text-shadow:
    0 0 10px rgba(201, 168, 108, 0.6),
    0 0 20px rgba(201, 168, 108, 0.3);
  animation: type-english-appear 1s ease forwards 0.5s;
  opacity: 0;
}

@keyframes result-appear {
  0% {
    opacity: 0;
    transform: scale(0.5);
    letter-spacing: 2rem;
  }
  50% {
    letter-spacing: 0.8rem;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    letter-spacing: 0.5rem;
  }
}

@keyframes type-english-appear {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0) scale(1);
  }
}

.result-title {
  font-size: 1.3rem;
  color: var(--secondary);
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 0.5s;
}

.result-description {
  color: var(--light);
  line-height: 2;
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.result-description p {
  opacity: 0;
  animation: fade-in 0.5s ease forwards;
}

.result-traits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.trait-tag {
  background: rgba(201, 168, 108, 0.15);
  border: 1px solid var(--gold);
  padding: 0.5rem 1rem;
  color: var(--gold);
  font-size: 0.95rem;
  opacity: 0;
  animation: trait-appear 0.4s ease forwards;
  transition: all 0.3s ease;
}

.trait-tag:hover {
  background: rgba(201, 168, 108, 0.3);
  transform: translateY(-2px);
}

@keyframes trait-appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-match {
  color: var(--secondary);
  font-size: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 1s;
}

.profile-card {
  margin-top: var(--space-lg);
  border: 1px solid rgba(201, 168, 108, 0.45);
  background: linear-gradient(160deg, rgba(26, 21, 16, 0.82), rgba(44, 36, 22, 0.7));
  padding: var(--space-md);
  text-align: left;
  opacity: 0;
  animation: fade-in 0.5s ease forwards 1.2s;
}

.profile-card-title {
  color: var(--gold);
  font-size: 1rem;
  letter-spacing: 0.2rem;
  margin-bottom: var(--space-md);
}

.profile-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-sm);
}

.profile-card-item {
  border: 1px solid rgba(166, 149, 128, 0.5);
  padding: 0.65rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 64px;
}

.profile-card-item.full {
  grid-column: span 2;
}

.item-label {
  color: var(--secondary);
  font-size: 0.82rem;
}

.item-value {
  color: var(--light);
  font-size: 0.95rem;
}

.match-icon {
  color: var(--gold);
}

.result-footer {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.result-footer .decoration-line {
  margin-bottom: 2rem;
}

@media (max-width: 640px) {
  .profile-card-grid {
    grid-template-columns: 1fr;
  }

  .profile-card-item.full {
    grid-column: auto;
  }
}

/* Water-ink theme overrides */
.title-bg {
  color: rgba(18, 18, 18, 0.08);
}

.title-text {
  color: #2a2a2a;
}

.title-text span {
  text-shadow:
    0 0 2px rgba(0, 0, 0, 0.15),
    1px 2px 2px rgba(0, 0, 0, 0.18);
}

.subtitle,
.intro-text,
.rules-list,
.result-label,
.result-title,
.result-match,
.item-label {
  color: #5b5b5b;
}

.highlight-line,
.question-title,
.type-chinese,
.type-english,
.profile-card-title {
  color: #2f2f2f;
}

.particles {
  mix-blend-mode: multiply;
  opacity: 0.75;
}

.particle {
  box-shadow: 0 0 6px rgba(32, 32, 32, 0.22);
}

.particle.small,
.particle.medium,
.particle.large {
  background: rgba(34, 34, 34, 0.55);
}

.btn-primary {
  background: linear-gradient(140deg, rgba(246, 243, 237, 0.96) 0%, rgba(228, 223, 213, 0.96) 100%);
  border: 1px solid rgba(47, 47, 47, 0.75);
  color: #2f2f2f;
  letter-spacing: 0.24rem;
}

.btn-primary::before {
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.12), transparent);
}

.btn-primary:hover {
  background: linear-gradient(140deg, rgba(236, 231, 221, 0.98) 0%, rgba(219, 213, 201, 0.98) 100%);
  box-shadow:
    0 5px 18px rgba(0, 0, 0, 0.18),
    inset 0 0 16px rgba(0, 0, 0, 0.05);
}

.btn-secondary {
  background: rgba(245, 241, 234, 0.84);
  border: 1px solid rgba(78, 78, 78, 0.58);
  color: #3a3a3a;
}

.btn-secondary:hover {
  border-color: #2f2f2f;
  color: #1f1f1f;
  background: rgba(234, 228, 217, 0.9);
}

.rules-section,
.option-card,
.result-content,
.profile-card {
  background:
    linear-gradient(155deg, rgba(247, 243, 236, 0.95) 0%, rgba(230, 224, 214, 0.92) 100%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='inkLayer'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23inkLayer)' opacity='0.12'/%3E%3C/svg%3E");
  border-color: rgba(84, 84, 84, 0.36);
}

.result-content,
.profile-card {
  box-shadow:
    0 16px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.option-card::before,
.option-card.option-selected::before {
  background: linear-gradient(180deg, rgba(58, 58, 58, 0.92), rgba(24, 24, 24, 0.92));
}

.option-text,
.question-text,
.result-description,
.item-value,
.meta-pill {
  color: #2c2c2c;
}

.option-letter {
  border-color: rgba(47, 47, 47, 0.7);
  color: #2f2f2f;
}

.option-card:hover,
.option-card.option-selected {
  border-color: rgba(30, 30, 30, 0.82);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.14),
    0 0 0 1px rgba(0, 0, 0, 0.06) inset;
}

.option-card:hover .option-letter,
.option-card.option-selected .option-letter {
  background: #2f2f2f;
  color: #f4f2ee;
}

.progress-bar {
  background: rgba(110, 110, 110, 0.2);
}

.progress-fill {
  background: linear-gradient(90deg, #2a2a2a, #666666);
}

.progress-glow {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45));
}

.result-type {
  text-shadow:
    0 0 6px rgba(0, 0, 0, 0.14),
    0 0 16px rgba(0, 0, 0, 0.1);
}

.result-glow {
  background: radial-gradient(ellipse, rgba(26, 26, 26, 0.18) 0%, transparent 70%);
}

.result-match {
  border-top-color: rgba(80, 80, 80, 0.38);
}

.meta-pill,
.profile-card-item {
  border-color: rgba(78, 78, 78, 0.42);
  background: rgba(255, 255, 255, 0.45);
}

.performance-mode .particle {
  animation-duration: calc(var(--duration) * 0.7);
  box-shadow: none;
}

.performance-mode .line-glow,
.performance-mode .progress-glow,
.performance-mode .option-shine {
  animation: none;
  transition: none;
}

.performance-mode .result-glow {
  animation: none;
  opacity: 0.35;
}

.performance-mode .btn-primary:hover,
.performance-mode .option-card:hover,
.performance-mode .trait-tag:hover {
  box-shadow: none;
}

/* Mobile-first refinements */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 0 var(--space-sm);
  }

  .title-bg {
    font-size: 4.2rem;
    letter-spacing: 0.55rem;
  }

  .question-text {
    font-size: 1.08rem;
  }

  .result-content {
    padding: 2rem 1.3rem;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 0;
  }

  .title-decoration {
    margin-bottom: 2rem;
  }

  .title-bg {
    font-size: 2.5rem;
    letter-spacing: 0.22rem;
  }

  .title-text {
    letter-spacing: 0.2rem;
    font-size: 1.95rem;
    line-height: 1.25;
  }

  .subtitle {
    letter-spacing: 0.35rem;
    font-size: 1rem;
  }

  .decoration-line {
    width: min(260px, 72vw);
  }

  .intro-text {
    font-size: 1rem;
    line-height: 1.95;
    margin-bottom: 1.5rem;
  }

  .rules-section {
    padding: 1rem;
  }

  .rules-list {
    font-size: 0.92rem;
    line-height: 1.8;
  }

  .mode-actions,
  .resume-actions {
    width: 100%;
  }

  .mode-actions .btn-primary,
  .resume-actions .btn-secondary,
  .test-actions .btn-secondary {
    width: 100%;
  }

  .test-actions {
    margin-bottom: var(--space-md);
  }

  .progress-info {
    font-size: 0.82rem;
  }

  .question-title {
    font-size: 1.18rem;
    letter-spacing: 0.14rem;
  }

  .question-text {
    font-size: 1rem;
    line-height: 1.62;
  }

  .options-section {
    gap: 0.7rem;
  }

  .option-inner {
    padding: 1rem 0.9rem;
    align-items: flex-start;
  }

  .option-letter {
    width: 1.8rem;
    height: 1.8rem;
    min-width: 1.8rem;
    margin-right: 0.68rem;
  }

  .option-text {
    font-size: 0.94rem;
    line-height: 1.5;
  }

  .result-label {
    letter-spacing: 0.22rem;
    font-size: 1rem;
  }

  .result-type {
    font-size: 2.1rem;
    letter-spacing: 0.2rem;
  }

  .type-english {
    font-size: 1.18rem;
    letter-spacing: 0.12rem;
  }

  .result-title {
    font-size: 1.05rem;
    letter-spacing: 0.12rem;
    margin-bottom: 1.2rem;
  }

  .result-description {
    font-size: 0.94rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }

  .trait-tag {
    font-size: 0.86rem;
    padding: 0.4rem 0.7rem;
  }

  .result-footer {
    width: 100%;
    gap: 0.55rem;
  }

  .result-footer .btn-secondary,
  .result-footer .btn-primary {
    width: 100%;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .particles {
    opacity: 0.38;
  }

  .title-bg {
    display: none;
  }

  .title-text {
    font-size: 1.58rem;
    gap: 0.02rem;
  }

  .subtitle {
    font-size: 0.9rem;
    letter-spacing: 0.2rem;
  }

  .footer-decoration {
    margin-top: 1.9rem;
    gap: 0.5rem;
    font-size: 0.75rem;
    flex-wrap: wrap;
  }

  .footer-text {
    letter-spacing: 0.12rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.74rem 0.85rem;
    font-size: 0.92rem;
    letter-spacing: 0.06rem;
    margin-bottom: 0.4rem;
  }

  .question-count .value {
    font-size: 1rem;
  }

  .result-content {
    padding: 1.15rem 0.9rem;
  }

  .meta-pill {
    width: 100%;
    justify-content: center;
  }

  .result-traits {
    gap: 0.55rem;
    margin-bottom: 1.3rem;
  }

  .profile-card {
    margin-top: var(--space-md);
    padding: 0.85rem;
  }

  .profile-card-item {
    min-height: auto;
    padding: 0.5rem 0.55rem;
  }
}

/* Touch-first interaction optimizations */
@media (hover: none), (pointer: coarse) {
  .btn-primary,
  .btn-secondary {
    min-height: 46px;
    padding-top: 0.78rem;
    padding-bottom: 0.78rem;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.08);
  }

  .option-card {
    min-height: 56px;
    transform: none;
  }

  .option-card:hover,
  .option-card.option-selected {
    transform: none;
  }

  .option-card:hover .option-shine {
    left: -100%;
  }

  .option-card:active {
    transform: scale(0.995);
    box-shadow:
      0 3px 12px rgba(0, 0, 0, 0.14),
      0 0 0 1px rgba(0, 0, 0, 0.08) inset;
  }

  .btn-primary:hover,
  .btn-secondary:hover {
    transform: none;
  }

  .btn-primary:active,
  .btn-secondary:active {
    transform: scale(0.985);
  }

  .progress-fill {
    transition: width 0.25s ease;
  }
}
</style>