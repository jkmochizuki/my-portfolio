import { theme } from "../theme/theme";

export const aboutStyles = {
  root: {
    height: "100vh",
    padding: { xs: 8, md: 15 },
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  body: {
    textAlign: "left",
  },
  imageContainer: {
    marginTop: { xs: 5, md: 0 },
    alignSelf: "center",
    textAlign: "center",
  },
  image: {
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: "50%",
    height: { xs: 150, md: 300 },
    width: { xs: 150, md: 300 },
  },
};

export const contactStyles = {
  root: {
    minHeight: "70vh",
    padding: { xs: 8, md: 15 },
  },
  formTitle: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: { xs: 0, md: 5 },
    marginTop: { xs: 5, md: 0 },
  },
  formContainer: {
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
  },
  sendButton: {
    borderRadius: 2,
    fontSize: { xs: 10, md: 15 },
  },
  infoContainer: {
    alignSelf: "center",
    textAlign: "center",
  },
};

export const homeStyles = {
  root: {
    height: "100vh",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    padding: {
      xs: 8,
      md: 15,
    },
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

export const leftMenuStyles = {
  root: {
    position: "fixed",
    color: "text.secondary",
    height: "40vh",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-start",
    paddingLeft: { xs: 3, md: 6 },
    marginBottom: { xs: -8, md: 0 },
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    fontSize: { xs: "large", md: "x-large" },
    cursor: "pointer",
  },
  divider: {
    width: "0.2px",
    height: "25vh",
    alignSelf: "center",
  },
};

export const navbarStyles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "space-between",
    p: { xs: 3, md: 6 },
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
    color: "background.default",
    "&:hover": {
      bgcolor: "secondary.dark",
    },
  },
  menuIcon: {
    fontSize: { xs: "medium", md: "xx-large" },
  },
  drawerPaperProps: {
    height: { xs: 270, md: 450 },
    width: { xs: 270, md: 450 },
    borderBottomLeftRadius: "100%",
    mt: { xs: -4.5, md: -3 },
  },
  drawerContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "secondary.main",
    color: "background.default",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    fontSize: { xs: "medium", md: "xx-large" },
  },
  menuSection: {
    paddingLeft: { xs: 13, md: 20 },
    left: 0,
  },
  hashLink: {
    textDecoration: "none",
  },
  textOptions: {
    marginBottom: { xs: 0.5, md: 2 },
    "&:hover": {
      color: "text.secondary",
    },
  },
};

export const projectsStyles = {
  root: {
    padding: { xs: 8, md: 15 },
    maxHeight: { xs: "70vh", md: "100vh" },
  },
  container: {
    minHeight: "75vh",
  },
  slidesContainer: {
    [theme.breakpoints.down("md")]: {
      minHeight: "70%",
      display: "flex",
      alignContent: "space-between",
      mb: 5,
    },
  },
  card: {
    maxWidth: 600,
    mx: "auto",
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
  link: {
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export const skillsStyles = {
  root: {
    padding: { xs: 8, md: 15 },
    height: "100vh",
  },
  container: {
    minHeight: "70vh",
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
    color: "text.secondary",
    fontSize: { xs: "x-large", md: "xxx-large" },
    position: "fixed",
    transform: "rotate(180deg)",
    margin: { xs: -2, md: 0 },
  },
};
