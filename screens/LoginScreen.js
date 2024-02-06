import AuthContent from '../components/Auth/AuthContent';

import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { logIn } from '../util/auth';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true)
    await logIn(email, password);
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Logging in..."/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
