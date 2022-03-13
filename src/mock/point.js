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
  const cities = ['Ekaterinburg', 'Moscow', 'Perm', 'kiev', 'Paris', 'Prague', 'Amsterdam'];

  return cities[getRandomIntInclusive(0, cities.length - 1)];
};

const generateOffers = () => {
  let offers = [];
  for (let i = 0; i < getRandomIntInclusive(0, 5); i++) {
    offers.push({ id: i, title: 'example title', price: getRandomIntInclusive(10, 100) });
  }

  return offers;
};

const generatePictures = () => {;
  let picturesSrc = [];
  for (let i = 0; i <= 4; i++) {
    picturesSrc.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return picturesSrc;
};


export const generatePoint = () => {
  const pointType = generatePointType();

  return {
    pointType,
    price: getRandomIntInclusive(5, 200),
    destination: generateDestinationCity(),
    offer: {
      type: pointType,
      offers: generateOffers(),
    },
    destinationInfo: {
      description: generateDescription(),
      pictures: generatePictures()
    }
  }
};
