function mapEntitiesById(entities = []) {
    return entities.reduce(
        (acc, entity) => {
            acc.ids.push(entity.id);
            acc.byId[entity.id] = entity;
            return acc;
        },
        {
            ids: [],
            byId: {},
        },
    );
}

function mapPagination({ count = 0, limit = 0, page = 0, pages = 0 } = {}) {
    return { count, limit, page, pages };
}

function mapBaseCollection({ items, ...rest } = { items: [] }) {
    return {
        data: mapEntitiesById(items),
        pagination: mapPagination(rest),
    };
}

export { mapEntitiesById, mapPagination, mapBaseCollection };
