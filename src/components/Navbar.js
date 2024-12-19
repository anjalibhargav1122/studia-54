import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../images/logo.svg"
import { useNavigate } from 'react-router-dom';

const pages = [{ name: 'about', url: "/about" }, { name: 'portfolio', url: "/portfolio" }, { name: 'contacts', url: "/contact" }, { name: 'services', url: "/services" }];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  function linkChange(url) {
    navigate(url);
  }


  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(31, 31, 32, 0.34)',
        boxShadow: 'none',
        paddingTop: '25px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <div className='w-[90%]'>
              <img src={logo} alt='logo' className='w-full h-full' />
            </div>
          </Box>

          {/* Pages */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px', alignItems: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => linkChange(page.url)}
                sx={{
                  my: 2, color: 'white', display: 'block', textTransform: 'uppercase', fontFamily: "'GT America LC', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                  '&:hover': {
                    // textDecoration: 'underline',
                    borderBottom: "1px solid white"
                  }
                }}
              >
                {page.name}
              </Button>
            ))}

            |  <a href='#' className='ff'>RU</a>
            <a href='#' className='ff'>EN</a>

          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                onClick={() => linkChange(page.url)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


  );
}

export default ResponsiveAppBar;
