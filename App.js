
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider } from '@chakra-ui/react';
// import "bootstrap/dist/js/bootstrap.bundle.min"
// import "bootstrap/dist/css/bootstrap.min.css"
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import { TokenLogic } from './pages/TokenLogic';
 // Import the CSS

// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { AuthProvider } from './pages/AuthProvider';
import { Footer } from './pages/Footer';
import { Allfooter } from './pages/dashboard/allfooter';



// ----------------------------------------------------------------------

export default function App() {
  const contactInfo = {
    email: 'example@example.com',
    phone: '123-456-7890'
  };

  return (
    <ChakraProvider>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
        
          <AuthProvider>
       
          <ScrollToTop />
          <StyledChart />
         {/* <TokenLogic> */}
          <Router />
          {/* <ToastContainer position="top-left" autoClose={2000} /> */}
          {/* </TokenLogic> */}
          </AuthProvider>
        
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
    <Allfooter/>
    </ChakraProvider>
  );
}

// email:   developer@glenindia.com
// password :  password