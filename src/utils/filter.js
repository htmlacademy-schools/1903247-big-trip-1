import { FilterType } from '../const';

const now = new Date();

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => point.startEventDate > now || point.endEventDate > now),
  [FilterType.PAST]: (points) => points.filter((point) => point.startEventDate < now || point.endEventDate < now),
};


// import dayjs from 'dayjs';
// import { FilterType } from '../const';

// const now = dayjs();

// export const filter = {
//   [FilterType.EVERYTHING]: (points) => points,
//   [FilterType.FUTURE]: (points) => points.filter((point) => point.startEventDate.isAfter(now)),
//   [FilterType.PAST]: (points) => points.filter((point) => point.endEventDate.isBefore(now)),
// };
