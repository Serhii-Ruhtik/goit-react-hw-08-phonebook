import styled from '@emotion/styled';

import Backdrop from '@mui/material/Backdrop';

export const BackdropOver = styled(Backdrop)`
  overflow: auto;
`;

export const ModalPaper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 30vw;
  height: 40vh;
  max-height: 500px;

  padding: 40px;
  overflow-y: auto;

  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  transform: translate(-50%, -50%) scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
