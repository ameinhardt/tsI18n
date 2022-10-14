import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

createApp(App)
.use(createI18n<false>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true
}))
.mount('#app')
