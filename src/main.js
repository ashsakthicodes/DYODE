import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
Vue.use( VueSplide );


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");