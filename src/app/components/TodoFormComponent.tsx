



import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';



@Component
export class TodoFormComponent extends Vue {


	/**
	 * Emits submit emit
	 * @memberof TodoFormComponent
	 */
	onSubmit() {
		if (!this.name) return;
		this.$emit('submit', this.name);
		this.name = '';
	}



	/**
	 * 
	 * @type {string}
	 * @memberof TodoFormComponent
	 */
	name: string = '';


	render(h) {
		return (
			<form class='todo-form' onSubmit={this.onSubmit} >
				<input class={`todo-form__text-box`} v-model={this.name} type="text" />
				<button class={`todo-form__btn ${!this.name && 'todo-form__btn--disabled' } `} type='submit'>Add todo</button>
			</form>
		)
	}
}