import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../stores/root.store';
import setupStore from '../stores/root.store';
import { BrowserRouter } from 'react-router-dom';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

/**
 * Function to render the components wrapped with the provider and the router in the UTs.
 * 
 * @param ui - Component to render
 * @param prop - The render options including the store setup
 */
export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = setupStore(),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
