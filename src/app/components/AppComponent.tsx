import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';
import { AppService } from '../service/AppService';

@Component
export class AppComponent extends Vue {


	render(h) {
		return (
			<div>	
				<router-view></router-view>
			</div>
		)
	}
}