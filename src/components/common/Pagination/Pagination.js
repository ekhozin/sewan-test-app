import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IconArrowLeft } from '@/components/icons';
import { PaginationItem } from './PaginationItem';
import itemsManager, { itemTypes } from './items-manager';
import styles from './Pagination.scss';

function Pagination(props) {
    const { className, onChange, currentPage, totalPages, maxDisplayItems } = props;
    const cssClass = classNames(styles.pagination, className);

    const itemsPropsMap = React.useMemo(
        () => ({
            [itemTypes.current]: (itemProps) => (
                <PaginationItem
                    {...itemProps}
                    key={`${itemProps.type}-${itemProps.page}`}
                    isCurrent={true}
                >
                    {itemProps.page}
                </PaginationItem>
            ),
            [itemTypes.regular]: (itemProps) => (
                <PaginationItem
                    {...itemProps}
                    key={`${itemProps.type}-${itemProps.page}`}
                    onClick={onChange}
                >
                    {itemProps.page}
                </PaginationItem>
            ),
            [itemTypes.prev]: (itemProps) => (
                <PaginationItem
                    {...itemProps}
                    key={`${itemProps.type}-${itemProps.page}`}
                    onClick={onChange}
                    className={styles.buttonArrowLeft}
                >
                    <IconArrowLeft className={styles.arrow} />
                </PaginationItem>
            ),
            [itemTypes.next]: (itemProps) => (
                <PaginationItem
                    {...itemProps}
                    key={`${itemProps.type}-${itemProps.page}`}
                    onClick={onChange}
                    className={styles.buttonArrowRight}
                >
                    <IconArrowLeft className={`${styles.arrowRight} ${styles.arrow}`} />
                </PaginationItem>
            ),
            [itemTypes.ellipsis]: (itemProps) => (
                <PaginationItem
                    {...itemProps}
                    key={`${itemProps.type}-${itemProps.page}`}
                    isEllipsis={true}
                >
                    {'...'}
                </PaginationItem>
            ),
        }),
        [],
    );

    const renderItems = React.useCallback(() => {
        const items = itemsManager.createItems(currentPage, totalPages, maxDisplayItems);

        return items.map((item) => itemsPropsMap[item.type](item));
    }, [currentPage, totalPages, maxDisplayItems]);

    return <ul className={cssClass}>{renderItems()}</ul>;
}

Pagination.propTypes = {
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    maxDisplayItems: PropTypes.number,
};

Pagination.defaultProps = {
    currentPage: 1,
    totalPages: 1,
    maxDisplayItems: 3,
};

const memoized = React.memo(Pagination);

export { memoized as Pagination };
