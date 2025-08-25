import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Register VS Code UI components
import '@vscode-elements/elements'

createApp(App).mount('#app')