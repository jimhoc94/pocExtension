import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Register VS Code UI components
import {
  provideVSCodeDesignSystem,
  vsCodeButton,
  vsCodeTextArea,
  vsCodeTextField,
  vsCodeDropdown,
  vsCodeOption,
  vsCodePanels,
  vsCodePanelTab,
  vsCodePanelView,
  vsCodeProgressRing,
  vsCodeDivider
} from '@vscode/webview-ui-toolkit'

provideVSCodeDesignSystem().register(
  vsCodeButton(),
  vsCodeTextArea(),
  vsCodeTextField(),
  vsCodeDropdown(),
  vsCodeOption(),
  vsCodePanels(),
  vsCodePanelTab(),
  vsCodePanelView(),
  vsCodeProgressRing(),
  vsCodeDivider()
)

createApp(App).mount('#app')