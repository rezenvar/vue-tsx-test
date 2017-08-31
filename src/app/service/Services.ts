
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch, Provide, Inject } from 'vue-property-decorator';
import { AppService } from './AppService';
import { TodoService } from './TodoService';



@Component
export class Services extends Vue {
	@Provide() appService : AppService = new AppService();
	@Provide() todoService : TodoService  = new TodoService();
}