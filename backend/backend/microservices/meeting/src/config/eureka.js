const { Eureka } = require('eureka-js-client');

const PORT = Number(process.env.PORT) || 8083;

const eurekaClient = new Eureka({
    instance: {
        app: 'MEETING',
        instanceId: `meeting:${PORT}`,
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: { '$': PORT, '@enabled': true },
        vipAddress: 'meeting',
        statusPageUrl: `http://localhost:${PORT}/info`,
        healthCheckUrl: `http://localhost:${PORT}/health`,
        homePageUrl: `http://localhost:${PORT}/`,
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

module.exports = eurekaClient;