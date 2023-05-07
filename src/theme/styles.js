import { theme } from "../theme/theme";

export const aboutStyles = {
  root: {
    height: { xs: "auto", md: "100vh" },
    padding: { xs: 8, md: 18 },
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: { xs: 5, md: 5 },
  },
  body: {
    textAlign: "left",
  },
  bodyBold: {
    color: "primary.main",
    fontWeight: "bold",
    textAlign: "left",
  },
  imageContainer: {
    marginTop: { xs: 5, md: 0 },
    display: "flex",
    alignSelf: "center",
    justifyContent: {
      xs: "center",
      md: "flex-end",
    },
  },
  image: {
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: "50%",
    height: { xs: 150, md: 250 },
    width: { xs: 150, md: 250 },
  },
};

export const contactStyles = {
  root: {
    minHeight: { xs: "auto", md: "75vh" },
    padding: { xs: 8, md: 18 },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: { xs: 5, md: 10 },
  },
  formContainer: {
    "& .MuiInput-underline:before": {
      borderBottomColor: "text.primary",
    },
  },
  sendButton: {
    borderRadius: 2,
    fontSize: { xs: 10, md: 15 },
    marginBottom: { xs: 5, md: 0 },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: { xs: 0, md: 15 },
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "large",
    color: "text.secondary",
  },
  logo: {
    height: 50,
    width: 50,
    marginBottom: 1,
    marginTop: -5,
  },
};

export const homeStyles = {
  root: {
    height: "100vh",
    padding: {
      xs: 8,
      md: 18,
    },
  },
  section: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
  button: {
    borderColor: "primary.main",
    borderRadius: 2,
    fontSize: {
      xs: 10,
      md: 15,
    },
    width: {
      xs: 100,
      md: 140,
    },
  },
};

export const rightSideLinksStyles = {
  root: {
    position: "fixed",
    color: "text.secondary",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-end",
    paddingRight: { xs: 4, md: 6 },
  },
  icon: {
    fontSize: "large",
    cursor: "pointer",
    alignSelf: "center",
    "&:hover": {
      color: "primary.main",
    },
  },
  divider: {
    width: "0.1px",
    height: "40%",
    alignSelf: "center",
  },
  text: {
    writingMode: "vertical-rl",
    alignSelf: "center",
    fontSize: { xs: "8px", md: "10px" },
  },
};

export const navbarStyles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "space-between",
    p: { xs: 4, md: 6 },
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  navSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navItems: {
    height: { xs: 40, md: 50 },
    width: { xs: 40, md: 50 },
  },
  iconButton: {
    bgcolor: "secondary.main",
    color: "text.primary",
    "&:hover": {
      bgcolor: "secondary.dark",
    },
  },
  menuIcon: {
    fontSize: { xs: "medium", md: "xx-large" },
  },
  drawerPaperProps: {
    height: { xs: 220, md: 350 },
    width: { xs: 220, md: 350 },
    borderBottomLeftRadius: "100%",
    mt: { xs: -2, md: -2 },
    disableScrollLock: true,
  },
  drawerContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "secondary.main",
    color: "text.primary",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginTop: { xs: 1, md: -1 },
    marginRight: { xs: 3, md: 6 },
    color: "background.default",
  },
  closeIcon: {
    fontSize: { xs: "medium", md: "xx-large" },
    color: "white",
    marginTop: { xs: -1, md: 0 },
    paddingRight: { xs: 1, md: 0 },
  },
  menuSection: {
    paddingLeft: { xs: 5, md: 10 },
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  hashLink: {
    textDecoration: "none",
  },
  textOptions: {
    marginBottom: { xs: 0, md: 1 },
    fontSize: { xs: "small", md: "large" },
    color: "white",
    textAlign: "flex-start",
    "&:hover": {
      fontWeight: "bold",
      color: "text.primary",
    },
  },
};

export const projectsStyles = {
  root: {
    padding: { xs: 8, md: 18 },
    height: { xs: "auto", md: "100vh" },
  },
  title: {
    marginBottom: { xs: 5, md: 10 },
  },
  slidesContainer: {
    [theme.breakpoints.down("md")]: {
      minHeight: "70%",
      display: "flex",
      alignContent: "space-between",
    },
  },
  container: {
    marginTop: -5,
  },
  card: {
    maxWidth: 500,
    mx: "auto",
    marginBottom: 5,
    borderRadius: 5,
    [theme.breakpoints.up("md")]: {
      boxShadow: "15px 15px 0px 0px #1c1e26, 15px 15px 0px 0.5px #2af0ea",
    },
  },
  cardHeader: {
    bgcolor: "#232733",
  },
  cardBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardMedia: {
    maxHeight: 450,
  },
  link: {
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export const skillsStyles = {
  root: {
    padding: { xs: 8, md: 18 },
    height: { xs: "auto", md: "100vh" },
  },
  container: {
    justifyContent: "center",
    rowGap: theme.spacing(3),
    marginTop: -3,
  },
  title: {
    marginBottom: { xs: 5, md: 10 },
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
    position: "fixed",
    padding: { xs: 4, md: 9 },
    bottom: 0,
    right: 0,
  },
  icon: {
    color: "text.secondary",
    fontSize: { xs: "x-large", md: "xx-large" },
    position: "fixed",
    transform: "rotate(180deg)",
    margin: { xs: -2, md: 0 },
    "&:hover": {
      color: "primary.main",
    },
  },
};