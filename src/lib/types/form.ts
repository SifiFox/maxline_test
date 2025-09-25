export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  agreeToTerms: boolean;
  agreeToBonusTerms: boolean;
}

export interface FormErrors {
  phone?: string;
  password?: string;
  agreeToTerms?: string;
  general?: string;
}

export interface ApiResponse {
  success: boolean;
  error?: string;
}
