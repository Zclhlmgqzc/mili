import Vue 		   from 'vue';
import iView       from 'iView';
import axios       from 'axios';
import EditArticle from './EditArticle.vue';

Vue.use(iView);
Vue.prototype.$http = axios;

new Vue({
	el: '#box',
	render: h => h(EditArticle)
})











