const milliSecond = 1;
const second = 1000 * milliSecond;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
export const TIME = { second, minute, hour, day, milliSecond };

/**
 * @param unixTime unix time in seconds
 * @returns formatted date-time string
 */
export const formattedDate = (unixTime: number) =>
  unixTime
    ? `${new Date(unixTime * 1000).toLocaleString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}`
    : '';

type TimePeriod = Partial<{
  milliSeconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}> & {
  toString: () => string;
  isLate: boolean;
};

/**
 * @param startTime start time in seconds
 * @param endTime end time in seconds
 * @returns time period object with fields for day, hour, etc
 */
export const timePeriod = (startTime: number, endTime: number): TimePeriod => {
  let timeDiff = (endTime - startTime) * 1000;
  let isLate = false;
  if (timeDiff < 0) {
    isLate = true;
    timeDiff = -timeDiff;
  }
  const period: TimePeriod = {
    isLate,
    toString() {
      let result = '';
      if (this.days) result += `${this.days} days `;
      if (this.hours) result += `${this.hours} hours `;
      if (this.minutes) result += `${this.minutes} minutes `;
      if (this.seconds) result += `${this.seconds} seconds `;
      if (isLate) {
        result += 'late';
      } else {
        result += 'early';
      }
      return result;
    },
  };
  period.days = Math.floor(timeDiff / TIME.day);
  timeDiff = timeDiff % TIME.day;
  period.hours = Math.floor(timeDiff / TIME.hour);
  timeDiff = timeDiff % TIME.hour;
  period.minutes = Math.floor(timeDiff / TIME.minute);
  timeDiff = timeDiff % TIME.minute;
  period.seconds = Math.floor(timeDiff / TIME.second);
  timeDiff = timeDiff % TIME.second;
  period.milliSeconds = Math.floor(timeDiff / TIME.milliSecond);
  return period;
};
