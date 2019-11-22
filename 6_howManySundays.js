// You are given the following information, but you may prefer to do some research for yourself.
// - 1 Jan 1900 was a Monday.
// -Thirty days has September,
//  April, June and November.
// - All the rest have thirty-one,
// - Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const monthDays = (year) => {
    return {
        jan: 31,
        feb: year % 4 ? 28 : 29,
        mar: 31,
        apr: 30,
        may: 31,
        jun: 30,
        jul: 31,
        aug: 31,
        sep: 30,
        oct: 31,
        nov: 30,
        dec: 31,
    }
}

const daysOfWeek = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
]
const monthsOfYear = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
]

function howManySundays(startYear = 1901, endYear = 2000) {
    let totalTime = [];
    let year = {};
    let month = [];
    let currentYear = startYear;
    let dayCounter = 0;
    let monthCounter = 0;
    let counter = 0;
    

    while (currentYear < endYear) {
        if (dayCounter == 7) {
            dayCounter = 0;
        }
        if (monthCounter == 12) {
            monthCounter = 0;
            totalTime.push(year);
            year = {}
            currentYear++;
        }
        if (counter == monthDays(currentYear)[monthsOfYear[monthCounter]]) {
            counter = 0;
            year[monthsOfYear[monthCounter]] = month
            month = []
            monthCounter++;
        }
        month[counter] = daysOfWeek[dayCounter]
        dayCounter++;
        counter++;
    }


    let numberOfSundays = 0;
    


    totalTime.forEach(year => {
        for (month in year) {
            if (year[month][0] === 'sun') {
                numberOfSundays++;
            }
        }
    })

    return totalTime

}
