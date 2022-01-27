// const isWin = (season) => {
//   return season.result === 'W';
// }

// function superbowlWin(record) {
//   const season = record.find(isWin);
//   if (season != undefined) {
//     return season.year;
//   } else {
//     return season;
//   }
// }

const superbowlWin = (record) => {
  const season = record.find((season) => season.result === 'W');
  if (season != undefined) {
    return season.year;
  } else {
    return season;
  }
};
