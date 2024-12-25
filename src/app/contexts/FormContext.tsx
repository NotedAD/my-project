'use client'
import React, { createContext, useContext, useState } from 'react';

interface FormContextType {
  phone: string;
  setPhone: (phone: string) => void;
  comment: string;
  setComment: (comment: string) => void;
  agree: boolean;
  setAgree: (agree: boolean) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <FormContext.Provider value={{ phone, setPhone, comment, setComment, agree, setAgree }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
