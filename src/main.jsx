import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import Firebase, { FirebaseContext } from './firebase'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <CssBaseline />
      <App />
    </FirebaseContext.Provider>
  </StrictMode>
)
