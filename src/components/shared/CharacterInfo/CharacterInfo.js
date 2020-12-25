import React from 'react';
import PropTypes from 'prop-types';

import texts from '@/texts';
import { Row } from '@/components/common/Row';
import { InfoBlock } from '@/components/common/InfoBlock';

/**
 * React component. Renders characher's information.
 */
function CharacterInfo(props) {
    const { name, status, gender, species } = props;

    return (
        <div>
            <Row>
                <InfoBlock title={texts.name} data={name} />
            </Row>
            <Row>
                <InfoBlock title={texts.status} data={status} />
            </Row>
            <Row>
                <InfoBlock title={texts.gender} data={gender} />
            </Row>
            <Row>
                <InfoBlock title={texts.species} data={species} />
            </Row>
        </div>
    );
}

CharacterInfo.propTypes = {
    name: PropTypes.node,
    status: PropTypes.node,
    gender: PropTypes.node,
    species: PropTypes.node,
};

const memoized = React.memo(CharacterInfo);

export { memoized as CharacterInfo };
