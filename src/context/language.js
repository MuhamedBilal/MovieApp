import React, { createContext, useState, useContext, } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en-US');
  
    const handleSetLanguage = (newLanguage) => {
      console.log('Setting language to:', newLanguage);
      setLanguage(newLanguage);
    };
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

