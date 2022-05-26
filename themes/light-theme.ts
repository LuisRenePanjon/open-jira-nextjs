import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#4a148c',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red[400],
        },
        mode: 'light',
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {},
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});
