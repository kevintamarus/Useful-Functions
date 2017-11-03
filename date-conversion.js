function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
//examples
console.log( new Date("2017-08-14T03:37:34.023Z"))
console.log( new Date() - new Date("2017-08-14T03:37:34.023Z"))
console.log(timeSince(new Date("2017-08-14T03:37:34.023Z")))

console.log(new Date() - Date.parse('2017-10-28T19:08:22.455912Z')) //=> changes to milliseconds since current
console.log(new Date('2017-10-28T19:08:22.455912Z').toLocaleDateString()) //=> changes to YYYY/MM/DD format