

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';
import { Todo } from '../shared/Todo';



@Component
export class TodoComponent extends Vue {

	@Prop() todo : Todo;

	isFocusEditInput : boolean = false;

	onCheck() {
		this.$emit('check', this.todo);
	}

	onToggleEdit() {
		this.$emit('edit', this.todo);
		this.isFocusEditInput = this.todo.isEditing;
	}


	
	updated() {
		let {nameInput } : any = this.$refs;
		if (this.isFocusEditInput && nameInput) {
			nameInput.focus();
			this.isFocusEditInput = false;
		}
	}

	onChangeName(event) {
		this.$emit('change', { todo: this.todo,  name: event.target.value });
	}

	render(h) {
		return (
			<li class={`todo ${this.todo.completed && 'todo--completed'}`}>
				
				{this.todo.isEditing ?
					<input class='todo__edit' ref='nameInput' onBlur={this.onToggleEdit} onChange={this.onChangeName} /> 
					:
					<div onClick={this.onToggleEdit} class='todo__name' >{this.todo.name}</div>
				}

				<div class='todo__checkbox-container'>
					<div onClick={this.onCheck} class={`todo__checkbox ${this.todo.completed && 'todo__checkbox--checked'}`} type="checkbox" value={this.todo.completed}></div>
				</div>
			</li>
		)
	}
}