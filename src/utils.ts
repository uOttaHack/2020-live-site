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

export function getRelativeDayTime(date: Date): RelativeTime {
	const today = new Date();

	if (
		date.getUTCFullYear() === today.getUTCFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getUTCDate() == today.getUTCDate()
	) {
		return RelativeTime.Present;
	} else if (date.getTime() < today.getTime()) {
		return RelativeTime.Past;
	} else {
		return RelativeTime.Future;
	}
}

export function getRelativeEventTime(event: IEvent): RelativeTime {
	const start = dateToMinutesInDay(event.start);
	const end = start + event.duration;
	const now = dateToMinutesInDay(new Date());

	if (start === end && start === now) {
		return RelativeTime.Present;
	} else if (now < start) {
		return RelativeTime.Future;
	} else if (now >= end) {
		return RelativeTime.Past;
	} else {
		return RelativeTime.Present;
	}
}
