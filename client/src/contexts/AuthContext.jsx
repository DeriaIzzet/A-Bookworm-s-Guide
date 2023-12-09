import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
 import { useLocalStorage } from '../hooks/useLocalStorage'; 
import { authServiceMaker } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth',{});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const authService = authServiceMaker(auth.accessToken)

    const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);
          setAuth(result);
          navigate("/");
        } catch (error) {
          setError("There was an error during login. Please try again.");
        }
      };
    
      const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
          return;
        }
    
        try {
          const result = await authService.register(registerData);
          setAuth(result);
          navigate('/');
        } catch (error) {
          setError("There was an error during registration. Please try with another user information.");
        }
      };
    const onLogout = async () => {
        await authService.logout();
   
       setAuth({});
     };

    const contextVal = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userUsername: auth.username,
        isAuthenticated: !!auth.accessToken,
        error,
      };

    return (
        <>
            <AuthContext.Provider value={contextVal}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};