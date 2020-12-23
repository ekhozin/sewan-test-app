import React from 'react';

import { MainRouter } from '@/components/MainRouter';
import { MainLayout } from '@/components/layouts/MainLayout';
// import { Notifications } from '@/components/Notifications';

function App() {
    return (
        <>
            <MainLayout>
                <MainRouter />
            </MainLayout>
            {/* <Notifications /> */}
            {/* <MainLayout body={<MainRouter />} menu={<NavContainer />} /> */}
        </>
    );
}

export { App };
