import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Firebase, { FirebaseContext } from './firebase'
import theme from './theme'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </FirebaseContext.Provider>
  </StrictMode>
)
