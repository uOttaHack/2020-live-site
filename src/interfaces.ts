import { EventCategory } from './enums';

export interface IEvent {
	name: string;
	start: Date;
	end: Date;
	category: EventCategory;
	description: string;
}
