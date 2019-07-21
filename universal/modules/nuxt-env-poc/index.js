import path from 'path';

export default function(options) {
    // @NOTE: Collect variables from the runtime `process.env` and store them in HTML meta
    const env = {};
    for (const name of options.keys) {
        env[name] = process.env[name];
    }
    console.log(this.options.mode);
    this.options.head.meta.push({
        hid: 'nuxt-env',
        name: 'nuxt-env',
        content: JSON.stringify(env),
    });

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        options,
    });
}
