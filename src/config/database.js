module.exports = {
    dialect: 'mysql',
    port: 3306,
    host: process.env.CEPACC_DB_PROD_HOSTNAME || '127.0.0.1',
    username: process.env.CEPACC_DB_PROD_USERNAME || 'root',
    password: process.env.CEPACC_DB_PROD_PASSWORD || '',
    database: process.env.CEPACC_DB_PROD_DATABASE || 'portal_cepacc',
    define: {
        timestamps: true,
        underscored: true,
    },
    timezone: '-03:00'
}