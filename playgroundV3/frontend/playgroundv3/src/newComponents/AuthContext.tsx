import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthState {
  page: string;
  previousPage: string;
  formVisibility: boolean;
}

interface AuthContextType {
  state: AuthState;
  setState: Dispatch<SetStateAction<AuthState>>;
  handlePageChange: (newPage: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    page: "home",
    previousPage: "home",
    formVisibility: false,
  });

  const handlePageChange = (newPage: string) => {
    if (newPage !== "login" && newPage !== "register") {
      setState((prevState) => ({ ...prevState, previousPage: newPage }));
    }

    setState((prevState) => ({
      ...prevState,
      formVisibility: newPage === "login" || newPage === "register",
      page: newPage,
    }));
  };

  return (
    <AuthContext.Provider value={{ state, setState, handlePageChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
