import Homepage from './pages/homepage'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/private-route'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
