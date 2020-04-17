import styled from 'styled-components';

export default styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: transparent;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  padding: 0;
  overflow: hidden;
`;