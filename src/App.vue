<script setup>
import { ref, computed, onMounted } from 'vue'
import { questions, personalities } from './data.js'

const currentPhase = ref('welcome')
const currentQuestionIndex = ref(0)
const answers = ref([])
const showContent = ref(false)
const optionVisible = ref([])

const currentQuestion = computed(() => questions[currentQuestionIndex.value])
const progress = computed(() => ((currentQuestionIndex.value + 1) / questions.length) * 100)
const totalProgress = computed(() => Math.round((currentQuestionIndex.value / questions.length) * 100))

const personalityType = computed(() => {
  if (answers.value.length < questions.length) return null

  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

  answers.value.forEach((answer, index) => {
    const question = questions[index]
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
const selectOption = (letter, index) => {
  if (optionVisible.value.includes(letter)) return

  optionVisible.value.push(letter)

  setTimeout(() => {
    answers.value.push(letter)

    if (currentQuestionIndex.value < questions.length - 1) {
      setTimeout(() => {
        currentQuestionIndex.value++
        optionVisible.value = []
      }, 200)
    } else {
      setTimeout(() => {
        currentPhase.value = 'result'
      }, 300)
    }
  }, 150)
}

const startTest = () => {
  showContent.value = false
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

const restartTest = () => {
  showContent.value = false
  setTimeout(() => {
    currentPhase.value = 'welcome'
    currentQuestionIndex.value = 0
    answers.value = []
    setTimeout(() => {
      showContent.value = true
    }, 50)
  }, 300)
}

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 300)
})
</script>

<template>
  <div class="page-container">
    <div class="particles">
      <div 
        v-for="i in 30" 
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
                  <li v-for="(rule, i) in ['共 50 道题目', '根据直觉选择最符合你的选项', '没有正确答案，随心而动即可']" :key="i" :style="{ animationDelay: i * 0.2 + 's' }">
                    {{ rule }}
                  </li>
                </ul>
              </div>

              <button class="btn-primary" @click="startTest">
                <span class="btn-text">踏入江湖</span>
                <span class="btn-icon">→</span>
              </button>
            </div>
          </Transition>

          <div class="footer-decoration">
            <span>◆</span>
            <span class="footer-text">测字知江湖，论剑见人心</span>
            <span>◆</span>
          </div>
        </div>

        <div v-else-if="currentPhase === 'test'" class="test-phase">
          <div class="test-header">
            <div class="progress-info">
              <span class="question-count">
                <span class="label">第</span>
                <span class="value">{{ currentQuestionIndex + 1 }}</span>
                <span class="label">/ {{ questions.length }} 问</span>
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
              @click="selectOption(option.letter, index)"
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
          </div>

          <div class="result-footer">
            <div class="decoration-line">
              <div class="line-glow"></div>
            </div>
            <button class="btn-primary" @click="restartTest">
              <span class="btn-text">再次踏入江湖</span>
              <span class="btn-icon">↺</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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

.match-icon {
  color: var(--gold);
}

.result-footer {
  margin-top: 2rem;
}

.result-footer .decoration-line {
  margin-bottom: 2rem;
}
</style>