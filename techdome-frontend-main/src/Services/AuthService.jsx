import { useContext } from 'react';
import { LoginContext } from '../Layout.jsx';

function useAuth() {
  return useContext(LoginContext); // Use the context to get the login status
}

export default useAuth;