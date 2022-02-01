import { createApp } from 'vue'
import App from './App.vue'

const app = document.createElement('div')
app.id = 'wordle-solver-app'
document.body.appendChild(app)

createApp(App).mount('#wordle-solver-app')
