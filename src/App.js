import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@emotion/react';
import { Suspense } from 'react';
import { createTheme } from '@mui/material';
export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#1173FF',
  //   },
  //   secondary: {
  //     main: '#117300', 
  //   },
  // },
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
