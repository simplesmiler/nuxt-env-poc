<template>
    <div>
        <h1>Hello</h1>
        <pre>Buildtime TEST: {{ BUILDTIME_TEST }}</pre>
        <pre>Runtime TEST: {{ RUNTIME_TEST }}</pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                BUILDTIME_TEST: process.env.TEST, // @NOTE: Baked into the bundle
                RUNTIME_TEST: this.$env.TEST, // @NOTE: Dynamic, retrieved from the HTML meta tag
            };
        },
    };
</script>
