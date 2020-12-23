import humps from 'humps';

export function requestMapper(config) {
    if (config.data && !(config.data instanceof FormData)) {
        config.data = humps.decamelizeKeys(config.data);
    }

    config.params = humps.decamelizeKeys(config.params);

    return config;
}
