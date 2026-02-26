'use client'
import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Tooltip, MenuItem, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

import Sidebar from './SideBar';
import SearchBar from './SearchBar';
import ColorModeSelect from './ui/ToggleButton';

const pages = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];
const settings = [
  { name: 'Profile', path: '/profile' },
  { name: 'Account', path: '/account' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Sign in', path: '/sign-in' },
];

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
    <AppBar position="fixed" sx={{ bgcolor: "#001F3F", backgroundImage: 'none' }} >
      {/* <Container maxWidth="xl"> */}
      <Toolbar sx={{ px: { xs: 1, sm: 2 }, justifyContent: 'space-between' }} disableGutters>

        {/* 1. LEFT CORNER: Menu Button */}
        <IconButton
          onClick={() => setOpen(true)}
          size="large"
          color="inherit"
          sx={{ mr: { xs: 1, sm: 2 } }}
        >
          <MenuIcon />
        </IconButton>
        <Sidebar open={open} onClose={() => setOpen(false)} />

        {/* 2. LOGO */}
        <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Logo"
            sx={{
              width: { xs: 100, sm: 140 },
              height: 'auto',
              display: { xs: 'none', sm: 'block' },
              mr: 2
            }}
          />
        </Link>

        {/* 3. CENTER-LEFT: Desktop Nav Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              href={page.path}
              sx={{ color: "white", textTransform: 'none', fontWeight: 500 }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {/* 4. CENTER-RIGHT: Search Bar & Sign In Button */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexGrow: { xs: 1, md: 0 },
          justifyContent: 'flex-end',
          mr: 2
        }}>
          <SearchBar />
        </Box>

        {/* 5. RIGHT CORNER: Cart, Profile & Theme Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
          <Link href="/favorite">
            <IconButton sx={{
              color: 'white', backgroundColor: "transparent", border: "none",
            }}>
              <FavoriteBorderIcon sx={{ fontSize: { xs: '26px', sm: '32px' } }}
                 />
            </IconButton>
          </Link>
          <Link href="/cart">
            <IconButton sx={{ color: 'white' }}>
              <ShoppingCartIcon sx={{ fontSize: { xs: '26px', sm: '32px' } }} />
            </IconButton>
          </Link>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon sx={{ color: 'white', fontSize: { xs: '30px', sm: '38px' } }} />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            disableScrollLock={true} // FIX: Prevents the page shift
          >
            {settings.map((setting, index) => (
              <MenuItem key={index} onClick={handleCloseUserMenu}>
                <Link href={setting.path}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ColorModeSelect />
          </Box>
        </Box>

      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default NavBar;