import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Main } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export  const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

