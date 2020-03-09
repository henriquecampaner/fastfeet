import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  z-index: 1;
`;

export const ViewColor1 = styled.View`
  width: 100%;
  height: 12%;
  background: ${colors.primary};
  z-index: 2;
`;
export const ViewColor2 = styled.View`
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 3;
`;
