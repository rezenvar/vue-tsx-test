import Vuex from 'vuex';
import Vue from 'vue';
import { todoListModule } from './todoList';


Vue.use(Vuex);




export const store = new Vuex.Store({
	modules: {
		todoList: todoListModule
	},
	strict: DEBUG
});





