import React from 'react';
import { LocalizationProvider } from '@common';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface ContextWrapperProps {
  children: React.ReactNode;
}

export const ContextWrapper: React.FC<ContextWrapperProps> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <LocalizationProvider>
          {children}
      </LocalizationProvider>
    </Provider>
  );
};
