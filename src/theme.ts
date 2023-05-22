import { Ubuntu, Lora, Ubuntu_Mono} from '@next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    overrides: {
      MuiSelect: {
        select: {
          fontFamily: any,
        },
      },
    }
  }
}

export const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const ubuntu_mono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9cc2e6',
      light: '#eef5ff',
      dark: '#1a202c',
    },
    secondary: {
      main: '#ccc3b3',
      light: '#fff5e5',
      dark: '#837b6d',
    },
    background: {
      default: '#1a202c',
      paper: '#2D3748',
    },
    text: {
      primary: 'rgba(255,255,255,1)',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: ubuntu.style.fontFamily,
    fontSize: 15,
    h1: {
      fontFamily: lora.style.fontFamily,
    },
    h2: {
      fontFamily: lora.style.fontFamily,
    },
    h3: {
      fontFamily: lora.style.fontFamily,
    },
    h4: {
      fontFamily: lora.style.fontFamily,
    },
    h5: {
      fontFamily: lora.style.fontFamily,
    },
    h6: {
      fontFamily: lora.style.fontFamily,
    },
    body1: {
      fontFamily: ubuntu.style.fontFamily,
    },
    body2: {
      fontFamily: lora.style.fontFamily,
      fontSize: 18,
    },
  },
  overrides: {
    MuiSelect: {
      select: {
        fontFamily: lora.style.fontFamily,
      },
    },
  }
  
});
export default theme;
