import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import { AppBar } from '../AppBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white"
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
