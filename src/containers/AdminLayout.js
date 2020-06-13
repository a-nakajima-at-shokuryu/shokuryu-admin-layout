import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminDrawer from '../components/AdminDrawer';
import AdminFooter from '../components/AdminFooter';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'; 
const headerHeight = theme => theme.mixins.toolbar.minHeight; 
const drawerWidth = 200; 
const drawerMinWidth = theme => theme.spacing(7); 
const footerWidth = 500; 

const createTransition = (theme) => theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp, 
  duration: theme.transitions.duration.enteringScreen, 
});

const useStyles = makeStyles(theme => ({
  root: {}, 
  header: {
    width: open => open 
      ? `calc(100vw - ${drawerWidth}px)`
      : `calc(100vw - ${drawerMinWidth(theme)}px)`, 
    transition: createTransition(theme), 
  }, 
  drawer: {
    width: open => open 
      ? drawerWidth 
      : drawerMinWidth(theme), 
    boxShadow: theme.shadows[5], 
    overflowY: 'hidden', 
    whiteSpace: 'nowrap', 
    transition: createTransition(theme), 
  }, 
  footer: {
    position: 'sticky', 
    bottom: 0, 
    width: footerWidth, 
    margin: '0 auto', 
    boxShadow: theme.shadows[5], 
  }, 
  main: {
    marginLeft: open => open 
      ? drawerWidth
      : drawerMinWidth(theme), 
    marginTop: headerHeight(theme), 
    minHeight: `calc(100vh - ${headerHeight(theme)}px)`, 
    padding: theme.spacing(1), 
    transition: createTransition(theme), 
  }, 
}));

const AdminLayout = ({
  children, 
  className, 
  title, 
  ...other 
}) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles(open);
  classes.root = clsx(classes.root, className);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root} {...other}> 
      <AdminHeader className={classes.header} title={title} menuClick={toggleOpen}/>
      <AdminDrawer className={classes.drawer} />
      <main className={classes.main}>
        {children}
      </main>
      <AdminFooter className={classes.footer} />
    </div>
  )
}

export default AdminLayout
