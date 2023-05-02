// Import stylesheets
import './style.css';
import moment from 'moment';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let currentTime = moment.now();
const operationEndDate = 1683006000000 + 12 * 60 * 60 * 1000;

let m = new Date(currentTime - operationEndDate).getMonth();
let h = new Date(currentTime - operationEndDate).getHours();
let d = new Date(currentTime - operationEndDate).getDay();

let startDateTime = moment(currentTime)
  .subtract({ hours: 12 })
  .utc()
  .format('x');

function timeDifference(difference) {
  //var difference = date1.getTime() - date2.getTime();

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);

  console.log(
    'difference = ' +
      daysDifference +
      ' day/s ' +
      hoursDifference +
      ' hour/s ' +
      minutesDifference +
      ' minute/s ' +
      secondsDifference +
      ' second/s '
  );
}

function directDateComparison(dateOne, dateTwo) {
  console.log('\ngetTimeDateComparison');
  console.log('=====================\n');

  // 1. Abstract equality check
  if (dateOne == dateTwo) {
    console.log('Dates are the same: Abstract equality');
  } /* else {
    console.log('Date are not the same: Abstract equality')
  } */

  // 2. Strict equality check
  if (dateOne === dateTwo) {
    console.log('Dates are the same: Strict equality');
  } /* else {
    console.log('Date are not the same: Strict equality')
  } */

  // 3. Greater than check
  if (dateOne > dateTwo) {
    console.log('dateOne is greater than dateTwo');
  } /* else {
    console.log('dateOne is not greater than dateTwo')
  } */

  // 4. Less than check
  if (dateOne < dateTwo) {
    console.log('dateOne is less than dateTwo');
  } /* else {
    console.log('dateOne is not less than dateTwo')
  } */
}

directDateComparison(new Date(currentTime), new Date(operationEndDate));

timeDifference(currentTime - operationEndDate);
console.log(currentTime);
console.log(operationEndDate);
console.log(currentTime - operationEndDate);
console.log(m);
