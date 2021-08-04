import styled, { css } from 'styled-components';
import variable from '../../common/variable';

const Alert = styled.div<{ open: boolean; type: string }>`
  display: flex;
  align-items: center;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.5s;
  border-radius: 4px;
  padding: 10px 20px;
  z-index: 5;
  ${({ type }) => {
    switch (type) {
      case 'success':
        return css`
          background-color: ${variable.alertColor.success};
        `;
      case 'info':
        return css`
          background-color: ${variable.alertColor.info};
        `;
      case 'warning':
        return css`
          background-color: ${variable.alertColor.warning};
        `;
      case 'error':
        return css`
          background-color: ${variable.alertColor.error};
        `;
    }
  }}
`;

const Img = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const Message = styled.p`
  margin-right: 10px;
  color: #fff;
`;

const Button = styled.button`
  margin-left: auto;
  color: #fff;
`;

const exportDefault = {
  Alert,
  Img,
  Message,
  Button,
};

export default exportDefault;
