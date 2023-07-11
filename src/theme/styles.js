import { theme } from '../theme/theme';

export const aboutStyles = {
  root: {
    height: { xs: 'auto', md: '100vh' },
    padding: { xs: 4, sm: 10, md: 18 },
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: { xs: '5rem', md: 0 },
  },
  title: {
    textAlign: 'center',
    marginBottom: { xs: 5, md: 5 },
  },
  body: {
    textAlign: 'left',
  },
  bodyBold: {
    color: 'primary.main',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  imageContainer: {
    marginTop: { xs: 5, md: 0 },
    display: 'flex',
    alignSelf: 'center',
    justifyContent: {
      xs: 'center',
      md: 'flex-end',
    },
  },
  image: {
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: '50%',
    height: { xs: 150, md: 250 },
    width: { xs: 150, md: 250 },
  },
};

export const contactStyles = {
  root: {
    minHeight: { xs: 'auto', md: '75vh' },
    padding: { xs: 4, sm: 10, md: 18 },
    marginTop: { xs: '5rem', md: 0 },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: { xs: '5rem', md: 0 },
  },
  title: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginBottom: { xs: -5, md: 10 },
  },
  formContainer: {
    '& .MuiInput-underline:before': {
      borderBottomColor: 'text.primary',
    },
  },
  sendButton: {
    transition: 'var(--transition)',
    borderColor: 'primary.main',
    borderRadius: 1.5,
    fontSize: { xs: 10, md: 15 },
    marginBottom: { xs: 5, md: 0 },
    '&:hover, &:focus-visible': {
      outline: 'none',
      boxShadow: '3px 3px 0 0 #67EBCF',
      transform: 'translate(-4px, -4px)',
    },
    '&:after': {
      display: 'none !important',
    },
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: { xs: 0, md: 15 },
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 'x-large',
    color: 'text.secondary',
  },
  logo: {
    height: 50,
    width: 50,
    marginBottom: 1,
    marginTop: -5,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5
  }
};

export const homeStyles = {
  root: {
    height: '100vh',
    padding: {
      xs: 8,
      md: 18,
    },
  },
  section: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginTop: { xs: -2, md: 0 },
  },
  button: {
    transition: 'var(--transition)',
    borderColor: 'primary.main',
    '&:hover, &:focus-visible': {
      outline: 'none',
      boxShadow: '3px 3px 0 0 #67EBCF',
      transform: 'translate(-4px, -4px)',
    },
    '&:after': {
      display: 'none !important',
    },
    borderRadius: 1.5,
    fontSize: {
      xs: 10,
      md: 15,
    },
    width: {
      xs: 100,
      md: 140,
    },
    height: {
      xs: 35,
      md: 45
    }
  },
};

export const rightSideLinksStyles = {
  root: {
    position: 'fixed',
    color: 'text.secondary',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-end',
    paddingRight: { xs: 4, md: 6 },
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
    alignSelf: 'center',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: 'scale(1)',
    '&:hover': {
      color: 'secondary.main',
      transform: 'translateY(-3px)',
    },
  },
  divider: {
    width: '0.1px',
    height: '40%',
    alignSelf: 'center',
  },
  text: {
    writingMode: 'vertical-rl',
    alignSelf: 'center',
    fontSize: { xs: '8px', md: '12px' },
  },
};

