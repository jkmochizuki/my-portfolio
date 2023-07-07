import React, { useEffect, useRef, useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from '../theme/theme';
import { NavHashLink } from 'react-router-hash-link';
import { menuOptions } from '../constants';
import { navbarStyles } from '../theme/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { useInView } from 'react-intersection-observer';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const prevScrollPos = useRef(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  // useEffect(() => {
  //   isOpen
  //     ? document.body.classList.add('hide-scroll')
  //     : document.body.classList.remove('hide-scroll');
  // }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos || window.pageYOffset < 50) {
        setIsScrollUp(true);
      } else {
        setIsScrollUp(false);
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
      setIsLoading(false);
    }, 200);
  };

  const handleClink = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    setIsOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {isScrollUp && (
        <AppBar
          sx={{
            ...navbarStyles.root,
            backgroundColor:
              isOpen || isLoading ? 'transparent' : 'rgba(7, 20, 38, 0.9)',
          }}
          position="fixed"
          ref={ref}
        >
          {/* navbar */}
          <Box
            sx={navbarStyles.navSection}
            className={`container ${inView ? 'slide-in-nav' : ''}`}
          >
            {!isOpen ? (
              <Box
                component="img"
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt=""
                sx={navbarStyles.navItems}
              />
            ) : (
              <Box sx={navbarStyles.navItems} />
            )}

            <IconButton
              sx={navbarStyles.iconButton}
              onClick={isOpen ? handleClink : toggleDrawer}
            >
              {!isLoading && !isOpen && <MenuIcon sx={navbarStyles.menuIcon} />}
              {isLoading && <HorizontalRuleIcon sx={navbarStyles.menuIcon} />}
              {!isLoading && isOpen && <CloseIcon sx={navbarStyles.menuIcon} />}
            </IconButton>
          </Box>

          {/* menu drawer */}
          <Drawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawer}
            PaperProps={{ sx: navbarStyles.drawerPaperProps }}
            variant="temporary"
            transitionDuration={500}
          >
            <Box sx={navbarStyles.drawerContainer}>
              {/* menu options */}
              <Box sx={navbarStyles.menuSection}>
                {menuOptions.map((o) => (
                  <NavHashLink
                    to={o.to}
                    smooth
                    style={navbarStyles.hashLink}
                    onClick={handleClink}
                    key={o.name}
                  >
                    <Typography sx={navbarStyles.textOptions}>
                      {o.name}
                    </Typography>
                  </NavHashLink>
                ))}
                {/* icons */}
                <Hidden mdUp>
                  <Grid item xs={12}>
                    <Stack direction="row" spacing={1}>
                      <LinkedInIcon
                        sx={navbarStyles.icon}
                        onClick={() =>
                          window.open(
                            'https://www.linkedin.com/in/jmochizuki/',
                            '_blank'
                          )
                        }
                      />
                      <GitHubIcon
                        sx={navbarStyles.icon}
                        onClick={() =>
                          window.open(
                            'https://github.com/julianamochizuki',
                            '_blank'
                          )
                        }
                      />
                      <EmailIcon
                        sx={navbarStyles.icon}
                        onClick={() =>
                          window.open('mailto:jmochizuki.dev@gmail.com')
                        }
                      />
                      <DescriptionIcon
                        sx={navbarStyles.icon}
                        onClick={() =>
                          window.open(
                            'https://resume.creddle.io/resume/3bkcgktacjr',
                            '_blank'
                          )
                        }
                      />
                    </Stack>
                  </Grid>
                </Hidden>
              </Box>
            </Box>
          </Drawer>
        </AppBar>
      )}
    </ThemeProvider>
  );
}
