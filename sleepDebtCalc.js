//test
//creates function for returning daily values of sleep
const getSleepHours = day => {
  switch (day) {
    case 'Monday':;
      return 8;
      break;
    case 'Tuesday':;
      return 6;
      break;
    case 'Wednesday':;
      return 7;
      break;
    case 'Thursday':;
      return 8;
      break;
    case 'Friday':;
      return 5;
      break;
    case 'Saturday':;
      return 7;
      break;
    case 'Sunday':;
      return 9;
      break;
  }
};
console.log(getSleepHours('Sunday'))

//creates a function to calculate total sleep per week
const getActualSleepHours = () => { getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
return getActualSleepHours
}

//calculates idea amount of sleep per week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

//calculates sleep debt and prints to console
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const totalSleepDebt = getIdealSleepHours() - getActualSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep this       week!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${totalSleepDebt} more hours than you needed. That's a lot of rest!`);
} else {
      console.log(`You need ${totalSleepDebt} more hours of rest this week!`);
}
};
calculateSleepDebt();