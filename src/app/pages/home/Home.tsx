import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';
import { AppService } from '../../service/AppService';
import { TodoListComponent } from '../../components/TodoListComponent';



@Component
export class HomePage extends Vue {


	render(h) {
		return (
			<div>
				<TodoListComponent />
			</div>
		)
	}
}
