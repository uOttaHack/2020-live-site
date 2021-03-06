import { IEventDay } from '../interfaces';
import { EventCategory, Location } from '../enums';

export const firstDay: IEventDay = {
	index: 0,
	title: 'Fri',
	longTitle: 'Friday February 7',
	date: new Date('2020-02-07T00:00:00-05:00'),
	events: [
		{
			name: 'Registration',
			start: new Date('2020-02-07T17:00:00-05:00'),
			duration: 300,
			category: EventCategory.Default,
			location: Location.Lobby,
			description: ''
		},
		{
			name: 'Dinner',
			start: new Date('2020-02-07T18:00:00-05:00'),
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Shawarma Express'
		},
		{
			name: 'Opening Ceremony',
			start: new Date('2020-02-07T20:00:00-05:00'),
			duration: 60,
			category: EventCategory.Activity,
			location: Location.UCU,
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
			location: Location.REST,
			description: ''
		},
		{
			name: 'Hacking Begins',
			start: new Date('2020-02-07T23:00:00-05:00'),
			duration: 0,
			category: EventCategory.Hacker,
			location: Location.None,
			description: ''
		},
		{
			name: 'Intro to Git',
			start: new Date('2020-02-07T23:30:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop1,
			location: Location.WorkshopC309,
			description: 'Hosted by Brennan McDonald (Amazon Developer Intern).'
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
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Ice cream and cookies'
		},
		{
			name: 'Intro to Machine Learning Workshop',
			start: new Date('2020-02-08T00:30:00-05:00'),
			duration: 60,
			category: EventCategory.Workshop1,
			location: Location.WorkshopC309,
			description: 'Hosted by Chris Wang.'
		},
		{
			name: 'Intro to React Workshop',
			start: new Date('2020-02-08T01:30:00-05:00'),
			duration: 60,
			category: EventCategory.Workshop2,
			location: Location.WorkshopC309,
			description: 'Hosted by Daniel Wu (Google Developer Intern) and Tommy Deng.'
		},
		{
			name: 'Breakfast',
			start: new Date('2020-02-08T07:00:00-05:00'),
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Bagels, fruits, and pastries'
		},
		{
			name: 'Solace Workshop',
			subtitle: 'Event Driven Applications',
			start: new Date('2020-02-08T08:00:00-05:00'),
			duration: 60,
			category: EventCategory.Workshop1,
			location: Location.WorkshopC309,
			description:
				'Join Solace engineers to learn more about the benefit of event driven applications. Bring your laptops as we’ll be walking through a tutorial of how to build an app connected to the Solace PubSub+ message broker in Solace PubSub+ Cloud. Come with your questions ready as we’ll have multiple engineers on hand to answer them. Remember if you build your hack with Solace PubSub+, you’ll have your chance to win Solace’s hackathon challenge and 4 sets of Apple AirPods!'
		},
		{
			name: 'DRDC Workshop',
			subtitle: 'Science, tech and innovation at DND for the nation’s defense and security',
			start: new Date('2020-02-08T09:00:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop2,
			location: Location.WorkshopC308,
			description:
				'Defence Research and Development Canada (DRDC) is the science and technology agency for the Department of National Defence (DND). DRDC works closely with the Canadian Special Operations Forces Command (CANSOFCOM) and other military partners to provide cutting edge technology and advice in matters of national security. DRDC scientists and CANSOFCOM staff will give an overview of some of their (unclassified!) work, especially work that has recently been done by students working at DND. We are looking for more talented students to join us in the summer and beyond.'
		},
		{
			name: 'Pet Therapy',
			start: new Date('2020-02-08T09:30:00-05:00'),
			duration: 120,
			category: EventCategory.Activity,
			location: Location.Lobby,
			description: 'Please bring donations 🐕'
		},
		{
			name: 'Deloitte Workshop',
			subtitle: 'Design Thinking',
			start: new Date('2020-02-08T10:30:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop1,
			location: Location.WorkshopC309,
			description:
				'Learn the principles of design thinking from one of Deloitte’s Design Thinking practitioners. Leave the workshop with the skills required to empathize with the users you’re building your challenge for. Spend time ideating how your challenge idea could be brought to life and get feedback by testing with real users. Get feedback on your challenge ideas from the Deloitte team'
		},
		{
			name: 'SurveyMonkey Workshop',
			subtitle: 'An Advanced React Workshop',
			start: new Date('2020-02-08T11:00:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop2,
			location: Location.WorkshopC308,
			description:
				'Introduction to advanced React concepts and their practical uses (custom hooks, context, suspense, etc.). A place for students to ask questions about their React projects.'
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
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Raon Kitchen'
		},
		{
			name: 'Startup Panel: Journey to Success',
			start: new Date('2020-02-08T13:00:00-05:00'),
			duration: 60,
			category: EventCategory.Activity,
			location: Location.WorkshopC308,
			description: ''
		},
		{
			name: 'Innovapost Workshop',
			subtitle: 'Creating AI Powered Mobile Apps',
			start: new Date('2020-02-08T14:00:00-05:00'),
			duration: 90,
			category: EventCategory.Workshop1,
			location: Location.WorkshopC309,
			description: ''
		},
		{
			name: 'MNP Workshop',
			start: new Date('2020-02-08T15:00:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop2,
			location: Location.WorkshopC308,
			description: ''
		},
		{
			name: 'Skating',
			start: new Date('2020-02-08T15:30:00-05:00'),
			duration: 120,
			category: EventCategory.Activity,
			location: Location.Canal,
			description: 'Meet at the lobby before heading to the canal ⛸️'
		},
		{
			name: 'ADGA Workshop',
			start: new Date('2020-02-08T17:00:00-05:00'),
			duration: 30,
			category: EventCategory.Workshop1,
			location: Location.WorkshopC309,
			description:
				'Presenting on their work using Tensorflow machine learning to detect ocean going vessels from space.'
		},
		{
			name: 'Dinner',
			start: new Date('2020-02-08T18:00:00-05:00'),
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Chillies'
		},
		{
			name: 'Diversity Talk',
			start: new Date('2020-02-08T19:30:00-05:00'),
			duration: 60,
			category: EventCategory.Activity,
			location: Location.WorkshopC309,
			description: ''
		},
		{
			name: 'MLH Werewolf',
			start: new Date('2020-02-08T21:00:00-05:00'),
			duration: 60,
			category: EventCategory.Activity,
			location: Location.Lobby,
			description: 'MLH Mini Event'
		},
		{
			name: 'Karaoke',
			start: new Date('2020-02-08T23:00:00-05:00'),
			duration: 60,
			category: EventCategory.Activity,
			location: Location.Lobby,
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
			name: 'Midnight Snack sponsored by RBR',
			start: new Date('2020-02-09T00:00:00-05:00'),
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Bubble tea'
		},
		{
			name: 'Breakfast',
			start: new Date('2020-02-09T07:00:00-05:00'),
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'Bagels, fruits, and pastries'
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
			location: Location.None,
			description: ''
		},
		{
			name: 'Demos',
			start: new Date('2020-02-09T10:30:00-05:00'),
			duration: 120,
			category: EventCategory.Default,
			location: Location.Demo,
			description: ''
		},
		{
			name: 'Lunch',
			start: new Date('2020-02-09T12:00:00-05:00'),
			duration: 90,
			category: EventCategory.Food,
			location: Location.Food,
			description: 'La Bottega'
		},
		{
			name: 'Closing Ceremonies',
			start: new Date('2020-02-09T13:30:00-05:00'),
			duration: 90,
			category: EventCategory.Activity,
			location: Location.UCU,
			description: ''
		},
		{
			name: 'Buses Leave',
			start: new Date('2020-02-09T15:30:00-05:00'),
			duration: 0,
			category: EventCategory.Default,
			location: Location.CRX,
			description: ''
		}
	]
};

export const dayAfterLastDay = new Date('2020-02-10T00:00:00-05:00');
