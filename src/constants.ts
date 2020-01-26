import { RoutePath } from './enums';
import { IRouteItem } from './interfaces';

import InfoView from './views/InfoView';
import ScheduleView from './views/ScheduleView';
import MapView from './views/MapView';
import FoodMenuView from './views/FoodMenuView';
import ContactView from './views/ContactView';

const ONE_MINUTE_MILLISECOND = 60000;
const EVENT_LIST_ITEM_HEIGHT = 72;
const ROUTES_WITH_TITLES: IRouteItem[] = [
	{
		path: [RoutePath.Home, RoutePath.Schedule],
		title: 'Schedule',
		component: ScheduleView
	},
	{
		path: RoutePath.Info,
		title: 'Information',
		component: InfoView
	},
	{
		path: RoutePath.Map,
		title: 'Floor Plan',
		component: MapView
	},
	{
		path: RoutePath.Food,
		title: 'Food Menu',
		component: FoodMenuView
	},
	{
		path: RoutePath.Contact,
		title: 'Contact',
		component: ContactView
	}
];

export { ONE_MINUTE_MILLISECOND, EVENT_LIST_ITEM_HEIGHT, ROUTES_WITH_TITLES };
