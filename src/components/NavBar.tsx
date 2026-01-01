'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Sidebar from './SideBar';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Link from 'next/link';


import SearchBar from './SearchBar';
import ColorModeSelect from './ui/ToggleButton';

const pages = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/sign-up" },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#001F3F" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={() => setOpen(true)} size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "white", }}>
              <MenuIcon />
            </IconButton>
            <Sidebar open={open} onClose={() => setOpen(false)} />
          </Box>
          <Link href='/'>
            <Box
              component="img"
              src="/images/logo.png"
              alt="Logo"
              sx={{
                width: 150,
                height: 50,
                mr: 3, display: { xs: 'flex', md: 'flex' },
                "@media (max-width: 600px)": {
                  display: 'none'
                },

                "@media (max-width: 400px)": {
                  display: 'none'
                },
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.path}
                sx={{ color: "white", mx: 1 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: 'flex', alignItems: 'center', gap: 2,
          }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
            <Link href="/favorite">
              <IconButton sx={{
                color: 'white', backgroundColor: "transparent", border: "none",
              }}>
                <FavoriteBorderIcon sx={{
                  fontSize: '35px', marginRight: 2,
                  '@media(max-width:600px)': {
                    marginRight: 0,
                    fontSize: '25px'
                  }
                }} />
              </IconButton>
            </Link>
            <Link href="/cart">
              <IconButton sx={{
                color: 'white', backgroundColor: "transparent", border: "none",
              }}>
                <ShoppingCartIcon sx={{
                  fontSize: '35px', marginLeft: 1, marginRight: 1,
                  '@media(max-width:600px)': {
                    marginRight: 0,
                    marginLeft: 0,
                    fontSize: '25px'
                  }
                }} />

              </IconButton>
            </Link>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2 }}>
                <AccountCircleIcon sx={{
                  color: 'white', fontSize: '35px',
                  '@media(max-width:600px)': {
                    ml: 0,
                    fontSize: '28px',
                  }
                }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '47px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <ColorModeSelect />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

