export type SignupForm ={
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};