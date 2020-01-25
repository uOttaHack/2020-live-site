import { IEvent } from './interfaces';
import { RelativeTime } from './enums';

export function identity<T>(arg: T): T {
	return arg;
}

export function to12HourTime(date: Date) {
	const hours = date.getHours();
	const minutes = date.getMinutes();

	return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes < 10 ? '0' : ''}${minutes}${hours % 24 < 12 ? 'AM' : 'PM'}`;
}

export function dateToMinutesInDay(date: Date) {
	return date.getHours() * 60 + date.getMinutes();
}

export function getRelativeDayTime(date: Date) {
	// TODO: to check if the given date is past, present (today), or future
}

export function getRelativeEventTime(event: IEvent): RelativeTime {
	const start = dateToMinutesInDay(event.start);
	const end = start + event.duration;
	const now = dateToMinutesInDay(new Date());

	if (now < start) {
		return RelativeTime.Future;
	} else if (now > end) {
		return RelativeTime.Past;
	} else {
		return RelativeTime.Present;
	}
}
