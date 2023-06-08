import { toast } from 'react-hot-toast';
import { Exo } from 'next/font/google';

const inter = Exo({
  weight: ['100', '200', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const successPopUp = (message: string) => {
  return toast.success(message, {
    duration: 3000,
    style: {
      fontFamily: `${inter.style.fontFamily}`,
      border: '1px solid #232323',
      fontSize: '1.6rem',
      padding: '16px',
      color: '#232323',
    },
    iconTheme: {
      primary: '#232323',
      secondary: '#FFFAEE',
    },
  });
};

export const errorPopUp = (message: string) => {
  return toast.error(message, {
    duration: 3000,
    style: {
      fontFamily: `${inter.style.fontFamily}`,
      border: '1px solid #232323',
      fontSize: '1.6rem',
      padding: '16px',
      color: '#232323',
    },
    iconTheme: {
      primary: '#232323',
      secondary: '#FFFAEE',
    },
  });
};
