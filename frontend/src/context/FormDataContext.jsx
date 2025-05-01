import React, { createContext, useState, useContext } from 'react';

// Create context
const FormDataContext = createContext();

// Create provider component
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({}); // Initial form data state

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Create custom hook to use context
export const useFormData = () => {
  return useContext(FormDataContext);
};
