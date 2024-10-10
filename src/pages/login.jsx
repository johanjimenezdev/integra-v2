import {
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  InputAdornment,
  Paper,
  TextField
} from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../firebase/auth-provider'

function Login() {
  const { logIn, user } = useContext(AuthContext)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  if (user) {
    navigate('/')
  }

  const handleSubmit = e => {
    e.preventDefault()
    logIn(loginData.email, loginData.password)
      .then(() => {
        navigate('/')
      })
      .catch(err => console.log(err.message))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  return (
    <Box display="flex" width="100%" height="100%" alignItems="center" py={4.8}>
      <Container disableGutters maxWidth="lg">
        <Paper elevation={0} sx={{ mx: { xs: 2.4, md: 3.6 } }}>
          <Grid2 container width="100%" height="100%">
            <Grid2
              size={{ xs: 0, md: 6 }}
              bgcolor="primary.main"
              sx={{
                display: { xs: 'none', md: 'block' },
                borderTopLeftRadius: '1rem',
                borderBottomLeftRadius: '1rem'
              }}
            ></Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <form onSubmit={handleSubmit}>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={1.6}
                  sx={{
                    pt: 10,
                    px: { xs: 2.4, md: 3.6 },
                    pb: { xs: 2.4, md: 3.6 }
                  }}
                >
                  <TextField
                    name="email"
                    label="Correo electrónico"
                    value={loginData.email}
                    onChange={handleChange}
                    fullWidth
                  />
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    label="Contraseña"
                    value={loginData.password}
                    onChange={handleChange}
                    fullWidth
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {!showPassword ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill="rgba(0, 0, 0, 0.23)"
                                >
                                  <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill="rgba(0, 0, 0, 0.23)"
                                >
                                  <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                </svg>
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                  <Box display="flex" justifyContent="end">
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Iniciar sesión
                    </Button>
                  </Box>
                </Box>
              </form>
            </Grid2>
          </Grid2>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login
