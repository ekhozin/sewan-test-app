import React from 'react';

function ProfilePageContainer() {
    return <div>profile container</div>;
}

const memoized = React.memo(ProfilePageContainer);

export { memoized as ProfilePageContainer };
