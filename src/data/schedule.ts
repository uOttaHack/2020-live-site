import { IEventDay } from '../interfaces';
import { EventCategory, Location } from '../enums';

export const firstDay: IEventDay = {
	index: 0,
	title: 'Fri',
	longTitle: 'Friday February 7',
	date: new Date('2020-02-07T00:00:00-05:00'),
	events: [
		{
			name: 'Registration Opens',
			start: new Date('2020-02-07T17:00:00-05:00'),
			duration: 0,
			category: EventCategory.Default,
			location: '',
			description: ''
		},
		{
			name: 'Dinner',
			start: new Date('2020-02-07T18:00:00-05:00'),
			duration: 60,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Opening Ceremony',
			start: new Date('2020-02-07T20:00:00-05:00'),
			duration: 90,
			category: EventCategory.Default,
			location: '',
			description: ''
		},
		{
			name: 'Career Fair',
			start: new Date('2020-02-07T21:30:00-05:00'),
			duration: 120,
			category: EventCategory.Career,
			location: Location.CareerFair,
			description: ''
		},
		{
			name: 'Team Formation',
			start: new Date('2020-02-07T22:30:00-05:00'),
			duration: 0,
			category: EventCategory.Activity,
			location: '',
			description: ''
		},
		{
			name: 'Hacking Begins',
			start: new Date('2020-02-07T23:00:00-05:00'),
			duration: 0,
			category: EventCategory.Hacker,
			location: '',
			description: ''
		}
	]
};

export const secondDay: IEventDay = {
	index: 1,
	title: 'Sat',
	longTitle: 'Saturday February 8',
	date: new Date('2020-02-08T00:00:00-05:00'),
	events: [
		{
			name: 'Midnight Snack',
			start: new Date('2020-02-08T00:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Workshop - Student Ran',
			start: new Date('2020-02-08T01:00:00-05:00'),
			duration: 60,
			category: EventCategory.Workshop,
			location: Location.Workshop,
			description: ''
		},
		{
			name: 'Breakfast',
			start: new Date('2020-02-08T07:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Pet Therapy',
			start: new Date('2020-02-08T09:30:00-05:00'),
			duration: 120,
			category: EventCategory.Activity,
			location: '.gitignore',
			description: ''
		},
		{
			name: 'Deloitte Workshop',
			start: new Date('2020-02-08T10:30:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop,
			location: Location.Workshop,
			description: ''
		},
		{
			name: 'Career Fair',
			start: new Date('2020-02-08T11:30:00-05:00'),
			duration: 300,
			category: EventCategory.Career,
			location: Location.CareerFair,
			description: ''
		},
		{
			name: 'Lunch',
			start: new Date('2020-02-08T12:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Startup Panel',
			start: new Date('2020-02-08T13:00:00-05:00'),
			duration: 60,
			category: EventCategory.Workshop,
			location: Location.Staging,
			description: ''
		},
		{
			name: 'Innovapost Workshop',
			start: new Date('2020-02-08T14:00:00-05:00'),
			duration: 90,
			category: EventCategory.Workshop,
			location: Location.Workshop,
			description: ''
		},
		{
			name: 'Skating',
			start: new Date('2020-02-08T15:30:00-05:00'),
			duration: 120,
			category: EventCategory.Activity,
			location: '',
			description: ''
		},
		{
			name: 'Workshop',
			start: new Date('2020-02-08T17:00:00-05:00'),
			duration: 0,
			category: EventCategory.Workshop,
			location: Location.Workshop,
			description: ''
		},
		{
			name: 'Dinner',
			start: new Date('2020-02-08T18:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Diversity Talk',
			start: new Date('2020-02-08T19:30:00-05:00'),
			duration: 60,
			category: EventCategory.Activity,
			location: '',
			description: ''
		},
		{
			name: 'Workshop',
			start: new Date('2020-02-08T20:30:00-05:00'),
			duration: 60,
			category: EventCategory.Workshop,
			location: Location.Workshop,
			description: ''
		},
		{
			name: 'MLH Mini Event',
			start: new Date('2020-02-08T22:00:00-05:00'),
			duration: 0,
			category: EventCategory.Activity,
			location: '',
			description: ''
		},
		{
			name: 'Karaoke',
			start: new Date('2020-02-08T23:00:00-05:00'),
			duration: 0,
			category: EventCategory.Activity,
			location: Location.Workshop,
			description: ''
		}
	]
};

export const thirdDay: IEventDay = {
	index: 2,
	title: 'Sun',
	longTitle: 'Sunday February 9',
	date: new Date('2020-02-09T00:00:00-05:00'),
	events: [
		{
			name: 'Midnight Snack',
			start: new Date('2020-02-09T00:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Workshop',
			start: new Date('2020-02-09T01:00:00-05:00'),
			duration: 0,
			category: EventCategory.Workshop,
			location: '',
			description: ''
		},
		{
			name: 'Breakfast',
			start: new Date('2020-02-09T07:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Career Fair',
			start: new Date('2020-02-09T09:00:00-05:00'),
			duration: 90,
			category: EventCategory.Career,
			location: Location.CareerFair,
			description: ''
		},
		{
			name: 'Hacking Ends',
			start: new Date('2020-02-09T10:00:00-05:00'),
			duration: 0,
			category: EventCategory.Hacker,
			location: '',
			description: ''
		},
		{
			name: 'Lunch',
			start: new Date('2020-02-09T12:00:00-05:00'),
			duration: 0,
			category: EventCategory.Food,
			location: '',
			description: ''
		},
		{
			name: 'Closing Ceremonies',
			start: new Date('2020-02-09T13:30:00-05:00'),
			duration: 0,
			category: EventCategory.Career,
			location: '',
			description: ''
		},
		{
			name: 'Buses Leave',
			start: new Date('2020-02-09T15:30:00-05:00'),
			duration: 0,
			category: EventCategory.Default,
			location: '',
			description: ''
		}
	]
};

export const dayAfterLastDay = new Date('2020-02-10T00:00:00-05:00');
