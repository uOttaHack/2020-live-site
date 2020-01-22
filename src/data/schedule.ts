import { identity } from '../utils';
import { IDailyEventsList } from '../interfaces';
import { EventCategory } from '../enums';

export default identity<IDailyEventsList>([
	{
		name: '',
		start: new Date(),
		end: new Date(),
		category: EventCategory.ACTIVITY
	}
]);
