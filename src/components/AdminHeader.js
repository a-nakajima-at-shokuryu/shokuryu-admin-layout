import React from 'react';
import {
  makeStyles, 
  AppBar,
  Toolbar, 
  IconButton, 
  Typography, 
  MenuItem, 
} from '@material-ui/core';
import clsx from 'clsx'; 
import { withTooltip } from '../Providers/MuiProvider'; 
import MenuIcon from '@material-ui/icons/Menu'; 
import GitHubIcon from '@material-ui/icons/GitHub'; 

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const AdminHeader = ({
  className, 
  title, 
  menuClick, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);

  return (
    <AppBar className={classes.root} {...other}>
      <Toolbar>
        <IconComponent icon={<MenuIcon/>} title="メニュー" edge="start" 
          onClick={menuClick}
        />
        <LogoComponent title={title} />
        <Spacer />
        <IconComponent icon={<GitHubIcon/>} title="Gitリポジトリ" edge="end" />
      </Toolbar>      
    </AppBar>
  )
}

export default AdminHeader;

const IconComponent = ({
  icon, 
  title, 
  text, 
  ...other 
}) => {
  return withTooltip(title)(
    <IconButton color="inherit" {...other}>
      {icon}
    </IconButton>
  );
};

const LogoComponent = ({
  title, 
  text, 
  href, 
  to, 
  ...other 
}) => {
  return withTooltip(title)(
    <Typography {...other}>
      <MenuItem>
        {text||title}
      </MenuItem>
    </Typography>
  );
};

const Spacer = () => (
  <div style={{ flex: 1 }} />
);
