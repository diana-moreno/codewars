/* 1st day of month that are Sunday in a year range

You will write a function that receive 2 parameters, 2 different years, to indicate a range of time.

The function will return the number of times a month between those years begin on Sunday, meaning the 1st day of the month is Sunday.

If there is only one year provided, return the number of times a month begin on Sunday on that year.

For instance: between 1901 and 2000, a month began on Sunday 171 times.*/

function getTotalSundays (yearInit, yearEnd) {
  if(yearEnd == undefined) yearEnd = yearInit; //check if only 1 year
  var sumSundays = 0;
  for(var y = yearInit; y <= yearEnd; y++) {
    for(var m = 0; m < 12; m++) {
        //console.log(new Date(y, m, 1)) // year, month, day 1
      if(new Date(y, m, 1).getDay() == 0) // if some day 1 is monday( == 0)
        sumSundays++;
    }
  }
  console.log(sumSundays)
  return sumSundays;
}

getTotalSundays(2018, 2019) // there are 4 months starting on monday between 2018 and 1019