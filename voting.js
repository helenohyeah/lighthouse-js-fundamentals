let stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school']
]



// takes an array of possible stations
// returns the names of appropriate stations
// capacity > 20, be a school or community center
function chooseStations(stations) {
  let goodStations = [];
  for (const station of stations) {
    let capacity = station[1];
    if (capacity >= 20) {
      let type = station[2];
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));

