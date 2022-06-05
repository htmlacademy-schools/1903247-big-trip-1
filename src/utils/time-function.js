export const formatTimeInMinute = (min) => {
  if (min < 60) {
    return `${min}M`;
  } else if (min < 1440) {
    let minutes = min % 60;
    let hour = (min - minutes) / 60;
    if (minutes === 0) {
      minutes = '00';
    }
    if (minutes < 10 && minutes > 0) {
      minutes = `0${minutes}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return `${hour}H ${minutes}M`;
  } else {
    return 'Day';
  }
};
