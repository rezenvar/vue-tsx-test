


export class Todo {
	/**
	 * Name of todo
	 * @type {string}
	 * @memberof Todo
	 */
	name : string;

	/**
	 * State of todo
	 * @type {boolean}
	 * @memberof Todo
	 */
	completed : boolean = false;
	
	isEditing : boolean = false;

	/**
	 * Todo creation date
	 * @type {Date}
	 * @memberof Todo
	 */
	creationDate : Date;
	

	constructor(name : string) {
		this.name = name;
		this.creationDate = new Date();
	}

	


}