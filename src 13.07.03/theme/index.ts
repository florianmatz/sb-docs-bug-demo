import { createMuiTheme } from '@material-ui/core';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';

type OverridesNameToClassKey = {
    [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

declare module '@material-ui/core/styles/overrides' {
    /* eslint-disable-next-line */
    export interface ComponentNameToClassKey extends OverridesNameToClassKey {}
}

export const colors = {
    common: {
        black: '#000000',
        white: '#ffffff',
    },
    background: {
        default: '#eeeeee',
    },
    primary: {
        main: '#000099',
        dark: '#061671',
    },
    secondary: {
        main: '#ee7700',
        dark: '#ee7700',
        contrastText: '#ffffff',
    },
    text: {
        primary: '#3b3b3b',
        secondary: '#3b3b3b',
    },
    grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#dfdfdf',
        400: '#d3d3d3',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
    },
};

const theme = createMuiTheme({
    typography: {
        fontFamily:
            '"EnBWDINPro", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: 15,
        h1: {
            color: colors.primary.main,
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: 0,
        },
        h2: {
            color: colors.primary.main,
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 0,
        },
        h3: {
            color: colors.primary.main,
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: 0,
        },
        h4: {
            color: colors.primary.main,
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: 0,
        },
        h5: {
            color: colors.primary.main,
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
        },
        h6: {
            color: colors.primary.main,
            fontSize: 15,
            fontWeight: 400,
            letterSpacing: 0,
        },
        caption: {
            letterSpacing: 0,
        },
        button: {
            textTransform: 'none',
        },
        body1: {
            fontSize: 15,
        },
        body2: {
            fontSize: 15,
        },
    },
    palette: { ...colors },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    height: '100vh',
                },
                body: {
                    height: '100vh',
                    overflow: 'hidden',
                },
                '#__next': {
                    height: '100vh',
                },
                '*': {
                    '-webkit-overflow-scrolling': 'touch',
                    'scrollbar-width': 'thin',
                    'scrollbar-color': 'rgba(0,0,0,.2) transparent',
                },
                a: {
                    color: colors.text.primary,
                    textDecoration: 'none',
                    '&:hover': {
                        color: colors.secondary.dark,
                    },
                },
                address: {
                    fontStyle: 'normal',
                },
                strong: {
                    fontWeight: 500,
                    '&.MuiTypography-body1': {
                        fontWeight: 500,
                    },
                },
            },
        },
        MuiTab: {
            root: {
                minWidth: '140px',
                transition: 'color 0.25s',
                '&$selected': {
                    color: colors.secondary.dark,
                },
                '&:hover': {
                    color: colors.secondary.dark,
                    opacity: 1,
                },
            },
            textColorInherit: {
                opacity: 0.8,
            },
        },
        MuiTabs: {
            indicator: {
                backgroundColor: colors.secondary.dark,
            },
        },
        MuiSelect: {
            outlined: {
                paddingTop: 16,
                paddingBottom: 16,
            },
        },
        MuiStepLabel: {
            label: {
                '&$active': {
                    color: colors.secondary.dark,
                },
            },
        },
        MuiStepIcon: {
            root: {
                '&$active': {
                    color: colors.secondary.dark,
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                // Limit the height of outlined inputs, but respect setting size=small on TextInputs
                '& $input:not(.MuiOutlinedInput-inputMarginDense)': {
                    paddingTop: 16,
                    paddingBottom: 16,
                },
                '&:hover $notchedOutline': {
                    borderColor: colors.secondary.dark,
                },
                '&$focused': {
                    borderColor: colors.secondary.dark,
                },
                '&$focused $notchedOutline': {
                    borderColor: colors.secondary.dark,
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: colors.text.primary,
                },
            },
        },
        MuiPickersDay: {
            daySelected: {
                backgroundColor: colors.secondary.dark,
                '&:hover': {
                    backgroundColor: colors.secondary.dark,
                },
            },
            current: {
                color: colors.secondary.dark,
            },
        },
    },
});

export default theme;

export const elevation = theme.shadows;
