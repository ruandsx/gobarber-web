import React from 'react';
import GlobalStyle from './styles/global';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
