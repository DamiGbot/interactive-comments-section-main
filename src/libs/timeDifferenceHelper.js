const checkTime = (time, value) => {
	time = Math.round(time);
	return time < 2 ? `${time} ${value} ago` : `${time} ${value}s ago`;
};

export const timeDifference = (current, previous) => {
	let msPerMinute = 60 * 1000;
	let msPerHour = msPerMinute * 60;
	let msPerDay = msPerHour * 24;
	let msPerMonth = msPerDay * 30;
	let msPerYear = msPerDay * 365;

	let elapsed = current - previous;

	if (elapsed < msPerMinute) {
		if (Math.round(elapsed / 1000) === 0) {
			return "now";
		}
		return checkTime(elapsed / 1000, "second");
	} else if (elapsed < msPerHour) {
		return checkTime(elapsed / msPerMinute, "minute");
	} else if (elapsed < msPerDay) {
		return checkTime(elapsed / msPerHour, "hour");
	} else if (elapsed < msPerMonth) {
		return checkTime(elapsed / msPerDay, "day");
	} else if (elapsed < msPerYear) {
		return checkTime(elapsed / msPerMonth, "month");
	} else {
		return checkTime(elapsed / msPerYear, "year");
	}
};
