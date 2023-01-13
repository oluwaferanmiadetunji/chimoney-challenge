const styles = {
  container: {
    width: "100vw",
    height: "100vh",
  },
  toolbar: {
    background: "#1b1b1b",
    padding: "0 40px",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    mr: 2,
    fontFamily: "monospace",
    flexGrow: 1,
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  menuPaperProps: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      marginLeft: -0.5,
      marginRight: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
  profile: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  menuItem: {
    width: "200px",
  },
  menuText: {
    marginLeft: "20px",
  },
  children: {
    marginTop: "100px",
  },
};

export default styles;
