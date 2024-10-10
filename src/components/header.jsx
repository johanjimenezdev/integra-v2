import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar
} from '@mui/material'
import fullLogo from '../assets/full-logo.svg'
import { useState } from 'react'

function Header() {
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <AppBar
      elevation={4}
      sx={{ bgcolor: 'background.paper', color: 'inherit' }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', p: 0.8 }}>
        <Box display="flex" height={48} alignItems="stretch">
          <IconButton sx={{ p: 1.2, mx: 0.5 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="inherit"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </IconButton>
          <Link href="#" display="flex" alignItems="center">
            <img src={fullLogo} alt="oikonomos-logo" width={180} />
          </Link>
        </Box>

        <Box>
          <IconButton
            onClick={e => setAnchorEl(e.currentTarget)}
            sx={{ width: 48, height: 48, p: 0 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}>O</Avatar>
          </IconButton>
          <Menu
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            slotProps={{
              paper: {
                sx: {
                  borderRadius: '1rem'
                }
              }
            }}
          >
            <MenuItem>Test</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
