/**
 * Refers to : https://calendars.fandom.com/wiki/Calculating_the_day_of_the_week#The_algorithm_to_calculate_the_day_of_the_week
 * @param {*} year
 * @param {*} month
 * @param {*} date
 * @returns the date of the week
 */
export default function getTheDateOfTheWeek(year, month, date) {
  const centries = Math.floor(year / 100);
  const theTastTwoDigitsOfTheYear = year % 100;

  const monthMap = {
    1: 0,
    2: 3,
    3: 3,
    4: 6,
    5: 1,
    6: 4,
    7: 6,
    8: 2,
    9: 5,
    10: 0,
    11: 3,
    12: 5,
  };
  const step1Num = (3 - (centries % 4)) * 2;
  const step2Num = theTastTwoDigitsOfTheYear;
  const step3Num = Math.floor(theTastTwoDigitsOfTheYear / 4);
  let step4Num = monthMap[month];
  if (year % 4 === 0 && [1, 2].includes(month)) {
    if (month === 1) {
      step4Num = 6;
    } else if (month === 2) {
      step4Num = 2;
    }
  }
  const step5Num = step1Num + step2Num + step3Num + step4Num + date;
  const result = step5Num % 7;
  return result;
}
