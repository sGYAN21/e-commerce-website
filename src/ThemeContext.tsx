'use client'
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from './components/shared-theme/customizations/inputs';
import { dataDisplayCustomizations } from './components/shared-theme/customizations/dataDisplay';
import { feedbackCustomizations } from './components/shared-theme/customizations/feedback';
import { navigationCustomizations } from './components/shared-theme/customizations/navigation';
import { surfacesCustomizations } from './components/shared-theme/customizations/surface';
import { colorSchemes, typography, shadows, shape } from './theme';

interface ThemeContext {
  children: React.ReactNode;
 
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function ThemeContext(props: ThemeContext) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
         
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes, 
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}


