import React, { createContext, useState, useContext, ReactNode } from 'react';
import { users } from '../mockData';
import { User, UserRole } from '../types';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  verifyProject: (projectCode: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
  verifyProject: async () => false,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulación de login
    const user = users.find(u => u.email === email);
    
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const verifyProject = async (projectCode: string): Promise<boolean> => {
    // Simulación de verificación
    return projectCode.startsWith('CLT-2025-');
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated, login, logout, verifyProject }}>
      {children}
    </AuthContext.Provider>
  );
};