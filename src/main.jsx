import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import useThemeStore from './store/ThemeStore'
import './style/Global.css'
import "./i18n/index.js"; 

function ThemeWrapper() {
  const theme = useThemeStore((state) => state.theme)

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeWrapper />
  </StrictMode>,
)