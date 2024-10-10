import { Button, Grid2, Paper } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../firebase/auth-provider'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
  }

  const handleSignOut = () => {
    logOut().then(() => navigate('/login'))
  }

  return (
    <Grid2 container px={1.6} py={2.4}>
      <Grid2>
        <Paper sx={{ p: 1.6, borderRadius: '1rem' }}>Mis negocios</Paper>
      </Grid2>
      <Button type="button" onClick={handleSignOut}>
        Cerrar sesión
      </Button>
    </Grid2>
  )
}

export default Homepage
