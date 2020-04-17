import {styled} from 'styles/themes/bridge';

export default styled.p`
  text-align: left;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${({theme}) => theme.subText};
  font-size: 14px;
  font-weight: 800;
`;


