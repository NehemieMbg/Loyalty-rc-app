import '../sass/_global.scss';
import { Exo } from 'next/font/google';
import AuthProvider from '@/app/context/AuthContext';
import ToasterContext from './context/ToasterContext';
import Navbar from '@/app/components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import Menu from './components/Navigation/Menu';
import ReduxProvider from './components/Provider/Provider';
import Backdrop from '@/app/components/Backdrop/Backdrop';

// * Getting the url here and render the navbar according

const inter = Exo({
  weight: ['100', '200', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <AuthProvider>
            <ReduxProvider>
              <Backdrop />
              <header>
                <Navbar />
                <Menu />
              </header>
              <ToasterContext />
              <main>{children}</main>
              <Newsletter />
              <footer>
                <Footer />
              </footer>
            </ReduxProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
