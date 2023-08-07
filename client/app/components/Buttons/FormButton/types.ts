import { ButtonHTMLAttributes } from 'react';

export interface FormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
