// 0 : empty
// 1 : player
// 2 : wall
// 3 : box
// 4 : goal

const map = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 4, 2, 0, 1, 0, 0, 0, 2, 2],
  [2, 0, 2, 0, 3, 0, 0, 0, 4, 2],
  [2, 0, 0, 0, 0, 0, 0, 2, 2, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2, 2],
  [2, 0, 0, 3, 3, 0, 0, 0, 2, 2],
  [2, 4, 0, 0, 0, 0, 0, 4, 2, 2],
  [2, 0, 0, 0, 3, 2, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 4, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

const map2 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 0, 0, 1, 0, 0, 0, 2, 2],
  [2, 0, 0, 3, 4, 0, 2, 2, 2, 2],
  [2, 0, 0, 4, 3, 4, 0, 2, 2, 2],
  [2, 2, 3, 0, 4, 3, 0, 0, 2, 2],
  [2, 2, 0, 2, 0, 0, 0, 0, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 2, 2, 2],
  [2, 2, 0, 2, 2, 2, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

const map3 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 0, 1, 0, 0, 0, 2, 2],
  [2, 2, 2, 0, 3, 0, 3, 0, 4, 2],
  [2, 2, 0, 0, 0, 3, 0, 2, 2, 2],
  [2, 2, 0, 0, 3, 0, 0, 0, 2, 2],
  [2, 2, 0, 2, 4, 0, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 4, 2, 2],
  [2, 2, 0, 2, 2, 2, 0, 0, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 4, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
// 0 : empty
// 1 : player
// 2 : wall
// 3 : box
// 4 : goal
const map4 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 2, 2, 2, 2, 2],
  [2, 0, 0, 2, 3, 3, 0, 0, 4, 2],
  [2, 2, 1, 0, 0, 0, 0, 2, 2, 2],
  [2, 2, 0, 0, 3, 0, 0, 0, 2, 2],
  [2, 2, 0, 2, 3, 0, 0, 0, 2, 2],
  [2, 2, 0, 4, 0, 0, 0, 4, 2, 2],
  [2, 2, 0, 2, 2, 2, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 4, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const map5 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 1, 0, 0, 0, 2, 2],
  [2, 0, 2, 0, 3, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 2, 2, 2],
  [2, 0, 3, 0, 3, 0, 0, 0, 2, 2],
  [2, 0, 0, 2, 3, 0, 0, 0, 2, 2],
  [2, 4, 4, 3, 0, 0, 0, 0, 2, 2],
  [2, 4, 0, 2, 2, 2, 0, 0, 2, 2],
  [2, 4, 4, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const map6 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 0, 1, 0, 0, 0, 2, 2],
  [2, 2, 2, 0, 3, 3, 4, 0, 0, 2],
  [2, 2, 0, 0, 0, 2, 0, 2, 2, 2],
  [2, 2, 0, 0, 3, 0, 0, 0, 2, 2],
  [2, 2, 0, 2, 0, 0, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 4, 2, 2],
  [2, 2, 0, 2, 2, 2, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 4, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const map7 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 0, 0, 0, 0, 0, 2, 2],
  [2, 2, 2, 0, 3, 0, 0, 0, 4, 2],
  [2, 1, 0, 0, 0, 0, 0, 2, 2, 2],
  [2, 2, 0, 0, 3, 0, 0, 0, 2, 2],
  [2, 2, 0, 2, 2, 4, 0, 0, 2, 2],
  [2, 2, 3, 0, 0, 0, 0, 2, 2, 2],
  [2, 2, 0, 2, 2, 2, 0, 0, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 4, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];





export { map, map2,map3,map4,map5,map6,map7 };
