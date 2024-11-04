import React, { createContext, useContext, ReactNode } from 'react';
import Config from 'react-native-config';
import { Configuration } from './Configuration';

const ConfigContext = createContext<Configuration | undefined>(undefined);

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const configuration: Configuration = {
    apiUrl: Config.API_URL || '',
  };

  return (
    <ConfigContext.Provider value={configuration}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
