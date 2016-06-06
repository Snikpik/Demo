import Vue from "vue";
import App from "./App.vue";
import {API_TOKEN} from './env';

Vue.use(require('vue-resource'));

Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;

new Vue({
    el: 'body',
    components: {App}
})
