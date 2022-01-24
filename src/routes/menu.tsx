import { FaLayerGroup, FaRegEye } from 'react-icons/fa';

import { CustomContainnerIcon } from 'styles/routes/menu';

export type ItensMenuProps = {
  icone: JSX.Element;
  text: string;
  link: string;
};

export const itemsMenu = ({ color }: { color: string }): ItensMenuProps[] => {
  return [
    {
      icone: (
        <CustomContainnerIcon>
          <FaLayerGroup style={{ fontSize: '1.3rem', color }} />
        </CustomContainnerIcon>
      ),
      text: 'Selecionar Tema',
      link: '/',
    },
    {
      icone: (
        <CustomContainnerIcon>
          <FaRegEye style={{ fontSize: '1.3rem', color }} />
        </CustomContainnerIcon>
      ),
      text: 'Visualizar Tema',
      link: '/main',
    },
  ];
};
