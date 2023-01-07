import './App.css';
import React, { Suspense } from 'react';
// @ts-ignore
import Dashboard from './views/Dashboard.tsx';
// @ts-ignore
import Header from './views/Header.tsx';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Dashboard />
    </Suspense>
  );
}

export default App;
