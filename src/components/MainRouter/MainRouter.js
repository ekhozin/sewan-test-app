import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { HomePageContainer, ProfilePageContainer } from '@/containers/pages';

function MainRouter() {
    return (
        <Switch>
            <Route exact={true} path={ROUTES.HOME} component={HomePageContainer} />
            <Route exact={true} path={ROUTES.PROFILE} component={ProfilePageContainer} />
        </Switch>
    );
}

export { MainRouter };
