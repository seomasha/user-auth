import AuthContent from '../components/Auth/AuthContent';

import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { logIn } from '../util/auth';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext)

  async function loginHandler({email, password}) {
    setIsAuthenticating(true)
    try {
      const token = await logIn(email, password);
      authCtx.authenticate(token)
    }
    catch(error) {
      Alert.alert('Authentication failed', 'Could not log you in')
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Logging in..."/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
