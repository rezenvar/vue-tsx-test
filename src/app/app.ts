import Vue from 'vue';
import './../styles/main.scss';

import { AppComponent } from './components/AppComponent';
import { router } from './pages/app.routing';
import { Services } from './service/Services';
import { store } from './store/store';



Vue.config.productionTip = false;

if (!DEBUG) {
	Vue.config.devtools = false;
}







export const appRoot = new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(AppComponent)
});




