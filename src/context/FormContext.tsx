"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";
import { State } from "@/constants/enums";

export interface FormContextState {
  state: State;
  business_name: string;
  username: string;
  phone_number: string;
  email?: string;
  industry_category: string;
  account_password: string;
  setState: (state: State) => void;
  setBusinessName: (business_name: string) => void;
  setUsername: (username: string) => void;
  setPhoneNumber: (phone_number: string) => void;
  setEmail: (email: string) => void;
  setAccountPassword: (account_password: string) => void;
  setIndustryCategory: (industry_category: string) => void;
}

const FormContext = createContext<FormContextState | undefined>(undefined);

const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<State>(State.BUSINESS);
  const [business_name, setBusinessName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [industry_category, setIndustryCategory] = useState<string>("");
  const [account_password, setAccountPassword] = useState<string>("");

  return (
    <FormContext.Provider
      value={{
        state,
        business_name,
        username,
        phone_number,
        email,
        industry_category,
        account_password,
        setState,
        setBusinessName,
        setUsername,
        setPhoneNumber,
        setEmail,
        setIndustryCategory,
        setAccountPassword,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

function useFormContext(): FormContextState {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

export { FormProvider, useFormContext };
