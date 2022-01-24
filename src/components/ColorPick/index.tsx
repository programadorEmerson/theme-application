import React, { useEffect } from 'react';

import { SketchPicker } from 'react-color';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { useThemeContext } from 'hooks/theme-selector';

import { CustomButton } from './styles';

export default function ColorPick({
  idTheme,
  color,
  keyTheme,
}: {
  idTheme: number;
  color: string;
  keyTheme: string;
}) {
  const [colorRef, setColorRef] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { handleUpdateColor } = useThemeContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    setColorRef(color);
  }, [color]);

  return (
    <>
      <CustomButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className={color}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 0.5 }}>
          <SketchPicker
            color={colorRef}
            onChangeComplete={color => {
              handleUpdateColor(idTheme, color.hex, keyTheme);
              setColorRef(color.hex);
            }}
          />
        </Typography>
      </Popover>
    </>
  );
}
