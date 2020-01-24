export function identity<T>(arg: T): T {
	return arg;
}

export function to12HourTime(date: Date) {
	const hours = date.getHours();
	const minutes = date.getMinutes();

	return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes < 10 ? '0' : ''}${minutes}${hours % 24 < 12 ? 'AM' : 'PM'}`;
}
