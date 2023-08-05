import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface LogoContextType {
  logoShrunk: boolean;
  setLogoShrunk: Dispatch<SetStateAction<boolean>>;
}

const LogoContext = createContext<LogoContextType | null>(null);

interface LogoProviderProps {
  children: React.ReactNode;
}

const LogoProvider: React.FC<LogoProviderProps> = ({ children }) => {
  const [logoShrunk, setLogoShrunk] = useState(false);

  return (
    <LogoContext.Provider value={{ logoShrunk, setLogoShrunk }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogoContext = (): LogoContextType => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error("useLogoContext must be used within a LogoProvider");
  }
  return context;
};

export default LogoProvider;
