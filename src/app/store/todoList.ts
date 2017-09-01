import { Todo } from '../shared/Todo';


export interface ITodoListState {
	listTodo : Todo[];
}


const state : ITodoListState = {
	listTodo: []
};



const mutations = {

	
	/**
	 * Add new todo to list
	 * @param {ITodoListState} state 
	 * @param {string} name 
	 */
	addTodo(state : ITodoListState, name: string) {
		state.listTodo.unshift(new Todo(name));
	},


	/**
	 * Set todo to completed
	 * @param {ITodoListState} state 
	 * @param {Todo} todo 
	 */
	checkTodo(state : ITodoListState, todo: Todo) {
		todo.completed = !todo.completed;
	},

	/**
	 * Set passed todo name 
	 * @param {ITodoListState} state 
	 * @param {any} payload 
	 */
	setTodoName(state : ITodoListState, payload) {
		payload.todo.name = payload.name;
	},

	/**
	 * Toggle passed todo isEditing to show rename input
	 * @param {ITodoListState} state 
	 * @param {Todo} todo 
	 */
	toggleEdit(state : ITodoListState, todo: Todo) {
		todo.isEditing = !todo.isEditing;
	}


};





export const todoListModule = {
	namespaced: true,
	state,
	mutations
};



