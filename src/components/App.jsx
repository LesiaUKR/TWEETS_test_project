import React from 'react';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { TweetsPage } from '../pages/TweetsPage/TweetsPage';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export { App };
