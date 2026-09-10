import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { type AuthContextType } from "../types/auth.types";




const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};