


import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';
import { TodoComponent } from './TodoComponent';
import { TodoFormComponent } from './TodoFormComponent';
import { Todo } from '../shared/Todo';
import {
	State,
	Getter,
	Action,
	Mutation,
	namespace
} from 'vuex-class'



@Component
export class TodoListComponent extends Vue {

	@State(state => state.todoList.listTodo) listTodo : Todo[];

	@Mutation('todoList/addTodo') addTodo;


	@Mutation('todoList/checkTodo') checkTodo;

	@Mutation('todoList/toggleEdit') toggleEdit;

	@Mutation('todoList/setTodoName') setTodoName;
	

	render(h) {
		return (
			<div class='todo-container' >
				<TodoFormComponent class='todo-container__form' onSubmit={this.addTodo} />
				<ul class='todo-list' >
					{this.listTodo.map((todo, index) => {
						return <TodoComponent onChange={this.setTodoName} onEdit={this.toggleEdit} onCheck={this.checkTodo} class='todo-list__todo' todo={todo} key={index} />
					})}
				</ul>
			</div>
		)


	}
}