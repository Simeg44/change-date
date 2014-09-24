var currentMonth = function() {
	var date = new Date();
	return date.getMonth();
};

var currentDay = function() {
	var date = new Date();
	return date.getDate();
};

var currentYear = function() {
	var date = new Date();
	return date.getFullYear ()
};

var leapYear = function(year) {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return true;
		}
	}
	return false;
};

var increment = function(array) {
	var newMonth = parseInt(array[0]);
	var newDay = parseInt(array[1]);
	var newYear = parseInt(array[2]);

	console.log(typeof(newMonth));
	console.log(leapYear(newYear));

	if (newMonth === 2) {
		if (leapYear(newYear) && newDay === 29) {
			newMonth++;
			newDay = 1;
		}
		else if (!(leapYear(newYear)) && (newDay === 28)) {
			newMonth++;
			newDay = 1;
		}
		else {
			newDay++;
		}
	}
	else if (((newMonth === 9) || (newMonth === 4) || (newMonth === 6) || (newMonth === 11)) && (newDay === 30)) {
		newMonth++;
		newDay = 1;
	}
	else if ((newMonth === 12) && (newDay === 31)) {
		newMonth = 1;
		newDay = 1;
		newYear++;
	}
	else {
		if (newDay === 31) {
			newMonth++;
			newDay = 1;
		}
		else {
			newDay++;
		}

	}
	var newDate = [newMonth, newDay, newYear];
	return newDate;
};

var completeDate = function(i) {
	var month = currentMonth();
	var day = currentDay();
	var year = currentYear();
	var currentDate = [month,day,year];

	while (i > 0) {
		console.log(i);
		console.log(currentDate);
		currentDate = increment(currentDate);
		i--;
	}
	var stringDate = currentDate[0] + "/" + currentDate[1] + "/" + currentDate[2];
	return stringDate;
};


var inc = prompt("Enter increment");

console.log(completeDate(inc));