import baseStyled, {ThemedStyledInterface} from 'styled-components';
import {white1, white2, pink1, pink2, pink3, pink4} from '../colors';

export interface BridgeTheme {
  backgroundColor: string;
  logoColor: string;
  mainText: string;
  subText: string;
}

export const caseA: BridgeTheme = {
  backgroundColor: white2,
  logoColor: pink1,
  mainText: pink4,
  subText: pink1,
};

export const caseB: BridgeTheme = {
  backgroundColor: pink3,
  logoColor: pink2,
  mainText: white1,
  subText: pink2,
};

export const styled = baseStyled as ThemedStyledInterface<BridgeTheme>;

export const getTheme = () => {
  return caseB;
};