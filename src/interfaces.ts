import { EventCategory } from './enums';

export interface IDailyEventsList {
	[index: number]: {
		name: string;
		start: Date;
		end: Date;
		category: EventCategory;
		description: string;
	};
}
