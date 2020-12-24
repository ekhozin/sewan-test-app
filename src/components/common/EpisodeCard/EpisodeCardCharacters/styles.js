import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Characters = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Character = styled(Link)`
    display: inline-block;
    color: ${(props) => props.theme.colors.lightText};

    :not(:last-child) {
        margin-right: 0.3125rem;
    }
`;

export { Characters, Character };
