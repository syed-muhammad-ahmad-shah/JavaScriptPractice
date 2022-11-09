// 🟥 now()	                Returns the numeric value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 000000 UTC)
// 🟥 Date.setTime(milliSeconds)	sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.

// 🔴 DATE SET
// ⭐ GMT Date Set Methods ⭐
// Method	                                Description
// 1️⃣ setMilliseconds()	Set the milliseconds (0-999)
// 2️⃣ setSeconds()	Set the seconds (0-59)
// 3️⃣ setMinutes()	Set the minutes (0-59)
// 4️⃣ setHours()	Set the hour (0-23)
// setHours()            Sets the hours for a specified date according to the local time setMilliseconds()
// 5️⃣ setDay()	It sets the day of the week (0-6, from Sunday to Saturday) for the specified date according to local time.
// 6️⃣ setDate()	Set the day as a number (1-31)
// setDate()	            Sets the day of the month according to local time
// setDate()             Sets the day of the month for a specified date according to the local time
// 7️⃣ setMonth()	Set the month (0-11)
// setMonth()	            Sets the month according to local time
// 8️⃣ setFullYear()	Set the year (optionally month and day)
// setFullYear()      	Sets the full year according to local time
//  setFullYear()               Sets the full year for a specified date according to the local time
// 9️⃣ setTime()	This method returns the numeric value of the specified date: the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for the time before that).
// 1️⃣0️⃣setTimezoneOffset()	Not found

// ⭐ UTC Date Set Methods ⭐
// 1️⃣ setUTCMilliseconds()    sets the milliseconds (from 0 to 999) of a date object, according to UTC.
// 2️⃣ setUTCSeconds()         sets the year of a milliseconds object, according to UTC.
// 3️⃣ setUTCMinutes()         sets the year of a minutes object, according to UTC.
// 4️⃣ setUTCHours()           sets the year of a hour object, according to UTC.
// 5️⃣ setUTCDate()	           Sets the date of the month according to UTC.
// 6️⃣ setUTCDay()	           sets the day of a date object, according to UTC.
// 7️⃣ setUTCMonth()           sets the month of a date object, according to UTC.
// 8️⃣ setUTCFullYear()        sets the year of a date object, according to UTC.            


// 🔴 DATE GET
// ⭐ GMT Date Get Methods ⭐
// 1️⃣ getMilliseconds()       Returns the milliseconds in the specified date according to the local time
// 2️⃣ getSeconds()          Returns the seconds in the specified date according to the local time
// 3️⃣ getMinutes()	        Gets the minute from 0 to 59 according to local time
// getMinutes()                Returns the minutes in the specified date according to the local time
// 4️⃣ getHours()                  Returns the hour in the specified date according to the local time
// getHours()	            Gets the hour from 0 to 23 according to local time
// 5️⃣ getDate()                   Returns the day of the month for the specified date according to the local time
// getDate()	            Gets the day of the month (1–31) according to local time
// 6️⃣ getDay()                 Gets the day of the week (0-6) according to local time
// getDay()                    Returns the day of the week for the specified date according to the local time
// 7️⃣ getMonth()	        Gets the month, from 0 to 11 according to local time
// getMonth()                  Returns the month in the specified date according to the local time
// 8️⃣ getFullYear()               Returns the year of the specified date according to the local time
// getFullYear()            Gets the year according to local time
// 9️⃣ getTime()             Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 000000 UTC
// 1️⃣0️⃣ getTimezoneOffset()   It returns the time-zone offset in minutes for the current locale.

// ⭐ UTC Date Get Methods ⭐
// Method	Same As	Description
// 1️⃣ getUTCMilliseconds()  Returns the milliseconds in the specified date according to the universal time
// getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
// 2️⃣ getUTCSeconds()       Returns the seconds in the specified date according to the universal time
// getUTCSeconds()	getSeconds()	Returns the UTC seconds
// 3️⃣ getUTCMinutes()       Returns the minutes in the specified date according to the universal time
// getUTCMinutes()	getMinutes()	Returns the UTC minutes
// 4️⃣ getUTCHours()         Returns the hours in the specified date according to the universal time
// getUTCHours()	getHours()	Returns the UTC hour
// 5️⃣ getUTCDay()           Returns the day of the week in the specified date according to the universal time
// getUTCDay()	getDay()	Returns the UTC day
// 6️⃣ getUTCDate()	        Gets the day of the month (1–31) according to universal time
// getUTCDate()	getDate()	Returns the UTC date
// getUTCDate()                Returns the day (date) of the month in the specified date according to the universal time
// 7️⃣ getUTCMonth()         Returns the month in the specified date according to the universal time
// getUTCMonth()	getMonth()	Returns the UTC month
// 8️⃣ getUTCFullYear()      Returns the year in the specified date according to the universal time
// getUTCFullYear()	getFullYear()	Returns the UTC year

// 🔴 DATE CONVERSION GETTER
// ⭐ Conversion Getter ⭐
// toDateString()	 It returns a string, containing the “date” of the Date object in a human-readable format.
// toTimeString()	It returns a string, containing the “time” of the Date object in a human-readable format.
// toUTCString()	It returns a string, containing the Date using the UTC timezone.
// valueOf()	This method returns the primitive value of the Date object.
// toString()	This method returns a string representation of the specified Date object.



// 🟥 now()  Returns the numeric value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 000000 UTC)
// ➡Syntax
//  Date.now()

// ⭐Example_1
let d = Date.now()

