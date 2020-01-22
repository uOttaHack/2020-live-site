import { identity } from '../utils';
import { IDailyEventsList } from '../interfaces';
import { EventCategory } from '../enums';

export default identity<IDailyEventsList>([
	{
		name: 'Opening Ceremonies',
		start: new Date('2020-02-07T22:00:00'),
		end: new Date('2020-02-07T23:00:00'),
		category: EventCategory.Activity,
		description: 'This is a description of the event'
	}
]);
