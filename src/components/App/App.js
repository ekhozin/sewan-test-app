import React from 'react';

import { MainRouter } from '@/components/MainRouter';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Notifications } from '@/components/Notifications';

function App() {
    return (
        <>
            <Notifications />
            <MainLayout>
                <MainRouter />
            </MainLayout>
        </>
    );
}

export { App };
