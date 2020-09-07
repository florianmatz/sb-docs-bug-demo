import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { withNextRouter } from 'storybook-addon-next-router';
import theme from '../src/theme';
import '../src/theme/fonts/typeface.css';
import './global-sb-styles.css';

// Reset MUI background to be able to set bgs through storybooks addons
theme.palette.background.default = 'transparent';

const StylesDecorator = storyFn => (
    <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {storyFn()}
        </ThemeProvider>
    </StylesProvider>
);

const RouterDecorator = withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [StylesDecorator, RouterDecorator];