// milliseconds elapsed since January 1, 1970                  
console.log(d)  //1668015436113
console.log("Milliseconds elapsed since January 1, 1970: " + d)
// Milliseconds elapsed since January 1, 1970: 1668015436113

// ⭐Example_2
  // Years elapsed since January 1, 1970
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;
  let years = Math.round(Date.now() / year);
  console.log(years)  //53

// 🟥 Date.setTime(milliSeconds)	sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
// ➡Syntax
// Date.setTime(milliSeconds)

// ⭐Example
d = new Date();
d.setTime(2332403882588)
console.log("Milliseconds elapsed since January 1, 1970: " + d)
// Milliseconds elapsed since January 1, 1970: Sun Nov 29 2043 14:58:02 GMT+0500 (Pakistan Standard Time)

// 🔴 DATE SET=================================================

// 1️⃣ setMilliseconds()	Set the milliseconds (0-999)
// ➡Syntax
// setMilliseconds(0-999)

// ⭐Example
d = new Date();
d.setMilliseconds(192);
console.log("Sets the milliseconds: " + d)
// Set the milliseconds: Wed Nov 09 2022 22:54:08 GMT+0500 (Pakistan Standard Time)

// 2️⃣ setSeconds()	Set the seconds (0-59)
// ➡Syntax
// setSeconds(0-59)

// ⭐Example
d = new Date();
d.setSeconds(30);
console.log("Sets the seconds: " + d)
// Sets the seconds: Wed Nov 09 2022 22:57:30 GMT+0500 (Pakistan Standard Time)

// 3️⃣ setMinutes()	Set the minutes (0-59)
// ➡Syntax
// setMinutes(0-59)

// ⭐Example
d = new Date();
d.setMinutes(30);
console.log("Sets the Minutes:(30) " + d)

// 4️⃣ setHours()	Set the hour (0-23)
// ➡Syntax
// setHours(0-23)

// ⭐Example
d = new Date();
d.setHours(22);
console.log("Sets the Hours:(22) " + d)
// setHours()            Sets the hours for a specified date according to the local time setMilliseconds()

// 5️⃣ setDay()	
// not found 404

// 6️⃣ setDate()	Set the day as a number (1-31)
// ➡Syntax
// setDate(1-31)

// ⭐Example
d = new Date();
d.setDate(30);
console.log("Sets the Date:(30) " + d)
// setDate()	            Sets the day of the month according to local time
// setDate()             Sets the day of the month for a specified date according to the local time

// 7️⃣ setMonth()	Set the month (0-11)
// ➡Syntax
// setMonth(0-11)

// ⭐Example
d = new Date();
d.setMonth(11);
console.log("Sets the Month:(11) " + d)
// setMonth()	            Sets the month according to local time

// 8️⃣ setFullYear()	Set the year (optionally month and day)
// ➡Syntax
// Date.setFullYear(year, month, day)

// ⭐Example
d = new Date();
d.setFullYear(1999,2,3);
console.log("Sets the FullYear: " + d)
// setFullYear()      	Sets the full year according to local time
//  setFullYear()               Sets the full year for a specified date according to the local time

// 9️⃣ setTime()	This method returns the numeric value of the specified date: the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for the time before that).
// ➡Syntax
// Date.setTime(milliSeconds)

// ⭐Example
d = new Date();
d.setTime(1332403882588);
console.log("setTime: " + d)


// 🟢 UTC Vs GMT 🟢==============================================
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// 🔻 setUTCDate()	            Sets the day of the month according to universal time
// ➡Syntax
// setUTCDate(1-31)

// ⭐Example_1 (1, 31)=> date(1, 31)
d= new Date()
d.setUTCDate(1)
console.log('The current UTCDate is',d)
// The current date is 2022-10-01T13:41:50.616Z

// ⭐Example_2 (-30, -1)=> date(1, 30)
d= new Date()
d.setUTCDate(-30)
console.log('The current UTCDate is',d)
// The current date is 2022-10-01T13:41:50.616Z

// ⭐Example_3 (0)=> date(31)
d= new Date()
d.setUTCDate(0)
console.log('The current UTCDate is',d)
// The current date is 2022-10-31T13:41:50.616Z

// 🔻 setDate()	            Sets the day of the month according to local time
// ➡Syntax
// setDate(1-31)

// ⭐Example_1 (1, 31)=> date(1, 31)
d = new Date();
d.setDate(-30);
console.log('The current date is',d)
// The current date is 2022-11-30T13:57:43.088Z

// ⭐Example_2 (-30, -1)=> date(1, 30)
d= new Date()
d.setDate(-30)
console.log('The current date is',d)
// The current date is 2022-10-01T13:41:50.616Z

// ⭐Example_3 (0)=> date(31)
d= new Date()
d.setDate(0)
console.log('The current date is',d)
// The current date is 2022-10-31T13:41:50.616Z



// 🔴 DATE GET=================================================
// EXAMPLE : 

        // Print today full date & full time:
        let now = new Date();
        let today = [
          "Milliseconds: " + now.getMilliseconds(),
          "Seconds: " + now.getSeconds(),
          "Minutes: " + now.getMinutes(),
          "Hours: " + now.getHours(), 
          "Date:" + now.getDate(),
          "Day: " + now.getDay(),
          "Month: " + (now.getMonth() + 1),
          "Year: " + now.getFullYear(),
          "Time in milliSeconds: " + now.getTime(),
          "Time Zone Off Set: " + now.getTimezoneOffset() 
          ]
          
          for (let i in today){
            console.log(i + ") " + today[i])
          }

         