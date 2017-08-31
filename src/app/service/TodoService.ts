import { Todo } from '../shared/Todo';






export class TodoService {
	
	/**
	 * List with todo objects
	 * @type {Todo[]}
	 * @memberof TodoService
	 */
	listTodo : Todo[] = [];




	/**
	 * Add new todo to listTodo with passed name 
	 * @param {string} name 
	 * @memberof TodoService
	 */
	addTodo = (name : string) => {
		this.listTodo.unshift(new Todo(name));
	}
	/**
	 * Delete passed todo from listTodo
	 * @param {Todo} todo 
	 * @memberof TodoService
	 */
	removeTodo(todo : Todo) {
		this.listTodo = this.listTodo.filter((item) => item != todo);
	}
	/**
	 * Set todo completed flag
	 * @param {Todo} todo 
	 * @memberof TodoService
	 */
	checkTodo = (todo : Todo) => {
		todo.completed = !todo.completed;
	}


	/**
	 * Toggle todo editing flag
	 * @param todo 
	 */
	toggleEdit = (todo : Todo) => {
		todo.isEditing = !todo.isEditing;
	}






}