import React from 'react';
import {ThemeProvider} from 'styled-components';
import Bridge from 'components/bridge';
import {getTheme} from 'styles/themes/bridge';

export default () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <Bridge/>
    </ThemeProvider>
  );
};
