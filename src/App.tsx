import { ToastContainer } from 'react-toastify';
import Router from './routes/routes';
import { mainTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Router />
        <ToastContainer
          position='top-right'
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </ThemeProvider>
    </>
  );
}

export default App;
