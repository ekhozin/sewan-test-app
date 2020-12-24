import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '@/constants';
import {
    HomePageContainer,
    CharacterPageContainer,
    EpisodePageContainer,
} from '@/containers/pages';

function MainRouter() {
    return (
        <Switch>
            <Route exact={true} path={ROUTES.HOME} component={HomePageContainer} />
            <Route exact={true} path={ROUTES.CHARACTER} component={CharacterPageContainer} />
            <Route exact={true} path={ROUTES.EPISODE} component={EpisodePageContainer} />
        </Switch>
    );
}

export { MainRouter };
