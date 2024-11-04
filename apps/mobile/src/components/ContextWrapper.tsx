import { LocalizationProvider } from '@common';
import React from 'react';

import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface ContextWrapperProps {
  children: React.ReactNode;
}

export const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <LocalizationProvider>
        <PaperProvider>{children}</PaperProvider>
      </LocalizationProvider>
    </Provider>
  );
};
