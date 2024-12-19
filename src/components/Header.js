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
import logo from "../images/l1.svg";
import mini from "../images/mini.svg";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Grid } from '@mui/material';
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RiVkFill } from "react-icons/ri";


const pages = [{ name: 'about us', url: "/about" }, { name: 'portfolio', url: "/portfolio" }, { name: 'contacts', url: "/contact" }, { name: 'services', url: "/services" }];

function Header({ tx }) {
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

  const [scrolled, setScrolled] = React.useState(false);
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setShowOffcanvas(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  const icons = [
    {
      icn: <FaWhatsapp />
    },
    {
      icn: <AiOutlineInstagram />
    },
    {
      icn: <FaPinterest />
    },
    {
      icn: <MdFacebook />
    },
    {
      icn: <RiVkFill />
    },
    {
      icn: <AiFillYoutube />
    }
  ];

  return (
    <div>
      {!scrolled && (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(31, 31, 32, 0.34)',
            boxShadow: 'none',
            paddingTop: '30px',
            paddingBottom: "5px",
            px: 3,
            zIndex: 50
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '170px' }}>
                  <img src={logo} alt="logo" style={{ width: '100%', height: 'auto' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#d4d4d4',
                      marginTop: '16px',
                      textTransform: 'uppercase',
                      fontSize: '17px',
                      fontFamily: "'GT America LC', Arial, sans-serif",
                    }}
                  >
                    Home | {tx}
                  </Typography>
                </div>
              </Box>

              {/* Pages */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: '30px',
                  alignItems: 'center',
                }}
              >
                <CiSearch className="text-[#d4d4d4] text-2xl" />|
                <Box
                  sx={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}

                      onClick={() => linkChange(page.url)}
                      sx={{
                        color: 'white',
                        textTransform: 'uppercase',
                        fontFamily: "'GT America LC', Arial, sans-serif",
                        '&:hover': {
                          borderBottom: '1px solid white',
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                  <Box sx={{ display: 'flex', gap: '18px' }}>|
                    <a href="#" className="ff text-[#808080]" style={{ textDecoration: 'none' }}>
                      RU
                    </a>
                    <a href="#" className="ff" style={{ textDecoration: 'none' }}>
                      EN
                    </a>
                  </Box>
                </Box>
              </Box>

              {/* Mobile Menu */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
      )}


      {scrolled && (
        <nav className="bg-[#1f1f2057] text-white fixed top-0 left-0 w-full z-50">
          <div className="  flex justify-between items-center px-8 pt-6 pb-4">
            <a href="#" >
              <div style={{ display: 'flex', gap: '14px' }}>
                <div className='w-[50px]'> <img src={mini} alt="logo" style={{ width: '100%', height: 'auto' }} /></div>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#d4d4d4',
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    fontFamily: "'GT America LC', Arial, sans-serif",
                    alignSelf: 'end',
                    marginBottom: 0
                  }}
                >
                  Home | {tx}
                </Typography>
              </div>
            </a>
            <button
              className="text-white   px-4 py-2  "
              onClick={toggleOffcanvas}
            >
              <HiOutlineMenuAlt4 className='text-4xl' />
            </button>
          </div>
        </nav>
      )}


      <div
        className={`fixed w-[80%] sm:w-[50%] top-0 left-0 ps-10 pe-10 pb-4 h-full bg-[#202020] overflow-y-auto shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${showOffcanvas ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className='text-end'> <button
          className="text-6xl  text-white pt-4"
          onClick={() => setShowOffcanvas(false)}
        >
          &times;
        </button></div>
        <div className='border-b-[1px] border-white pb-14'>
          <CiSearch className='text-white text-2xl mt-10' />
        </div>
        <div className='mt-14 pb-14 border-b-[1px] border-white'>
          <Grid container rowSpacing={8} className='text-white '>
            <Grid item xs={12} md={6}>
              <a className='ff ' href='#'>ABOUT US</a><br /><br />
              <a className='ff uppercase' href='#'>Contacts</a><br /><br />
              <a className='ff uppercase' href='#'>Services</a><br /><br />
              <a className='ff uppercase' href='#'>Career</a><br /><br />
              <a className='ff uppercase' href='#'>Blog</a>
            </Grid>

            <Grid item xs={12} md={6}>
              <a className='ff ' href='#'>PORTFOLIO</a><br /><br />
              <a className='ff uppercase' href='#'>Commercials</a><br /><br />
              <a className='ff uppercase' href='#'>Architectural design</a><br /><br />
              <a className='ff uppercase' href='#'>Residential interiors</a><br /><br />
              <a className='ff uppercase' href='#'>Furniture brand FIFTYFOURMS</a>

            </Grid>  </Grid></div>
        <div className='flex items-center gap-5 mt-16'> {
          icons.map((v, i) => {
            return (

              <div key={i} className='bg-white flex items-center justify-center text-black w-8 h-8 rounded-full'>{i === 0 ? v.icn : <a href='#'>{v.icn}</a>}</div>


            )
          })
        }</div><div className='flex gap-4 mt-10'> <a className='ff text-[#848484]' href='#'>RU</a>
          <a className='ff text-white' href='#'>EN</a></div><p className='text-[#6b6b6b] ff text-base mt-10'>© 2013 — 2024 Studia-54 Interior Design and Engineering</p>
      </div>
    </div>
  );
}

export default Header;
