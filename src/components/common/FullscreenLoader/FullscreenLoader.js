import React from 'react';

import texts from '@/texts';
import { StyledLoader } from './styles';

const FullscreenLoader = () => <StyledLoader>{texts.loading}</StyledLoader>;

const memoized = React.memo(FullscreenLoader);

export { memoized as FullscreenLoader };
