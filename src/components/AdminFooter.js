import React, { useState } from 'react';
import {
  makeStyles, 
  BottomNavigation, 
  BottomNavigationAction, 
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore'; 
import FavoriteIcon from '@material-ui/icons/Favorite'; 
import LocationOnIcon from '@material-ui/icons/LocationOn'; 
import clsx from 'clsx'; 

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const AdminFooter = ({
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className);
  const [value, setValue] = useState();

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={(_e, value) => setValue(value)}

      showLabels
      {...other}
    >
      <BottomNavigationAction label="Restore" icon={<RestoreIcon/>} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon/>} />
      <BottomNavigationAction label="LocationOn" icon={<LocationOnIcon/>} />
    </BottomNavigation>
  )
}

export default AdminFooter
