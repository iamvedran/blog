const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: '',
                mongodb_password: '',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'vedran-blog',
            }
        };
    }

    return {
        env: {
            mongodb_username: '',
            mongodb_password: '',
            mongodb_clustername: '',
            mongodb_database: '',
        }
    };
};