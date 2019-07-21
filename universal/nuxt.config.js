export default {
    srcDir: __dirname,
    mode: 'universal',
    env: {
        TEST: process.env.TEST,
    },
    modules: [
        ['~/modules/nuxt-env-poc', {
            keys: [ 'TEST' ],
        }],
    ],
};
