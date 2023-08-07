import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputId: string;
  error?: string | boolean;
}

export interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  inputId: string;
  error?: string | boolean;
}
