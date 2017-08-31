


import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';
import { TodoComponent } from './TodoComponent';
import { TodoService } from '../service/TodoService';
import { TodoFormComponent } from './TodoFormComponent';



@Component
export class TodoListComponent extends Vue {

	@Inject()
	todoService: TodoService;



	render(h) {
		return (
			<div class='todo-container' >
				<TodoFormComponent class='todo-container__form' onSubmit={this.todoService.addTodo} />
				<ul class='todo-list' >
					{this.todoService.listTodo.map((todo, index) => {
						return <TodoComponent onEdit={this.todoService.toggleEdit} onCheck={this.todoService.checkTodo} class='todo-list__todo' todo={todo} key={index} />
					})}
				</ul>
			</div>
		)


	}
}