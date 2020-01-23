import { IEvent } from '../interfaces';
import { EventCategory } from '../enums';

export const firstDay: { title: string; date: Date; events: IEvent[] } = {
	title: 'First Day',
	date: new Date('2020-02-07'),
	events: [
		{
			name: 'First Activity',
			start: new Date('2020-02-07T22:00:00'),
			end: new Date('2020-02-07T23:00:00'),
			category: EventCategory.Activity,
			description: 'This is a description of the activity'
		},
		{
			name: 'Second Activity',
			start: new Date('2020-02-07T23:00:00'),
			end: new Date('2020-02-08T01:00:00'),
			category: EventCategory.Activity,
			description: 'This is a description of the activity'
		},
		{
			name: 'First Food',
			start: new Date('2020-02-07T22:00:00'),
			end: new Date('2020-02-07T23:00:00'),
			category: EventCategory.Food,
			description: 'This is a description of the food'
		},
		{
			name: 'Second Food',
			start: new Date('2020-02-07T23:00:00'),
			end: new Date('2020-02-08T01:00:00'),
			category: EventCategory.Food,
			description: 'This is a description of the food'
		}
	]
};
