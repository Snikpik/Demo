<template>
    <div id="app">
        <div class="jumbotron">
            <div class="container">
                <h1>Snikpik Example</h1>
                <p class="lead">An example for using Snikpik.io API to get website preview.</p>
            </div>
        </div>
        <div class="container">
            <preview></preview>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import Preview from './Preview.vue';

    export default {
        components: {
            Preview
        }
    }

</script>
