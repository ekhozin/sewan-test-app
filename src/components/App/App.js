import React from 'react';

import { MainRouter } from '@/components/MainRouter';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Notifications } from '@/components/Notifications';

/**
 * React component. Renders application.
 */
const App = () => (
    <>
        <Notifications />
        <MainLayout>
            <MainRouter />
        </MainLayout>
    </>
);

export { App };
