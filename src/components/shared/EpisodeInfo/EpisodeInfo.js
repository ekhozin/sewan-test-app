import React from 'react';
import PropTypes from 'prop-types';

import texts from '@/texts';
import { Row } from '@/components/common/Row';
import { InfoBlock } from '@/components/common/InfoBlock';

function EpisodeInfo(props) {
    const { name, airDate } = props;

    return (
        <div>
            <Row>
                <InfoBlock title={texts.episodeName} data={name} />
            </Row>
            <Row>
                <InfoBlock title={texts.episodeAirDate} data={airDate} />
            </Row>
        </div>
    );
}

EpisodeInfo.propTypes = {
    name: PropTypes.node,
    airDate: PropTypes.node,
};

const memoized = React.memo(EpisodeInfo);

export { memoized as EpisodeInfo };
