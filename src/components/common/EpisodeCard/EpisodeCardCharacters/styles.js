import styled from 'styled-components';

const Characters = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Character = styled.button`
    color: ${(props) => props.theme.colors.lightText};
    text-decoration: underline;
    background: none;
    border: none;
    padding: 0;

    :not(:last-child) {
        margin-right: 0.3125rem;
    }

    &:hover {
        cursor: pointer;
    }
`;

export { Characters, Character };
