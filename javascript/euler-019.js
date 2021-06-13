'use es6';

const FIRST_DAY = 0;
const DAY_OF_WEEK = 6;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calculateNumberOfDaysForFirst = () => {
  let year = 1;
  let numDays = 0;
  let currDay = FIRST_DAY;

  while (year < 100) {
    for (let month = 0; month < DAYS_IN_MONTH.length; month++) {
      if (currDay === DAY_OF_WEEK) numDays++;

      currDay += DAYS_IN_MONTH[month];
      if (month === 1 && year % 4 === 0) currDay++; // leap year
      currDay = currDay % 7;
    }
    year++;
  }
  return numDays;
};

const result = calculateNumberOfDaysForFirst();
console.log(`solution: ${result}`);
