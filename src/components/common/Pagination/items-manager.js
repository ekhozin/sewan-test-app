class ItemsManager {
    static itemTypes = {
        current: 'current',
        regular: 'regular',
        prev: 'prev',
        next: 'next',
        ellipsis: 'ellipsis',
    };

    _isCurrentType = (current) => (index) =>
        current === index ? ItemsManager.itemTypes.current : ItemsManager.itemTypes.regular;

    /**
     * Handles case when last item is current.
     * @param {number} currentPage
     * @param {number} totalPages
     * @param {Function} getCurrentType
     * @param {number} offset
     * @param {number} maxDisplayItems
     */
    _handleLastActive(currentPage, totalPages, getCurrentType, offset, maxDisplayItems) {
        let items = [];
        const { itemTypes } = ItemsManager;

        items.push(
            { type: itemTypes.regular, page: 1 },
            { type: itemTypes.ellipsis, page: currentPage - offset },
        );

        const delta1 = Math.min(maxDisplayItems, totalPages);

        for (let i = totalPages - delta1 + 1; i <= totalPages; i++) {
            items.push({ type: getCurrentType(i), page: i });
        }

        return items;
    }

    /**
     * Handles case when current item is no more than "offset" from the start
     * @param {number} currentPage
     * @param {number} totalPages
     * @param {Function} getCurrentType
     * @param {number} offset
     * @param {number} maxDisplayItems
     */
    _handleNoMoreOffsetFromStart(currentPage, totalPages, getCurrentType, offset, maxDisplayItems) {
        let items = [];
        const { itemTypes } = ItemsManager;

        for (let i = 1; i <= maxDisplayItems; i++) {
            items.push({ type: getCurrentType(i), page: i });
        }

        items.push(
            { type: itemTypes.ellipsis, page: currentPage + offset },
            { type: itemTypes.regular, page: totalPages },
        );

        return items;
    }

    /**
     * Handles case when current item is no more than "offset" from the end
     * @param {number} currentPage
     * @param {number} totalPages
     * @param {Function} getCurrentType
     * @param {number} offset
     * @param {number} maxDisplayItems
     */
    _handleNoMoreOffsetFromEnd(currentPage, totalPages, getCurrentType, offset, maxDisplayItems) {
        let items = [];
        const { itemTypes } = ItemsManager;

        items.push(
            { type: itemTypes.regular, page: 1 },
            { type: itemTypes.ellipsis, page: currentPage - offset },
        );

        for (let i = totalPages - maxDisplayItems + 1; i <= totalPages; i++) {
            items.push({ type: getCurrentType(i), page: i });
        }

        return items;
    }

    /**
     * Handles default case.
     * When item is further than offset from the start and from the end.
     * @param {number} currentPage
     * @param {number} totalPages
     * @param {Function} getCurrentType
     * @param {number} offset
     * @param {number} maxDisplayItems
     */
    _handleDefault(currentPage, totalPages, getCurrentType, offset, maxDisplayItems) {
        let items = [];
        const { itemTypes } = ItemsManager;
        // fix for displaying correct amount if items when "maxDisplayItems" is even
        const delta2 = maxDisplayItems % 2 ? 0 : 1;

        // go to the very first
        items.push({ type: itemTypes.regular, page: 1 });

        // ellipsis on the left of current
        if (currentPage > maxDisplayItems) {
            items.push({ type: itemTypes.ellipsis, page: currentPage - offset });
        }

        // on the left of current item
        for (let i = currentPage - offset + delta2; i < currentPage; i++) {
            items.push({ type: getCurrentType(i), page: i });
        }

        // current + right items
        for (let i = currentPage; i <= currentPage + offset; i++) {
            items.push({ type: getCurrentType(i), page: i });
        }

        // ellipsis on the right of current
        if (currentPage <= totalPages - maxDisplayItems) {
            items.push({ type: itemTypes.ellipsis, page: currentPage + offset });
        }

        // go to the very last
        items.push({ type: itemTypes.regular, page: totalPages });

        return items;
    }

    /**
     * Handles different cases when item's amount is greater than maximum-to-display
     * @param {number} currentPage
     * @param {number} totalPages
     * @param {Function} getCurrentType
     * @param {number} offset
     * @param {number} maxDisplayItems
     */
    _handleAmoutGreaterThanMaximum(
        currentPage,
        totalPages,
        getCurrentType,
        offset,
        maxDisplayItems,
    ) {
        let items = [];
        switch (true) {
            case currentPage === totalPages: // last page is active
                items.push(
                    ...this._handleLastActive(
                        currentPage,
                        totalPages,
                        getCurrentType,
                        offset,
                        maxDisplayItems,
                    ),
                );
                break;
            case currentPage <= offset + 1: // from start no more than offset
                items.push(
                    ...this._handleNoMoreOffsetFromStart(
                        currentPage,
                        totalPages,
                        getCurrentType,
                        offset,
                        maxDisplayItems,
                    ),
                );
                break;
            case currentPage < totalPages && currentPage >= totalPages - offset: // from end no more than offset
                items.push(
                    ...this._handleNoMoreOffsetFromEnd(
                        currentPage,
                        totalPages,
                        getCurrentType,
                        offset,
                        maxDisplayItems,
                    ),
                );
                break;
            default:
                // greater than offset, less than max pages
                items.push(
                    ...this._handleDefault(
                        currentPage,
                        totalPages,
                        getCurrentType,
                        offset,
                        maxDisplayItems,
                    ),
                );
        }

        return items;
    }

    /**
     * Handles basic case when item's amount is less or equal to maximum-to-display
     * @param {number} totalPages
     * @param {Function} getCurrentType
     */
    _handleBaseCase(totalPages, getCurrentType) {
        let items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push({ type: getCurrentType(i), page: i });
        }
        return items;
    }

    /**
     * Creates array of pagination item's configs.
     * @param {number} currentPage
     * @param {number} totalPages
     * @param {number} maxDisplayItems
     * @returns {Array<Object>} Array contains objects. Each object is config of pagination item.
     */
    createItems(currentPage, totalPages, maxDisplayItems) {
        let items = [];
        const offset = Math.floor(maxDisplayItems / 2);
        const getCurrentType = this._isCurrentType(currentPage);
        const { itemTypes } = ItemsManager;

        // add 'prev'-item
        if (currentPage !== 1) {
            items.push({ type: itemTypes.prev, page: currentPage - 1 });
        }

        // add regular items
        if (totalPages <= maxDisplayItems) {
            // items amount is less or equal to max display items
            items.push(...this._handleBaseCase(totalPages, getCurrentType));
        } else {
            // items amount is greater than max display items
            items.push(
                ...this._handleAmoutGreaterThanMaximum(
                    currentPage,
                    totalPages,
                    getCurrentType,
                    offset,
                    maxDisplayItems,
                ),
            );
        }

        // add 'next'-item
        if (currentPage !== totalPages) {
            items.push({ type: itemTypes.next, page: currentPage + 1 });
        }

        return items;
    }
}

export const itemTypes = ItemsManager.itemTypes;

export default new ItemsManager();
