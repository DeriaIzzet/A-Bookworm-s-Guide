import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
 import { useLocalStorage } from '../hooks/useLocalStorage'; 
import { authServiceMaker } from '../services/authService';
export const AuthContext = createContext();
