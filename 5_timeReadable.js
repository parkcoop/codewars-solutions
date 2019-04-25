/* 

Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable(seconds) {
  // TODO
  let hours = 0;
  let minutes = 0;
  let secs = 0;

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    secs = seconds % 3600;
  } else secs = seconds;

  if (secs >= 60) {
    minutes = Math.floor(secs / 60);
    secs = secs % 60;
  }

  if (seconds < 60) secs = seconds;

  return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
    "0" + secs
  ).slice(-2)}`;
}
