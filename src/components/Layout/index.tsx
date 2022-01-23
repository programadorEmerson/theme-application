import React, { useEffect, useState } from 'react';

import { FaBars } from 'react-icons/fa';

import {
  ListItemButton,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import { CustomHeaderTitle } from 'components/CustomHeaderTitle';

import {
  CustomContainnerChildren,
  CustomSpanMenu,
  CustomPaper,
  CustomIconButton,
  CustomContentPage,
} from 'styles/layout';

import { itemsMenu } from 'routes/menu';

type LayoutProps = {
  title: string;
  showNewButton?: boolean;
  textNewButton?: string;
};

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  showNewButton = false,
  textNewButton = '',
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.title = `Theme Aplication - ${title}`;
  }, [title]);

  const TooltipCustom = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.primary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  }));

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <AppBar open={open}>
        <Toolbar>
          <CustomIconButton onClick={handleDrawerOpen} edge="start">
            {!open && (
              <>
                <FaBars />
                <span style={{ marginLeft: '2rem' }}>Theme Application</span>
              </>
            )}
          </CustomIconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <CustomIconButton
            className={open ? 'show-color-black' : 'show-color-white'}
            onClick={handleDrawerClose}
          >
            {theme.direction === 'rtl' ? (
              <FaBars color="secondary" />
            ) : (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  flex: '1',
                }}
              >
                <CustomSpanMenu>
                  <span className="text-menu">Theme Application</span>
                  <FaBars color="secondary" />
                </CustomSpanMenu>
              </div>
            )}
          </CustomIconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemsMenu.map(item => (
            <Box key={item.text}>
              {open ? (
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon>{item.icone}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ) : (
                <TooltipCustom title={item.text} placement="right">
                  <ListItemButton component="a" href={item.link}>
                    <ListItemIcon>{item.icone}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </TooltipCustom>
              )}
            </Box>
          ))}
        </List>
      </Drawer>
      <CustomContainnerChildren>
        <CustomPaper>
          <CustomHeaderTitle
            title={title}
            showNewButton={showNewButton}
            textButton={textNewButton}
          />
          <CustomContentPage>{children}</CustomContentPage>
        </CustomPaper>
      </CustomContainnerChildren>
    </Box>
  );
};
