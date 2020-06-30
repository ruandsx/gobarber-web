import styled from 'styled-components';

interface ToastProps {
  type?: string;
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  width: 360px;

  display: flex;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.2);

  background: #ebf8ff;
  color: #3172b7;

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
