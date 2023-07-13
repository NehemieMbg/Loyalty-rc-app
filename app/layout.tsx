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
import BookForm from './components/BookForm/BookForm';

// * Getting the url here and render the navbar according

export const metadata = {
  title: 'Location automobile sportive - Loyalty RC',
  description: 'Location automobile sportive',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <AuthProvider>
          <ReduxProvider>
            <body>
              <header>
                <Navbar />
                <Menu />
                <Backdrop />
              </header>
              <main>
                <ToasterContext />
                {/* <BookForm /> */}
                {children}
              </main>
              <footer>
                <Newsletter />
                <Footer />
              </footer>
            </body>
          </ReduxProvider>
        </AuthProvider>
      </html>
    </>
  );
}
