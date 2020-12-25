import React from 'react';

import texts from '@/texts';
import { StyledLoader } from './styles';

/**
 * React component. Renders Loader.
 */
const FullscreenLoader = () => <StyledLoader>{texts.loading}</StyledLoader>;

const memoized = React.memo(FullscreenLoader);

export { memoized as FullscreenLoader };
