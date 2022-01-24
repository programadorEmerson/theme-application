import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import { useThemeContext } from 'hooks/theme-selector';

import { AlertNotification } from 'components/AlertNotification';

export default function CreateNewTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const { handleCreateNewTheme } = useThemeContext();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Novo tema</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para criar um novo tema, informe o nome abaixo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do tema"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              if (!title) {
                return AlertNotification({
                  type: 'error',
                  message: 'Informe um título',
                });
              }
              handleCreateNewTheme({ title });
              handleClose();
              AlertNotification({
                type: 'success',
                message: 'Tema criado e selecionado.',
              });
            }}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
