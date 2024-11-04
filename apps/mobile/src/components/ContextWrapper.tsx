import { LocalizationProvider } from '@common';
import React from 'react';

import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ConfigProvider } from '@core';

interface ContextWrapperProps {
  children: React.ReactNode;
}

export const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <LocalizationProvider>
          <PaperProvider>{children}</PaperProvider>
        </LocalizationProvider>
      </ConfigProvider>
    </Provider>
  );
};
