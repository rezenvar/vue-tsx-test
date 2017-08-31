import Vue from 'vue';
import VueRouter from 'vue-router';


import { MainPage } from './main/Main';
import { HomePage } from './home/Home';





Vue.use(VueRouter);




export const router = new VueRouter({
	routes: [
		{ 
			name: 'main',
			component: MainPage,
			path: '/',
			redirect: { path: '/home' },
			children: [
				{
					path: '/home',
					name: 'home',
					component: HomePage,
				}
			]			
		}
	]
})