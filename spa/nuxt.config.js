export default {
    srcDir: __dirname,
    mode: 'spa',
    env: {
        TEST: process.env.TEST,
    },
    modules: [
        ['~/modules/nuxt-env-poc', {
            keys: [ 'TEST' ],
        }],
    ],
};
