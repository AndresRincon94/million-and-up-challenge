import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cryptos from './components/Cryptos/Cryptos';
import Exchanges from './components/Exchanges/Exchanges';
import Markets from './components/Markets/Markets';

/**
 * App default component
 */
function DefaultRouter() {
  return (
    <Routes>
      <Route index element={<Cryptos />} />
      <Route path="exchanges" element={<Markets />} />
      <Route path="detail" element={<Exchanges />} />
    </Routes>
  );
}

export default DefaultRouter;
