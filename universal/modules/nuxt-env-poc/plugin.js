export default (ctx, inject) => {
    let env = {};

    if (process.server) {
        // @NOTE: On the SSR server, we don't have access to HTML meta, and can't pass collected vars from the plugin,
        //        so we have to collect them again from the runtime `process.env`
        const keys = <%= JSON.stringify(options.keys) %>;
        for (const name of keys){
            env[name] = process.env[name];
        }

        // @NOTE: Work around an issue with SSR client, where it's HTML meta is outdated
        ctx.beforeNuxtRender(renderCtx => {
            renderCtx.nuxtState.env = env;
        });
    }

    else if (ctx.nuxtState) {
        // @NOTE: On SSR client, load vars from nuxtState
        env = ctx.nuxtState.env;
    }

    else {
        // @NOTE: On SPA client, load vars from the HTML meta
        const meta = document.querySelector('meta[name=nuxt-env]');
        if (meta) {
            try {
                env = JSON.parse(meta.content);
            }
            catch (error) {
                console.err('Nuxt env meta tag is malformed');
            }
        }
    }

    inject('env', env);
};
