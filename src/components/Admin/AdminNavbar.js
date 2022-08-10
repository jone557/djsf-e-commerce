import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#f7eae8"
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flex: '1',
    cursor: "pointer",

  },
  logoAsLink: {
    textTransform: "Uppercase",
    color: "#ffaaaa",
  },
  link: {
    backgroundColor: '#ffaaaa',
    padding: '10px',
    textDecoration: 'none',
    fontSize: "17px",
    marginLeft: '5px',
    borderRadius: '15px',
    "&:hover": {
      color: '#ffaaaa',
      backgroundColor: "white"
    }
  },
  addProduct: {
    backgroundColor: '#ffaaaa',
    padding: '10px',
    textDecoration: 'none',
    fontSize: "17px",
    borderRadius: '15px',
    "&:hover": {
      color: '#ffaaaa',
      backgroundColor: "white"
    }
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Typography variant="h5" className={classes.logo}>
          <Link to='/dashboard' className={classes.logoAsLink}>
            Admin
          </Link>
        </Typography>
        <div className={classes.navlinks}>
          <Link to='/add-product' className={classes.addProduct}>
            Add Product
          </Link>
          <Link to="/log-out" className={classes.link}>
            Logout
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;