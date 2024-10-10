import { Box } from '@mui/material'
import Homepage from './pages/homepage'
import Header from './components/header'
import Login from './pages/login'

function App() {
  return (
    <>
      <Login />
      {/* <Box display="flex" flexDirection="column" height="100%" maxHeight="100%"> */}
      {/*   <Header /> */}
      {/*   <Box height="calc(100% - 64px)" maxHeight="100%" mt={6.4}> */}
      {/*     <Homepage /> */}
      {/*   </Box> */}
      {/* </Box> */}
    </>
  )
}

export default App
