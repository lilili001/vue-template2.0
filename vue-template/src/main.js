import Vue from 'vue'
import App from './App'
import router from './router'

import iView from '../../iview/src';
import '../../iview/src/styles/index.less';
import '../../iview/scss/_common.scss';

import store from './store';

import axios from 'axios';
Vue.prototype.$http = axios;

Vue.use(iView);
Vue.config.productionTip = false;

Vue.prototype.$http.interceptors.response.use(

    (response)=> {
        var suffix = ' 请求状态:' + response.status+':'+response.statusText;
        if (!(response.data.success) && response.data.message) {
            info(response.data.message );
        }
        return response
    },

    (error) => {
        var info = (text) => {
            if (zero.$Message) zero.$Message.destroy();
            zero.$Modal.error({
                content: text
            });
        };
        var err = error.response;
        info( err.statusText + ' | ' + err.status + err.statusText );
        //Do something with response error
        return Promise.reject(error)
});

window._ = require('underscore');

/* eslint-disable no-new */
const zero = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
