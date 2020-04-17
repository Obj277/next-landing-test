import styled from 'styled-components';
import Button from 'components/atom/Button';
import {white1, pink4} from 'styles/colors';

export default styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 18px;
  border-radius: 65px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.22);
  background: ${pink4};
  width: 100%;
  max-width: 325px;
  height: 65px;
  text-align: center;
  line-height: 26px;
  letter-spacing: -0.58px;
  color: ${white1};
  font-size: 21px;
  font-weight: 900;
`;