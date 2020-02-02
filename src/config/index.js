import bunyan from 'bunyan';
const appName = 'ChikakoNode';
const config = {
    logger: bunyan.createLogger({name: appName}),
    mongodb: {
        dsn: 'mongodb://localhost:37017/CRMdb'
    }
}

export default config;