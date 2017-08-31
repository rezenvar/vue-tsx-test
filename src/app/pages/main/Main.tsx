import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';




@Component
export class MainPage extends Vue {

	render(h) {
		return (
			<div>
				<router-view></router-view>
			</div>
		)
	}
}