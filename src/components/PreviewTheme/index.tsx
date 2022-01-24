import * as React from 'react';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { ThemeProps } from 'types/theme_selector.context';

export default function PreviewTheme({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeProps;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {children}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '300px',
              height: '300px',
              backgroundColor: theme['background-color'],
            }}
          >
            <span
              style={{ color: theme['primary-text-color'], fontSize: '2rem' }}
            >
              Texto Primário
            </span>
            <span
              style={{ color: theme['secondary-text-color'], fontSize: '2rem' }}
            >
              Texto Secundário
            </span>
            <span style={{ color: theme['accent-color'], fontSize: '2rem' }}>
              Cor de destaque
            </span>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
