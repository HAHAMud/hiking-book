import React, { ReactElement, JSXElementConstructor } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import HikingIcon from '@mui/icons-material/Hiking';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Box,
  Fade,
  Container,
  MenuItem,
  Menu,
  Button,
  IconButton,
  Avatar,
} from '@mui/material';

import { PAGES_PATH, SETTINGS_PATH, LANGUAGES } from '@/constants/common';
import MenuList from '@/components/AppBar/MenuList';

interface Props {
  window?: () => Window;
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRouterLink = (path: string) => {
    navigate(`/${path}`); // 指引路由
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HikingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HK-Book
            </Typography>

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
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {Object.values(PAGES_PATH).map((page: string) => (
                  <MenuItem key={page} onClick={() => handleRouterLink(page)}>
                    <Typography textAlign="center">
                      {t(`nav-bar.${page}`)}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <HikingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HK-Book
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Object.values(PAGES_PATH).map((page: string) => (
                <Button
                  key={page}
                  onClick={() => handleRouterLink(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {t(`nav-bar.${page}`)}
                </Button>
              ))}
            </Box>
            <MenuList
              children={<PublicIcon sx={{ mr: 1 }} />}
              list={LANGUAGES}
              alt="Language"
              title="語言"
              style={{ mr: 2, color: 'inherit' }}
            />
            <MenuList
              children={
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              }
              list={SETTINGS_PATH}
              alt="Open settings"
              style={{ p: 0 }}
            />
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Toolbar id="back-to-top-anchor" /> */}
      {/* <Container>TODO Content</Container> */}
      {/* <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </>
  );
}
