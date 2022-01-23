import { FaLayerGroup, FaRegEye } from 'react-icons/fa';

import { CustomContainnerIcon } from 'styles/routes/menu';

export const itemsMenu = [
  {
    icone: (
      <CustomContainnerIcon>
        <FaLayerGroup style={{ fontSize: '1.3rem' }} />
      </CustomContainnerIcon>
    ),
    text: 'Selecionar Tema',
    link: '/',
  },
  {
    icone: (
      <CustomContainnerIcon>
        <FaRegEye style={{ fontSize: '1.3rem' }} />
      </CustomContainnerIcon>
    ),
    text: 'Visualizar Tema',
    link: '/main',
  },
];
