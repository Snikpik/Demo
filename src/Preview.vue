<template>
    <div class="row">
        <form action="#" method="POST" class="col-md-6" @submit.prevent="submit">
            <h2>1. Enter a URL:</h2>
            <div class="form-group">
                <textarea name="url" id="url" rows="3"
                          class="form-control"
                          v-model="url"
                          placeholder="http://www.example.com/preview"

                >https://liftmap.com</textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg" :disabled="!validateUrl() ? true : false">Preview</button>
            </div>
        </form>
        <div class="col-md-6">
            <h2>Display the preview:</h2>
            <pre>{{ response | json }}</pre>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import {API_TOKEN} from './env';

    export default {
        data() {
            return {
                url: '',
                response: '{}'
            };
        },

        methods: {
            submit() {
                let url = encodeURIComponent(this.url);

                this.$http.get(`http://api.snikpik.dev/v1/preview?url=${url}`).then((response) => {
                    this.response = response.data;
                });
            },

            /**
             * Validate the url format to add http if needed
             */
            validateUrl() {
                let regex = /^(http|https)/;

                return this.url.length > 3 && this.url.match(regex);
            }
        }
    }

</script>

<style>
    h2 {
        margin-bottom: 1em;
    }
</style>