export const navbarStyles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'space-between',
    p: { xs: 4, md: 6 },
    height: '6rem',
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.down('md')]: {
      height: '5rem',
    },
  },
  navSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItems: {
    height: { xs: 45, md: 60 },
    width: { xs: 45, md: 60 },
  },
  iconButton: {
    bgcolor: 'secondary.main',
    color: 'text.primary',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      bgcolor: 'secondary.dark',
    },
  },
  menuIcon: {
    fontSize: { xs: 25, md: 40 },
    transition: 'opacity 2s ease',
    color: 'background.default',
  },
  drawerPaperProps: {
    height: { xs: '100%', md: 500 },
    width: { xs: '100vw', md: 500 },
    borderBottomLeftRadius: { xs: 0, md: '100%' },
    // disableScrollLock: false,
    border: 'none',
  },
  drawerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: { xs: 'background.light' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    alignItems: 'center',
  },
  menuSection: {
    paddingLeft: { xs: 0, md: 10 },
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    justifyContent: 'space-between',
    height: { xs: '60vh', md: 'auto' },
    marginTop: { xs: '20vh', md: 0 },
  },
  hashLink: {
    textDecoration: 'none',
  },
  textOptions: {
    marginBottom: { xs: 0, md: 1 },
    fontSize: { xs: '1.2rem', md: '1.5rem' },

    color: { xs: 'secondary.main', md: 'text.primary' },
    textAlign: 'flex-start',
    '&:hover': {

      color: { xs: 'primary.text', md: 'secondary.main' },
    },
  },
  icon: {
    fontSize: 'x-large',
    color: 'text.secondary',
    '&:hover': {
      color: 'secondary.main',
    },
  },
};

export const projectsStyles = {
  root: {
    padding: { xs: 4, sm: 10, md: 18 },
    height: { xs: 'auto', md: '100vh' },
  },
  title: {
    marginBottom: { xs: 5, md: 10 },
  },
  slidesContainer: {
    [theme.breakpoints.down('md')]: {
      minHeight: '70%',
      display: 'flex',
      alignContent: 'space-between',
    },
  },
  container: {
    marginTop: { xs: '5rem', md: -5 },
  },
  card: {
    maxWidth: 600,
    mx: 'auto',
    marginBottom: 5,
    borderRadius: 5,
    border: '0.1px solid',
    borderColor: 'primary.main',
    [theme.breakpoints.up('md')]: {
      boxShadow: '15px 15px 0px 0px #071426, 15px 15px 0px 0.5px #67EBCF',
    },
  },
  cardHeader: {
    bgcolor: 'background.light',
    fontWeight: 'bold !important',
    '& .MuiCardHeader-title': {
      [theme.breakpoints.down('sm')]: {
        maxHeight: 10,
        fontSize: '1rem',
      },
      [theme.breakpoints.down('md')]: {
        maxHeight: 20,
        fontSize: '1rem',
      },
    },
  },
  cardBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'background.default',
  },
  cardMedia: {
    maxHeight: 450,
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'background.default',
  },
  link: {
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.6rem',
    },
    '&:hover': {
      color: 'background.default',
    },
  },
};

export const skillsStyles = {
  root: {
    px: { xs: 4, sm: 10, md: 18 },
    height: { xs: 'auto', md: '100vh' },
    marginTop: { xs: '5rem', md: 0 },
  },
  paper: {
    bgcolor: 'background.light',
    // border: "1px solid ",
    // borderColor: "primary.main",
    borderRadius: 5,
    py: { xs: 3, sm: 5, md: 10 },
    m: { xs: 0, md: 5 },
    // [theme.breakpoints.up("md")]: {
    //   boxShadow: "15px 15px 0px 0px #1c1e26, 15px 15px 0px 0.5px #2af0ea",
    // },
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    rowGap: { xs: theme.spacing(2), md: theme.spacing(3) },
  },
  title: {
    marginBottom: { xs: 5, md: 5 },
  },
  iconImage: {
    height: { xs: 35, md: 60 },
  },
  icon: {
    fontSize: { xs: 35, md: 60 },
  },
};

export const toggleStyles = {
  root: {
    position: 'fixed',
    margin: { xs: 4, md: 9 },
    bottom: 0,
    right: 0,
  },
  icon: {
    color: 'text.secondary',
    fontSize: 40,
    position: 'fixed',
    transform: 'rotate(180deg)',
    margin: { xs: -4, md: -1 },
    '&:hover': {
      color: 'secondary.main',
    },
  },
};
