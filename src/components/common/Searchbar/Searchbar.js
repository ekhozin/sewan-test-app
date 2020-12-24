import React from 'react';
import PropTypes from 'prop-types';

import texts from '@/texts';

function Searchbar(props) {
    const { value, onChange, onSearch, onClear, placeholder } = props;

    const handleChange = (e) => onChange(e.target.value);

    return (
        <div>
            <input value={value} placeholder={placeholder} onChange={handleChange} />
            <button onClick={onSearch}>{texts.search}</button>
            <button onClick={onClear}>{texts.clear}</button>
        </div>
    );
}

Searchbar.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
    value: '',
    placeholder: texts.searchPlaceholder,
};

const memoized = React.memo(Searchbar);

export { memoized as Searchbar };
