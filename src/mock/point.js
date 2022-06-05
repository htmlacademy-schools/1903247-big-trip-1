import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateDescription = () => {
  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
  ];

  return description.slice(0, getRandomIntInclusive(1, 5));
};

const generatePointType = () => {
  const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

  return pointTypes[getRandomIntInclusive(0, pointTypes.length - 1)];
};

const generateDestinationCity = () => {
  const cities = ['Ekaterinburg', 'Moscow', 'Perm', 'Kyiv', 'Paris', 'Prague', 'Amsterdam'];

  return cities[getRandomIntInclusive(0, cities.length - 1)];
};

const offersByType = {
  'taxi': [{ title: 'call business class', price: '10', id: nanoid() }, { title: 'add seats', price: '5', id: nanoid() }],
  'bus': [],
  'train': [{ title: 'add linens', price: '5', id: nanoid() }, { title: 'choose coupe', price: '15', id: nanoid() }, { title: 'add food', price: '15', id: nanoid() }],
  'ship': [{ title: 'add luggage', price: '30', id: nanoid() }, { title: 'take a tour', price: '20', id: nanoid() }, { title: 'add dinner', price: '15', id: nanoid() }, { title: 'fishing', price: 40 }],
  'drive': [{ title: 'refueling', price: '20', id: nanoid() }, { title: 'add trailer', price: '100', id: nanoid() }],
  'flight': [{ title: 'add luggage', price: '30', id: nanoid() }, { title: 'switch to comfort class', price: '40', id: nanoid() }, { title: 'add meal', price: '15', id: nanoid() }, { title: 'choose seat', price: '10', id: nanoid() }, { title: 'travel by train', price: '40', id: nanoid() }],
  'check-in': [{ title: 'switch to comfort class', price: '40', id: nanoid() }, { title: 'add meal', price: '15', id: nanoid() }, { title: 'choose seat', price: '10', id: nanoid() }],
  'sightseeing': [],
  'restaurant': [{ title: 'add meal', price: '15', id: nanoid() }, { title: 'take tips', price: '5', id: nanoid() }, { title: 'asjdfjasdf', price: '234', id: nanoid() }]
};

const generatePictures = () => {
  const picturesSrc = [];
  for (let i = 0; i <= 4; i++) {
    picturesSrc.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return picturesSrc;
};

const getTimePeriod = (waitingTime) => {
  const randomHour = getRandomIntInclusive(9, 23);
  const startRandomMinute = getRandomIntInclusive(0, 11) * 10;
  const startPeriod = new Date();
  startPeriod.setHours(randomHour, startRandomMinute);
  const endPeriod = new Date();
  endPeriod.setHours(startPeriod.getHours());
  endPeriod.setMinutes(startPeriod.getMinutes() + waitingTime);
  return [`${startPeriod.getHours()}:${startPeriod.getMinutes()}`, `${endPeriod.getHours()}:${endPeriod.getMinutes()}`];
};

const getWaitingTime = () => {
  const randomNumber = getRandomIntInclusive(1, 24);
  return randomNumber * 5;
};

const getDate = () => {
  // const day = dayjs(new Date());
  // day.add(getRandomIntInclusive(0, 8), 'day').toDate();
  // day.add(getRandomIntInclusive(0, 24), 'hour').toDate();

  const randomMonth = getRandomIntInclusive(0, 12);
  const randomDay = getRandomIntInclusive(0, 28);
  const day = dayjs(`2022-${randomMonth}-${randomDay}`);

  return day;
};


export const generatePoint = () => {
  const pointType = generatePointType();
  const waitingTime = getWaitingTime();

  return {
    pointType,
    id: nanoid(),
    price: getRandomIntInclusive(5, 200),
    destination: generateDestinationCity(),
    offers: offersByType,
    destinationInfo: {
      description: generateDescription(),
      pictures: generatePictures()
    },
    isFavorite: Boolean(getRandomIntInclusive(0, 1)),
    waitingTime: waitingTime,
    period: getTimePeriod(waitingTime),
    startEventDate: getDate(),
    endEventDate: getDate()
  };
};
