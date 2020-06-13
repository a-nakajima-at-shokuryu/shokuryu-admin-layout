import React from 'react'
import {
  makeStyles, 
  Drawer, 
  Toolbar, 
  Divider,
  MenuList, 
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import clsx from 'clsx'; 
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import { withTooltip } from '../Providers/MuiProvider';

const useStyles = makeStyles(theme => ({
  root: {}, 
}));

const AdminDrawer = ({
  className, 
  ...other 
}) => {
  const classes = useStyles();
  classes.root = clsx(classes.root, className)
  return (
    <Drawer
      className={classes.root}
      classes={{
        paper: classes.root, 
      }}
      
      variant="persistent"
      open 
      {...other}
    >
      <Toolbar />
      <Divider />

      <MenuComponent 
        items={[
          {icon: <SmartphoneIcon/>, title: 'スマートフォン', text: 'スマフォ', }, 
          {icon: <DesktopMacIcon/>, title: 'デスクトップ（Mac）', text: 'Mac', }, 
          {icon: <DesktopWindowsIcon/>, title: 'デスクトップ（Windows）', text: 'Windows', }, 
        ]}
      />
    </Drawer>
  )
}

export default AdminDrawer; 

const MenuComponent = ({
  items, 
  ...other 
}) => {
  return (
    <MenuList {...other}>
      {items.map(({ icon, title, text }) => (
        <MenuItemComponent 
          icon={icon}
          title={title}
          text={text}
        />
      ))}
    </MenuList>
  );
}; 

const MenuItemComponent = ({
  icon, 
  title, 
  text, 
}) => {
  return (
    <MenuItem>
      {withTooltip(title)(
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText>
        {text||title}
      </ListItemText>
    </MenuItem>
  );
};
