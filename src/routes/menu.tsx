import { FaBars } from 'react-icons/fa';

import { CustomContainnerIcon } from 'styles/routes/menu';

export const itemsMenu = [
  {
    icone: (
      <CustomContainnerIcon>
        <FaBars width="1.7rem" />
      </CustomContainnerIcon>
    ),
    text: 'Selecionar Tema',
    link: '/',
  },
  {
    icone: (
      <CustomContainnerIcon>
        <FaBars width="1.7rem" />
      </CustomContainnerIcon>
    ),
    text: 'Visualizar Tema',
    link: '/main',
  },
];
